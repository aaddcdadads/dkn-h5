<template>
  <view class="HmUniappRate">
    <text v-if="cLabel" class="HmUniappRate-label" :style="cLabelStyle" decode>{{ cLabel }}</text>
    <uni-rate
      v-model="cValue"
      class="HmUniappRate-rate"
      :allowHalf="allowHalf"
      :color="color"
      :activeColor="activeColor"
      :size="size"
      :max="max"
      :margin="margin"
      :readonly="readonly"
      :disabledColor="disabledColor"
      :disabled="disabled"
      :isFill="isFill"
      :touchable="touchable"
      @change="rateChange"
    />
    <text v-if="cDisplayText.show" class="HmUniappRate-text" :style="cDisplayText.style" decode>{{cValue}}分</text>
  </view>
</template>
<script>
export default {
  name: "HmUniappRate",
  props: {
    /**
     * 评分
     */
    value: {
      type: Number,
      default: 3.5,
    },
    /**
     * 标题
     */
    label: {
      type: String,
      default: "评分",
    },
    /**
     * 是否展示半星
     */
    allowHalf: {
      type: Boolean,
      default: true,
    },
    /**
     * 星星的大小
     */
    size: {
      type: Number,
      default: 24,
    },
    /**
     * 最大评分
     */
    max: {
      type: Number,
      default: 5,
    },
    /**
     * 星星间距px
     */
    margin: {
      type: Number,
      default: 0,
    },
    /**
     * 只读状态
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * 未选中状态
     * @type Color
     */
    color: {
      type: String,
      default: "#ececec",
    },
    /**
     * 选中状态
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#F37931",
    },
    /**
     * 禁用状态
     * @type Color
     */
    disabledColor: {
      type: String,
      default: "#ffca3e",
    },
    /**
     * 禁用状态
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否实心类型
     */
    isFill: {
      type: Boolean,
      default: true,
    },
    /**
     * 支持手势滑动
     */
    touchable: {
      type: Boolean,
      default: true,
    },
    /**
     * 标题样式
     */
    labelStyle: {
      type: Object,
      default: function () {
        return {
          width:'80rpx',
          textAlign:'center',
          fontFamily: "PingFangSC-Regular",
          fontSize: "14px",
          color: "#838395",
          letterSpacing: "0",
          fontWeight: "400",
        };
      },
    },
    /**
     * 展示文字
     */
    displayText: {
      type: Object,
      default: function () {
        return {
          show: true,
          style: {
            fontFamily: "PingFangSC-Regular",
            fontSize: "14px",
            color: "#F37931",
            letterSpacing: "0",
            fontWeight: "500",
          },
        };
      },
    },
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
    label(val) {
      this.cLabel = val;
    },
    labelStyle(val) {
      this.cLabelStyle = val;
    },
    displayText(val) {
      this.cDisplayText = val;
    },
  },
  mounted() {
    this.cValue = this.value;
    this.cLabel = this.label;
    this.cLabelStyle = this.labelStyle;
    this.cDisplayText = this.displayText;
  },
  data() {
    return {
      cValue: 0,
      cLabel: "",
      cLabelStyle: {},
      cDisplayText: {
      },
    };
  },
  methods: {
    rateChange(e) {
      this.$emit("rateChange", e);
      this.$emit("update:value", e.value)
    },
    getRateValue(){
      return this.cValue;
    }
  },
};
</script>
<style lang="less" scoped>
.HmUniappRate {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &-label,&-text{
    width:auto;
    display: flex;
    flex-shrink: 0;
  }
  &-rate{
    // 无效样式[宽度为0px，则不显示]
    /deep/ .uni-rate__icon-on[width='0px']{
      display: none;
    }
    // 修改图标
    /deep/ .uniui-star-filled:before{
      content: "\e68f";
    }
  }
}
</style>