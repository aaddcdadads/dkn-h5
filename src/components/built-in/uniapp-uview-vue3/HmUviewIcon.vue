<template>
  <!-- #ifndef MP-WEIXIN -->
  <u-icon
    class="icon"
    :name="name"
    :color="color"
    :size="size"
    :label="label"
    :label-size="labelSize"
    :label-color="labelColor"
  ></u-icon>
	<!-- #endif -->
  <!-- #ifdef MP-WEIXIN -->
  <u-icon
    class="icon"
    :name="name"
    :color="color"
    :size="size"
    :label="label"
    :label-size="labelSize"
    :label-color="labelColor"
    @click="onClick"
  ></u-icon>
	<!-- #endif -->
</template>



<script>
// import uIcon from "uview-ui/components/u-icon/u-icon";

export default {
  components: {},
  name: "HmUviewIcon",
  props: {
    /**
     * 名称
     */
    name: {
      type: String,
      default: "photo",
    },

    /**
     * 图标颜色
     * @type Color
     */
    color: {
      type: String,
      default: "inherit",
    },

    /**
     * 大小
     */
    size: {
      type: String,
      default: "25px",
    },

    /**
     * 图标文字
     */
    label: {
      type: String,
      default: "文字",
    },

    /**
     * 图标文字大小
     */
    labelSize: {
      type: String,
      default: "14px",
    },

    /**
     * 图标文字颜色
     * @type Color
     */
    labelColor: {
      type: String,
      default: "#606266",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      //console.log("点击图标", e);
      this.$emit("click");
    },
  },
};
</script>

<style lang="less">
</style>
