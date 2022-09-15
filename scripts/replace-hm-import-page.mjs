#!/usr/bin/env zx
import _ from 'lodash'

let stat = JSON.parse(fs.readFileSync('../docs/stat-hm-import-page.json'));

Object.keys(stat).forEach(async (pageId) => {
  let pageContent = fs.readFileSync(stat[pageId].path, 'utf8');
  // /<hm-import-page[^<]*1566734066567352321[^\/]*<\/hm-import-page>/gs
  let importPageIds = Object.keys(stat[pageId].stat);
  if (!importPageIds.length) {
    return;
  }

  console.log(`replace file ${stat[pageId].path}`)
  importPageIds.forEach(importPageId => {
    let pageComponentName = stat[pageId].stat[importPageId];
    console.log(`replace ${importPageId} tobe ${pageComponentName}`)
    let hmImportPageRegex = new RegExp(`<hm-import-page[^<]*${importPageId}[^\/]*<\/hm-import-page>`, 'gs');
    pageContent.replace(hmImportPageRegex, `<${pageComponentName} />`);
  })
  
  
  fs.writeFileSync(stat[pageId].path, pageContent, {encoding: 'utf8', flag: 'w+'});
  console.log(`finish replace file ${stat[pageId].path}`)
})


