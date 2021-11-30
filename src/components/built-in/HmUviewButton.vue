<template>
  <view>
    <u-button
      class="button"
      @click="onClick"
      :size="size"
      :type="type"
      :plain="plain"
      :disabled="disabled"
      :shape="shape"
      :hair-line="hairLine"
      >{{ text }}</u-button
    >
  </view>
</template>

<script>
import uButton from 'uview-ui/components/u-button/u-button';
export default {
  name: "HmUviewButton",
  components: {
    uButton
  },
  props: {
    /**
     * 大小
     * @type Enum
     * @options ["default","medium","mini"]
     */
    size: {
      type: String,
      default: "default",
    },

    /**
     * 样式
     * @type Enum
     * @options ["default","primary","success","info","warning","error"]
     */
    type: {
      type: String,
      default: "default",
    },

    /**
     * 是否镂空，背景透明
     *
     */
    plain: {
      type: Boolean,
      default: false,
    },

    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * 形状
     * @type Enum
     * @default "square"
     * @options ["square","circle"]
     */
    shape: {
      type: String,
      default: "square",
    },

    /**
     * 文字
     */
    text: {
      type: String,
      default: "按钮",
    },

    /**
     * 是否显示按钮的细边框
     */
    hairLine: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      //buttonWdith:"200px";
      //console.log(buttonWdith);
    };
  },
  methods: {
    onClick(e) {
      console.log("e", e);
      this.$emit("e", e);
    },
  },
};
</script>

<style lang="less">
</style>
