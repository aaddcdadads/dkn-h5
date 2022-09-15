#!/usr/bin/env zx
import _ from 'lodash'

let stat = fs.readFileSync('../docs/stat-hm-import-page.json')

Object.keys(stat).forEach(async (pageId) => {
  let pageContent = fs.readFileSync(`../src/pages/${pageId}/page.vue`, 'utf8');
  // /<hm-import-page[^<]*1566734066567352321[^\/]*<\/hm-import-page>/gs
  let importPageIds = Object.keys(stat[pageId]);
  if (!importPageIds.length) {
    return;
  }

  importPageIds.forEach(importPageId => {
    let hmImportPageRegex = new RegExp(`<hm-import-page[^<]*${importPageId}[^\/]*<\/hm-import-page>`, 'gs');
    pageContent.replace(hmImportPageRegex, `<${stat[pageId][importPageId]} />`);
  })
  
  fs.writeFileSync(`../src/pages/${pageId}/page.vue`, pageContent, {encoding: 'utf8', flag: 'w+'});
})


