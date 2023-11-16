## 主要功能
- 自动构建pages.json路由
- 模块化管理页面样式
- 支持热重载

## 开始使用
1. 使用插件
```
    // vite.config.js

    import { defineConfig } from 'vite';
    import uni from '@dcloudio/vite-plugin-uni';
    import MiVitePagesJson from './uni_modules/mi-vite-pages-json';
    
    export default defineConfig({
        plugins: [uni(), MiVitePagesJson()]
    });
```

2. 根目录新建 config/mi-vite-plugin-config.js 进行基础配置
```
    // config/mi-vite-plugin-config.js

    module.exports = {
        pageConfig: {
            pages: [
                { path: 'pages/index/index', style: { navigationBarTitleText: '首页' } }, // 首页配置, 必要
                ... // 其他uni_modules中的页面
            ],
            subPackages: [
                { root: 'pages/admin/system' } // 如需分包管理, 只需配置root, 插件自动插入相应pages, 可选
            ],
            globalStyle: { navigationStyle: 'custom', navigationBarTitleText: 'uni-app' },
            ... // 除 pages, subPackages 外的其他配置, 如 globalStyle 可直接写入
        }
    };
```

3. 根目录pages中建立相关业务页面
4. 运行项目, 插件以config/mi-vite-plugin-config.js为基础, 自动将pages中的页面构建路由, 生成pages.json

## 插件配置
1. 配置插件
```
    // vite.config.js

    import { defineConfig } from 'vite';
    import uni from '@dcloudio/vite-plugin-uni';
    import MiVitePagesJson from './uni_modules/mi-vite-pages-json';

    export default defineConfig({
        plugins: [
            uni(), 
            MiVitePagesJson({
                hotWatcher: false, // 是否开启热重载, 默认true
                sourceDirs: ['pages'], // 页面目录, 默认['pages']
            })
        ]
    });
```

2. 配置页面
    * vue页面同级新建style.js, 在此文件内设置相关样式, 格式同pages.style
    * 包含```_exclude```的vue页面, 如 test_exclude.vue 将跳过添加路由

  ```
    // pages/user/style.js
    
    module.exports = {
        navigationBarTitleText: '我的'
    };
  ```

## 注意事项
  * 首页路由及样式必须写入config/mi-vite-plugin-config.js
  * 使用uni_modules中的页面, 建议写入config/mi-vite-plugin-config.js