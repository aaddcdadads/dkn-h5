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
                <event-registration-information-card>
                </event-registration-information-card>
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

export default {
  name: "NewActivityRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewImage,
    EventRegistrationInformationCard,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {};
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
</style>
