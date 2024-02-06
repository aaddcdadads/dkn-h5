<template>
  <scroll-view scroll-x="true" class="kite-classify-scroll">
    <view
      class="kite-classify-cell"
      v-for="(item, index) in funcList"
      :key="index"
      @click="onClick()"
    >
      <view class="topbox">
        <view><img :src="item.bgUrl" @click="clickImg(item)" /></view>
        <view :style="{ display: item.display }"> </view>
      </view>

      <view class="bottombox">
        <view class="bottom-one">
          <text>{{ item.textbottom }}</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  props: {
    /**
     * 数据项
     */
    funcList: {
      type: Array,
      default: function () {
        return [
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",

            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://image-cdn.hellobike.com/repertoryImg/3006145221802065920172514679.png?Expires=1714371878&OSSAccessKeyId=LTAIwDP3dFcdWEUd&Signature=NaaxFxgeRk817OzHKjqQbu8zCX4%3D",

            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",

            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",

            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",

            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",

            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
        ];
      },
    },

    /**
     * 背景色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#feeff7",
    },
    /**
     * 文字色
     * @type Color
     */
    textColor: {
      type: String,
      default: "#000000",
    },
  },

  data() {
    return {};
  },

  methods: {
    onClick() {
      this.$emit("onClick", this.item);
    },
    clickImg(e) {
      const images = this.funcList.map((item) => item.bgUrl);
      uni.previewImage({
        urls: images, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
        current: "", // 当前显示图片的http链接，默认是第一个
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {},
      });
    },
  },
};
</script>
<style lang="less" scoped>
.kite-classify-scroll {
  padding-top: 24rpx;
  overflow: hidden;
  white-space: nowrap;
  background: v-bind(backgroundColor);
  border-radius: 8px;
}
.kite-classify-cell {
  display: inline-block;
  width: calc(25% - 20px);
  margin: 0 10px;
}
.topbox {
  width: 100%;

  > :first-child {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    > img {
      height: auto;
      border-radius: 8px;
      width: 100% !important;
    }
  }
  > :last-child {
    background: #000000;
    border-radius: 15px 0 15px 0;
    text-align: center;
    z-index: 999;
    float: left;
    > span {
      padding: 4rpx 16rpx;
      font-size: 20rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      height: 40rpx;
      line-height: 40rpx;
    }
  }
}

.bottombox {
  // display: flex;
  background: transparent;
}

.bottom-one {
  height: 80rpx;
  line-height: 80rpx;
  width: 100%;
  text-align: center !important;
  overflow: hidden; /*超出内容隐藏*/
  text-overflow: ellipsis; /*超出内容为省略号*/
  display: -webkit-box; /*内容不换行*/
  -webkit-line-clamp: 1; /*超出几行*/
  -webkit-box-orient: vertical;

  > text {
    font-size: 28rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: v-bind(textColor);
  }
}
</style>
