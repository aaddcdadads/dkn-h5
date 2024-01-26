<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-6b016e0e-a5f1-4300-b1e0-0c13b00f4094"
      >
        <event-registration-card> </event-registration-card>
      </view>
      <view
        class="ele-wrapper ele-wrapper-3db7938d-bfde-4dab-8407-1f4c36196318"
      >
        <prize-list-component class="ele-3db7938d-bfde-4dab-8407-1f4c36196318">
        </prize-list-component>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import EventRegistrationCard from "/@/components/dkn-h-5/event-registration-card/index.vue";
import PrizeListComponent from "/@/components/dkn-h-5/prize-list-component/index.vue";

export default {
  name: "Test",
  components: {
    EventRegistrationCard,
    PrizeListComponent,
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

.ele-wrapper-3db7938d-bfde-4dab-8407-1f4c36196318 {
  position: relative;
}
</style>
