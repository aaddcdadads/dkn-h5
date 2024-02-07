<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-fc786e8b-a5f8-47d5-ba91-8f43a9fd88b9"
      >
        <scroll-list> </scroll-list>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import ScrollList from "/@/components/dkn-h-5/scroll-list/index.vue";

export default {
  name: "Test",
  components: {
    ScrollList,
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
