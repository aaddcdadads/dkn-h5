<template>
  <view>
    <view>
      <view>
        <video
          class="alVideo"
          :src="src"
          :autoplay="autoplay"
          :loop="loop"
          :muted="muted"
          :initial-time="initialTime"
          :duration="duration"
          :controls="controls"
          :danmu-list="danmuList"
          :danmu-btn="danmuBtn"
          :enable-danmu="enableDanmu"
          :page-gesture="pageGesture"
          :direction="direction"
          :show-progress="showProgress"
          :show-fullscreen-btn="showFullscreenBtn"
          :show-play-btn="showPlayBtn"
          :show-center-play-btn="showCenterPlayBtn"
          :show-loading="showLoading"
          :enable-progress-gesture="enableProgressGesture"
          :object-fit="objectFit"
          :poster="poster"
          :show-mute-btn="showMuteBtn"
          :title="title"
          :play-btn-position="playBtnPosition"
          :mobilenet-hint-type="mobilenetHintType"
          :enable-play-gesture="enablePlayGesture"
          :auto-pause-if-navigate="autoPauseIfNavigate"
          :auto-pause-if-open-native="autoPauseIfOpenNative"
          :vslide-gesture="vslideGesture"
          :vslide-gesture-in-fullscreen="vslideGestureInFullscreen"
          :ad-unit-id="adUnitId"
          :poster-for-crawler="posterForCrawler"
          :codec="codec"
          :http-cache="httpCache"
          @play="onplay"
          @pause="onpause"
          @ended="onended"
          @timeupdate="ontimeupdate"
          @fullscreenchange="onfullscreenchange"
          @waiting="onwaiting"
          @error="onerror"
          @progress="onprogress"
          @loadedmetadata="onloadedmetadata"
        ></video>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmVideo",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "800px"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "600px"
    },
    /**
     * 播放视频地址
     */
    src: {
      type: String,
      default:
        "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
    },
    /**
     * 是否自动播放
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * 是否循环播放
     */
    loop: {
      type: Boolean,
      default: false
    },
    /**
     * 是否静音播放
     */
    muted: {
      type: Boolean,
      default: false
    },
    /**
     * 指定播放位置
     */
    initialTime: {
      type: Number,
      default: 0
    },
    /**
     * 指定视频时长
     */
    duration: {
      type: Number,
      default: 0
    },
    /**
     * 是否显示控件
     */
    controls: {
      type: Boolean,
      default: true
    },
    /**
     * 弹幕列表
     */
    danmuList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * 弹幕按钮
     */
    danmuBtn: {
      type: Boolean,
      default: false
    },
    /**
     * 是否展示弹幕
     */
    enableDanmu: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开启手势
     */
    pageGesture: {
      type: Boolean,
      default: false
    },
    /**
     * 全屏视频方向
     * @type Enum
     * @options ["0","90","-90"]
     */
    direction: {
      type: Number,
      default: 0
    },
    /**
     * 宽度大会显示
     */
    showProgress: {
      type: Boolean,
      default: true
    },
    /**
     * 全屏显示按钮
     */
    showFullscreenBtn: {
      type: Boolean,
      default: true
    },
    /**
     * 底部播放按钮
     */
    showPlayBtn: {
      type: Boolean,
      default: true
    },
    /**
     * 中间播放按钮
     */
    showCenterPlayBtn: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示加载
     */
    showLoading: {
      type: Boolean,
      default: true
    },
    /**
     * 是否控制进度
     */
    enableProgressGesture: {
      type: Boolean,
      default: true
    },
    /**
     * 视频表现形式
     * @type Enum
     * @options ["contain","fill","cover"]
     */
    objectFit: {
      type: String,
      default: "contain"
    },
    /**
     * 封面图片地址
     */
    poster: {
      type: String,
      default: ""
    },
    /**
     * 静音按钮
     */
    showMuteBtn: {
      type: Boolean,
      default: false
    },
    /**
     * 视频标题
     */
    title: {
      type: String,
      default: "这是一个视频标题"
    },
    /**
     * 播放按钮位置
     * @type Enum
     * @options ["bottom","center"]
     */
    playBtnPosition: {
      type: String,
      default: "bottom"
    },
    /**
     * 移动网络提醒
     * @type Enum
     * @options ["0(不提醒)","1(提醒)"]
     */
    mobilenetHintType: {
      type: Number,
      default: 1
    },
    /**
     * 开启播放手势
     */
    enablePlayGesture: {
      type: Boolean,
      default: true
    },
    /**
     * 跳转是否暂停
     */
    autoPauseIfNavigate: {
      type: Boolean,
      default: true
    },
    /**
     * 跳转原生暂停
     */
    autoPauseIfOpenNative: {
      type: Boolean,
      default: true
    },
    /**
     * 非全屏调节
     */
    vslideGesture: {
      type: Boolean,
      default: false
    },
    /**
     * 全屏模式调节
     */
    vslideGestureInFullscreen: {
      type: Boolean,
      default: true
    },
    /**
     * 视频前广告
     */
    adUnitId: {
      type: String,
      default: ""
    },
    /**
     * 视频封面展示
     */
    posterForCrawler: {
      type: String,
      default: ""
    },
    /**
     * 解码器选择
     * @type Enum
     * @options ["hardware","software"]
     */
    codec: {
      type: String,
      default: "hardware"
    },
    /**
     * 是否开启本地缓存
     */
    httpCache: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cWidth: "",
      cHeight: ""
    };
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
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onplay() {
      this.$emit("play");
      // console.log(11111);
    },
    onpause() {
      this.$emit("pause");
      // console.log(22222);
    },
    onended() {
      this.$emit("ended");
      // console.log(33333);
    },
    ontimeupdate() {
      this.$emit("timeupdate");
      // console.log(4444444);
    },
    onfullscreenchange() {
      this.$emit("fullscreenchange");
      // console.log(55555555);
    },
    onwaiting() {
      this.$emit("waiting");
      // console.log(66666666);
    },
    onerror() {
      this.$emit("error");
      // console.log(7777777);
    },
    onprogress() {
      this.$emit("progress");
      // console.log(88888888);
    },
    onloadedmetadata() {
      this.$emit("loadedmetadata");
      // console.log(99999999);
    }
  }
};
</script>
<style lang="less" scoped>
.alVideo {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  
}
</style>