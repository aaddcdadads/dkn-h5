<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-1489aac3-c520-426d-93db-6425e17438a3"
      >
        <information-input-box value=""> </information-input-box>
      </view>
      <view
        class="ele-wrapper ele-wrapper-9bd1715e-57b0-42d2-924b-0ac1a000960b"
      >
        <store-selection> </store-selection>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import StoreSelection from "/@/components/dkn-h-5/store-selection/index.vue";

export default {
  name: "Test",
  components: {
    InformationInputBox,
    StoreSelection,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "1489aac3-c520-426d-93db-6425e17438a3": {
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
