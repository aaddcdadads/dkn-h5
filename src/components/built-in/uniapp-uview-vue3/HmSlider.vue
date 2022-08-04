<template>
  <view>
    {{ title }}
    <slider
      :max="max"
      :min="min"
      :step="step"
      :disabled="disabled"
      :value="value"
      :active-color="activeColor"
      :backgroundColor="backgroundColor"
      :block-size="blockSize"
      :block-color="blockColor"
      :show-value="showValue"
      @change="onChange"
      @changing="onChanging"
    />
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmSlider",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "进度条：",
    },
    /**
     *最大值
     */
    max: {
      type: Number,
      default: 100,
    },
    /**
     *最小值
     */
    min: {
      type: Number,
      default: 0,
    },
    /**
     *步长
     */
    step: {
      type: Number,
      default: 1,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 当前取值
     */
    value: {
      type: Number,
      default: 0,
    },
    /**
     * 是否显示值
     */
    showValue: {
      type: Boolean,
      default: false,
    },
    /**
     * 滑块大小
     */
    blockSize: {
      type: Number,
      default: 28,
    },
    /**
     * 滑块颜色
     */
    blockColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 右侧背景颜色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#e9e9e9",
    },
    /**
     * 非激活颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#1aad19",
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
  methods: {
    onChange() {
      this.$emit("update:value", this.cValue);
      this.$emit("onChange");
    },
    onChanging() {
      this.$emit("update:value", this.cValue);
      this.$emit("onChanging");
    },
  },
};
</script>
<style lang="less">
</style>
