import { VueCookieNext } from 'vue-cookie-next';
import {
    JEECG_TOKEN,
    BLOCK_DESIGN_TOKEN
} from "../store/mutation-types";

/**
 * 设置全局配置
 * @param {*} config 
 */
function setGlobal(config) {
    // 配置基础路径
    let baseUrl = ''
    config.url = baseUrl + config.url;

    config.timeout = 60 * 1000;
    if(!config.header){
        config.header = {
            'content-type': 'application/json;charset=UTF-8',
        }
    }
    if(config.header && !config.header['content-type']){
        config.header['content-type'] = 'application/json;charset=UTF-8'
    }
}

/**
 * 设置设计云环境变量，projectItem为设计云项目的params属性
 * @param {*} config 
 * @returns 
 */
function setEnvConfig(config) {
    let projectItem = uni.getStorageSync("projectItem")
    if(!projectItem){
        return
    }
    const params = JSON.parse(
        JSON.parse(uni.getStorageSync("projectItem")).params
    );

    if (!params.globalParams) return

    let globalParams = params.globalParams.Header;

    if (globalParams.length === 0) return

    globalParams.forEach(item => {
        item.name && item.enabled && (config.header[item.name] = item.default);
    })
}

/**
 * 转换成代理的请求
 * @param {*} config
 * @returns
 */
function transformAxiosRequest(config) {
    if(!localStorage.getItem("projectItem")) return config;
    if (!config.url) return config;
    //转换proxy
    transformUrlProxy(config)
    // 相对路径拼接本地域名
    if (config.url.indexOf(":") == -1) {
        config.url = window.location.protocol + '//' + window.location.host + config.url
    }
    let url = new URL(config.url);
    // config.headers['x-api-origin'] = url.origin;
    let schema = url.origin.split(':')[0];
    let port = url.port || (schema === 'http' ? 80 : 443);
    VueCookieNext.setCookie('x-project-api-schema', schema);
    VueCookieNext.setCookie('x-project-api-hostname', url.hostname);
    VueCookieNext.setCookie('x-project-api-port', port);
    config.url = `/project-api${url.pathname}`;
    return config;
}

function transformUrlProxy(config) {
  const params = JSON.parse(
    JSON.parse(localStorage.getItem("projectItem")).params
  );
  
  console.log("params",params)
  if (params.currentEnvConfig === "") return

  params.envConfigs[params.currentEnvConfig].proxyConfig.forEach(item => {
    config.url = config.url.indexOf(item.prefix) == 0 ? `${item.target}${config.url}` : config.url
  })

  console.log("config.url",config.url)
}

function setJeecgAuth(config) {
    let token = uni.getStorageSync('pro__Access-Token') || uni.getStorageSync('token');
    console.log(`pro__Access-Token: `, token);

    try {
      token = token ? JSON.parse(token).value : null;
    } catch (e) {
      // 最新的jeecg，貌似没有存.value的形式
      token = token;
    }
    
    config.header[JEECG_TOKEN] = token ? token : '';
    return config;
}

function setBlockDesignAuth(config) {
    let token = uni.getStorageSync(BLOCK_DESIGN_TOKEN);
    console.log(`pro__X-BD-Access-Token: `, token);
    token = token ? JSON.parse(token).value : null;
    config.header[BLOCK_DESIGN_TOKEN] = token ? token : '';
    return config;
}

function setEleAdminAuth(config) {
    let token = VueCookieNext.getCookie('EL-ADMIN-TOEKN');
    if (!token) {
        return;
    }
    console.log(`EL-ADMIN-TOEKN: `, token);
    config.header['authorization'] = token;
}

uni.addInterceptor('request', {
    invoke(config) {
        setGlobal(config)
        setJeecgAuth(config)
        setBlockDesignAuth(config)
        // setEleAdminAuth(config)
        setEnvConfig(config);

        if(window) {
          transformAxiosRequest(config)
        }
    },
    complete(response) {
        let data = response.data
        switch (response.statusCode) {
            case 200:
                break
            case 403:
                break
            case 500:
                break
            case 404:
                break
            case 504:
                break
            case 401:
                break
            default:
                break
        }
    }, 
})

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getAction(url, params) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: params,
            method: "GET",
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}

export function downloadFile(url) {
    uni.downloadFile({
        url: url,
        success: (res) => {
            if (res.statusCode === 200) {
                console.log('下载成功');
            }
        }
    });
}

/**
 * post方法，对应post请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postAction(url, params, config = {}) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: params,
            header: config.headers,
            method: "POST",
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}

/**
 * put方法，对应put请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function putAction(url, params) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: params,
            method: "PUT",
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deleteAction(url, params) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${url}${params.id ? '?id='+ params.id : ''}${params.ids ? '?ids='+ params.ids : ''}`,
            data: params,
            method: "DELETE",
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}
