#!/usr/bin/env zx
import _ from 'lodash'

let stat = JSON.parse(fs.readFileSync('../docs/stat-hm-import-page.json'));

async function getPagePathMap() {
  let pagePathMap = {}
  let pages = await $`find ../src/page* -name 'page.vue'`
  pages = pages.stdout.split('\n')
  pages = pages.slice(0, pages.length - 1)
  pages.forEach(page => {
    let pageId = page.split('/')[3];
    pagePathMap[pageId] = page;
  })
  return pagePathMap;
}

let pagePathMap = await getPagePathMap();

Object.keys(stat).forEach(async (pageId) => {
  let pagePath = pagePathMap[pageId];

  let pageContent = fs.readFileSync(pagePath, 'utf8');
  // /<hm-import-page[^<]*1566734066567352321[^\/]*<\/hm-import-page>/gs
  let importPageIds = Object.keys(stat[pageId].stat);
  if (!importPageIds.length) {
    return;
  }

  console.log(`replace file ${pagePath}`)

  // 1. 替换 html 标签
  importPageIds.forEach(importPageId => {
    let pageComponentName = stat[pageId].stat[importPageId];
    console.log(`replace ${importPageId} tobe ${pageComponentName}`)
    let hmImportPageRegex = new RegExp(`<hm-import-page[^<]*${importPageId}[^\/]*<\/hm-import-page>`, 'gs');
    pageContent = pageContent.replace(hmImportPageRegex, `<${pageComponentName} />`);
  })

  // 2. 删除对 HmImportPage 的引入
  pageContent = pageContent.replace(/import HmImportPage.*/, '')
  pageContent = pageContent.replace(/HmImportPage,/, '')
  pageContent = pageContent.replace(/HmImportPage/, '')

  // 3. 添加对每个页面的引入
  let imports = _.map(importPageIds, importPageId => {
    let pageComponentName = stat[pageId].stat[importPageId];
    let importPagePath = pagePathMap[importPageId];
    console.log(`pageComponentName=${pageComponentName}, path=${importPagePath}`)
    return `import ${pageComponentName} from '${importPagePath.replace('../src', '/@')}';`
  }).join('\n');
  pageContent = pageContent.replace(/export default {/, `${imports}\n\nexport default {`);

  let components = _.map(importPageIds, importPageId => {
    let pageComponentName = stat[pageId].stat[importPageId];
    return `    ${pageComponentName},`
  }).join('\n');
  pageContent = pageContent.replace(/components:\s*{/, `components: {\n${components}\n`)

  fs.writeFileSync(pagePath, pageContent, {encoding: 'utf8', flag: 'w+'});
  console.log(`finish replace file ${pagePath}`)
})


