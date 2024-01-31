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
    url: "/pages/haomo/aliPay/page?orderId=" + orderId,
  });
}

function wxPay(orderId) {
  var uAgent = window.navigator.userAgent;
  console.log("uAgent", uAgent);

  if (uAgent.indexOf("MicroMessenger") > 0) {
    //微信浏览器
    //跳转授权
    let appId = "wx991ac0c9f256b78b"
    let redirectUri = "https://dkn-h5.dev.haomo-tech.com:8443/pages/haomo/wxPay/page"
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=snsapi_base&state=${orderId}#wechat_redirect`
    
    wxCodePay(orderId)
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
      url: `/pages/haomo/wxPay/page?url=${res.data}&orderId=${orderId}`
    })
  })
}

export function wxWebPay(orderId, code) {
  getAction("/api/wechat/webPay", {
    orderId,
    code
  }).then((res) => {
    if (res.code == 0) {
      let data = JSON.parse(res.data);

      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            onBridgeReady(data),
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", onBridgeReady(data));
          document.attachEvent("onWeixinJSBridgeReady", onBridgeReady(data));
        }
      } else {
        onBridgeReady(data);
      }
    } else {
      if (res.code == 2) {
        uni.showToast({
          title: res.message,
        });
      } else {
        uni.showToast({
          title: "error：" + res.message,
        });
      }
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
