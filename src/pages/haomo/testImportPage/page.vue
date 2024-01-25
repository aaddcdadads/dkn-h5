<template>
  <view>
    <hm-uview-button @click="onClick"></hm-uview-button> <br />

    <hm-uview-button
      size="medium"
      type="success"
      :plain="true"
      :disabled="true"
      shape="circle"
      text="微信按钮"
      @click="onClick"
    ></hm-uview-button>
  </view>
</template>

<script>
import HmUviewButton from "@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  components: { HmUviewButton },
  methods: {
    onClick(e) {
      console.log("click", e);
    },
  },
};
</script>

<style lang="less">
</style>
