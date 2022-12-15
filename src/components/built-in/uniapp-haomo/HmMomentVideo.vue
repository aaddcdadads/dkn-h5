<template>
  <view class="HmMomentVideo">
    <view class="topTitle flex-row">
      <view class="topTitle_img"><img :src="imgSrc" /></view>
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
        <view class="bottomContent_state_iconView">
          <u-icon
            class="bottomContent_state_iconView_icon"
            name="more-dot-fill"
            size="40"
            color="#9797A8"
            @click="moreDotClick"
          ></u-icon>
          <view id="popupShowView" class="popupShowView">
            <view
              class="moment_video_content"
              :class="{
                moment_video_show: popupShow,
                moment_video_zIndex:
                  popupShow && contentStyle.position != 'relative',
              }"
              :style="contentStyle"
            >
              <slot>
                <view
                  v-for="btn in popupBtn"
                  :key="btn"
                  class="moment_video_content_btn"
                  @click="btnClick(btn)"
                  >{{ btn }}</view
                >
              </slot>
            </view>
            <view
              @touchmove.stop.prevent="stop"
              class="moment_video_mask"
              :class="{ moment_video_show: popupShow }"
              :style="{ backgroundColor: mask.bgColor }"
              v-if="mask.show"
              @tap="handleClose(popupShow)"
            >
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmMomentVideo",
  props: {
    /**
     * 头像地址
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
          enableDanmu: false, //是否展示弹幕，只在初始化时有效，不能动态变更
          pageGesture: false, //在非全屏模式下，是否开启亮度与音量调节手势
          showFullscreenBtn: true, //是否显示全屏按钮
          showPlayBtn: false, //是否显示视频底部控制栏的播放按钮
          showCenterPlayBtn: true, //是否显示视频中间的播放按钮
          enableProgressGesture: true, //是否开启控制进度的手势
          showMuteBtn: false, //是否显示静音按钮
          objectFit: "contain", //当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖
        };
      },
    },
    /**
     * 弹出层样式
     */
    contentStyle: {
      type: Object,
      default: function () {
        return {
          width: "auto",
          backgroundColor: "#f1f1f1",
          borderRadius: "8rpx",
          color: "#333333",
          overflow: "hidden",
          position: "fixed",
          left: "auto",
          right: "auto",
          bottom: "auto",
          top: "auto",
          boxShadow: "0px 2px 15px 0px rgba(218,225,232,0.5)",
          transform: "translate(0,0)",
        };
      },
    },
    /**
     * 遮罩样式
     */
    mask: {
      type: Object,
      default: function () {
        return {
          show: true,
          bgColor: "transparent",
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
      popupBtn: ["置顶", "删除"],
      popupShow: false,
    };
  },
  methods: {
    handleClose(e) {
      if (!e) {
        return;
      }
      this.close();
    },
    close() {
      this.popupShow = false;
    },
    stop() {
      return false;
    },
    btnClick(e) {
      this.$emit("btnClick", e);
      this.close();
    },
    checkBoxChange(e) {
      this.$emit("checkBoxChange", e);
    },
    moreDotClick(e) {
      this.popupPosition();
      this.popupShow = true;
      this.$emit("moreDotClick", e);
    },
    popupPosition() {
      // 完善移动端
      // h5
      let icon = document.getElementsByClassName("bottomContent_state_iconView_icon");
      let popup = document.getElementsByClassName("moment_video_content");
      let icon_obj = {
        w: icon[0].offsetWidth,
        h: icon[0].offsetHeight,
        t: icon[0].offsetTop,
        l: icon[0].offsetLeft,
      }
      let popup_obj = {
        w: popup[0].offsetWidth,
        h: popup[0].offsetHeight,
        t: popup[0].offsetTop,
        l: popup[0].offsetLeft,
      };
      let X=0,Y;
      if (popup_obj.h + popup_obj.t >= window.innerHeight) {
        Y = (popup_obj.h + (icon_obj.h * 1.2)) * -1 + "px";
      } else {
        Y = icon_obj.h * 0.2 + "px";
      }
      this.contentStyle.transform = "translate("+ X +"," + Y + ")";
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
      position: relative;
      &_text {
        font-size: 14px;
        color: #464957;
        font-weight: 400;
      }
      &_checkbox {
        margin: 0rpx 8rpx;
      }
      &_iconView {
        margin-left: auto;
        margin-right: 0rpx;
        position: relative;
        &_icon {
        }
      }
    }
  }
  // 弹出层
  .popupShowView {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .moment_video {
      &_content {
        z-index: 1;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
        &_btn {
          background: #fff;
          text-align: center;
          padding: 12rpx 20rpx;
          margin-bottom: 2rpx;
        }
        &_btn:last-child {
          margin-bottom: 0rpx;
        }
      }
      &_triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        z-index: 997;
      }
      &_mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 995;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
      }
      &_show {
        opacity: 1;
        visibility: visible;
      }
      &_zIndex {
        z-index: 996;
      }
    }
  }
}
</style>