<template>
  <view :style="{ backgroundColor: backgroundColor }">
    <u-search
      v-model="cValue"
      :height="height"
      :shape="shape"
      :bg-color="bgColor"
      :border-color="borderColor"
      :placeholder="placeholder"
      :clearabled="clearabled"
      :focus="focus"
      :show-action="showAction"
      :action-text="actionText"
      :action-style="actionStyle"
      :input-align="inputAlign"
      :disabled="disabled"
      :search-icon-color="searchIconColor"
      :search-icon="leftIcon"
      @change="onChange"
      @search="onSearch"
      @custom="onCustom"
      @blur="onBlur"
      @focus="onFocus"
      @clear="onClear"
      @click="onClick"
    ></u-search>
  </view>
</template>

<script>
// import uSearch from "uview-ui/components/u-search/u-search";

export default {
  components: {},
  name: "HmUviewSearch",
  props: {
    /**
     * 关闭输入框
     */
    disabled:{
      type: Boolean,
      default: false,
    },
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "64",
    },
    
    /**
     * 背景框颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#f2f2f2",
    },
    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
    },
    /**
     * 自动获取焦点
     */
    focus:{
      type: Boolean,
      default: false,
    },
    /**
     * 按钮文字
     */
    actionText: {
      type: String,
      default: "搜索",
    },
    /**
     * 文字样式
     */
    actionStyle: {
      type: Object,
      default: function(){
          return {}
      },
    },
    /**
     * 占位提示文字
     */
    placeholder: {
      type: String,
      default: "提示文字",
    },
    /**
     * 左侧图标
     * @type Icon
     */
    leftIcon: {
      type: String,
      default: "search",
    },
    /**
     * 左侧图标颜色
     * @type Color
     */
    searchIconColor: {
      type: String,
    },
    /**
     * 右侧图标
     */
    rightIcon: {
      type: String,
      default: "search",
    },

    /**
     * 搜索框形状
     * @type Enum
     * @options ["round","square"]
     */
    shape: {
      type: String,
      default: "round",
    },
    /**
     * 框外背景色
     */
    backgroundColor: {
      type: String,
    },
    /**
     * 清除图标
     */
    clearabled: {
      type: Boolean,
      default: true,
    },

    /**
     * 取消按钮
     */
    showAction: {
      type: Boolean,
      default: true,
    },

    /**
     * 对齐方式
     * @type Enum
     * @options ["left","center","right"]
     */
    inputAlign: {
      type: String,
      default: "left",
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
    onChange(e) {
      //console.log(this.cValue, "e");
      // this.value = e;
      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
    onSearch(e) {
        console.log("onSearch",e);
      this.$emit("search", e);
    },
    onCustom(e) {
        console.log("onCustom",e);
      this.$emit("custom", e);
    },
    onBlur(e) {
        console.log("onBlur",e);
      this.$emit("blur", e);
    },
    onFocus(e) {
        console.log("onFocus",e);
      this.$emit("focus", e);
    },
    onClear() {
      this.$emit("clear");
    },
    onClick() {
        console.log("disabled为true时，点击输入框，发出此事件，用于跳转搜索页");
      this.$emit("click");
    },
  },
};
</script>

<style>
</style>
