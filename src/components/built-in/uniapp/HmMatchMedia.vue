<template>
  <view>
    <label>
      <match-media
        class="alVideo"
        :min-width="minWidth"
        :max-width="maxWidth"
        :width="width"
        :min-height="minHeight"
        :max-height="maxHeight"
        :height="height"
        :orientation="orientation"
      ></match-media>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmMatchMedia',
  props: {
    /**
     * 页面宽度
     */
    width: {
      type: Number,
      default: 500,
    },
    /**
     * 页面高度
     */
    height: {
      type: Number,
      default: 500,
    },
    /**
     * 最小宽度
     */
    minWidth: {
      type: Number,
      default: 100,
    },
    /**
     * 	最大宽度
     */
    maxWidth: {
      type: Number,
      default: 800,
    },
    /**
     * 最小高度
     */
    minHeight: {
      type: Number,
      default: 100,
    },
    /**
     * 最大高度
     */
    maxHeight: {
      type: Number,
      default: 800,
    },
    /**
     * 屏幕方向
     * @type Enum
     * @options ["landscape","portrait"]
     */
    orientation: {
      type: String,
      default: 'landscape',
    },
  },
  data() {
    return {
      cWidth: '',
      cHeight: '',
    }
  },
  methods: {},
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
}
</style>
