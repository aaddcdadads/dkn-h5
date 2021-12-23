import Mock from 'mockjs'

import { HmUviewListData } from './HmUviewListData'

const defaultApi = '/project-api'

Mock.mock(
    defaultApi + '/HmUviewListData',
    /get|post/i,
    HmUviewListData
)