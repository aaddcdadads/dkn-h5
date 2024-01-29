<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-dbd7f3bd-da08-446b-beec-b1dc37f4621c"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          border-radius="0"
          padding="0"
          box-shadow-color="#00000000"
          class="ele-dbd7f3bd-da08-446b-beec-b1dc37f4621c"
        >
          <view
            class="ele-wrapper ele-wrapper-bcbf7300-899f-4a1e-b7d6-6afbc073f0eb"
          >
            <hm-uview-action-sheet
              :visible="true"
              :border-radius="0"
              :z-index="1075"
            >
            </hm-uview-action-sheet>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewActionSheet from "/@/components/built-in/uniapp-uview-vue3/HmUviewActionSheet.vue";

export default {
  name: "ActivetyView",
  components: {
    HmUviewBgCard,
    HmUviewActionSheet,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "bcbf7300-899f-4a1e-b7d6-6afbc073f0eb": {
        visible: true,
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

.ele-wrapper-dbd7f3bd-da08-446b-beec-b1dc37f4621c {
  width: 100%;
}
</style>
