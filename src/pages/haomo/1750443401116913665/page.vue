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
          <view
            class="ele-wrapper ele-wrapper-4cc93495-0f38-4da7-898e-c8573db6c6a7"
          >
            <hm-uview-icon
              name="left"
              label=""
              class="ele-4cc93495-0f38-4da7-898e-c8573db6c6a7"
            >
            </hm-uview-icon>
          </view>
          <view
            class="ele-wrapper ele-wrapper-815e922a-f221-499a-95b7-5efffa64730c"
          >
            <hm-uview-text class="ele-815e922a-f221-499a-95b7-5efffa64730c">
            </hm-uview-text>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

export default {
  name: "EventRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
    HmUviewText,
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

.ele-wrapper-4cc93495-0f38-4da7-898e-c8573db6c6a7 {
  margin-left: 10px;
}

.ele-wrapper-815e922a-f221-499a-95b7-5efffa64730c {
  margin-left: 100px;
}
</style>
