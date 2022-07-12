export const wxAppId = 'wxa3659b20126feb7d'
export const apiHost = 'https://engineering.dev.haomo-tech.com:8443'

// 导出后再main.js中引入调用即可
export function uniStorage() {
  // 存
  const originSetStorageSync = uni.setStorageSync
  uni.setStorageSync = function(key, data, expires) {
      // 如果没有传第三个有效期参数，就还是用原来的方法
    if (!expires) return originSetStorageSync(key, data)

    const reg = /\d{4}\/\d{1,12}\/\d{1,31}/ // 这个正则写的比较偷懒，是不够准确的哈哈。用来验证绝对时间格式`yyyy/MM/dd`或者`yyyy/MM/dd hh:mm:ss`
    if (reg.test(expires)) { // 绝对日期
      const timestamp = new Date(expires + '').getTime()
      
      if (isNaN(timestamp)) {
        console.error(expires + ' error 请传入正确的日期格式：yyyy/MM/dd 或者 yyyy/MM/dd hh:mm:ss')
        return originSetStorageSync(key, data)
      }
      originSetStorageSync(key, { data, expires: timestamp })
    } else {// 相对日期
      if (typeof expires !== 'number') {
        console.error('expires is not a number')
        return originSetStorageSync(key, data)
      }
      originSetStorageSync(key, { data, expires: +new Date() + expires })
    }
  }

  // 取
  const originGetStorageSymc = uni.getStorageSync
  uni.getStorageSync = function(key) {
    const data = originGetStorageSymc(key)
    // 如果data不是个对象就说明是没加有效期的，直接返回
    if (typeof data !== 'object' || (typeof data === 'object' && !data.expires)) return data

    const now = +new Date()
    if (now < data.expires) {//用当前时间和存储的时间对比
      return data.data // 未过期返回data
    } else {
        // 已过期，移除缓存，返回空
      uni.removeStorageSync(key)
      return ''
    }
  }
}

/**
 * 拿到当前用户的UnionID
 * 无需用户授权
 */
export async function requestWxInfo() {
  console.log(`requestWxInfo, wxAppId=${wxAppId}, apiHost=${apiHost}`);
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: function (loginRes) {
        console.log(loginRes);
        uni.request({
          url: `${apiHost}/wx/user/${wxAppId}/login`,
          data: {
            code: loginRes.code
          },
          success: (res) => {
            console.log(`res: `, res);
            // 将 res.data存储到localStorage里
            uni.setStorageSync('wx_login_info', JSON.stringify(res.data), 3*24*60*60)
          }
        })
      },
    });
  })
}

/**
 * 拿到本地缓存里的openid
 * @returns 
 */
export function getWxOpenID() {
  let data = uni.getStorageSync('wx_login_info');
  if (!data) {
    return null;
  }
  return JSON.parse(data).openid;
}