<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-df164ee6-d788-4ffb-81ec-3b7b59c75a7b"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          class="ele-df164ee6-d788-4ffb-81ec-3b7b59c75a7b"
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
  name: "VerificationConfirmation",
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

.ele-wrapper-df164ee6-d788-4ffb-81ec-3b7b59c75a7b {
  width: 100%;
}
</style>
