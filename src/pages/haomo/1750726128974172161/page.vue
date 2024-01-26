<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
        >
          <view
            class="ele-wrapper ele-wrapper-7e13b692-9cc2-4862-bad0-cf3303afbbaa"
          >
            <hm-uview-bg-card> </hm-uview-bg-card>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";

export default {
  name: "PaymentOrder",
  components: {
    HmUviewBgCard,
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

.ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a {
  width: 100%;
  height: 100vh;
}
</style>
