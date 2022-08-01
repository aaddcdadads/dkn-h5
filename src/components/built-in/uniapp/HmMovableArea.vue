<template>
  <view>
    <label>
      <movable-area class="alVideo" :scale-area="scaleArea">
        <movable-view
          :x="x"
          :y="y"
          direction="all"
          @change="onChange"
          class="area"
        >
        </movable-view>
      </movable-area>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmMovableArea',
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
    scaleArea: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cWidth: '',
      cHeight: '',
      x: 0,
      y: 0,
      old: {
        x: 0,
        y: 0,
      },
    }
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value
      }
      return `${value}px`
    },
    onChange: function (e) {
      this.old.x = e.detail.x
      this.old.y = e.detail.y
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

</style>
