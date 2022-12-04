<template>
  <view class="HmMomentVideo">
    <view class="topTitle flex-row">
      <view class="topTitle_img"><img :src="imgSrc"/></view>
      <view class="topTitle_title flex-col">
        <text class="topTitle_title_name" decode>{{ name }}</text>
        <text class="topTitle_title_time" decode>{{ time }}</text></view
      >
    </view>
    <view class="bottomContent flex-col">
      <view class="bottomContent_talk" title="话题">
        <text
          decode
          class="bottomContent_talk_text"
          v-for="talk in talks"
          :key="talk"
          >#{{ talk }}</text
        ></view
      >
      <view class="bottomContent_video" title="视频">
        <video
          id="myVideo"
          :src="videoSrc"
          :initial-time="videoOption.initialTime"
          :danmu-list="videoOption.danmuList"
          :poster="videoOption.imgSrc"
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
          @play="play"
          @pause="pause"
          @ended="end"
          @fullscreenchange="fullscreenChange"
        ></video>
      </view>
      <view class="bottomContent_state flex-row" title="选中状态">
        <text decode class="bottomContent_state_text">是否展示班牌</text>
        <u-checkbox
          class="bottomContent_state_checkbox"
          v-model="state"
          shape="circle"
          @change="checkBoxChange"
        ></u-checkbox>
        <u-icon
          class="bottomContent_state_icon"
          name="more-dot-fill"
          size="40"
          color="#9797A8"
        ></u-icon>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmMomentVideo",
  props: {
    /**
     * 图像地址
     */
    imgSrc: {
      type: String,
      default: "/static/logo.png",
    },
    /**
     * 名称
     */
    name: {
      type: String,
      default: "范老师",
    },
    /**
     * 发布时间
     */
    time: {
      type: String,
      default: "2022-11-24 17:00:07",
    },
    /**
     * 话题
     */
    talk: {
      type: Array,
      default: function () {
        return ["早读日常", "朝气蓬勃"];
      },
    },
    /**
     * 视频地址
     */
    videoSrc: {
      type: String,
      default:
        "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
    },
    /**
     * 状态
     * @model
     */
    state: {
      type: Boolean,
      default: true,
    },
    /**
     * 视频配置项
     */
    videoOption: {
      type: Object,
      default: function () {
        return {
          initialTime: "",
          danmuList: [],
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4d8c706470079945e0d116a4ac49c043d8c9278c.png&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664182243&t=ec14434f35aef08cda1a96b4d1c46cc8", //封面图片
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
  },
  watch: {
    talk: {
      handler: function (value, oldValue) {
        this.talks = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.talks = this.talk;
  },
  data() {
    return {
      talks: [],
    };
  },
  methods: {
    checkBoxChange(e) {
      this.$emit("checkBoxChange", e);
    },
    play(e) {
      this.$emit("play", e);
    },
    pause(e) {
      this.$emit("pause", e);
    },
    end(e) {
      this.$emit("end", e);
    },
    errorCallback: function (e) {
      this.$emit("errorCallback", e);
    },
    fullscreenChange(e) {
      this.$emit("fullscreenChange", e);
    },
  },
};
</script>
<style lang="less" scoped>
.HmMomentVideo {
  width: 100%;
  background: #fff;
  text,
  view {
    font-family: PingFangSC-Medium;
    text-align: left;
    letter-spacing: 0;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .topTitle {
    width: 100%;
    padding: 32rpx 28rpx 28rpx 22rpx;
    border-bottom: 2rpx solid #f2f5f7;
    &_img {
      display: flex;
      align-items: center;
      margin: 0rpx 22rpx;
      > img {
        width: 76rpx;
        height: 76rpx;
      }
    }
    &_title {
      &_name {
        line-height: 44rpx;
        font-size: 32rpx;
        color: #212121;
        font-weight: 500;
      }
      &_time {
        margin-top: 8rpx;
        font-size: 24rpx;
        color: #8b8b94;
        font-weight: 400;
      }
    }
  }
  .bottomContent {
    width: calc(100% - 172rpx);
    margin-left: 144rpx;
    margin-right: 28rpx;
    overflow: hidden;
    &_talk {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 32rpx 0rpx 20rpx;
      &_text {
        font-size: 28rpx;
        color: #464957;
        text-align: left;
        font-weight: 500;
        margin-right: 12rpx;
      }
    }
    &_video {
      #myVideo {
        width: 256rpx;
        height: 256rpx;
      }
    }
    &_state {
      width: 100%;
      margin: 48rpx 0rpx 88rpx;
      display: flex;
      align-items: center;
      &_text {
        font-size: 14px;
        color: #464957;
        font-weight: 400;
      }
      &_checkbox {
        margin: 0rpx 8rpx;
      }
      &_icon {
        margin-left: auto;
        margin-right: 0rpx;
      }
    }
  }
}
</style>