<template>
  <view class="field-class">
    <u-field
      v-model="cValue"
      :label="label"
      :placeholder="placeholder"
      :icon="icon"
      :right-icon="rightIcon"
      :type="type"
      :clearable="clearable"
      :border-top="borderTop"
      :border-bottom="borderBottom"
      :label-width="labelWidth"
      :input-align="inputAlign"
      :icon-color="iconColor"
      :required="required"
      :disabled="disabled"
      @input="onInput"
      ><slot></slot
    ></u-field>
  </view>
</template>

<script>
// import uField from "uview-ui/components/u-field/u-field";

export default {
  components: {},
  name: "HmUviewField",
  model: {
    prop: "value",
    event: "changeValue",
  },
  props: {
    /**
     * 值
     * @v-model
     */
    value: {
      type: String,
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
     * 标题对齐方式
     * @type Enum
     * @options ["left", "center", "right"]
     */
    labelWidth: {
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
    onInput: function (e) {
      this.$emit("update:value", e);
      this.$emit("onInput", e);
      //console.log("input: ", this.value, this.cValue);
    },
  },
};
</script>

<style>
.field-class {
}
</style>
