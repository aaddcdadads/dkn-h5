<template>
    <view class="container" @click="onClick">
      <view class="div">
        <view class="imgleft"
          ><img
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E5%AF%BC%E5%87%BAicon/%E6%97%B6%E9%97%B4%402x.png"
            alt=""
        /></view>
  
        <view class="content"
          ><span>活动报名时间：{{ item.time }}</span></view
        >
      </view>
      <view class="div">
        <view class="imgleft"
          ><img
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E5%AF%BC%E5%87%BAicon/%E6%97%B6%E9%97%B4%402x.png"
            alt=""
        /></view>
  
        <view class="content"
          ><span>报名截止时间：{{ item.closeTime }}</span></view
        >
      </view>
  
      <view class="div" @click="speed">
        <view class="imgleft"
          ><img
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E5%AF%BC%E5%87%BAicon/%E9%AA%91%E8%A1%8C%402x.png"
            alt=""
        /></view>
        <view class="item-tag">
          <span>{{ item.activityType }}</span>
        </view>
        <view class="content1">{{ item.requirements }}</view>
      </view>
      <view class="div" @click="paly">
        <view class="imgleft"
          ><img
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E5%AF%BC%E5%87%BAicon/%E8%B4%B9%E7%94%A8%402x.png"
            alt=""
        /></view>
  
        <view class="content1" style="display: flex">
          <view>活动报名费用：</view>
          <view style=""
            ><span v-for="(e, i) in item.projectList" :key="i" style="width: 100%; display: block ">{{ e.name }}</span
            >
            <!-- <span>{{ projectTwo }}</span> -->
            </view
          >
        </view>
      </view>
      <view class="div">
        <view class="imgleft"
          ><img
            src="https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E5%AF%BC%E5%87%BAicon/%E4%BA%BA%E6%95%B0%402x.png"
            alt=""
        /></view>
  
        <view class="content"
          ><span>已报名人数：{{ item.number }}人</span></view
        >
      </view>
    </view>
  </template>
  
  <script>
  export default {
    props: {
      /**
       * 数据
       */
      item: {
        type: Object,
        default: function () {
          return {
            time: "2023.11.01-2024.02.15",
            closeTime: "2023.11.01",
            activityType: "跑步",
            requirements: "1.314km/5.20km/9.99km",
            projectList: [{ name: "活动1" }, { name: "活动2" }],
            number:"12331"
          };
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
      /**
       * 文字色
       * @type Color
       */
       textColor: {
        type: String,
        default: '#d8477b'
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
    watch: {
     
    },
    methods: {
      onClick() {
        this.$emit("onClick");
      },
      speed() {
        this.$emit("speed");
        console.log("first");
      },
      paly() {
        this.$emit("play");
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .container {
    background: v-bind(backgroundColor);
    // background: transparent;
    width: 100%;
  }
  .div {
    position: relative;
    width: 100%;
    display: flex;
    color: v-bind(textColor);
    margin-bottom: 32rpx;
  }
  .imgleft {
    margin: 0 24rpx;
    width: 28rpx;
      height: 28rpx;
    > img {
     width: 100%;
     height: auto;
    }
  }
  .content {
    line-height: 40rpx;
    font-weight: 500;
  }
  .content1 {
    font-weight: 500;
  }
  .imgright {
    position: absolute;
    right: 0;
    float: right;
    width: 24rpx;
    > img {
      width: 24rpx;
      height: 24rpx;
      margin-top: 8rpx;
    }
  }
  
  .item-tag {
    background: #fff;
    border-radius: 8rpx;
    box-sizing: border-box;
    flex-shrink: 0;
    font-family: PingFangSC-Medium, PingFang SC;
  
    font-weight: 500;
    line-height: 10px;
    margin-right: 0.153846153846154rem;
    padding: 5px 6px;
    > span {
      color: v-bind(textColor);
      font-size: 10px;
      font-weight: 500;
    }
  }
  </style>
  