<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-f998c382-3fdf-4f9b-8a8e-ca3f4fdaf113">
        <hm-uview-bg-card
          width="100%"
          height="100%"
          class="ele-f998c382-3fdf-4f9b-8a8e-ca3f4fdaf113">
        </hm-uview-bg-card>
      </view>
      <view><hm-back-top></hm-back-top></view>
      <view class="ele-wrapper ele-wrapper-aaa">
        <hm-back-top
          ref="aaa"
          :top="aaa.top"
          :bottom="aaa.bottom"
          :right="aaa.right"
          :z-index="aaa.zIndex"
          :custom-style="aaa.customStyle"
          :duration="aaa.duration"
          :scroll-top="aaa.scrollTop">
        </hm-back-top>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmBackTop from "/@/components/built-in/uniapp-uview-vue3/HmUviewBackTop.vue";

export default {
  name: "Testpage",
  components: {
    HmUviewBgCard,
    HmBackTop,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      aaa: {
        top: 520,
        bottom: 140,
        right: 36,
        zIndex: 9998,
        customStyle: {
          color: "red",
          background: "transparent",
        },
        duration: 500,
        scrollTop: 10,
      },
    };
  },
  watch: {},
  onPageScroll(e) {
    this.onOnPageScroll(e);
  },
  methods: {
   onOnPageScroll(e) {
      console.log("e", e, e.scrollTop);
      this.aaa.scrollTop = e.scrollTop;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-f998c382-3fdf-4f9b-8a8e-ca3f4fdaf113 {
  width: 100vw;
  height: 1800rpx;
}
</style>
