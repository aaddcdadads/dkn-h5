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
              <view
                class="ele-wrapper ele-wrapper-5aa96d8c-a795-40cb-9b99-302ccd251a7d"
              >
                <hm-uview-icon
                  name="https://img.yzcdn.cn/vant/cat.jpeg"
                  size="100%"
                  label=""
                  class="ele-5aa96d8c-a795-40cb-9b99-302ccd251a7d"
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
        backgroundImage: "/static/components/img/share.png",
      },
    };
  },
  watch: {},
  created(e) {
    this.onCreated(e);
  },
  methods: {
    onCreated() {
      //注册
      this.sharingImage.backgroundImage;
    },

    onEle0Ed4308BD32B4F148401Ba9Ad296Dc56Click() {
      const link = document.createElement("a");

      // 将 download 属性设置为要保存的文件的名称
      link.download = "活动分享图片";

      // 将 href 属性设置为图片的 URL
      link.href = this.sharingImage.backgroundImage;

      document.body.appendChild(link);
      // 触发链接的点击事件
      link.click();
      document.body.removeChild(link);
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
    aspect-ratio: 375/667;
    position: relative;
    //height: 100%;
  }
  display: block;
  margin-bottom: 89px;
}

.ele-wrapper-5aa96d8c-a795-40cb-9b99-302ccd251a7d {
  position: absolute;
  aspect-ratio: 1/1;
  width: 35%;
  left: 0;
  bottom: 0;
  /deep/ .u-icon {
    width: 100%;
    height: 100%;
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

.ele-wrapper-0ed4308b-d32b-4f14-8401-ba9ad296dc56 {
  width: 18%;
  margin-left: 18px;
  margin-top: 8px;
  aspect-ratio: 65/63;
  /deep/ .u-icon {
    width: 100%;
  }
}
</style>
