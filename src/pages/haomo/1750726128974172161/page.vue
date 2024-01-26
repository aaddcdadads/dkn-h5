<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
        >
          <view class="ele-wrapper ele-wrapper-titlePrice">
            <hm-uview-bg-card
              ref="titlePrice"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-titlePrice"
            >
              <view
                class="ele-wrapper ele-wrapper-d5bbc53a-e10d-447f-ad1c-d820e1888444"
              >
                <hm-uview-text text="¥ 499.00" color="#F56C6C"> </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-9e72204c-af42-497a-9f74-447633df49ca"
              >
                <hm-uview-icon
                  name="clock"
                  color="#999999"
                  size="12px"
                  label="剩下时间 23:59:59"
                  label-size="12px"
                  label-color="#999999"
                >
                </hm-uview-icon>
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
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";

export default {
  name: "PaymentOrder",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewIcon,
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

.ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a {
  width: 100%;
  height: 100vh;
}

.ele-wrapper-titlePrice {
  width: 100%;
  .ele-titlePrice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
