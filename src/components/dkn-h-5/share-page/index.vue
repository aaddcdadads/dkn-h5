<template>
  <view class="page card">
    <canvas :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }">
      <img :src="imgPath" />
    </canvas>
    <!-- <canvas
      id="hide-canvas"
      class="hide-canvas"
      :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
    ></canvas> -->
    <view
      class="ele-wrapper ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c"
    >
      <hm-uview-text text="长按图片进行保存" font-size="18px"></hm-uview-text>
    </view>
    <!-- <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-e006ab79-f3a9-492b-8632-73042a091b41"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          border-radius="0"
          border-color="#FFFFFF00"
          padding="0"
          box-shadow-color="#00000000"
          background-color="#FFFFFF00"
          class="ele-e006ab79-f3a9-492b-8632-73042a091b41"
        >
          <view class="ele-wrapper ele-wrapper-sharingImage">
            <hm-uview-bg-card
              ref="sharingImage"
              :width="sharingImage.width"
              :height="sharingImage.height"
              :border-radius="sharingImage.borderRadius"
              :padding="sharingImage.padding"
              :box-shadow-v-shadow="sharingImage.boxShadowVShadow"
              :box-shadow-blur="sharingImage.boxShadowBlur"
              :box-shadow-color="sharingImage.boxShadowColor"
              :background-image="sharingImage.backgroundImage"
              class="ele-sharingImage"
            >
              <view class="ele-wrapper ele-wrapper-code">
                <hm-uview-bg-card
                  ref="code"
                  :width="code.width"
                  :height="code.height"
                  :border-radius="code.borderRadius"
                  :border-color="code.borderColor"
                  :padding="code.padding"
                  :box-shadow-v-shadow="code.boxShadowVShadow"
                  :box-shadow-blur="code.boxShadowBlur"
                  :box-shadow-color="code.boxShadowColor"
                  :background-color="code.backgroundColor"
                  class="ele-code"
                >
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-codea">
                <hm-uview-icon
                  ref="codea"
                  name=""
                  size="100%"
                  label=""
                  class="ele-codea"
                >
                </hm-uview-icon>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c"
          >
            <hm-uview-bg-card
              width="100%"
              height=""
              border-radius="0"
              box-shadow-color="#0000000A"
              class="ele-084fc45c-3b7d-42af-9042-8c47c465787c"
            >
              <view
                class="ele-wrapper ele-wrapper-33585d75-6c6b-4206-8dae-be7a7a85b0b5"
              >
                <hm-uview-text text="分享给好友" font-size="18px">
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-downloadImage">
                <hm-uview-bg-card
                  ref="downloadImage"
                  width="100%"
                  height="100%"
                  border-radius="0"
                  padding="0"
                  box-shadow-v-shadow="0"
                  box-shadow-blur="0"
                  box-shadow-color="#00000000"
                  background-image="/static/components/img/save.png"
                  @bgClick="onDownloadImageBgClick"
                  class="ele-downloadImage"
                >
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-0ed4308b-d32b-4f14-8401-ba9ad296dc56"
              >
                <hm-uview-icon
                  name="/static/components/img/save.png"
                  size="100%"
                  label=""
                  @click="onEle0Ed4308BD32B4F148401Ba9Ad296Dc56Click"
                  class="ele-0ed4308b-d32b-4f14-8401-ba9ad296dc56"
                >
                </hm-uview-icon>
              </view>
            </hm-uview-bg-card>
          </view>
        </hm-uview-bg-card>
      </view>
    </view> -->
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import QRCode from "qrcode";
import { getBackgroundImage } from "/@/logics/SharingPageGrooup";

export default {
  name: "SharingPage",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
    HmUviewText,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      imgPath: "",
      canvasWidth: 0,
      canvasHeight: 0,
      sharingImage: {
        width: "100%",
        height: "100%",
        borderRadius: "0",
        padding: "0",
        boxShadowVShadow: "0",
        boxShadowBlur: "0",
        boxShadowColor: "#00000000",
        backgroundImage: "",
      },
      code: {
        name: null,
        width: "100%",
        height: "100%",
        borderRadius: "10",
        borderColor: "#FFFFFF00",
        padding: "0",
        boxShadowVShadow: "0",
        boxShadowBlur: "0",
        boxShadowColor: "#00000000",
        backgroundColor: "#FFFFFF00",
      },
    };
  },
  watch: {},
  /**
   * 375*667图片的画布
   */
  created() {
    this.canvasWidth = window.innerWidth; // 屏幕宽度
    this.canvasHeight = (this.canvasWidth / 375) * 607;
    console.log("imgWidth imgHeight", this.canvasWidth, this.canvasHeight);
  },
  async mounted(e) {
    // 获取背景图片
    let backendImg = await this.getBackendImg();

    // 生成二维码图片
    let qrCodeImg = await this.getQrCodeImg();

    // canvas绘制图片
    await this.canvasDrawImg(backendImg, qrCodeImg);
  },
  methods: {
    async canvasDrawImg(backendImg, qrCodeImg){
      const imgWidth = this.canvasWidth;
      const imgHeight = this.canvasHeight;

      var canvas = document.createElement('canvas');
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      var ctx = canvas.getContext('2d');

      const backendImage = new Image();
      backendImage.src = backendImg;
      backendImage.onload = () => {
        ctx.drawImage(backendImage, 0, 0, imgWidth, imgHeight);
        
        const qrImage = new Image();
        qrImage.src = qrCodeImg;
        qrImage.onload = () => {
          ctx.drawImage(qrImage, imgWidth * 0.114, imgHeight * 0.845, imgWidth * 0.2, imgWidth * 0.2);
          // 转换为base64
          var dataURL = canvas.toDataURL('image/png');
          this.imgPath = dataURL
        };
      };
    },
    getImageBase64(url, callback) {
      // 创建一个Image对象
      var image = new Image();
      // 解决跨域Canvas污染问题
      image.setAttribute("crossOrigin", 'Anonymous');
      image.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        // 将Image画到Canvas上
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);

        // 转换为base64
        var dataURL = canvas.toDataURL('image/png');
        
        // 调用回调函数
        callback(dataURL);
      };
      // 设定src，这将触发onload事件
      image.src = url;
    },
    async getBackendImg() {
      let self = this;
      let res = await self.$getAction(`/api/dkn/activityImg/list`, {
        activityId: self.$route.query.activityId,
        type: 2,
      });
      if (!res.success) {
        return;
      }

      let activityImg = res.result.records[0];
      let imagePath = "/files/" + activityImg.path;
      return imagePath;
    },
    async getQrCodeImg() {
      let self = this;
      console.log("aaa", import.meta.env, import.meta.env.VITE_DOMAIN);
      let qrCodeUrl = `${import.meta.env.VITE_DOMAIN}/?activityId=${self.$route.query.activityId}&channel=${self.$route.query.channel}`;
      return await QRCode.toDataURL(qrCodeUrl);
    },
    onCreated() {
      //注册
      this.sharingImage.backgroundImage;
      this.code.name;

      let self = this;
      self.getQrCode = async function () {
        const qrCodeDiv = document.getElementsByClassName("ele-code")[0];
        console.log("aaa", qrCodeDiv);
        let qrUrl = `${import.meta.env.VITE_DOMAIN}/?activityId=${self.$route.query.activityId}&channel=${self.$route.query.channel}`;

        // 创建一个canvas元素
        const canvas = document.createElement("canvas");
        canvas.width = qrCodeDiv.offsetWidth; // 设置canvas宽度为容器宽度
        canvas.height = qrCodeDiv.offsetHeight; // 设置canvas高度为容器高度

        // 生成二维码并渲染到隐藏的canvas元素中
        self.$QRCode.toCanvas(
          canvas,
          qrUrl,
          {
            width: canvas.width,
            height: canvas.height,
          },
          function (error) {
            if (error) {
              console.error(error);
            } else {
              console.log("QR code generated");
              // 将canvas元素内容复制到目标容器中
              qrCodeDiv.appendChild(canvas);
            }
          }
        );
      };
    },

    onDownloadImageBgClick() {
      // 选择要截取的元素，例如通过 id 或者 class
      const elementToCapture =
        document.querySelectorAll(".ele-sharingImage")[0];
      console.log("elementToCapture", elementToCapture);
      // 使用 html2canvas 截取特定元素
      this.$html2canvas(elementToCapture, {
        useCors: true,
      }).then((canvas) => {
        // 将 canvas 转换为 blob
        canvas.toBlob((blob) => {
          // 创建一个 <a> 元素
          const link = document.createElement("a");

          // 创建一个临时的 URL，并将其作为下载链接
          const url = URL.createObjectURL(blob);
          link.href = url;

          // 设置下载的文件名
          link.download = "screenshot.png";

          // 将 <a> 元素添加到页面中
          document.body.appendChild(link);

          // 模拟点击链接以下载图片
          link.click();

          // 移除 <a> 元素
          document.body.removeChild(link);

          // 释放临时的 URL
          URL.revokeObjectURL(url);
        });
      });
    },
    onEle0Ed4308BD32B4F148401Ba9Ad296Dc56Click() {
      // 选择要截取的元素，例如通过 id 或者 class
      const elementToCapture =
        document.querySelectorAll(".ele-sharingImage")[0];
      console.log("elementToCapture", elementToCapture);
      // 使用 html2canvas 截取特定元素
      this.$html2canvas(elementToCapture, {
        useCors: true,
      }).then((canvas) => {
        // 将 canvas 转换为 blob
        canvas.toBlob((blob) => {
          // 创建一个 <a> 元素
          const link = document.createElement("a");

          // 创建一个临时的 URL，并将其作为下载链接
          const url = URL.createObjectURL(blob);
          link.href = url;

          // 设置下载的文件名
          link.download = "screenshot.png";

          // 将 <a> 元素添加到页面中
          document.body.appendChild(link);

          // 模拟点击链接以下载图片
          link.click();

          // 移除 <a> 元素
          document.body.removeChild(link);

          // 释放临时的 URL
          URL.revokeObjectURL(url);
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-e006ab79-f3a9-492b-8632-73042a091b41 {
  width: 100%;
  position: relative;
}

.ele-wrapper-sharingImage {
  width: 100%;
  /deep/.ele-sharingImage {
    background-size: cover !important;
    background-repeat: no-repeat;
    aspect-ratio: 375/607;
    position: relative;
    //height: 100%;
  }
  display: block;
  margin-bottom: 22%;
}

.ele-wrapper-code {
  position: absolute;
  width: 21%;
  left: 11.4%;
  bottom: 2.6%;
  /deep/.ele-code {
    background-size: cover !important;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    position: relative;
    //height: 100%;
  }
}

.ele-wrapper-codea {
  position: absolute;
  aspect-ratio: 1/1;
  width: 21%;
  left: 11.4%;
  bottom: 2.6%;
  border-radius: 10px;
  /deep/ .u-icon {
    width: 100%;
    height: 100%;
  }
  /deep/ .u-icon__img {
    border-radius: 10px;
  }
  display: none;
}

.ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.ele-wrapper-downloadImage {
  width: 18%;
  /deep/.ele-downloadImage {
    background-size: cover !important;
    background-repeat: no-repeat;
    aspect-ratio: 65/63;
    position: relative;
    //height: 100%;
  }
  display: block;
  margin-left: 18px;
  margin-top: 8px;
}

.ele-wrapper-0ed4308b-d32b-4f14-8401-ba9ad296dc56 {
  width: 18%;
  margin-left: 18px;
  margin-top: 8px;
  aspect-ratio: 65/63;
  /deep/ .u-icon {
    width: 100%;
  }
  display: none;
}
</style>
