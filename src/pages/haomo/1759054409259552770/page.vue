<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-680618cc-bd18-4977-823b-01b21033f705"
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
  name: "TestSharePage",
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
