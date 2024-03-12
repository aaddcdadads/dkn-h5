<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-d0d10e22-b044-4597-a920-0b42ccc9a357"
      >
        <package-number-component
          class="ele-d0d10e22-b044-4597-a920-0b42ccc9a357"
        >
        </package-number-component>
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

.ele-wrapper-d0d10e22-b044-4597-a920-0b42ccc9a357 {
  width: 100%;
  /deep/.uni-input-input {
    font-size: 14px !important;
  }
}
</style>
