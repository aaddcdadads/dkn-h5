<template>
  <view class="countDown">
    <u-field
      class="inputBox"
      :label="label"
      :label-width="labelWidth"
      :label-align="labelAlign"
      :placeholder="placeholder"
      type="text"
      v-model="cValue"
      :maxlength="maxlength"
      :required="required"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @confirm="onConfirm"
      @keyboardheightchange="onKeyboard"
      ><slot></slot
    ></u-field>
    <button type="text" class="btnBox" @click="btnState != 2 && getClick()">
      <text decode="decode" v-if="btnState == 1">获取验证码</text>
      <u-count-down
        v-if="btnState == 2"
        class="countBox"
        :timestamp="timestamp"
        :autoStart="autoStart"
        :format="format"
        @change="timeChange"
      ></u-count-down>
      <text decode="decode" v-if="btnState == 3">重新获取</text>
    </button>
  </view>
</template>
<script>
export default {
  name: "HmUviewCountDownInput",
  props: {
    /**
     * 标题
     */
    label: {
      type: String,
      default: "验证码:",
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: String,
      default: "130",
    },
    /**
     * 标题对齐方式
     * @type Enum
     * @options ["left", "center", "right"]
     */
    labelAlign: {
      type: String,
      default: "left",
    },
    /**
     * 值
     * @v-model
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入验证码",
    },
    /**
     * 最大长度
     */
    maxlength: {
      type: Number,
      default: 4,
    },
    /**
     * 字体大小
     */
    size: {
      type: String,
      default: "14px",
    },
    /**
     * 必填
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * 倒计时
     */
    timestamp: {
      type: Number,
      default: 60000,
    },
    /**
     * 颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#000000",
    },
    /**
     * 自动倒计时
     */
    autoStart: {
      type: Boolean,
      default: true,
    },
    /**
     * 时间格式
     */
    format: {
      type: String,
      default: "ss",
    },
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
    size(val) {
      this.fontSize = val;
    },
    color(val) {
      this.fontColor = val;
    },
  },
  mounted() {
    this.cValue = this.value;
    this.fontSize = this.size;
    this.fontColor = this.color;
  },
  data() {
    return {
      cValue: "",
      fontSize: "",
      fontColor: "",
      btnState: 1,
    };
  },
  methods: {
    onInput: function (event) {
      this.$emit("onInput", event);
      console.log("当键盘输入时，触发事件", event);
    },
    onFocus: function (event) {
      this.$emit("onFocus", event);
      console.log("输入框聚焦时触发", event);
    },
    onBlur: function (event) {
      this.$emit("onBlur", event);
      console.log("输入框失去焦点时触发", event);
    },
    onConfirm: function (event) {
      this.$emit("onConfirm", event);
      console.log("点击完成按钮时触发", event);
    },
    onKeyboard: function (event) {
      this.$emit("onKeyboard", event);
      console.log("键盘高度发生变化的时候触发此事件", event);
    },
    //组件内部事件
    getClick: function () {
      console.log("获取验证码/重新获取", this.btnState);
      this.btnState = 2;
    },
    timeChange: function (timestamp) {
      let ss = timestamp.seconds;
      if (ss == "01") {
        this.btnState = 3;
      }
    },
  },
};
</script>
<style scoped>
.countDown {
  height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.inputBox,
.btnBox {
  display: flex;
  height: 100%;
  align-items: center;
}
.titleBox {
  width: 16%;
  min-width: 80px;
  font-size: v-bind(fontSize);
}
.inputBox {
  width: 60%;
}
.btnBox {
  width: 24%;
  min-width: 120px;
  line-height: 22px;
}
.btnBox {
  justify-content: center;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
}
</style>