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
    host: os.hostname(),
    // host: "0.0.0.0",
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
      "/project-api": {
        target: "http://ckjd.dev.haomo-tech.com",
        changeOrigin: true,
        rewrite: (path) => {
          console.log(`path: `, path);
          return path.replace(/^\/project-api/, "");
        },
      },
    },
  },
});
