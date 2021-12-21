import { defineAsyncComponent } from "vue";
const modules = import.meta.glob("../components/**/**.vue");

import builtInJson from "../components/built-in/uniapp-uview-vue3/builtin-config.json";
import _ from "lodash";

export default {
	install(app ,options){
    //根据builtInJson获取所有组件
    let components = _(builtInJson).map("componentList").flattenDeep().value();
    
    components.forEach(component => {
      let module = modules[`../components/${component.importPath}.vue`];

      if(module){
        app.component(component.name, defineAsyncComponent(module));
      }
    })
  }
}
