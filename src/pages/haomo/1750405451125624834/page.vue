<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-4ec22b24-aba6-4fa9-8493-da023b84bb8b"
      >
        <u-radio> </u-radio>
      </view>
      <view
        class="ele-wrapper ele-wrapper-d370b280-5a31-4f73-ad3f-84f77964c9d3"
      >
        <hm-uview-radio value=""> </hm-uview-radio>
      </view>
      <view
        class="ele-wrapper ele-wrapper-cd19b0bd-38a8-46fe-904f-e40310103545"
      >
        <u-radio-group value="" size="" icon-size=""> </u-radio-group>
      </view>
      <view
        class="ele-wrapper ele-wrapper-c557f40f-b1c1-4ee3-8328-af9f6ce8c51a"
      >
        <u-radio> </u-radio>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewRadio from "/@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";

export default {
  name: "Test",
  components: {
    HmUviewRadio,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "d370b280-5a31-4f73-ad3f-84f77964c9d3": {
        value: "",
      },
      "cd19b0bd-38a8-46fe-904f-e40310103545": {
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
</style>
