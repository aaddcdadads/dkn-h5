<template>
  <view>
    <live-pusher
      :url="url"
      :mode="mode"
      :muted="muted"
      :enable-camera="enableCamera"
      :auto-focus="autoFocus"
      :beauty="beauty"
      :whiteness="whiteness"
      :orientation="orientation"
      :aspect="aspect"
      :min-bitrate="minBitrate"
      :max-bitrate="maxBitrate"
      :audio-quality="audioQuality"
      :waiting-image="waitingImage"
      :waiting-image-hash="waitingImageHash"
      :zoom="zoom"
      :device-position="devicePosition"
      :background-mute="backgroundMute"
      :remote-mirror="remoteMirror"
      :local-mirror="localMirror"
      :audio-reverb-type="audioReverbType"
      :enable-mic="enableMic"
      :enable-agc="enableAgc"
      :enable-ans="enableAns"
      :audio-volume-type="audioVolumeType"
      @statechange="statechange"
      @netstatus="netstatus"
      @error="error"
      @bgmstart="bgmstart"
    ></live-pusher>
  </view>
</template>
<script>
export default {
  name: "HmLivePusher",
  props: {
    /**
     * 推流地址
     */
    url: {
      type: String,
      default: ""
    },
    /**
     * 推流视频模式
     * @type Enum
     * @options ["SD","HD","FHD"]
     */
    mode: {
      type: String,
      default: "SD"
    },
    /**
     * 视频宽高比例
     */
    aspect: {
      type: String,
      default: "3:2"
    },
    /**
     * 是否静音
     */
    muted: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开摄像头
     */
    enableCamera: {
      type: Boolean,
      default: true
    },
    /**
     * 是否自动聚焦
     */
    autoFocus: {
      type: Boolean,
      default: true
    },
    /**
     * 美颜范围
     */
    beauty: {
      type: Number,
      default: 0
    },
    /**
     * 美白范围
     */
    whiteness: {
      type: Number,
      default: 0
    },
    /**
     * 画面方向
     */
    orientation: {
      type: String,
      default: "vertical"
    },
    /**
     * 最小码率
     */
    minBitrate: {
      type: Number,
      default: 200
    },
    /**
     * 最大码率
     */
    maxBitrate: {
      type: Number,
      default: 1000
    },
    /**
     * 音质模式
     * @type Enum
     * @options ["high","low"]
     */
    audioQuality: {
      type: String,
      default: "high"
    },
    /**
     * 推流等待画面
     */
    waitingImage: {
      type: String,
      default: ""
    },
    /**
     * 等待画面资源
     */
    waitingImageHash: {
      type: String,
      default: ""
    },
    /**
     * 调整聚焦
     */
    zoom: {
      type: Boolean,
      default: false
    },
    /**
     * 前置后置选择
     * @type Enum
     * @options ["front","back"]
     */
    devicePosition: {
      type: String,
      default: "front"
    },
    /**
     * 后台是否静音
     */
    backgroundMute: {
      type: Boolean,
      default: false
    },
    /**
     * 推流是否镜像
     */
    remoteMirror: {
      type: Boolean,
      default: false
    },
    /**
     * 本地预览镜像
     */
    localMirror: {
      type: String,
      default: "auto"
    },
    /**
     * 音频混响类型
     */
    audioReverbType: {
      type: Number,
      default: 0
    },
    /**
     * 开关麦克风
     */
    enableMic: {
      type: Boolean,
      default: true
    },
    /**
     * 音频增益
     */
    enableAgc: {
      type: Boolean,
      default: false
    },
     /**
     * 噪音抑制
     */
    enableAns: {
      type: Boolean,
      default: false
    },
    /**
     * 音量类型
     * @type Enum
     * @options ["voicecall","media"]
     */
    audioVolumeType: {
      type: String,
      default: "voicecall"
    },
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
    error() {
      this.$emit("error");
    },
    bgmstart() {
      this.$emit("bgmstart");
    }
  }
};
</script>