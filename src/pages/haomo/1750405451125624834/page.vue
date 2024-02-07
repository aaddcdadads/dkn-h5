<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-b06d64c4-f458-43af-b486-f9fa892d1fa2"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          class="ele-b06d64c4-f458-43af-b486-f9fa892d1fa2"
        >
        </hm-uview-bg-card>
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

.ele-wrapper-b06d64c4-f458-43af-b486-f9fa892d1fa2 {
  width: 100%;
  height: 400px;
}
</style>
