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
                class="ele-wrapper ele-wrapper-85bcbbb6-3c95-4274-ba0b-9936996ea007"
              >
                <hm-uview-switch> </hm-uview-switch>
              </view>
              <view
                class="ele-wrapper ele-wrapper-b2850fcb-943d-4aa4-8434-c88871b74e31"
              >
                <hm-switch> </hm-switch>
              </view>
              <view
                class="ele-wrapper ele-wrapper-6bdaccb8-98b3-4ff2-9f34-e18ef1a89397"
              >
                <u-switch :size="50" :modelValue="false"> </u-switch>
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
import HmUviewSwitch from "/@/components/built-in/uniapp-uview-vue3/HmUviewSwitch.vue";
import HmSwitch from "/@/components/built-in/uniapp/HmSwitch.vue";

export default {
  name: "ActivityRegistrationPage",
  components: {
    HmUviewBgCard,
    HmUviewSwitch,
    HmSwitch,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "6bdaccb8-98b3-4ff2-9f34-e18ef1a89397": {
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
</style>
