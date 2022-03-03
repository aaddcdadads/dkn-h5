<template>
  <view class="tag-item-box">
    <view class="tag-item" v-for="(item, index) in cRadios" :key="index">
      <u-tag
        :text="item.text"
        :name="index"
        :bgColor="bgColor"
        :color="color"
        :class="[{ highBigBox: index == activeindex }]"
        @click="radioClick(item, index)"
      >
      </u-tag>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 间距
     */
    space: {
      type: String,
      default: "12px",
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 变化背景颜色
     * @type Color
     */
    highBgColor: {
      type: String,
      default: "rgb(255,255,0)",
    },
    /**
     * 变化文字颜色
     * @type Color
     */
    highColor: {
      type: String,
      default: "rgb(255,0,0)",
    },
    /**
     * 字体颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#000000",
    },
    /**
     * 数据项
     */
    radios: {
      type: Object,
      default: function () {
        return [
          {
            text: "123345677",
            checked: true,
          },
          {
            text: "124",
            checked: false,
          },
          {
            text: "125",
            checked: false,
          },
        ];
      },
    },
  },
  watch: {
    radios(value) {
      this.cRadios = value;
    },
    space(value) {
      this.spacing = this.getCssUnit(value);
    },
    highBgColor(value) {
      this.HighBgColor = value;
    },
    highColor(value) {
      this.HighColor = value;
    },
  },
  mounted() {
    this.cRadios = this.radios;
    this.HighBgColor = this.highBgColor;
    this.HighColor = this.highColor;
    this.spacing = this.getCssUnit(this.space);
  },
  data() {
    return {
      HighColor: "",
      HighBgColor:"",
      spacing: "",
      activeindex: null,
      cRadios: [],
      ind: -1,
    };
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    radioClick(e, index) {
      this.$emit("click", e, index);
      if (this.ind === index) {
        this.activeindex = null;
        this.ind = false;
      } else {
        this.activeindex = index;
        this.ind = index;
      }
    },
  },
};
</script>
<style lang="less">
.tag-item-box {
  display: flex;
  flex-direction: row;
}
.tag-item {
  margin-right: v-bind(spacing);
  display: inline-block;
}
.tag-item:last-child {
  margin-right: 0px;
  display: inline-block;
}
.tag-item /deep/ .u-mode-light-primary {
  border: none;
}
.highBigBox {
  background-color: v-bind(HighBgColor) !important;
  color: v-bind(HighColor) !important;
}
</style>