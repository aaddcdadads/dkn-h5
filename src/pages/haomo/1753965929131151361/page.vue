<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          padding=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          background-color="#FAFAFA"
          class="ele-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
        >
          <view class="ele-wrapper ele-wrapper-messageTitle">
            <hm-uview-bg-card
              ref="messageTitle"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-messageTitle"
            >
              <view class="ele-wrapper ele-wrapper-messageText">
                <hm-uview-bg-card
                  ref="messageText"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  background-color="#FFFFFF00"
                  class="ele-messageText"
                >
                  <view
                    class="ele-wrapper ele-wrapper-36f2fc1e-d87f-40cb-98bc-cb8e56e54ca8"
                  >
                    <hm-uview-text
                      text="待核销/已核销"
                      font-size="17px"
                      color="#FFFFFF"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-d8c285e5-318c-441c-8246-12398d4f880c"
                  >
                    <hm-uview-text
                      text="活动名称"
                      font-size="17px"
                      color="#FFFFFF"
                      padding="3"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-3239cafa-d69b-4857-821d-3eb017166e18"
                  >
                    <hm-uview-text
                      text="请在 2024-03-31 23:59:59 前完成核销"
                      font-size="12px"
                      color="#FFFFFF"
                      padding="2"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-messageCode">
                <hm-uview-bg-card
                  ref="messageCode"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  background-color="#FFFFFF00"
                >
                  <view
                    class="ele-wrapper ele-wrapper-3b0b65a9-03ab-4be8-89f2-1ace4afa48fd"
                  >
                    <hm-uview-image
                      src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/ScanCode.png"
                      width="40px"
                      height="40px"
                    >
                    </hm-uview-image>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              padding="15"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-2da4517d-7fb0-4bdc-825d-f295b2c74751"
            >
              <view
                class="ele-wrapper ele-wrapper-2060a060-910f-4964-925f-6601124d2f0d"
              >
                <event-registration-information-card
                  :list="[
                    {
                      checked: true,
                      image:
                        'https://img.js.design/assets/img/65bc6430a6a4a8693349c559.png',
                      name: '套餐A',
                      description:
                        '时代看风使舵丰动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名富的少年疯狂是否达到减肥的步伐简单方便的',
                      price: '29.9',
                      number: 0,
                    },
                    {
                      checked: false,
                      image:
                        'https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png',
                      name: '套餐B',
                      description:
                        '动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名',
                      price: '0.0',
                      number: 0,
                    },
                  ]"
                >
                </event-registration-information-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"
            >
              <view
                class="ele-wrapper ele-wrapper-3a72f42e-dc59-431b-9a12-5719c8248610"
              >
                <hm-loop
                  :value="[
                    { label: '姓名/昵称', placeholder: '姓名/昵称', value: '' },
                    {
                      label: '手机号码',
                      placeholder: '17722729038',
                      value: '',
                    },
                    {
                      label: '领奖门店',
                      placeholder: '迪卡侬深圳北站店',
                      value: '',
                    },
                    {
                      label: '报名时间',
                      placeholder: '2024-03-01 08:49:59',
                      value: '',
                    },
                    {
                      label: '订单编号',
                      placeholder: '86973497296789259486',
                      value: '',
                    },
                  ]"
                  class="ele-3a72f42e-dc59-431b-9a12-5719c8248610"
                >
                  <template #default="{ item }">
                    <view
                      class="ele-wrapper ele-wrapper-21c5606d-d727-4143-a4ce-026bb85006c1"
                    >
                      <hm-uview-field
                        value=""
                        :label="item.label"
                        :placeholder="item.placeholder"
                        label-width="160"
                        :label-align="'center'"
                        icon=""
                        right-icon=""
                        class="ele-21c5606d-d727-4143-a4ce-026bb85006c1"
                      >
                      </hm-uview-field>
                    </view>
                  </template>
                </hm-loop>
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
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import EventRegistrationInformationCard from "/@/components/dkn-h-5/event-registration-information-card/index.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";

export default {
  name: "NewActivityRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewImage,
    EventRegistrationInformationCard,
    HmLoop,
    HmUviewField,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "3a72f42e-dc59-431b-9a12-5719c8248610": {
        value: [
          {
            label: "姓名/昵称",
            placeholder: "姓名/昵称",
            value: "",
          },
          {
            label: "手机号码",
            placeholder: "17722729038",
            value: "",
          },
          {
            label: "领奖门店",
            placeholder: "迪卡侬深圳北站店",
            value: "",
          },
          {
            label: "报名时间",
            placeholder: "2024-03-01 08:49:59",
            value: "",
          },
          {
            label: "订单编号",
            placeholder: "86973497296789259486",
            value: "",
          },
        ],
      },
      "21c5606d-d727-4143-a4ce-026bb85006c1": {
        value: "",
      },
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-messageTitle {
  width: 100%;
  height: 121px;
  .ele-messageTitle {
    background: radial-gradient(
      50% 144.19%,
      #ffffff 0%,
      #e1a4b9 7.58%,
      #c6537b 100%
    ) !important;
  }
  .ele-messageTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.ele-wrapper-messageText {
  .hm-bg-card {
    display: flex;
    flex-direction: column;
  }
}

.ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751 {
  width: 100%;
}

.ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58 {
  width: 100%;
}

.ele-wrapper-3a72f42e-dc59-431b-9a12-5719c8248610 {
  width: 100%;
}

.ele-wrapper-21c5606d-d727-4143-a4ce-026bb85006c1 {
  width: 100%;
  height: 56px;
}
</style>
