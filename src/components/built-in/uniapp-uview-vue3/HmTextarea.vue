<template>
  <textarea
    :value="value"
    :placeholder-style="placeholderStyle"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    :focus="focus"
    :auto-height="autoHeight"
    :fixed="fixed"
    :cursor-spacing="cursorSpacing"
    :cursor="cursor"
    :confirm-type="confirmType"
    :confirm-hold="confirmHold"
    :show-confirm-bar="showConfirmBar"
    :selection-start="selectionStart"
    :selection-end="selectionEnd"
    :adjust-position="adjustPosition"
    :disable-default-padding="disableDefaultPadding"
    :hold-keyboard="holdKeyboard"
    @blur="bindTextAreaBlur"
    @linechange="linechange"
  />
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmTextarea",
  props: {
    /**
     * 输入框的内容
     */
    value: {
      type: String,
      default: "请输入",
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: "输入框",
    },
    /**
     * 指定placeholder样式
     */
    placeholderStyle: {
      type: String,
      default: "color:#F76260",
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 最大输入长度
     */
    maxlength: {
      type: Number,
      default: 50,
    },
    /**
     * 获取焦点
     */
    focus: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否自动增高
     */
    autoHeight: {
      type: Boolean,
      default: false,
    },
    /**
     * 固定位置
     */
    fixed: {
      type: Boolean,
      default: false,
    },
    /**
     * 光标键盘距离
     */
    cursorSpacing: {
      type: Number,
      default: 0,
    },
    /**
     * 指定focus光标位置
     */
    cursor: {
      type: Number,
      default: 0,
    },
    /**
     * 右下按钮文字
     * @type Enum
     * @options ["send","search","next","go","done"]
     */
    confirmType: {
      type: String,
      default: "done",
    },
    /**
     * 右下按钮不收起
     */
    confirmHold: {
      type: Boolean,
      default: false,
    },
    /**
     * 键盘完成按钮
     */
    showConfirmBar: {
      type: Boolean,
      default: true,
    },
    /**
     * 光标起始位置
     */
    selectionStart: {
      type: Number,
      default: -1,
    },
    /**
     * 光标结束位置
     */
    selectionEnd: {
      type: Number,
      default: -1,
    },
    /**
     * 是否自动上推页面
     */
    adjustPosition: {
      type: Boolean,
      default: true,
    },
    /**
     * iOS默认内边距
     */
    disableDefaultPadding: {
      type: Boolean,
      default: false,
    },
    /**
     * focus时点击页面不收起键盘
     */
    holdKeyboard: {
      type: Boolean,
      default: false,
    },
  },
  watch: {},
  mounted() {},
  methods: {
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
    },
    linechange: function (event) {
      console.log((event.detail = { height: 0, heightRpx: 0, lineCount: 0 }));
    },
  },
};
</script>
<style lang="less">
</style>
