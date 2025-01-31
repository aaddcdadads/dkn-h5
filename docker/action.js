"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuild = exports.runDev = void 0;
const shared_1 = require("@vue/shared");
const vite_1 = require("vite");
const uni_cli_shared_1 = require("@dcloudio/uni-cli-shared");
const build_1 = require("./build");
const server_1 = require("./server");
const utils_1 = require("./utils");
const easycom_1 = require("../utils/easycom");
async function runDev(options) {
    (0, shared_1.extend)(options, {
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
                "**/src/components/built-in/**",
                "**/src/pages/test/**",
                "**/src/router/test.js",
                "**/src/components/HmBlock.vue",
            ]
        },
        minify: process.env.UNI_MINIMIZE === 'true' ? true : false,
    });
    (0, utils_1.initEnv)('dev', options);
    try {
        console.log(`options: `, JSON.stringify(options, null, 2))
        if (options.platform === 'h5') {
            const server = await (options.ssr
                ? (0, server_1.createSSRServer)(options)
                : (0, server_1.createServer)(options));
            (0, easycom_1.initEasycom)(server.watcher);
        }
        else {
            const watcher = (await (0, build_1.build)(options));
            (0, easycom_1.initEasycom)();
            let isFirstStart = true;
            let isFirstEnd = true;
            watcher.on('event', (event) => {
                if (event.code === 'BUNDLE_START') {
                    if (isFirstStart) {
                        return (isFirstStart = false);
                    }
                    console.log(uni_cli_shared_1.M['dev.watching.start']);
                }
                else if (event.code === 'BUNDLE_END') {
                    event.result.close();
                    if (isFirstEnd) {
                        // 首次全量同步
                        return ((isFirstEnd = false),
                            console.log(uni_cli_shared_1.M['dev.watching.end']),
                            (0, utils_1.printStartupDuration)((0, vite_1.createLogger)(options.logLevel), false));
                    }
                    if (process.env.UNI_APP_CHANGED_FILES) {
                        return console.log(uni_cli_shared_1.M['dev.watching.end.files'].replace('{files}', process.env.UNI_APP_CHANGED_FILES));
                    }
                    return console.log(uni_cli_shared_1.M['dev.watching.end']);
                }
            });
        }
    }
    catch (e) {
        if (options.platform === 'h5') {
            console.error(`error when starting dev server:\n${e.stack || e}`);
        }
        else {
            console.error(`error during build:\n${e.stack || e}`);
        }
        process.exit(1);
    }
}
exports.runDev = runDev;
async function runBuild(options) {
    (0, utils_1.initEnv)('build', options);
    try {
        await (options.ssr && options.platform === 'h5'
            ? (0, build_1.buildSSR)(options)
            : (0, build_1.build)(options));
        console.log(uni_cli_shared_1.M['build.done']);
    }
    catch (e) {
        console.error(`error during build:\n${e.stack || e}`);
        process.exit(1);
    }
}
exports.runBuild = runBuild;
