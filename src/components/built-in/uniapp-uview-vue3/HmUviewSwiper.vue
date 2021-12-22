<template>
  <view class="wrap">
    <u-swiper
      :list="list"
      :title="title"
      :mode="mode"
      :height="height"
      :indicatorPos="indicatorPos"
      :effect3d="effect3d"
      :autoplay="autoplay"
      :interval="interval"
      :circular="circular"
      :duration="duration"
      :borderRadius="borderRadius"
      :effect3dPreviousMargin="effect3dPreviousMargin"
      :bgColor="bgColor"
      :current="current"
      @click="onClick"
      @change="onChange"
    ></u-swiper>
  </view>
</template>

<script>
export default {
  name: "HmUviewSwiper",
  props: {
    /**
     * 轮播数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
            title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
            title: "身无彩凤双飞翼，心有灵犀一点通",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
            title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          },
        ];
      },
    },
    /**
     * 是否显示标题
     */
    title: {
      type: Boolean,
      default: false,
    },
    /**
     * 指示器样式
     * @type Enum
     * @options ["round","rect","dot","number","none"]
     */
    mode: {
      type: String,
      default: "round",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "250px",
    },
    /**
     * 指示器位置
     * @type Enum
     * @options ["bottomCenter","topLeft","topCenter","topRight","bottomLeft","bottomRight"]
     */
    indicatorPos: {
      type: String,
      default: "bottomCenter",
    },
    /**
     * 3D效果
     */
    effect3d: {
      type: Boolean,
      default: false,
    },
    /**
     * 自动轮播
     */
    autoplay: {
      type: Boolean,
      default: true,
    },
    /**
     * 轮播间隔
     */
    interval: {
      type: String,
      default: "2500",
    },
    /**
     * 衔接播放
     */
    circular: {
      type: Boolean,
      default: true,
    },
    /**
     * 轮播时间
     */
    duration: {
      type: String,
      default: "500",
    },
    /**
     * 图片圆角值
     */
    borderRadius: {
      type: String,
      default: "8",
    },
    /**
     * 前后项距离
     */
    effect3dPreviousMargin: {
      //effect3d为true生效
      type: String,
      default: "50",
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#f3f4f6",
    },
    /**
     * 初始第几页
     */
    current: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    onChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less">
.wrap {
  padding: 40rpx;
}
</style>
