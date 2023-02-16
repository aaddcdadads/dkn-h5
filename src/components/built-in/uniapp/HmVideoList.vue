<template>
  <view :class="cNum == 1 ? 'flex-col' : 'flex-row'">
    <view v-for="(item, index) in cList" :key="index" class="listBox">
      <video
        v-if="item.type == 'video'"
        class="videoBox"
        :id="item.id ? 'video' + item.id : 'video' + index"
        :src="item.videoSrc"
        :initial-time="item.initialTime"
        :danmu-list="item.danmuList"
        :poster="item.imgSrc"
        :autoplay="videoOption.autoplay"
        :loop="videoOption.loop"
        :muted="videoOption.muted"
        :controls="videoOption.controls"
        :danmu-btn="videoOption.danmuBtn"
        :enable-danmu="videoOption.enableDanmu"
        :page-gesture="videoOption.pageGesture"
        :show-fullscreen-btn="videoOption.showFullscreenBtn"
        :show-play-btn="videoOption.showPlayBtn"
        :show-center-play-btn="videoOption.showCenterPlayBtn"
        :enable-progress-gesture="videoOption.enableProgressGesture"
        :show-mute-btn="videoOption.showMuteBtn"
        :object-fit="videoOption.objectFit"
        @error="errorCallback"
        @play="play($event, item, index)"
        @pause="pause($event, item, index)"
        @ended="end($event, item, index)"
        @fullscreenchange="fullscreenChange"
      ></video>
      <live-player
        v-if="item.type == 'livePlayer'"
        class="videoBox"
        :id="item.id ? 'livePlayer' + item.id : 'livePlayer' + index"
        :src="item.videoSrc"
        :mode="livePlayerOption.mode"
        :autoplay="livePlayerOption.autoplay"
        :muted="livePlayerOption.muted"
        :orientation="livePlayerOption.orientation"
        :object-fit="livePlayerOption.objectFit"
        :background-mute="livePlayerOption.backgroundMute"
        :sound-mode="livePlayerOption.soundMode"
        :min-cache="livePlayerOption.minCache"
        :max-cache="livePlayerOption.maxCache"
        :picture-in-picture-mode="livePlayerOption.pictureInPictureMode"
        @error="errorCallback"
        @statechange="statechange($event, item, index)"
        @netstatus="netstatus($event, item, index)"
        @fullscreenchange="fullscreenchange"
        @enterpictureinpicture="enterpictureinpicture($event, item, index)"
        @leavepictureinpicture="leavepictureinpicture($event, item, index)"
      >
      </live-player>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * video配置项
     */
    videoOption: {
      type: Object,
      default: function () {
        return {
          autoplay:false,
          loop:false,
          muted:false,
          controls: true, //是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
          danmuBtn: false, //是否显示弹幕按钮,只在初始化时有效，不能动态变更
          enableDanmu: true, //是否展示弹幕，只在初始化时有效，不能动态变更
          pageGesture: true, //在非全屏模式下，是否开启亮度与音量调节手势
          showFullscreenBtn: true, //是否显示全屏按钮
          showPlayBtn: true, //是否显示视频底部控制栏的播放按钮
          showCenterPlayBtn: true, //是否显示视频中间的播放按钮
          enableProgressGesture: true, //是否开启控制进度的手势
          showMuteBtn: false, //是否显示静音按钮
          objectFit: "contain", //当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
        };
      },
    },
    /**
     * livePlayer配置项
     */
    livePlayerOption: {
      type: Object,
      default: function () {
        return {
          mode: "live", //RTC
          autoplay: false,
          muted: false,
          orientation: "vertical", //horizontal
          objectFit: "contain", //fillCrop
          backgroundMute: false,
          soundMode: "speaker", //ear
          minCache: 1,
          maxCache: 3,
          pictureInPictureMode: "push", //["push", "pop",""]
        };
      },
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: "12",
            type: "video",
            videoSrc:
              "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            initialTime: "",
            imgSrc:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4d8c706470079945e0d116a4ac49c043d8c9278c.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664182243&t=ec14434f35aef08cda1a96b4d1c46cc8",
            danmuList: [],
          },
          {
            id: "11",
            type: "video",
            videoSrc:
              "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            initialTime: "",
            imgSrc:
              "https://img2.baidu.com/it/u=681058312,893527668&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=450",
            danmuList: [
              { text: "张三:良介，你还记得我吗", color: "#ff0000", time: 2 },
            ],
          },
          {
            id: "11",
            type: "livePlayer",
            videoSrc: "https://live.douyin.com/282773369501",
          },
        ];
      },
    },
    /**
     * 单行数量
     */
    num: {
      type: Number,
      default: 1,
    },
    /**
     * 视频高度
     */
    height: {
      type: String,
      default: "100%",
    },
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
    num(value) {
      this.cNum = value;
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cList = this.list;
    this.cNum = this.num;
    this.cHeight = this.getCssUnit(this.height);
    this.widthChange(this.cNum);
  },
  data() {
    return {
      cList: [],
      refItemList: [],
      cNum: 1,
      cWidth: "100%",
      cHeight: "100px",
      cMargin: "4px",
    };
  },
  methods: {
    widthChange(e) {
      if (e == "1") {
        this.cWidth = "100%";
        this.cMargin = "8px";
      } else {
        let margin = this.cMargin.replace("px", "");
        this.cWidth = "calc(" + 100 / e + "% - " + 2 * margin + "px)";
      }
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        if (value == "100%") {
          return "225px";
        }
        return value;
      }
      return `${value}px`;
    },
    play(e, item, index) {
      this.$emit("play", e, item, index);
    },
    pause(e, item, index) {
      this.$emit("pause", e, item, index);
    },
    end(e, item, index) {
      this.$emit("end", e, item, index);
    },
    errorCallback: function (e) {
      this.$emit("errorCallback", e);
    },
    fullscreenChange(e) {
      this.$emit(
        "fullscreenChange",
        e.detail.fullScreen,
        e.detail.direction,
        e
      );
    },
    statechange(e, item, index) {
      this.$emit("statechange", e, item, index);
    },
    netstatus(e, item, index) {
      this.$emit("netstatus", e, item, index);
    },
    enterpictureinpicture(e, item, index) {
      this.$emit("enterpictureinpicture", e, item, index);
    },
    leavepictureinpicture(e, item, index) {
      this.$emit("leavepictureinpicture", e, item, index);
    },
  },
};
</script>
<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.listBox {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
.videoBox {
  width: 100%;
  height: 100%;
}

.flex-col .videoBox:not(:last-child) {
  margin: v-bind(cMargin) 0px;
}

.flex-row .videoBox {
  margin: 0px v-bind(cMargin) v-bind(cMargin);
}
</style>
