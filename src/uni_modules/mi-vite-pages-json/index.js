"use strict";
const fs = require("fs"),
  path = require("path"),
  chokidar = require("chokidar"),
  text = {
    pluginName: "[vite-plugin-microadmin] - ",
    parseFail: " --- \u89E3\u6790\u5931\u8D25 --- ",
    configFail: "\u914D\u7F6E\u9519\u8BEF",
    updateFail: " --- \u66F4\u65F6\u5931\u8D25 --- ",
    insertFile: "\u65B0\u589E\u6587\u4EF6 --- ",
    deleteFile: "\u5220\u9664\u6587\u4EF6 --- ",
    createSuccess: " --- \u7EC4\u88C5\u5B8C\u6210",
    updateSuccess: " --- \u66F4\u65B0\u5B8C\u6210",
    openWatcher: " --- \u5F00\u542F\u76D1\u542C",
    closeWatcher: " --- \u5173\u95ED\u76D1\u542C",
  },
  root = process.env.UNI_INPUT_DIR + "/",
  debug = "production" !== process.env.NODE_ENV,
  hotWatchMap = new Map(),
  chokidarSet = new Set(),
  subPackages = new Set(),
  excludedSet = new Set();
let watcher, styleFile, searchReg, baseData, pagesData, subPackagesData;
function initBaseData(a) {
  if (!baseData)
    try {
      let b = require(root + a);
      if (!b.pageConfig || !b.pageConfig.pages || 1 > b.pageConfig.pages.length)
        throw new Error(text.configFail);
      else baseData = b.pageConfig;
    } catch (b) {
      console.error(text.pluginName + a + text.parseFail + b);
    }
  if (baseData) {
    if (
      ((pagesData = []),
      (subPackagesData = []),
      baseData.pages && 0 < baseData.pages.length)
    )
      for (let a of baseData.pages) pagesData.push(a), excludedSet.add(a.path);
    if (
      (baseData.topWindow && excludedSet.add(baseData.topWindow.path),
      baseData.leftWindow && excludedSet.add(baseData.leftWindow.path),
      baseData.rightWindow && excludedSet.add(baseData.rightWindow.path),
      baseData.subPackages)
    )
      for (let a of baseData.subPackages) a.root && subPackages.add(a.root);
    hotWatchMap.set(root + a, "configPath");
  }
}
function getPagesData(a = [], b = "", c = "") {
  for (let d of a) {
    const e = root + b + d,
      f = b + d + "/",
      g = fs.lstatSync(e);
    if (g.isDirectory()) {
      const a = b + d,
        g = fs.readdirSync(e);
      subPackages.has(a)
        ? (subPackagesData.push({ root: a, pages: [] }), getPagesData(g, f, a))
        : getPagesData(g, f, c);
    } else if (g.isFile() && ".vue" === path.extname(e)) {
      const d = path.basename(e, ".vue");
      if (0 <= d.search(searchReg)) return;
      let haomoReg = /\.\d{1,}\/.*\..*/g;
      if (haomoReg.test(e)) return;
      let f = {};
      if (
        ((f.path = c ? b.replace(c + "/", "") + d : b + d),
        0 <= a.indexOf(styleFile))
      ) {
        let a = root + b + styleFile;
        hotWatchMap.has(a) ||
          hotWatchMap.set(a, {
            subPackage: c,
            pagePath: f.path,
            style: require(a),
          }),
          (f.style = hotWatchMap.get(a).style);
      }
      if (!excludedSet.has(f.path))
        if (c) for (let a of subPackagesData) a.root === c && a.pages.push(f);
        else pagesData.push(f);
    }
  }
}
function setPagesJson(a, b = "init") {
  if (baseData) {
    let c = {};
    Object.assign(c, baseData),
      (c.pages = pagesData),
      (c.subPackages = subPackagesData),
      fs.writeFileSync(root + a, JSON.stringify(c, null, 4)),
      "init" === b
        ? console.warn(text.pluginName + a + text.createSuccess)
        : console.warn(text.pluginName + a + text.updateSuccess);
  }
}
function updateBaseFile(a, b, c) {
  const d = path.basename(b);
  if (".vue" !== path.extname(b) && d !== styleFile) return;
  "delete" === c && hotWatchMap.has(b) && hotWatchMap.delete(b);
  const e = path.normalize(root);
  let f = "";
  switch (c) {
    case "insert":
      f = text.insertFile;
      break;
    case "delete":
      f = text.deleteFile;
      break;
    default:
  }
  console.log(text.pluginName + f + b.replace(e, ""));
  let g = new Date();
  fs.utimes(root + a, g, g, (b) => {
    b && console.error(text.pluginName + a + text.updateFail + b);
  });
}
function watchInputDir(a, b) {
  if (debug) {
    for (let c of b)
      chokidarSet.has(c) ||
        (chokidarSet.add(c),
        watcher
          ? watcher.add(root + c)
          : ((watcher = chokidar.watch(root + c, { ignoreInitial: !0 })),
            watcher.on("add", (b) => {
              updateBaseFile(a, b, "insert");
            }),
            watcher.on("unlink", (b) => {
              updateBaseFile(a, b, "delete");
            })));
    console.log(text.pluginName + JSON.stringify(b) + text.openWatcher);
  }
}
async function closeWatchDir(a) {
  debug &&
    watcher &&
    (await watcher
      .close()
      .then(() =>
        console.log(text.pluginName + JSON.stringify(a) + text.closeWatcher)
      ));
}
async function hotUpdateFile(a, b, c, d, e) {
  if (debug && hotWatchMap.has(a)) {
    let f = await b();
    try {
      f = new Function(
        f.replace(/module.exports =|module.exports=/, "return")
      )();
      const b = path.basename(a);
      if (a === root + c)
        try {
          if (
            !f.pageConfig ||
            !f.pageConfig.pages ||
            1 > f.pageConfig.pages.length
          )
            throw new Error(text.configFail);
          else baseData = f.pageConfig;
        } catch (a) {
          console.error(text.pluginName + c + text.parseFail + a);
        }
      else b === styleFile && (hotWatchMap.get(a).style = f);
      initBaseData(c), getPagesData(d), setPagesJson(e, "update");
    } catch (b) {
      console.error(text.pluginName + a.replace(root, "") + text.parseFail + b);
    }
  }
}
module.exports = function ({
  hotWatcher: a = !0,
  pagesStyle: b = "style.js",
  excludeReg: c = "_exclude",
  sourceDirs: d = ["pages"],
  outputFile: e = "pages.json",
  configPath: f = "config/mi-vite-plugin-config.js",
} = {}) {
  return {
    name: "mi-vite-pages-json",
    config() {
      (styleFile = b),
        (searchReg = c),
        initBaseData(f),
        getPagesData(d),
        setPagesJson(e),
        a && watchInputDir(f, d);
    },
    async buildEnd() {
      a && (await closeWatchDir(d));
    },
    async handleHotUpdate({ file: b, read: c }) {
      a && (await hotUpdateFile(b, c, f, d, e));
    },
  };
};
