import {
	createSSRApp
} from "vue";
import App from "./App.vue";

import uView from './uni_modules/vk-uview-ui';
import loadBuiltInComponent from './utils/loadBuiltInComponent';

export function createApp() {
	const app = createSSRApp(App);

	app.use(uView);
	//加载内置组件
	app.use(loadBuiltInComponent);

	return {
		app,
	};
}
