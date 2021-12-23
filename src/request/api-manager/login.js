import {getAction, postAction} from '../http'
import axios from 'axios'
import qs from 'qs'

export default {
  //login
  login(params = {}) {
    return postAction('/api/user/login',params);
  },

  logout(logoutToken){
    return axios({
      url: '/api/user/logout',
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-BD-Access-Token':  logoutToken
      }
    })
  },

  wxLogin(params = {}) {
    return getAction('/api/user/wechatLogin', params)
  },

  //验证码
  getPhoneCode(params = {}) {
    return getAction('/api/aliyunSms/send', params)
  },

  //注册
  register(params = {}) {
    return postAction('/api/reg/register', params)
  }

}