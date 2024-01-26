<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-formbgCard">
        <hm-uview-bg-card
          ref="formbgCard"
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          background-color="#F2F2F2"
          class="ele-formbgCard"
        >
          <view
            class="ele-wrapper ele-wrapper-e4e2b49b-b097-4a65-a356-d9d95daa618b"
          >
            <hm-uview-text
              text="资料填写"
              color="#409EFF"
              :text-style="{ fontWeight: 700 }"
            >
            </hm-uview-text>
          </view>
          <view
            class="ele-wrapper ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-spread=""
              background-color="#F2F2F2"
              class="ele-7927eb64-d6cf-4dda-8938-a15bb62187d2"
            >
              <view
                class="ele-wrapper ele-wrapper-8b981cf2-ae14-4b8c-9f72-4cd6c41423a6"
              >
                <information-input-box
                  value=""
                  placeholder="* 请填写姓名/昵称"
                  class="ele-8b981cf2-ae14-4b8c-9f72-4cd6c41423a6"
                >
                </information-input-box>
              </view>
              <view
                class="ele-wrapper ele-wrapper-9662da08-d680-4c34-af33-b2ba9794437a"
              >
                <information-input-box
                  :left-src="[
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shoujis.png',
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji.png',
                  ]"
                  value=""
                  placeholder="* 请填写手机号码"
                  class="ele-9662da08-d680-4c34-af33-b2ba9794437a"
                >
                </information-input-box>
              </view>
              <view
                class="ele-wrapper ele-wrapper-5102357a-cd29-4bb3-9a1f-ab709e15c3a8"
              >
                <information-input-box
                  :left-src="[
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/xinxis.png',
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/xinxi.png',
                  ]"
                  value=""
                  :show-code="true"
                  placeholder="* 请填写短信验证码"
                  class="ele-5102357a-cd29-4bb3-9a1f-ab709e15c3a8"
                >
                </information-input-box>
              </view>
              <view
                class="ele-wrapper ele-wrapper-71e123e5-88a9-44c5-b029-f89fdaffa0d3"
              >
                <information-input-box
                  :left-src="[
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendian.png',
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendians.png',
                  ]"
                  value=""
                  :show-icon="true"
                  placeholder="* 请选择领奖门店"
                  @rightIcon="onEle71E123E588A944C5B029F89Fdaffa0D3RightIcon"
                  class="ele-71e123e5-88a9-44c5-b029-f89fdaffa0d3"
                >
                </information-input-box>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-shopPop">
            <hm-uview-popup
              ref="shopPop"
              v-model:show="shopPop.show"
              :mode="'bottom'"
            >
              <view
                class="ele-wrapper ele-wrapper-9fb51c90-145e-4b04-a74d-99794d96d8b3"
              >
                <hm-uview-text
                  text="选择门店"
                  class="ele-9fb51c90-145e-4b04-a74d-99794d96d8b3"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-38ef40fd-ce54-482c-83b9-ef433f2f2aa3"
              >
                <store-selection
                  class="ele-38ef40fd-ce54-482c-83b9-ef433f2f2aa3"
                >
                </store-selection>
              </view>
            </hm-uview-popup>
          </view>
          <view class="ele-wrapper ele-wrapper-baoming">
            <hm-uview-bg-card
              ref="baoming"
              width="100%"
              height="100%"
              border-radius=""
              padding=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#F2F2F2"
              class="ele-baoming"
            >
              <view class="ele-wrapper ele-wrapper-priceCard">
                <hm-uview-bg-card
                  ref="priceCard"
                  width="100%"
                  height="100%"
                  border-radius=""
                  padding=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  background-color="#F2F2F2"
                  class="ele-priceCard"
                >
                  <view
                    class="ele-wrapper ele-wrapper-d65d48b8-e4a0-4bbf-bf01-446a7587fd7b"
                  >
                    <hm-uview-text
                      text="报名费用:"
                      font-size="14px"
                      color="#409EFF"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-09650009-608e-4d01-83af-eedcb5a2c7ad"
                  >
                    <hm-uview-text
                      text="¥29.00"
                      font-size="14px"
                      color="#409EFF"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-acf99afa-7e7b-42dc-a52d-aa67ffc5af5b"
              >
                <hm-uview-button
                  :type="'primary'"
                  :shape="'circle'"
                  text="立即报名"
                  class="ele-acf99afa-7e7b-42dc-a52d-aa67ffc5af5b"
                >
                </hm-uview-button>
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
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import StoreSelection from "/@/components/dkn-h-5/store-selection/index.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "RegistrationForm",
  components: {
    HmUviewBgCard,
    HmUviewText,
    InformationInputBox,
    HmUviewPopup,
    StoreSelection,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      shopPop: {
        show: true,
      },
      "8b981cf2-ae14-4b8c-9f72-4cd6c41423a6": {
        value: "",
      },
      "9662da08-d680-4c34-af33-b2ba9794437a": {
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shoujis.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji.png",
        ],
        value: "",
      },
      "5102357a-cd29-4bb3-9a1f-ab709e15c3a8": {
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/xinxis.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/xinxi.png",
        ],
        value: "",
      },
      "71e123e5-88a9-44c5-b029-f89fdaffa0d3": {
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendian.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendians.png",
        ],
        value: "",
      },
    };
  },
  watch: {},
  methods: {
    onEle71E123E588A944C5B029F89Fdaffa0D3RightIcon() {
      this.shopPop.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-formbgCard {
  width: 100%;
  height: 100vh;
  position: relative;
  .ele-formbgCard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2 {
  width: 100%;
}

.ele-wrapper-8b981cf2-ae14-4b8c-9f72-4cd6c41423a6 {
  width: 100%;
  margin-top: 10px;
}

.ele-wrapper-9662da08-d680-4c34-af33-b2ba9794437a {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-5102357a-cd29-4bb3-9a1f-ab709e15c3a8 {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-71e123e5-88a9-44c5-b029-f89fdaffa0d3 {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-9fb51c90-145e-4b04-a74d-99794d96d8b3 {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
  font-style: normal;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
}

.ele-wrapper-38ef40fd-ce54-482c-83b9-ef433f2f2aa3 {
  width: 100%;
}

.ele-wrapper-baoming {
  width: 100%;
  position: absolute;
  bottom: 40px;
  .ele-baoming {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-priceCard {
  width: 100%;
  .ele-priceCard {
    text-align: center;
  }
}

.ele-wrapper-acf99afa-7e7b-42dc-a52d-aa67ffc5af5b {
  width: 90%;
}
</style>
