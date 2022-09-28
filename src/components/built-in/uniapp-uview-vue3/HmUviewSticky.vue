<template>
  <u-sticky 
  :offset-top="offsetTop" 
  :h5-nav-height="customNavHeight" 
  :enable="enable" 
  :bg-color="bgColor"
  :z-index="zIndex">
    <slot name="stickyDiv">
    </slot>
  </u-sticky>
</template>
<script>
export default {
  name:"HmUviewSticky",
  props: {
    /**
     * 吸顶距离rpx
     */
    offsetTop: {
      type: String,
      default: "0"
    },
    /**
     * 导航栏高度
     */
    customNavHeight: {
      type: String,
      default: "0"
    },
    /**
     * 是否开启吸顶
     */
     enable: {
      type: Boolean,
      default: true
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 吸顶层级
     */
    zIndex: {
      type: String,
      default: "1"
    }
  }
}
</script>
<style lang="less" scoped>
</style>