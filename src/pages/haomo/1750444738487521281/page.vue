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
          background-color="#F0F2F6"
          class="ele-formbgCard"
        >
          <view
            class="ele-wrapper ele-wrapper-d2a1d00b-5944-454d-8524-4be2a05c3be8"
          >
            <hm-uview-text
              text="奖品选择"
              font-size="16px"
              class="ele-d2a1d00b-5944-454d-8524-4be2a05c3be8"
            >
            </hm-uview-text>
          </view>
          <view
            class="ele-wrapper ele-wrapper-37d3df1b-3224-4fbd-901e-b2a290a0ccb9"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#FFF5E6"
              class="ele-37d3df1b-3224-4fbd-901e-b2a290a0ccb9"
            >
              <view
                class="ele-wrapper ele-wrapper-e0671cfa-0c0d-4649-8682-46e9560f861e"
              >
                <hm-uview-icon
                  name="info-circle"
                  color="#FF9900"
                  size="20px"
                  label="特别提醒：报名截止后逾期未核销者不支持退款"
                  label-size="12px"
                  label-color="#FF9900"
                  class="ele-e0671cfa-0c0d-4649-8682-46e9560f861e"
                >
                </hm-uview-icon>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-74c8c2c3-d387-4029-8b68-8275204c2ed5"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#F0F2F6"
              class="ele-74c8c2c3-d387-4029-8b68-8275204c2ed5"
            >
              <view class="ele-wrapper ele-wrapper-eventCard">
                <event-registration-card ref="eventCard" :list="eventCard.list">
                </event-registration-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-e4e2b49b-b097-4a65-a356-d9d95daa618b"
          >
            <hm-uview-text
              text="资料填写"
              font-size="16px"
              color="#000000"
              :text-style="{ fontWeight: 700 }"
              class="ele-e4e2b49b-b097-4a65-a356-d9d95daa618b"
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
              background-color="#F0F2F6"
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
              height="45%"
              class="ele-shopPop"
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
              background-color="#F0F2F6"
              class="ele-baoming"
            >
              <view
                class="ele-wrapper ele-wrapper-acf99afa-7e7b-42dc-a52d-aa67ffc5af5b"
              >
                <hm-uview-button
                  :type="'primary'"
                  :shape="'circle'"
                  text="总费用：¥29.0 立即报名"
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
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import EventRegistrationCard from "/@/components/dkn-h-5/event-registration-card/index.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import StoreSelection from "/@/components/dkn-h-5/store-selection/index.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "RegistrationForm",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewIcon,
    EventRegistrationCard,
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
        show: false,
      },
      eventCard: {
        list: [
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
          },
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
          },
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
          },
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
          },
        ],
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
  height: 100%;
  overflow-y: auto;
  .ele-formbgCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }
}

.ele-wrapper-d2a1d00b-5944-454d-8524-4be2a05c3be8 {
  font-family: "PingFangSC-Medium", "PingFang SC Medium", "PingFang SC",
    sans-serif;
  font-weight: 500;
}

.ele-wrapper-37d3df1b-3224-4fbd-901e-b2a290a0ccb9 {
  border: 1px solid #ffebcc;
  border-radius: 5px;
}

.ele-wrapper-e0671cfa-0c0d-4649-8682-46e9560f861e {
  font-family: "PingFangSC-Regular", "PingFang SC", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #ff9900;
  text-align: left;
  line-height: 20px;
}

.ele-wrapper-74c8c2c3-d387-4029-8b68-8275204c2ed5 {
  width: 100%;
  .ele-wrapper-eventCard {
    width: 100%;
  }
}

.ele-wrapper-e4e2b49b-b097-4a65-a356-d9d95daa618b {
  font-family: "PingFangSC-Medium", "PingFang SC Medium", "PingFang SC",
    sans-serif;
  font-weight: 500;
}

.ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2 {
  width: 100%;
}

.ele-wrapper-8b981cf2-ae14-4b8c-9f72-4cd6c41423a6 {
  width: 100%;
  margin-top: 5px;
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

.ele-wrapper-shopPop {
  /deep/.uni-scroll-view-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-9fb51c90-145e-4b04-a74d-99794d96d8b3 {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 650;
  font-style: normal;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  margin: 10px 0;
}

.ele-wrapper-38ef40fd-ce54-482c-83b9-ef433f2f2aa3 {
  width: 100%;
}

.ele-wrapper-baoming {
  width: 100%;
  position: fixed;
  bottom: 0;
  .ele-baoming {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px 40px;
  }
}

.ele-wrapper-acf99afa-7e7b-42dc-a52d-aa67ffc5af5b {
  width: 100%;
  /deep/.u-btn {
    font-family: "PingFangSC-Regular", "PingFang SC", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
  }
}
</style>
