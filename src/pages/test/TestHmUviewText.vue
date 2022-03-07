<template>
  <view>
    <Hm-uview-text style="margin-left: 50px"></Hm-uview-text>
    <Hm-uview-text
      text="aa"
      fontSize="26px"
      color="red"
      textAlign="right"
      padding="10"
      style="margin-left: 50px"
      @onClick="click"
    ></Hm-uview-text>
  </view>
</template>

<script>
import HmUviewText from "@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

export default {
  components: { HmUviewText },
  methods: {
    click() {
      console.log("aas");
    },
  },
};
</script>

<style lang="less">
</style>
