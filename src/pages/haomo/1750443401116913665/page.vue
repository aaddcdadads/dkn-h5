<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          class="ele-c57e9abe-e655-4515-acc3-575489ca1e33"
        >
          <view
            class="ele-wrapper ele-wrapper-b70290a2-501d-46d6-a44e-63d06e016496"
          >
            <hm-uview-bg-card
              width="100%"
              height="50"
              box-shadow-blur=""
              box-shadow-color="#00000000"
              class="ele-b70290a2-501d-46d6-a44e-63d06e016496"
            >
              <view
                class="ele-wrapper ele-wrapper-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68"
              >
                <hm-uview-text
                  text="活动报名信息"
                  :text-style="{}"
                  class="ele-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68"
                >
                </hm-uview-text>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              :text-align="'center'"
              box-shadow-h-shadow=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-color="#F0F0F000"
              background-color="#F0F0F0"
              class="ele-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
            >
              <view
                class="ele-wrapper ele-wrapper-26f6f652-919b-4425-90f1-4ef8ee193d38"
              >
                <hm-uview-text
                  text="订单编号："
                  font-size="lem"
                  class="ele-26f6f652-919b-4425-90f1-4ef8ee193d38"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  :text-align="'center'"
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
                >
                  <view
                    class="ele-wrapper ele-wrapper-1834ad9d-20ec-47e9-aecf-bbac66366311"
                  >
                    <hm-input
                      value="默认初始值"
                      :maxlength="140"
                      :cursor="0"
                      :safe-password-length="10"
                      :safe-password-time-stamp="20"
                      class="ele-1834ad9d-20ec-47e9-aecf-bbac66366311"
                    >
                    </hm-input>
                  </view>
                </hm-uview-bg-card>
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
import HmInput from "/@/components/built-in/uniapp/HmInput.vue";

export default {
  name: "EventRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmInput,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "1834ad9d-20ec-47e9-aecf-bbac66366311": {
        value: "默认初始值",
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

.ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-b70290a2-501d-46d6-a44e-63d06e016496 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68 {
  margin-left: 28%;
}

.ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-26f6f652-919b-4425-90f1-4ef8ee193d38 {
  width: 80%;
  text-align: left;
}

.ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5 {
  width: 80%;
}

.ele-wrapper-1834ad9d-20ec-47e9-aecf-bbac66366311 {
  background-color: rgb(240, 240, 240);
  height: 35px;
  vertical-align: middle;
}
</style>
