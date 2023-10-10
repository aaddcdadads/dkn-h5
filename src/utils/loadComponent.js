import { defineAsyncComponent } from "vue";
export const modules = import.meta.glob("../components/**/**.vue");
export const uniUiModules = import.meta.glob("../components/uni-ui/lib/**/**.vue");

import { toCamelCase, upperFirst } from './util';

export default {
	install(app, options){
    // //根据modules加载所有组件
    console.log(`modules: `, modules);
    Object.keys(modules).forEach((key) => {
      let module = modules[key];
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0]
      app.component(upperFirst(toCamelCase(componentName)), defineAsyncComponent(module));
    })

    console.log(`uniUiModules: `, uniUiModules);
    // 加载uni-ui的所有组件
    Object.keys(uniUiModules).forEach((key) => {
      let module = modules[key];
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0];
      if (componentName.indexOf('uni-') != 0) {
        return;
      }
      let uniUiComponentName = componentName.replace('uni-', 'u-');
      console.log(`uniUiComponentName: `, uniUiComponentName);
      app.component(uniUiComponentName, defineAsyncComponent(module));
    })

    console.log(`app: `, app);
  }
}
