<template>
  <view class="view" style="display: flex;">
    <view v-for="(item, index) in funcList" :key="index"  @click="onClick()" :style="style">
      <view class="topbox">
        <view><img :src="item.bgUrl" /></view>
        <view :style="{ display: item.display }">
        </view>
      </view>

      <view class="bottombox" >
        <view class="bottom-one">
          <text>{{ item.textbottom }}</text>
        </view>
      </view>
    </view>
  </view>
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
        ];
      },
    },
    /**
     * 样式
     */
    style: {
      type: Object,
      default: function () {
        return [{ width: "100%", margin: "0 10px" }];
      },
    },
    /**
     * 背景色
     * @type Color
     */
     backgroundColor: {
      type: String,
      default: '#feeff7'
    },
  },

  data() {
    return {
      cLanguage: "zh",
      cType: 1,
      cTypeTwo: 1,
      isCollectDisabled: false,
      isLikeDisabled: false,
    };
  },

  methods: {
    onClick() {
      this.$emit("onClick", this.item);
    },
  },
};
</script>
<style lang="less" scoped>
.view{
  background: v-bind(backgroundColor);
  border-radius:8px;
  padding:24rpx 24rpx;
}
.container {
  background: transparent;

  border-radius: 15px;
  position: relative;

}

.topbox {
  width: 100%;

  > :first-child {
    width: 100%;
    height: 100%;
    position: relative;
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
    position: relative;
    z-index: 999;
    position: absolute;
    top: 0;
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
    color: #000000;
  }
}
</style>
