<template>
  <text
    class="font1"
    @click="onClick"
    :selectable="selectable"
    :userSelect="userSelect"
    :space="space"
    :decode="decode"
  >
    {{ text }}
  </text>
</template>
<script>
export default {
  data() {
    return {
      cFontSize: "14px",
      cColor: "rgba(0,0,0,1)",
    };
  },
  components: {},
  name: "HmText",
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "文字",
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: String,
      default: ".32rem",
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "rgba(0,0,0,1)",
    },
    /**
     * 文本是否可选
     */
    selectable: {
      type: Boolean,
      default: false,
    },
    /**
     * 文本是否可选
     */
    userSelect: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示连续空格
     */
    space: {
      type: String,
      default: "&nbsp",
    },
    /**
     * 是否解码
     */
    decode: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // this.cFontSize = this.getCssUnit(this.fontSize);
    this.cColor = this.color;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick() {
      this.$emit("onClick");
    },
  },
  watch: {
    fontSize(value) {
      this.cFontSize = this.getCssUnit(value);
    },
    color(value) {
      this.cColor = value;
    },
  },
};
</script>
<style lang="less">
.font1 {
  font-size: v-bind(cFontSize);
  color: v-bind(cColor);
}
</style>
