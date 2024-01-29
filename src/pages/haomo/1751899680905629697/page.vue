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
            class="ele-wrapper ele-wrapper-84232644-133f-463c-b6ce-1d727f86aff6"
          >
            <hm-uview-modal :visible="true"> </hm-uview-modal>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewModal from "/@/components/built-in/uniapp-uview-vue3/HmUviewModal.vue";

export default {
  name: "ActivetyView",
  components: {
    HmUviewBgCard,
    HmUviewModal,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "84232644-133f-463c-b6ce-1d727f86aff6": {
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
