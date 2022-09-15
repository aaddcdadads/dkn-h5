#!/usr/bin/env zx
import _ from 'lodash'

// 1. 拿到所有的page.json路径列表
let pageJsonFiles = await $`find ../src/pages -name 'page.json'`

// 2. 遍历所有的page.json，读取page.json里的HmImportPage组件信息并统计
function readPageComponentName(pageId) {
  let pageJson = fs.readFileSync(`../src/pages/${pageId}/page.json`, 'utf8');
  return _.camelCase(pageJson.component.name);
}

function statOne(pageJson) {
  let pageStat = {};
  pageJson.topics.forEach(topic => {
    if (topic.component.name === 'HmImportPage') {
      let pageId = topic.note.props['page-id'] || topic.note.props.pageId
      pageStat[pageId] = readPageComponentName(pageId);
    }

    topic.topics.forEach(childTopic => {
      pageStat = Object.assign(pageStat, statOne(childTopic));
    })
  })
  return pageStat;
}

let stat = {}
pageJsonFiles.forEach((pageJsonFile) => {
  let pageJson = fs.readFileSync(pageJsonFile, 'utf8');
  stat[pageJson.component.id] =  statOne(pageJson);
})

fs.writeFileSync('../docs/stat-hm-import-page.json', { encoding: 'utf8', mode: 'w+'})