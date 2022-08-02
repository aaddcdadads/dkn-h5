<template>
  <view>
    <live-player
      :id="id"
      :src="src"
      :mode="mode"
      :autoplay="autoplay"
      :muted="muted"
      :orientation="orientation"
      :object-fit="objectFit"
      :background-mute="backgroundMute"
      :sound-mode="soundMode"
      :min-cache="minCache"
      :max-cache="maxCache"
      :picture-in-picture-mode="pictureInPictureMode"
      @statechange="statechange"
      @netstatus="netstatus"
      @fullscreenchange="fullscreenchange"
      @audiovolumenotify="audiovolumenotify"
      @enterpictureinpicture="enterpictureinpicture"
      @leavepictureinpicture="leavepictureinpicture"
    />
  </view>
</template>
<script>
export default {
  name: "HmLivePlayer",
  props: {
    /**
     * 唯一标识符
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * 音视频地址
     */
    src: {
      type: String,
      default: "https://domain/pull_stream"
    },
    /**
     * 合法值
     * @type Enum
     * @options ["live","RTC"]
     */
    mode: {
      type: String,
      default: "live"
    },
    /**
     * 是否自动播放
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * 是否静音
     */
    muted: {
      type: Boolean,
      default: false
    },
    /**
     * 画面方向
     * @type Enum
     * @options ["vertical","horizontal"]
     */
    orientation: {
      type: String,
      default: "vertical"
    },
    /**
     * 填充模式
     * @type Enum
     * @options ["contain","fillCrop"]
     */
    objectFit: {
      type: String,
      default: "contain"
    },
    /**
     * 后台是否静音
     */
    backgroundMute: {
      type: Boolean,
      default: false
    },
    /**
     * 声音输出方式
     * @type Enum
     * @options ["speaker","ear"]
     */
    soundMode: {
      type: String,
      default: "speaker"
    },
    /**
     * 最小缓冲区
     */
    minCache: {
      type: Number,
      default: 1
    },
    /**
     * 最大缓冲区
     */
    maxCache: {
      type: Number,
      default: 3
    },
    /**
     * 设置小窗模式
     * @type Enum
     * @options ["push","pop"]
     */
    pictureInPictureMode: {
      type: String,
      default: "push"
    }
  },
  data() {
    return {};
  },
  methods: {
    statechange() {
      this.$emit("statechange");
    },
    netstatus() {
      this.$emit("netstatus");
    },
    fullscreenchange() {
      this.$emit("fullscreenchange");
    },
    audiovolumenotify() {
      this.$emit("audiovolumenotify");
    },
    enterpictureinpicture() {
      this.$emit("enterpictureinpicture");
    },
    leavepictureinpicture() {
      this.$emit("leavepictureinpicture");
    }
  }
};
</script>
<style>
</style>