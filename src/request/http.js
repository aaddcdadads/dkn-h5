import { VueCookieNext } from 'vue-cookie-next';
import {
    TOKEN
} from "../store/mutation-types";

function setGlobal(config) {
    config.timeout = 60 * 1000;
    config.header = {
        'content-type': 'application/json;charset=UTF-8'
    }
}

/**
 * 转换成代理的请求
 * @param {*} config
 * @returns
 */
function transformAxiosRequest(config) {
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

function setJeecgAuth(config) {
    let token = uni.getStorageSync(TOKEN);
    if (!token) {
        return;
    }
    console.log(`pro__Access-Token: `, token);
    token = token ? JSON.parse(token).value : null;
    config.header[TOKEN] = token ? token : '';
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
        // setEleAdminAuth(config)
        // transformAxiosRequest(args)
    },
    fail(err) {
        console.log('interceptor-fail',err)
        if (error.response) {
            let data = error.response.data
            const token = uni.getStorageSync(TOKEN)
            switch (error.response.status) {
                case 403:
                    notification.error({
                        message: '系统提示',
                        description: '拒绝访问',
                        duration: 4
                    })
                    break
                case 500:
                    let message = data.message == "Token失效，请重新登录!" ? 'Token失效，请重新登录' : '该账号已在异地登陆，请重新登录'
                    notification.error({
                        message: message,
                        description: '拒绝访问',
                        duration: 4
                    })
                    break
                case 404:
                    notification.error({
                        message: '系统提示',
                        description: '很抱歉，资源未找到!',
                        duration: 4
                    })
                    break
                case 504:
                    notification.error({
                        message: '系统提示',
                        description: '网络超时'
                    })
                    break
                case 401:
                    notification.error({
                        message: '系统提示',
                        description: '未授权，请重新登录',
                        duration: 4
                    })
                    break
                default:
                    notification.error({
                        message: '系统提示',
                        description: data.message,
                        duration: 4
                    })
                    break
            }
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
export function postAction(url, params, config) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: params,
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
            url: url,
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
