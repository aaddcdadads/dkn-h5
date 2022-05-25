<template>
  <u-field
    v-model="cValue"
    :label="label"
    :placeholder="placeholder"
    :icon="icon"
    :right-icon="rightIcon"
    :type="type"
    :clearable="clearable"
    :clear-size="clearSize"
    :border-top="borderTop"
    :border-bottom="borderBottom"
    :label-width="labelWidth"
    :label-align="labelAlign"
    :input-align="inputAlign"
    :maxlength="maxlength"
    :icon-color="iconColor"
    :password="password"
    :required="required"
    :focus="focus"
    :disabled="disabled"
    @input="onInput"
    @blur="onBlur"
    @focus="onFocus"
    ><slot></slot
  ></u-field>
</template>

<script>
// import uField from "uview-ui/components/u-field/u-field";

export default {
  components: {},
  name: "HmUviewField",
  props: {
    /**
     * 值
     * @v-model
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 输入框类型
     * @type Enum
     * @options ["text", "textarea"]
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * 标题
     */
    label: {
      type: String,
      default: "输入：",
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入",
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
     * 内容对齐方式
     * @type Enum
     * @options ["left", "center", "right"]
     */
    inputAlign: {
      type: String,
      default: "left",
    },
    /**
     * 输入最大长度
     */
    maxlength: {
      type: String,
      default: "140",
    },
    /**
     * 前缀图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "man",
    },
    /**
     * 前缀图标颜色
     * @type Color
     */
    iconColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 后缀图标
     * @type Icon
     */
    rightIcon: {
      type: String,
      default: "man",
    },
    /**
     * 清除图标
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * 清除图标大小
     */
    clearSize: {
      type: String,
      default: "30",
    },
    /**
     * 上边框
     */
    borderTop: {
      type: Boolean,
      default: false,
    },
    /**
     * 下边框
     */
    borderBottom: {
      type: Boolean,
      default: true,
    },

    /**
     * 密码输入
     */
    password: {
      type: Boolean,
      default: false,
    },
    /**
     * 必填
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * 自动获得焦点
     */
    focus: {
      type: Boolean,
      default: false,
    },

    /**
     * 不可输入
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 类型
     * @type Enum
     * @options ["text","textarea"]
     */
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    // cValue: {
    //   get() {
    //     return this.value;
    //   },
    //   set(val) {
    //     this.$emit("changeValue", val);
    //   },
    // },
  },
  data() {
    return {
      cValue: "",
    };
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
  },
  mounted() {
    this.cValue = this.value;
  },
  methods: {
    onBlur(e) {
      this.$emit("onBlur", e);
      console.log("onBlur", e);
    },
    onFocus(e) {
      this.$emit("onfocus", e);
      console.log("onfocus", e);
    },
    onInput: function (e) {
      this.$emit("update:value", e);
      this.$emit("after-input", e);
      //console.log("input: ", this.value, this.cValue);
    },
  },
};
</script>

<style>
.field-class {
}
</style>
