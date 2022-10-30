import { defineAsyncComponent } from "vue";
const modules = import.meta.glob("../components/**/**.vue");

import { toCamelCase, upperFirst } from './util';

export default {
	install(app ,options){
    console.log(`modules: `, JSON.stringify(modules, null, 2));
    // //根据modules加载所有组件
    modules.forEach((module, key) => {
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0]
        
      app.component(upperFirst(toCamelCase(componentName)), defineAsyncComponent(module));
    })
  }
}
