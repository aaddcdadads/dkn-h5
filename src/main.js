import {
    createSSRApp
} from "vue";
import App from "./App.vue";
/* #ifdef H5 */
import "./static/css/index.css";
/* #endif */

//import uView from './uni_modules/vk-uview-ui';
import uView from './uni_modules/uview-plus';
import "./mock/index.js";

import blockDesign from "./utils/blockDesign";

export function createApp() {
    const app = createSSRApp(App);
    // app.use(message);
    
    app.use(blockDesign);
    
    app.use(uView);

    return {
        app,
    };
}
