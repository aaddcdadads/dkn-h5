<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-e006ab79-f3a9-492b-8632-73042a091b41"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          border-radius="0"
          border-color="#FFFFFF00"
          box-shadow-color="#00000000"
          background-color="#FFFFFF00"
          class="ele-e006ab79-f3a9-492b-8632-73042a091b41"
        >
          <view
            class="ele-wrapper ele-wrapper-7a7c276a-b44b-4a63-a217-cb223a5e0e12"
          >
            <hm-uview-bg-card> </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c"
          >
            <hm-uview-bg-card
              width="100%"
              height=""
              border-radius="0"
              class="ele-084fc45c-3b7d-42af-9042-8c47c465787c"
            >
              <view
                class="ele-wrapper ele-wrapper-33585d75-6c6b-4206-8dae-be7a7a85b0b5"
              >
                <hm-uview-text
                  text="分享给好友"
                  class="ele-33585d75-6c6b-4206-8dae-be7a7a85b0b5"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-b77e13cf-06a4-485e-b888-553da6af42bc"
              >
                <hm-uview-bg-card width="100" height="100"> </hm-uview-bg-card>
              </view>
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
  name: "SharingPage",
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

.ele-wrapper-e006ab79-f3a9-492b-8632-73042a091b41 {
  width: 100%;
  position: relative;
}

.ele-wrapper-084fc45c-3b7d-42af-9042-8c47c465787c {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.ele-wrapper-33585d75-6c6b-4206-8dae-be7a7a85b0b5 {
  flex-shrink: 0;
}
</style>
