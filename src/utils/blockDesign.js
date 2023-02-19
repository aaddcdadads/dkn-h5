import { defineAsyncComponent } from "vue";
import { toCamelCase, upperFirst } from './util';

import {
  map,
  filter,
  reduce,
  array2tree
} from './utils/flowUtils';

import {
  getAction,
  downloadFile,
  postAction,
  deleteAction,
  putAction,
} from "./request/http";

// #ifdef H5
import loadComponent from './utils/loadComponent';
// #endif

import mqttTool from "./libs/mqttTool";

/**
 * 注册设计云相关的组件
 */
export default {
	install(app, options){
    app.config.globalProperties.$getAction = getAction;
    app.config.globalProperties.$downloadFile = downloadFile;
    app.config.globalProperties.$postAction = postAction;
    app.config.globalProperties.$deleteAction = deleteAction;
    app.config.globalProperties.$putAction = putAction;

    app.config.globalProperties.$map = map;
    app.config.globalProperties.$filter = filter;
    app.config.globalProperties.$reduce = reduce;
    app.config.globalProperties.$array2tree = array2tree;

    app.config.globalProperties.$getCssUnit = function (value) {
        if (isNaN(Number(value))) {
            return value;
        }
        return `${value}rpx`;
    }

    //加载组件
    // #ifdef H5
    app.use(loadComponent);
    // #endif

    // 注册mqttTool
    // mqttTool参数为：
    //    url,
    //    clientId: '',
    //    username: '',
    //    password: '',
    //    clean: false,
    if (options && options.mqttTool) {
      mqttTool.connect(options.mqttTool);
      app.config.globalProperties.$mqttTool = mqttTool;
    }
  }
}
