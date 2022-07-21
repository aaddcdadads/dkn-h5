<template>
  <view>
    <text class="font1" @click="onClick">
      {{ text }}
    </text>
  </view>
</template>
<script>
export default {
  data() {
    return {
      cFontSize: "24px",
      cColor: "rgba(0,0,0,1)",
    };
  },
  components: {},
  name: "HmUviewText",
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
      default: "24px",
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "rgba(0,0,0,1)",
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
      this.color = value;
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
