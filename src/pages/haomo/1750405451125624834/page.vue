<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-3fc8887d-ebb4-48bd-b3e1-98e34169d622"
      >
        <hm-uview-bg-card> </hm-uview-bg-card>
      </view>
      <view
        class="ele-wrapper ele-wrapper-b6c2ba52-c586-491a-816b-a3168775e654"
      >
        <hm-uview-bg-card> </hm-uview-bg-card>
      </view>
      <view
        class="ele-wrapper ele-wrapper-b9d9dfe6-0b8c-4c3c-9c96-0495d6256c51"
      >
        <hm-uview-bg-card> </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";

export default {
  name: "Test",
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
</style>
