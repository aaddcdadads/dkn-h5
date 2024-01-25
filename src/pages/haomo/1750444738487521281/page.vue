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
            class="ele-wrapper ele-wrapper-e4e2b49b-b097-4a65-a356-d9d95daa618b"
          >
            <hm-uview-text text="资料填写" :text-style="{ fontWeight: 700 }">
            </hm-uview-text>
          </view>
          <view
            class="ele-wrapper ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-spread=""
              class="ele-7927eb64-d6cf-4dda-8938-a15bb62187d2"
            >
              <view
                class="ele-wrapper ele-wrapper-37f4c2a6-8b23-4459-bbbe-1b24e423d813"
              >
                <hm-uview-field value="" label="" label-width="">
                </hm-uview-field>
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
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";

export default {
  name: "RegistrationForm",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewField,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "37f4c2a6-8b23-4459-bbbe-1b24e423d813": {
        value: "",
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

.ele-wrapper-ff006dbd-abf0-427a-9076-d34d31098de7 {
  width: 100%;
}

.ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2 {
  width: 100%;
}
</style>
