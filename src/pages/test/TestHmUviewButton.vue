<template>
  <view>
    <hm-uview-button></hm-uview-button> <br />

    <hm-uview-button
      size="medium"
      type="success"
      :plain="true"
      :disabled="true"
      shape="circle"
      text="微信按钮"
    ></hm-uview-button>
  </view>
</template>

<script>
import HmUviewButton from "@/components/built-in/HmUviewButton.vue";

export default {
  components: { HmUviewButton },
};
</script>

<style lang="less">
</style>
