<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-ff006dbd-abf0-427a-9076-d34d31098de7"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-ff006dbd-abf0-427a-9076-d34d31098de7"
        >
          <view
            class="ele-wrapper ele-wrapper-4277c03e-3f10-4ac4-a323-2987eeb1c6a9"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-4277c03e-3f10-4ac4-a323-2987eeb1c6a9"
            >
              <view
                class="ele-wrapper ele-wrapper-5dd2074f-29d9-44b9-a829-c6b997d9652b"
              >
                <hm-uview-text
                  text="资料填写"
                  :text-style="{ fontWeight: 700 }"
                >
                </hm-uview-text>
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
  name: "RegistrationForm",
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

.ele-wrapper-ff006dbd-abf0-427a-9076-d34d31098de7 {
  width: 100%;
}

.ele-wrapper-4277c03e-3f10-4ac4-a323-2987eeb1c6a9 {
  width: 100%;
}
</style>
