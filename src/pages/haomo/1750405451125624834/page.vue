<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-aa0fdda1-0ce4-447f-8bd9-807c52416ed6"
      >
        <information-input-box value=""> </information-input-box>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";

export default {
  name: "Test",
  components: {
    InformationInputBox,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "aa0fdda1-0ce4-447f-8bd9-807c52416ed6": {
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
</style>
