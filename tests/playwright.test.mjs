import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import url from 'url';
import { glob, globSync } from 'glob'

import stripJsonComments from 'strip-json-comments';
import { compileTemplate,parse } from '@vue/compiler-sfc';
import _ from 'lodash';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);


/**
 * 读取uniapp的pages.json
 * @returns 
 */
const pages = (function() {
    let projectPath = __dirname;
    console.log(`项目根目录：${projectPath}`)
    if (!fs.existsSync(path.join(projectPath, '../pages.json')) && !fs.existsSync(path.join(projectPath, '../src/pages.json'))) {
      console.error(`uni-app项目根目录和src/下没有找到pages.json文件, projectPath=${projectPath}`);
      return [];
    }
    
    let pagesJson = getPageJson(projectPath);
    let pagesPath = (pagesJson && pagesJson.pages)?pagesJson.pages:[];
    let pages = [];
    for (let i=0;i<pagesPath.length;i++){
        //过滤不存在的文件和非设计云生成的page.vue
        if ( (!fs.existsSync(path.join(projectPath, `../${pagesPath[i].path}.vue`)) 
            && !fs.existsSync(path.join(projectPath, `../src/${pagesPath[i].path}.vue`)) )
            || !pagesPath[i].path.endsWith("/page") ) {
            continue;
          }
        //文件路径
        let pageFile = fs.existsSync(path.join(projectPath, `../${pagesPath[i].path}.vue`))
            ? path.join(projectPath, `../${pagesPath[i].path}.vue`)
            : path.join(projectPath, `../src/${pagesPath[i].path}.vue`)
        pages.push({
            path:pagesPath[i].path,
            file:pageFile
        });
    }
    //console.log("_pages:",pages);
    return pages;
  })();

function getPageJson(projectPath){
    let pagesJsonFile = fs.existsSync(path.join(projectPath, '../pages.json'))
    ? path.join(projectPath, '../pages.json')
    : path.join(projectPath, '../src/pages.json');
    return getJson(pagesJsonFile);
}

function parseJson (content) {
    if (typeof content === 'string') {
      content = JSON.parse(stripJsonComments(content))
    }
  
    content = JSON.stringify(content)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  
    return JSON.parse(content)
}
  
function getJson (jsonFileName) {
    const jsonFilePath = path.resolve(process.env.UNI_INPUT_DIR, jsonFileName)
    if (!fs.existsSync(jsonFilePath)) {
      throw new Error(jsonFilePath + ' 找不到文件')
    }
    try {
      return parseJson(fs.readFileSync(jsonFilePath, 'utf8'))
    } catch (e) {
      throw new Error(jsonFileName + '解析文件出错' + '\n' + e.message)
    }
}


// 根据src/pages下的目录结构对应的url，自动生成playwright test测试用例，生成页面的截图
//let pages = await glob(path.join(__dirname, '../src/pages/**/*.vue'), { ignore: 'src/pages/test/**/*.vue' });
//let pages = pagesPath.filter(page => page.file.endsWith('page.vue'))
console.log(`pages: `, pages.length);

const testRoutes = (function() {
  return _.map(pages, (page) => {
    //解析vue文件中的name属性
    let fileContent = fs.readFileSync(page.file, 'utf8');
    let { descriptor, error } = parse(fileContent);
    let nameCodeArr = descriptor.script.content.match(/name: ['"](.+?)['"]/);
    let pageName = (nameCodeArr && nameCodeArr[1])?nameCodeArr[1]:null;

    return {
      path: page.path,
      url: page.path.replace(path.join(__dirname, '../src'), '').replace('.vue', ''),
      name: pageName
    }
  })
})();
console.log(`testRoutes: `, testRoutes.length);

const blockDesignSite = 'https://stage.block-design.cn';
const projectId = '53648954786400b2ea17396a13a629b7';
const cluster = 'cluster1.live';
let cookies = {
  'x-cluster': cluster,
  'x-host': `block-design-live-pid-${projectId}`
};

test.describe('Generated tests', () => {
  for (let i = 0; i < testRoutes.length; i++) {
    test(`test page ${testRoutes[i].path}`, async ({ page }) => {
      let url = blockDesignSite +'/'+ testRoutes[i].path;
      let saveImg = `${__dirname}/__snapshots__/${testRoutes[i].name}.png`;
      console.log(`url: ${url}, saveImg: ${saveImg}`);

      await page.setViewportSize({width: 375, height: 667});
      await page.goto(url);
      await page.evaluate( cookies => {
        document.cookie = `x-cluster=${cookies['x-cluster']}; path=/`; 
        document.cookie = `x-host=${cookies['x-host']}; path=/`; 
      }, cookies);
      await page.reload();
      await page.addStyleTag({
        content: `
          .page-wrapper {
            width: auto !important;
            height: auto !important;
            display: inline-block;
            padding: 10px;
          }
        `  
      });
      let locator = '.page.card';
      await page.waitForSelector(locator);
      await page.waitForTimeout(3000);
      await page.locator(locator).screenshot({ path: saveImg });
    });
  }
});

