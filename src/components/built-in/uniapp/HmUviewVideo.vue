<template>
  <view :class="cNum == 1 ? 'flex-col' : 'flex-row'">
    <video v-for="(item, index) in cList" :key="index" class="videoBox" :src="item.videoSrc"
      :initial-time="item.initialTime" :danmu-list="item.danmuList" :poster="item.imgSrc" :controls="option.controls"
      :danmu-btn="option.danmuBtn" :enable-danmu="option.enableDanmu" :page-gesture="option.pageGesture"
      :show-fullscreen-btn="option.showFullscreenBtn" :show-play-btn="option.showPlayBtn"
      :show-center-play-btn="option.showCenterPlayBtn" :enable-progress-gesture="option.enableProgressGesture"
      :show-mute-btn="option.showMuteBtn" :object-fit="option.objectFit" @error="videoErrorCallback"
      @play="play($event, item, index)" @pause="pause($event, item, index)" @ended="end($event, item, index)"
      @fullscreenchange="fullscreenChange" :id="item.id ? 'video' + item.id : 'video' + index">
    </video>
  </view>

</template>
<script>
export default {
  props: {
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          controls: true,//是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
          danmuBtn: false,//是否显示弹幕按钮,只在初始化时有效，不能动态变更
          enableDanmu: true,//是否展示弹幕，只在初始化时有效，不能动态变更
          pageGesture: true,//在非全屏模式下，是否开启亮度与音量调节手势
          showFullscreenBtn: true,//是否显示全屏按钮
          showPlayBtn: true,//是否显示视频底部控制栏的播放按钮
          showCenterPlayBtn: true,//是否显示视频中间的播放按钮
          enableProgressGesture: true,//是否开启控制进度的手势
          showMuteBtn: false,//是否显示静音按钮
          objectFit: "contain",//当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
        }
      }
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: '12',
            videoSrc: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            initialTime: "",
            imgSrc: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4d8c706470079945e0d116a4ac49c043d8c9278c.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664182243&t=ec14434f35aef08cda1a96b4d1c46cc8",
            danmuList: []
          },
          {
            id: '11',
            videoSrc: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            initialTime: "",
            imgSrc: "https://img2.baidu.com/it/u=681058312,893527668&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=450",
            danmuList: [{ text: '张三:良介，你还记得我吗', color: '#ff0000', time: 2 }]
          },
        ]
      }
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
      default: "100%"
    }
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
      cMargin: "4px"
    }
  },
  methods: {
    widthChange(e) {
      if (e == '1') {
        this.cWidth = "100%";
        this.cMargin = '8px';
      } else {
        let margin = this.cMargin.replace("px","");
        this.cWidth = "calc("+(100 / e) + "% - " + 2 * margin + "px)";
      }
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        if (value == '100%') {
          return '225px';
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
    videoErrorCallback: function (e) {
      this.$emit("videoErrorCallback", e);
    },
    fullscreenChange(e) {
      this.$emit("fullscreenChange", e.detail.fullScreen, e.detail.direction, e);
    },
  }
}
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

.videoBox {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}

.flex-col .videoBox:not(:last-child) {
  margin: v-bind(cMargin) 0px;
}

.flex-row .videoBox {
  margin: 0px v-bind(cMargin) v-bind(cMargin);
}
</style>
