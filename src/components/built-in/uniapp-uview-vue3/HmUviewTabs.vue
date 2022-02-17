<template>
  <u-tabs
    :is-scroll="isScroll"
    :list="list"
    v-model="cCurrent"
    :widthPercent="widthPercent"
    :height="height"
    :font-size="fontSize"
    :duration="duration"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :bar-width="barWidth"
    :bar-height="barHeight"
    :gutter="gutter"
    :bg-color="bgColor"
    :bold="bold"
    :show-bar="showBar"
    :bar-style="barStyle"
    :active-item-style="activeItemStyle"
    :item-width="itemWidth"
    :offset="offset"
    class="hm-tabs"
    @change.stop="onChange"
  >
    <template #right>
      <slot name="right"></slot>
    </template>
    <template #left>
      <slot name="left"></slot>
    </template>
  </u-tabs>
</template>

<script>
export default {
  name: "HmUviewTabs",
  components: {},
  props: {
    /**
     * 是否拖动
     */
    isScroll: {
      type: Boolean,
      default: true,
    },
    /**
     * 标签数组
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            name: "标签一",
            count: 1,
          },
          {
            name: "标签二",
            count: 1,
          },
          {
            name: "标签三",
            count: 1,
          },
        ];
      },
    },
    /**
     * 当前页
     */
    current: {
      type: Number,
      default: 0,
    },
    /**
     * 标签页宽度
     */
    widthPercent: {
      type: Number,
      default: 100,
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 80,
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: Number,
      default: 30,
    },
    /**
     * 滑动时间(秒)
     */
    duration: {
      type: Number,
      default: 0.5,
    },
    /**
     * tab激活颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * tabs文字颜色
     * @type Color
     */
    inactiveColor: {
      type: String,
      default: "#303133",
    },
    /**
     * 滑块宽度
     */
    barWidth: {
      type: Number,
      default: 40,
    },
    /**
     * 滑块高度
     */
    barHeight: {
      type: Number,
      default: 6,
    },
    /**
     * tab内边距
     */
    gutter: {
      type: Number,
      default: 40,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * tab激活加粗
     */
    bold: {
      type: Boolean,
      default: true,
    },
    /**
     * 展示滑块
     */
    showBar: {
      type: Boolean,
      default: true,
    },
    /**
     * 滑块样式
     */
    barStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 激活tab样式
     */
    activeItemStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * tab宽度
     */
    itemWidth: {
      type: Number,
    },
    /**
     * 徽标位置偏移
     */
    offset: {
      type: Array,
      default: function () {
        return [5, 20];
      },
    },
  },
  data() {
    return {
      cCurrent: 0,
    };
  },
  watch: {
    current(value) {
      this.cCurrent = value;
    },
  },
  created() {
    this.cCurrent = this.current;
  },
  methods: {
    onChange(val) {
      this.cCurrent = val;
      console.log("u-tabs change", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style scoped>
</style>