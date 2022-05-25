<template>
    <view :class="{
        uField: borderColor,
      }">
        <u-field
            v-model="cValue"
            :label="label"
            :label-width="labelWidth"
            :label-align="labelAlign"
            :placeholder="placeholder"
            :placeholder-style="placeholderStyle"
            :icon="icon"
            :right-icon="rightIcon"
            :type="type"
            :clearable="clearable"
            :clear-size="clearSize"
            :border-top="borderTop"
            :border-bottom="borderBottom"
            :input-align="inputAlign"
            :maxlength="maxlength"
            :icon-color="iconColor"
            :password="password"
            :required="required"
            :focus="focus"
            :fixed="fixed"
            :disabled="disabled"
            @input="onInput"
            @blur="onBlur"
            @focus="onFocus"
            ><slot></slot
        ></u-field>
    </view>
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
     * 提示文字样式
     */
    placeholderStyle: {
      type: String,
      default: ''
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
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: '',
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
     * 组件在position:fixed定位需指明true
     */
    fixed: {
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
      cBorderColor:'',
    };
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
    borderColor(val) {
      this.cBorderColor = val;
    },
  },
  mounted() {
    this.cValue = this.value;
    this.cBorderColor = this.borderColor;
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

<style lang="less">
.uField {
    .u-border-top {
        border-top: 1px solid ;
        border-top-color: v-bind(cBorderColor);
    };
    .u-border-right {
        border-right: 1px solid ;
        border-right-color: v-bind(cBorderColor);

    };
    .u-border-bottom {
        border-bottom: 1px solid ;
        border-bottom-color: v-bind(cBorderColor);
    };
    .u-border-left {
        border-left: 1px solid ;
        border-left-color: v-bind(cBorderColor);
    };
}


</style>
