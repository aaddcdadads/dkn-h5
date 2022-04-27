import { resolve } from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

const os = require("os");

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

/**
 * 判断代码是否在服务器上的容器里运行
 */
function isInServerContainer() {
  return os.hostname().indexOf('block-design-live-pid') >= 0
}

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "/@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "/@/pages",
        replacement: resolve(__dirname, "src/pages"),
      },
    ],
  },
  plugins: [uni()],
  optimizeCacheDir: resolve(__dirname, "node_modules/.vite/"),
  optimizeDeps: {
    include: ["lodash", "moment"],
  },
  server: {
    // host: os.hostname(),
    host: "0.0.0.0",
    https: true,
    hmr: {
      overlay: false,
    },
    watch: {
      ignored: [
        "**/src/static/**",
        "**/src/assets/**",
        "**/tests/**",
        "**/cypress/**",
        "**/docker/**",
        "**/docs/**",
        "**/public/**",
        // 忽略生成的json文件
        "**/src/pages/**/config.json",
        "**/src/pages/**/page.json",
        // 忽略根目录下的文件
        "**/.babelrc",
        "**/.eslintrc.js",
        "**/.gitignore",
        "**/.gitlab-ci.yml",
        "**/babel.config.js",
        "**/cpress.json",
        "**/index.html",
        "**/jest.config.js",
        "**/package*",
        "**/README.md",
        "**/sonar*",
        "**/*.sh",
        "**/vite.config.js",
        "**/yarn.lock",
        "**/src/uni_modules/**",
      ].concat(
        isInServerContainer()
          ? [
              "**/src/components/built-in/**",
              "**/src/pages/test/**",
              "**/src/router/test.js",
              "**/src/components/HmBlock.vue",
            ]
          : []
      ),
    },
    proxy: {
      "/project-api/ws":{
        target: "https://apis.map.qq.com",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/project-api/, "");
        },
      },
      "/project-api": {
        target: "http://ckjd.dev.haomo-tech.com",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/project-api/, "");
        },
      },
    },
  },

  // 打包为库
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.js"),
      name: "uniapp-uview-vue3",
      fileName: (format) => `uniapp-uview-vue3.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
