<template>
  <view>
    <Hm-uview-icon></Hm-uview-icon>
    <Hm-uview-icon
      name="home"
      color="green"
      size="60"
      label="显示文字"
      labelSize="60"
      labelColor="green"
      @click="click"
    ></Hm-uview-icon>
  </view>
</template>

<script>
import HmUviewIcon from "@/components/built-in/HmUviewIcon.vue";

export default {
  components: { HmUviewIcon },
  methods: {
    click() {
      //console.log("点击父组件图标");
    },
  },
};
</script>

<style lang="less">
</style>
