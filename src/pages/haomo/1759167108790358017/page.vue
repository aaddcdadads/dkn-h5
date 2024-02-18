<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-f52b72b4-3caa-4c7f-a248-b21ee1771c92"
      >
        <share-page> </share-page>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import SharePage from "/@/components/dkn-h-5/share-page/index.vue";

export default {
  name: "SharePageNew",
  components: {
    SharePage,
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
