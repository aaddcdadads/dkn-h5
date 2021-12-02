<template>
  <view>
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
  </view>
</template>

<script>
import uIcon from "uview-ui/components/u-icon/u-icon";

export default {
  components: {
    uIcon,
  },
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
     */
    color: {
      type: String,
      default: "inherit",
    },

    /**
     * 大小
     */
    size: {
      type: [String, Number],
      default: 50,
    },

    /**
     * 图标右侧/下方文字
     */
    label: {
      type: String,
      default: "文字",
    },

    /**
     * 图标文字大小
     */
    labelSize: {
      type: [String, Number],
      default: 28,
    },

    /**
     * 图标文字颜色
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
      console.log("点击图标", e);
      this.$emit("e");
    },
  },
};
</script>

<style lang="less">
</style>
