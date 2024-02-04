<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"
        >
          <view
            class="ele-wrapper ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3"
          >
            <hm-loop
              :value="[]"
              class="ele-3d5cca18-be80-4c03-83e5-d43ea90a2db3"
            >
            </hm-loop>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";

export default {
  name: "NewVerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmLoop,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "3d5cca18-be80-4c03-83e5-d43ea90a2db3": {
        value: [],
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

.ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7 {
  width: 100%;
}

.ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3 {
  width: 100%;
}
</style>
