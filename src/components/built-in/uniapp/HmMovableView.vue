<template>
  <view>
    <label>
      <movable-area class="alVideo">
        <movable-view
          class="area"
          :direction="direction"
          :inertia="inertia"
          :out-of-bounds="outOfBounds"
          :x="x"
          :y="y"
          :damping="damping"
          :friction="friction"
          :disabled="disabled"
          :scale0="scale"
          :scale-min="scaleMin"
          :scale-max="scaleMax"
          :scale-value="scaleValue"
          :animation="animation"
          @change="viewchange"
          @scale="viewchange"
        ></movable-view>
      </movable-area>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmMovableView',
  props: {
    /**
     * 宽度
     */
    width: {
      type: Number,
      default: 500,
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 500,
    },
    /**
     * 移动方向
     * @type Enum
     * @options [“all"，”vertical","horizontal"，"none"]
     */
    direction: {
      type: String,
      default: 'all',
    },
    /**
     * 	惯性
     */
    inertia: {
      type: Boolean,
      default: false,
    },
    /**
     * 超过区域移动
     */
    outOfBounds: {
      type: Boolean,
      default: false,
    },
    /**
     * x轴方向的偏移
     */
    x: {
      type: Number,
      default: 0,
    },
    /**
     * y轴方向的偏移
     */
    y: {
      type: Number,
      default: 0,
    },
    /**
     * 阻尼系数
     */
    damping: {
      type: Number,
      default: 20,
    },
    /**
     * 摩擦系数
     */
    friction: {
      type: Number,
      default: 5,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 双指缩放
     */
    scale: {
      type: Boolean,
      default: true,
    },
    /**
     * 缩放最小值
     */
    scaleMin: {
      type: Number,
      default: 0.5,
    },
    /**
     * 缩放最大值
     */
    scaleMax: {
      type: Number,
      default: 10,
    },
    /**
     * 缩放倍数
     */
    scaleValue: {
      type: Number,
      default: 1,
    },
    /**
     * 使用动画
     */
    animation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cWidth: '',
      cHeight: '',
    }
  },
  methods: {
    viewchange() {
      this.$emit('change')
    },
    viewscale() {
      this.$emit('scale')
    },
  },
  mounted() {
    this.cWidth = this.width
    this.cHeight = this.height
  },
  watch: {
    width(value) {
      this.cWidth = getCssUnit(value)
    },
    height(value) {
      this.cHeight = getCssUnit(value)
    },
  },
}
</script>
<style lang="less">
.alVideo {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  height: 500px;
  background-color: #999;
}
.area {
  width: 100px;
  height: 100px;
  background-color: #fff;
}
</style>
