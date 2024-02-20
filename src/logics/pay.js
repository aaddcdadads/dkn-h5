import {
  getAction,
  downloadFile,
  postAction,
  deleteAction,
  putAction,
} from "../request/http";

export function pay(orderId, channel) {
  if (channel == "0") {
    wxPay(orderId);
  }
  if (channel == "1") {
    aliPay(orderId);
  }
}

function aliPay(orderId) {
  var uAgent = window.navigator.userAgent;
  console.log("uAgent", uAgent);
  if (uAgent.indexOf("MicroMessenger") > 0) {
    //微信浏览器跳转到提示页面
    aliPayAlertPage(orderId);
  } else {
    //其他浏览器
    aliH5Pay(orderId);
  }
}

export function aliH5Pay(orderId) {
  getAction("/api/aliPay/wapPay", {
    orderId,
  }).then((res) => {
    console.log("res", res);
    const div = document.createElement("div");
    div.innerHTML = res; // html code
    document.body.appendChild(div);
    document.forms.punchout_form.submit();
  });
}

function aliPayAlertPage(orderId) {
  uni.navigateTo({
    url: "/pages/pay/aliPay/page?orderId=" + orderId,
  });
}

function wxPay(orderId) {
  var uAgent = window.navigator.userAgent;
  console.log("uAgent", uAgent);

  if (uAgent.indexOf("MicroMessenger") > 0) {
    //微信浏览器
    //跳转授权
    let appId = "wx9775e83fd0bb0fb3"
    let redirectUri = "https://dkn-h5.dev.haumo.cn/pages/pay/wxPay/page"
    // let redirectUri = "http://192.168.202.158:3000/pages/pay/wxPay/page"
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=snsapi_base&state=${orderId}#wechat_redirect`
    
    // wxCodePay(orderId)
  } else {
    //其他浏览器
    // wxWapPay(orderId);
    wxCodePay(orderId)
  }
}

function wxCodePay(orderId){
  getAction("/api/wechat/scanCode2", {
    orderId,
  }).then(res => {
    uni.navigateTo({
      url: `/pages/pay/wxPay/page?url=${res.data}&orderId=${orderId}`
    })
  })
}

export function wxWebPay(orderId, code) {
  getAction("/api/wechat/webPay", {
    orderId,
    code
  }).then((res) => {
    if (res.success) {
      let data = JSON.parse(res.result);
      let self = this;
        jweixin.config({ //全局参数配置
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timeStamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.paySign, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay'] // 必填
        });
      
      
        jweixin.ready(function() {//预请求，看能否发起微信支付
          jweixin.checkJsApi({ //判断当前版本是否支持指定js接口
            jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表
            success: function(res) {
              console.log('成功信息1');
              console.log(res);
            },
            fail: function(res) {
              console.log('失败信息1');
              console.log(res);
            }
          });
      
          jweixin.chooseWXPay({ //发起一个微信的支付请求
            timestamp: data.timeStamp, // 支付签名时间戳
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名,与签名是一个东西
            success: async function(res) {
              console.log(res, "成功信息2");
            },
            cancel: function(res) {
              console.log(res, "取消信息2")
            },
            fail: function(res) {
              console.log(res, "失败信息2");
            }
          });
      
        });
      
        jweixin.error(function(res) {
          console.log(res, "失败信息3");
        });
      // alert("data:" + JSON.stringify(data))
      // alert("WeixinJSBridge:" + typeof WeixinJSBridge)

      // if (typeof WeixinJSBridge == "undefined") {
      //   if (document.addEventListener) {
      //     document.addEventListener(
      //       "WeixinJSBridgeReady",
      //       onBridgeReady(data),
      //       false
      //     );
      //   } else if (document.attachEvent) {
      //     document.attachEvent("WeixinJSBridgeReady", onBridgeReady(data));
      //     document.attachEvent("onWeixinJSBridgeReady", onBridgeReady(data));
      //   }
      // } else {
      //   onBridgeReady(data);
      // }
    } else {
      uni.showToast({
        title: "error：" + res.message,
      });
    }
  });
}

/**
 * wx h5支付
 */
function wxWapPay(orderId) {
  getAction("/api/wechat/wapPay", {
    orderId,
  }).then((res) => {
    console.log("res", res);
  });
}

function onBridgeReady(json) {
  WeixinJSBridge.invoke("getBrandWCPayRequest", json, function (res) {
    // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
    if (res.err_msg == "get_brand_wcpay_request:ok") {
      uni.showToast({
        title: "支付成功",
      });

      uni.reLaunch({
        url: "/",
      });
    } else {
      uni.showToast({
        title: "支付失败",
      });
    }
  });
}
