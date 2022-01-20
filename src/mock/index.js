import Mock from 'mockjs'

import { HmUviewListData } from './HmUviewListData'
import { HmCheckListData } from './HmCheckListData'

const defaultApi = '/project-api'

Mock.mock(
    defaultApi + '/HmUviewListData',
    /get|post/i,
    HmUviewListData
)

Mock.mock(
    RegExp(defaultApi + "/HmCheckListData" + ".*"),
    /get|post/i,
    (options)=>{
        return HmCheckListData(options);
    }
)