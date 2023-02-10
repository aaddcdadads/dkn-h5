<template >
  <view class="wrap"> </view>
</template>

<script>
import * as dd from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载

export default {
  name: "HmScanCode",
  props: {
    /**
     *只允许相机扫码
     */
    onlyFromCamera: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      barcode: null,
      flash: false,
      tip: "",
    };
  },
  onLoad(params) {
    const { tip } = params;
    if (tip) {
      this.tip = tip;
    }
  },
  mounted() {
    /*let self = this;
    if (this.show) {
      setTimeout(function () {
        self.scanCode();
      }, 200);
    }*/
    //this.open();
  },
  methods: {
    open() {
      console.log("打开相机");
      let self = this;
      // #ifdef MP-WEIXIN
      uni.scanCode({
        onlyFromCamera: this.onlyFromCamera,
        success: function (res) {
          ///console.log(JSON.stringify(res));
          self.onSuccess(res);
        },
        fail: function () {
          self.onFail();
        },
      });
      // #endif
      // #ifdef APP-PLUS 
      plus.navigator.setFullscreen(true); //全屏
      let currentWebview = this.$parent.$scope.$getAppWebview();
      this.createBarcode(currentWebview);
      this.createTipInfoView(currentWebview);
      this.createFlashBarView(currentWebview);
      // #endif

      // #ifdef H5
      dd.biz.util.scan({
        type: "all",
        onSuccess : function(res) {
          // 调用成功时回调
          console.log(res)
          self.onSuccess(res);
        },
        onFail :  function(err) {
          // 调用失败时回调
          console.log(err)
          self.onFail(err);
        }
      });
      // #endif
    },
    // #ifdef APP-PLUS || H5
    /**
     * 创建二维码
     * @param {Object} currentWebview
     */
    createBarcode(currentWebview) {
      if (!this.barcode) {
        this.barcode = plus.barcode.create("barcode", [plus.barcode.QR], {
          top: `0px`,
          left: "0px",
          height: `100%`,
          width: "100%",
          position: "absolute",
          background: "#FFCC00",
          frameColor: "#138bea",
          scanbarColor: "#138bea",
        });
        this.barcode.onmarked = this.onmarked;
        this.barcode.onerror = this.onerror;
        this.barcode.setFlash(this.flash);
        //此处未演示扫码成功回调的地址设置，实际请参考HTML5Plus API自行处理
        //注意扫码区域需为正方形，否则影响扫码识别率
        currentWebview.append(this.barcode);
      }
      //console.log("start",this.barcode);
      this.barcode.start();
    },

    /**
     * 创建提示信息
     * @param {Object} currentWebview
     */
    createTipInfoView(currentWebview) {
      const content = new plus.nativeObj.View(
        "content",
        {
          top: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
        },
        [
          {
            tag: "font",
            id: "scanTips",
            text: this.tip,
            textStyles: {
              size: "16px",
              color: "#ffffff",
              whiteSpace: "normal",
            },
            position: {
              top: "150px",
              left: "10%",
              width: "80%",
              height: "wrap_content",
            },
          },
        ]
      );
      currentWebview.append(content);
    },
    // 创建 开关灯按钮
    createFlashBarView(currentWebview) {
      const openImg = this.crtFlashImg(
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/uniapp-icon/%E6%89%8B%E7%94%B5%E7%AD%92%E5%BC%80.png"
      );
      const closeImg = this.crtFlashImg(
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/uniapp-icon/%E6%89%8B%E7%94%B5%E7%AD%92%E5%85%B3.png"
      );
      const scanBarVew = new plus.nativeObj.View(
        "scanBarVew",
        {
          top: "70%",
          left: "40%",
          height: "10%",
          width: "20%",
        },
        closeImg
      );
      scanBarVew.interceptTouchEvent(true);

      currentWebview.append(scanBarVew);

      scanBarVew.addEventListener(
        "click",
        (e) => {
          //点亮手电筒
          this.flash = !this.flash;
          if (this.flash) {
            scanBarVew.draw(openImg);
          } else {
            scanBarVew.draw(closeImg);
          }
          if (this.barcode) {
            this.barcode.setFlash(this.flash);
          }
        },
        false
      );
    },
    crtFlashImg(imgsrc) {
      return [
        {
          tag: "img",
          id: "scanBar",
          src: imgsrc,
          position: {
            width: "36%",
            left: "30%",
            height: "40%",
          },
        },
        {
          tag: "font",
          id: "font",
          text: "轻触照亮",
          textStyles: {
            size: "16px",
            color: "#ffffff",
          },
          position: {
            width: "80%",
            left: "10%",
          },
        },
      ];
    },
    // #endif

    onSuccess(res) {
      //console.log(res);
      this.$emit("success", res);
    },
    onFail(res) {
      //console.log("onReturn");
      this.$emit("fail", res);
    },

    // 扫码成功回调
    onmarked(type, result, file) {
      this.$emit("success", { type, result, file });
      //console.log('条码类型：' , type);
      //console.log('条码内容：' , result);
      // 业务代码
      // 核对扫描结果
      // 判断是否是正确的格式
      // 不正确则跳转到 错误页面
    },
    // 扫码失败回调
    onerror(error) {
      //console.log('扫码失败' , error);
      this.$emit("fail", error);
    },
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
