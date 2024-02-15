<template>
  <view class="page card">
    <view class="page-wrapper">
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
                <hm-uview-icon
                  ref="code"
                  :name="code.name"
                  :size="code.size"
                  :label="code.label"
                  class="ele-code"
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
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

import { sharingPageInitialization } from "/@/logics/SharingPageGrooup";

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
        name: "",
        size: "100%",
        label: "",
      },
    };
  },
  watch: {},
  async created(e) {
    this.onCreated(e);
  },
  mounted(e) {
    sharingPageInitialization(this, arguments);
  },
  methods: {
    onCreated() {
      //注册
      this.sharingImage.backgroundImage;
      this.code.name;

      let self = this;
      self.getQrCode = async function () {
        const QRCode = require("qrcode");
        const qrCodeDiv = document.getElementsByClassName("code");
        let qrUrl = `http://dkn-h5.dev.haomo-tech.com?activityId=${self.$route.query.activityId}&channel=${self.$route.query.channel}`;

        const qr = new QRCode(qrCodeDiv, {
          text: qrUrl,
          width: 128,
          height: 128,
        });
      };
    },

    onDownloadImageBgClick() {
      // 选择要截取的元素，例如通过 id 或者 class
      const elementToCapture = document.querySelectorAll(
        ".ele-sharingImage"
      )[0];
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
      const elementToCapture = document.querySelectorAll(
        ".ele-sharingImage"
      )[0];
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
}

.ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  /deep/ .hm-bg-card {
    display: flex;
    align-items: center;
  }
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
