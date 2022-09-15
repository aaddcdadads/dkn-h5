#!/usr/bin/env zx
import _ from 'lodash'

// 1. 拿到所有的page.json路径列表
let pageJsonFiles = await $`find ../src/pages -name 'page.json'`
pageJsonFiles = pageJsonFiles.stdout.split('\n')
pageJsonFiles = pageJsonFiles.slice(0, pageJsonFiles.length - 1)

// 2. 遍历所有的page.json，读取page.json里的HmImportPage组件信息并统计
function readPageComponentName(pageId) {
  let pageJson = JSON.parse(fs.readFileSync(`../src/pages/${pageId}/page.json`, 'utf8'));
  return _.upperFirst(_.camelCase(pageJson.component.name));
}

function statOne(pageJson) {
  let pageStat = {};

  let topic = pageJson;

  if (topic.component.name === 'HmImportPage') {
    let pageId = topic.note.props['page-id'].value.value;
    pageStat[pageId] = readPageComponentName(pageId);
  }

  pageJson.topics.forEach(childTopic => {
    pageStat = Object.assign(pageStat, statOne(childTopic));
  })
  return pageStat;
}

let stat = {}
pageJsonFiles.forEach((pageJsonFile) => {
  let pageJson = JSON.parse(fs.readFileSync(pageJsonFile, 'utf8'));
  stat[pageJson.component.id] =  statOne(pageJson);
})

fs.writeFileSync('../docs/stat-hm-import-page.json', JSON.stringify(stat, null, 2), { encoding: 'utf8', flag: 'w+'})