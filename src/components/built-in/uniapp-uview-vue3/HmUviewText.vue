<template>
  <view
    class="hm-bg-text"
    :style="[
      textStyle,
      {
        padding: cpadding,
        textAlign: ctextalign,
        fontSize: cfontsize,
        color: ccolor,
        backgroundColor: cBgColor,
      },
    ]"
  >
    <text class="font1" @click="onClick" v-if="showHtml" v-html="text"> </text>
    <text class="font1" @click="onClick" v-if="!showHtml">{{ text }}</text>
  </view>
</template>

<script>
/**
 * 文字
 */
export default {
  name: "HmUviewText",
  components: {},
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
      default: "20px",
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
     * 文字背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "rgba(255,255,255,1)",
    },
    /**
     * 对齐
     * @type Enum
     * @options ["left", "center", "right"]
     */
    textAlign: {
      type: String,
      default: "center",
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5",
    },
    /**
     * html模式
     */
    showHtml: {
      type: Boolean,
      default: false,
    },
    /**
     * 文字样式
     */
    textStyle: {
      type: Object,
      default: function () {
        return {
        };
      },
    },
  },
  data() {
    return {
      cPadding: "5px",
      cTextAlign: "left",
      cFontSize: "18px",
      cColor: "rgba(0,0,0,1)",
      cBgColor: "rgba(255,255,255,1)",
    };
  },
  watch: {
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    fontSize(value) {
      this.cFontSize = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    color(value) {
      this.cColor = value;
    },
    bgColor(value) {
      this.cBgColor = value;
    },
  },
  computed: {},
  mounted() {
    this.cPadding = this.getCssUnit(this.padding);
    this.cFontSize = this.getCssUnit(this.fontSize);
    this.cTextAlign = this.textAlign;
    this.cColor = this.color;
    this.cBgColor = this.bgColor;
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
};
</script>

<style lang="less">
.hm-bg-text {
  display: inline-flex;
}
.font1 {
}
</style>