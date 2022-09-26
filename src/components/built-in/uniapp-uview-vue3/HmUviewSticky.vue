<template>
    <u-sticky :offsetTop="offsetTop" :customNavHeight="customNavHeight" :disabled="disabled" :bgColor="bgColor"
      :zIndex="zIndex">
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
       * 是否禁用吸顶
       */
      disabled: {
        type: Boolean,
        default: false
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
  <style scoped>
  
  </style>