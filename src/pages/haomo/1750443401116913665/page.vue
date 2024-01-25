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
            class="ele-wrapper ele-wrapper-b70290a2-501d-46d6-a44e-63d06e016496"
          >
            <hm-uview-bg-card
              width="100%"
              height="50"
              class="ele-b70290a2-501d-46d6-a44e-63d06e016496"
            >
              <view
                class="ele-wrapper ele-wrapper-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68"
              >
                <hm-uview-text
                  text="活动报名信息"
                  class="ele-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68"
                >
                </hm-uview-text>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              box-shadow-color="#F0F0F0"
              class="ele-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
            >
            </hm-uview-bg-card>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

export default {
  name: "EventRegistrationInformation",
  components: {
    HmUviewBgCard,
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

.ele-wrapper-b70290a2-501d-46d6-a44e-63d06e016496 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-51e40d97-b1a2-45a7-b1b6-7d182e2d5e68 {
  margin-left: 28%;
}

.ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2 {
  width: 100%;
  height: 100%;
}
</style>
