<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          class="ele-c57e9abe-e655-4515-acc3-575489ca1e33"
        >
          <view
            class="ele-wrapper ele-wrapper-a3bb82dc-69fc-433d-bbb0-5ddb9964155e"
          >
            <hm-icon :size="20"> </hm-icon>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmIcon from "/@/components/built-in/uniapp/HmIcon.vue";

export default {
  name: "EventRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmIcon,
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
