import { defineAsyncComponent } from "vue";
export const modules = import.meta.glob("../components/**/**.vue");
export const uviewUiModules = import.meta.glob("../uni_modules/vk-uview-ui/components/**/**.vue");

import { toCamelCase, upperFirst } from './util';

export default {
	install(app, options){
    // //根据modules加载所有组件
    Object.keys(modules).forEach((key) => {
      let module = modules[key];
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0]
      app.component(upperFirst(toCamelCase(componentName)), defineAsyncComponent(module));
    })

    // 加载uni-ui的所有组件
    Object.keys(uviewUiModules).forEach((key) => {
      let module = modules[key];
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0];
      if (componentName.indexOf('u-') != 0) {
        return;
      }
      try {
        app.component(componentName, defineAsyncComponent(() => import(key)));
      } catch (err) {
        console.log(`component: `, err);
      }
    })
  }
}
