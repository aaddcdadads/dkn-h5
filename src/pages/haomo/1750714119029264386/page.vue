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
              padding="0"
              box-shadow-color="#00000000"
              class="ele-topBg"
            >
              <view
                class="ele-wrapper ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe"
              >
                <hm-uview-icon
                  color="#FFFFFF"
                  size="24px"
                  label="规则"
                  label-color="#FFFFFF"
                  class="ele-0abf4877-51bc-431d-8f1a-3c043bc451fe"
                >
                </hm-uview-icon>
              </view>
              <view
                class="ele-wrapper ele-wrapper-2c1dfe8c-9e2c-455e-855a-804561cd1c89"
              >
                <hm-icon :size="20"> </hm-icon>
              </view>
              <view
                class="ele-wrapper ele-wrapper-0a6ee755-e243-435b-8282-67789709dd73"
              >
                <icon> </icon>
              </view>
              <view
                class="ele-wrapper ele-wrapper-e9f3646c-2f2d-48f3-9ef8-b622bde1df67"
              >
                <uni-icons> </uni-icons>
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
import HmIcon from "/@/components/built-in/uniapp/HmIcon.vue";

export default {
  name: "ActivityRegistrationPage",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
    HmIcon,
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
}
</style>
