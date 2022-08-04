<template>
  <button
    :size="size"
    :type="type"
    :plain="plain"
    :disabled="disabled"
    :shape="shape"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmButton",
  props: {
    /**
     * 大小
     * @type Enum
     * @options ["default","mini"]
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
     * 是否镂空
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
  },
  methods: {
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less">
</style>
