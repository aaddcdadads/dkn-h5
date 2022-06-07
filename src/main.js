import {
    createSSRApp
} from "vue";
import App from "./App.vue";

import uView from './uni_modules/vk-uview-ui';

// #ifdef H5
import loadComponent from './utils/loadComponent';
// #endif

import "./mock/index.js";

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

export function createApp() {
    const app = createSSRApp(App);

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
        return `${value}px`;
    }

    // app.use(message);
    app.use(uView);

    //加载组件
    // #ifdef H5
    app.use(loadComponent);
    // #endif

    return {
        app,
    };
}
