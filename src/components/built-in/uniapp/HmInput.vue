<template>
  <view class="uni-padding-wrap">
    <label class="input">
      <input
        :value="value"
        :type="type"
        :text-content-type="textContentType"
        :password="password"
        :placeholder="placeholder"
        :placeholder-style="placeholderStyle"
        :disabled="disabled"
        :maxlength="maxlength"
        :focus="focus"
        :confirm-type="confirmType"
        :confirm-hold="confirmHhold"
        :cursor="cursor"
        :adjust-position="adjustPosition"
        :hold-keyboard="holdKeyboard"
        :auto-blur="autoBlur"
        :safe-password-length="safePasswordLength"
        :safe-password-time-stamp="safePasswordTimeStamp"
        @focus="inputfocus"
        @input="input"
        @blur="blur"
        @confirm="confirm"
        @keyboardheightchange="keyboardheightchange"
      />
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmInput',
  props: {
    /**
     * 初始值
     */
    value: {
      type: String,
      default: '默认初始值',
    },
    /**
     * input 的类型
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * 自动填充
     */
    textContentType: {
      type: String,
      default: '111',
    },
    /**
     * 密码类型
     */
    password: {
      type: Boolean,
      default: false,
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * placeholder样式
     */
    placeholderStyle: {
      type: String,
      default: '',
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
      default: 140,
    },
    /**
     * 获取焦点
     */
    focus: {
      type: Boolean,
      default: false,
    },
    /**
     * 自动填充
     */
    confirmType: {
      type: String,
      default: 'done',
    },
    /**
     * 键盘不收起
     */
    confirmHhold: {
      type: Boolean,
      default: false,
    },
    /**
     * 光标位置
     */
    cursor: {
      type: Number,
      default: 0,
    },
    /**
     * 自动上推页面
     */
    adjustPosition: {
      type: Boolean,
      default: true,
    },
    /**
     * 不收起键盘
     */
    holdKeyboard: {
      type: Boolean,
      default: false,
    },

    /**
     * 自动失去焦点
     */
    autoBlur: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入密码长度
     */
    safePasswordLength: {
      type: Number,
      default: 10,
    },
    /**
     * 加密时间戳
     */
    safePasswordTimeStamp: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {}
  },
  methods: {
    inputfocus() {
      this.$emit('inputfocus')
    },
    input() {
      this.$emit('input')
    },
    blur() {
      this.$emit('blur')
    },
    confirm() {
      this.$emit('confirm')
    },
    keyboardheightchange() {
      this.$emit('keyboardheightchange')
    },
  },
}
</script>
