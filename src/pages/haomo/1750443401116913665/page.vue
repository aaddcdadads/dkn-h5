<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33"
      >
        <hm-uview-bg-card
          width="100%"
          height="50"
          class="ele-c57e9abe-e655-4515-acc3-575489ca1e33"
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
  name: "EventRegistrationInformation",
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

.ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33 {
  width: 100%;
  height: 100%;
}
</style>
