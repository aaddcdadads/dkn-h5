<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-b186075d-5075-4af4-b62d-99ae640fb900"
      >
        <package-number-component> </package-number-component>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import PackageNumberComponent from "/@/components/dkn-h-5/package-number-component/index.vue";

export default {
  name: "Test",
  components: {
    PackageNumberComponent,
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
</style>
