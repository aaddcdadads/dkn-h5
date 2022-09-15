#!/usr/bin/env zx
let hmImportPages = ['1566734066567352321']
let pageIdMap = {
  '1566734066567352321': 'pagexxx'
}
let hmImportPageRegex = /<hm-import-page[^<]*1566734066567352321[^\/]*<\/hm-import-page>/gs;
hmImportPages.forEach(async (page) => {
  let pageContent = await $`cat src/pages/${page}/page.vue`;
  pageContent = pageContent.stdout;
  pageContent.replace(hmImportPageRegex, `<${pageIdMap[page]} />`);
  await $`echo ${pageContent} > src/pages/${page}/page.vue`;
})


