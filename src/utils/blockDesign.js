import { defineAsyncComponent } from "vue";
import { toCamelCase, upperFirst } from './util';

import {
  map,
  filter,
  reduce,
  array2tree
} from './flowUtils';

import {
  getAction,
  downloadFile,
  postAction,
  deleteAction,
  putAction,
} from "../request/http";

import {
  pay,
  aliH5Pay,
  wxWebPay
} from "../logics/pay";

// #ifdef H5
import loadComponent from './loadComponent';
// #endif

import mqttTool from "./libs/mqttTool";
// import { Linking } from 'react-native';

import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

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

    app.config.globalProperties.$pay = pay;
    app.config.globalProperties.$aliH5Pay = aliH5Pay;
    app.config.globalProperties.$wxWebPay = wxWebPay
    app.config.globalProperties.$html2canvas = html2canvas
    app.config.globalProperties.$QRCode = QRCode

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
    //    topics: [{topic: '/', qos: 0}]
    if (options && options.mqttTool) {
      app.config.globalProperties.$mqttTool = mqttTool;
      mqttTool.connect(options.mqttTool);
      mqttTool.client.on('connect', function (res) {
        console.log('连接成功', res);
        options.mqttTool.topics.forEach(topicParams => {
          mqttTool.subscribe(topicParams);
        })
      });
    }
  }
}
