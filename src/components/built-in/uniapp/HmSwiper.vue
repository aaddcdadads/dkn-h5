<template>
  <view>
    <label>
      <swiper class="alVideo"
        :indicator-dots="indicatorDots"
        :indicator-color="indicatorColor"
        :indicator-active-color="indicatorActiveColor"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :circular="circular"
        :vertical="vertical"
        :previous-margin="previousMargin"
        :next-margin="nextMargin"
        :disable-touch="disableTouch"
        :easing-function="easingFunction"
        @change="swiperchange"
        @transition="swipertransition"
        @animationfinish="finish"
      >
        <swiper-item v-for="(item, index) in list" :key="index">
          <img :src="item" />
        </swiper-item>
      </swiper>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmSwiper',
  props: {
       /**
     * 宽度
     */
    width: {
      type: String,
      default: "1200px"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300px"
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F111R0144Z0%2F20111Q44Z0-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=9fbdefb221691a5f11a8aaf2a3f6ae56',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F022221105922%2F210222105922-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=8abdb7284aa21e05169e4bd377f80574',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F011621113142%2F210116113142-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=4d40d86c82c09d98e509aaad0aefee2a',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F050221114535%2F210502114535-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=db51ae291ec9b0e412183496be2cddc0',
        ]
      },
    },
    /**
     * 指示点
     */
    indicatorDots: {
      type: Boolean,
      default: true,
    },
    /**
     * 指示点颜色
     * @type Color
     */
    indicatorColor: {
      type: String,
      default: '#ffffff',
    },
    /**
     * 选中指示点颜色
     * @type Color
     */
    indicatorActiveColor: {
      type: String,
      default: '#000000',
    },
    /**
     * 自动切换
     */
    autoplay: {
      type: Boolean,
      default: true,
    },
    /**
     * 自动切换时间间隔
     */
    interval: {
      type: Number,
      default: 5000,
    },
    /**
     * 	滑动动画时长
     */
    duration: {
      type: Number,
      default: 500,
    },
    /**
     * 衔接滑动
     */
    circular: {
      type: Boolean,
      default: false,
    },
    /**
     * 纵向滑动
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /**
     * 前边距
     */
    previousMargin: {
      type: String,
      default: '',
    },
    /**
     * 后边距
     */
    nextMargin: {
      type: String,
      default: '',
    },
    /**
     * 禁止用户操作
     */
    disableTouch: {
      type: Boolean,
      default: false,
    },
    /**
     * 切换动画类型
     * @type Enum
     * @options ["default","linear","easeInCubic","easeOutCubic“,”easeInOutCubic"]
     */
    easingFunction: {
      type: String,
      default: 'easeInCubic',
    },
  },
  data() {
    return {
      cWidth: "",
      cHeight: ""
    }
  },
  methods: {
     getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    swiperchange() {
      this.$emit('change')
    },
    swipertransition() {
      this.$emit('transition')
    },
    finish() {
      this.$emit('animationfinish')
    },
  },
  mounted() {
    this.cWidth = this.width;
    this.cHeight = this.height;
  },
   watch: {
    width(value) {
      this.cWidth = getCssUnit(value);
    },
    height(value) {
      this.cHeight = getCssUnit(value);
    }
  },
}
</script>
<style lang="less">

.alVideo {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  
}
</style>
