"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSSRServer = exports.createServer = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const vite_1 = require("vite");
const express_1 = __importDefault(require("express"));
const uni_cli_shared_1 = require("@dcloudio/uni-cli-shared");
const utils_1 = require("./utils");
async function createServer(options) {
    let serverOptions = (0, utils_1.cleanOptions)(options);
    serverOptions.watch = Object.assign(serverOptions.watch, {
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
    })
    console.log(`serverOptions: `, JSON.stringify(serverOptions, null, 2));

    const server = await (0, vite_1.createServer)((0, utils_1.addConfigFile)({
        root: process.env.VITE_ROOT_DIR,
        mode: options.mode,
        logLevel: options.logLevel,
        clearScreen: options.clearScreen,
        server: serverOptions,
    }));
    await server.listen();
    const logger = server.config.logger;
    logger.info(chalk_1.default.cyan(`\n  vite v${require('vite/package.json').version}`) +
        chalk_1.default.green(` dev server running at:\n`), {
        clear: !server.config.logger.hasWarned,
    });
    server.printUrls();
    // printUrls 会在 nextTick 中输出
    process.nextTick(() => (0, utils_1.printStartupDuration)(logger));
    return server;
}
exports.createServer = createServer;
async function createSSRServer(options) {
    const app = (0, express_1.default)();
    /**
     * @type {import('vite').ViteDevServer}
     */
    const vite = await (0, vite_1.createServer)((0, utils_1.addConfigFile)({
        root: process.env.VITE_ROOT_DIR,
        mode: options.mode,
        logLevel: options.logLevel,
        clearScreen: options.clearScreen,
        server: {
            middlewareMode: true,
            watch: {
                // During tests we edit the files too fast and sometimes chokidar
                // misses change events, so enforce polling for consistency
                usePolling: true,
                interval: 100,
            },
        },
    }));
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
    app.use('*', async (req, res) => {
        try {
            const { h5 } = (0, uni_cli_shared_1.parseManifestJson)(process.env.UNI_INPUT_DIR);
            const base = (h5 && h5.router && h5.router.base) || '';
            const url = req.originalUrl.replace(base, '');
            const template = await vite.transformIndexHtml(url, fs_1.default.readFileSync(path_1.default.resolve(process.env.VITE_ROOT_DIR, 'index.html'), 'utf-8'));
            const render = (await vite.ssrLoadModule(path_1.default.resolve(process.env.UNI_INPUT_DIR, 'entry-server.js'))).render;
            const { title, headMeta, preloadLinks, appHtml, appContext } = await render(url);
            const icon = template.includes('rel="icon"')
                ? ''
                : '<link rel="icon" href="data:," />\n';
            const html = template
                .replace(/<title>(.*?)<\/title>/, `${icon}<title>${title}</title>`)
                .replace(`<!--head-meta-->`, headMeta)
                .replace(`<!--preload-links-->`, preloadLinks)
                .replace(`<!--app-html-->`, appHtml)
                .replace(`<!--app-context-->`, appContext);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        }
        catch (e) {
            vite && vite.ssrFixStacktrace(e);
            res.status(500).end(e.stack);
        }
    });
    const logger = (0, vite_1.createLogger)(options.logLevel);
    const serverOptions = vite.config.server || {};
    let port = options.port || serverOptions.port || 3000;
    let hostname;
    if (options.host === 'localhost') {
        // Use a secure default
        hostname = '127.0.0.1';
    }
    else if (options.host === undefined || options.host === true) {
        // probably passed --host in the CLI, without arguments
        hostname = undefined; // undefined typically means 0.0.0.0 or :: (listen on all IPs)
    }
    else {
        hostname = options.host;
    }
    return new Promise((resolve, reject) => {
        const onSuccess = () => {
            (0, vite_1.printHttpServerUrls)(server, vite.config);
            process.nextTick(() => (0, utils_1.printStartupDuration)(logger));
            resolve(vite);
        };
        const onError = (e) => {
            if (e.code === 'EADDRINUSE') {
                if (options.strictPort) {
                    server.off('error', onError);
                    reject(new Error(`Port ${port} is already in use`));
                }
                else {
                    logger.info(`Port ${port} is in use, trying another one...`);
                    app.listen(++port, hostname, onSuccess).on('error', onError);
                }
            }
            else {
                server.off('error', onError);
                reject(e);
            }
        };
        const server = app.listen(port, hostname, onSuccess).on('error', onError);
    });
}
exports.createSSRServer = createSSRServer;
