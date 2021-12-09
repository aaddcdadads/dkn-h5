<template>
  <view class="slider-class">
    {{ title }}
    <u-slider
      v-model:value="cValue"
      :max="max"
      :min="min"
      :step="step"
      :block-width="blockWidth"
      :height="height"
      :inactive-color="inactiveColor"
      :active-color="activeColor"
      @start="onStart"
      @moving="onMoving"
      @end="onEnd"
    ></u-slider>
  </view>
</template>

<script>
// import uSlider from "uview-ui/components/u-slider/u-slider";

export default {
  components: {},
  name: "HmUviewSlider",
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
      type: Number,
    },
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
     *按钮大小
     */
    blockWidth: {
      type: String,
      default: "30",
    },
    /**
     *进度条高度
     */
    height: {
      type: String,
      default: "6",
    },
    /**
     * 激活颜色
     * @type Color
     */
    inactiveColor: {
      type: String,
    },
    /**
     * 非激活颜色
     * @type Color
     */
    activeColor: {
      type: String,
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
    onStart() {
      this.$emit("update:value", this.cValue);
      this.$emit("onStart");
    },
    onMoving() {
      this.$emit("update:value", this.cValue);
      this.$emit("onMoving");
    },
    onEnd() {
      console.log(this.cValue);
      this.value = this.cValue;
      this.$emit("update:value", this.cValue);
      this.$emit("onEnd");
    },
  },
};
</script>

<style>
</style>
