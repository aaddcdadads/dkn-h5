<template>
  <view :style="{ backgroundColor: backgroundColor }">
    {{ title }}
    <u-search
      v-model:value="cValue"
      :action-text="actionText"
      :placeholder="placeholder"
      :search-icon="leftIcon"
      :shape="shape"
      :clearabled="clearabled"
      :show-action="showAction"
      :input-align="inputAlign"
      @change="onChange"
    ></u-search>
  </view>
</template>

<script>
// import uSearch from "uview-ui/components/u-search/u-search";

export default {
  components: {},
  name: "HmUviewSearch",
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
    title: {
      type: String,
      default: "输入：",
    },
    /**
     * 按钮文字
     */
    actionText: {
      type: String,
      default: "搜索",
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
    cValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changeValue", val);
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onChange(e) {
      console.log(this.cValue, "e");
      // this.value = e;
      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
  },
};
</script>

<style>
</style>
