<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-outsideBg">
        <hm-uview-bg-card
          ref="outsideBg"
          width="100%"
          height=""
          border-radius="0"
          padding="0"
          box-shadow-color="#00000000"
          class="ele-outsideBg"
        >
          <view class="ele-wrapper ele-wrapper-topBg">
            <hm-uview-bg-card
              ref="topBg"
              width="100%"
              height=""
              border-radius="0"
              padding="12"
              box-shadow-v-shadow="0"
              box-shadow-blur="0"
              box-shadow-color="#00000000"
              class="ele-topBg"
            >
              <view
                class="ele-wrapper ele-wrapper-0282e97e-ea2c-4315-bc0a-d39389246b17"
              >
                <u-switch :size="50" :modelValue="false"> </u-switch>
              </view>
              <view
                class="ele-wrapper ele-wrapper-21da4593-f584-4182-9c69-9e9024dab694"
              >
                <switch :type="'checkbox'"> </switch>
              </view>
              <view
                class="ele-wrapper ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe"
              >
                <hm-uview-icon
                  name="question-circle"
                  color="#FFFFFF"
                  size="20px"
                  label="规则"
                  label-color="#FFFFFF"
                  class="ele-0abf4877-51bc-431d-8f1a-3c043bc451fe"
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

export default {
  name: "ActivityRegistrationPage",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "0282e97e-ea2c-4315-bc0a-d39389246b17": {
        modelValue: false,
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

.ele-wrapper-outsideBg {
  width: 100%;
}

.ele-wrapper-topBg {
  width: 100%;
}

.ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe {
  background: rgba(0, 0, 0, 0.16);
  border-radius: 608rpx;
  float: right;
  width: 160rpx;
  text-align: center;
  padding-top: 8rpx;
  margin-right: 24rpx;
}
</style>
