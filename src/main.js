import {
	createSSRApp
} from "vue";
import App from "./App.vue";

import uView from './uni_modules/vk-uview-ui';
import loadComponent from './utils/loadComponent';

import "./mock/index.js";

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

	app.use(uView);
	//加载组件
	app.use(loadComponent);

	return {
		app,
	};
}
