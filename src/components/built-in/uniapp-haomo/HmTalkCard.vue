<template>
  <view class="hm-talk-card" @click="onClick(cOptions)">
    <view class="head">
      <view class="state">
        <view class="imghead">
          <image class="avator" :src="cOptions.avator" />
          <text class="name">{{ cOptions.name }}</text>
        </view>
        <image class="stateimg" :src="cOptions.stateimg" />
      </view>
      <view class="main">
        <text class="text">{{ cOptions.text }}</text>
      </view>
      <view class="body">
        <view class="block">
          <image class="iconfriendsHelp" :src="cOptions.iconfriendsHelp" />
          <text class="num">{{ cOptions.num }}</text>
          <text class="like">{{ cOptions.like }}</text>
        </view>
        <view class="group">
          <image class="iconTest" :src="cOptions.iconTest" />
          <text class="commentNum">{{ cOptions.commentNum }}</text>
          <text class="comments">{{ cOptions.comments }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmTalkCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          name: "黄三环",
          stateimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          text: "1582年，“咖啡”一词通过荷兰语koffie进入英语…",
          iconfriendsHelp:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25252_0_0.png",
          num: "234",
          like: "喜欢",
          iconTest:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25252_0_1.png",
          commentNum: "67",
          comments: "条评论",
        };
      },
    },
  },
  data() {
    return {
      cOptions: {},
    };
  },
  watch: {
    options: {
      handler: function (value, oldValue) {
        this.cOptions = JSON.parse(JSON.stringify(value));
      },
      deep: true,
    },
  },
  mounted() {
    this.cOptions = JSON.parse(JSON.stringify(this.options));
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e);
    },
  },
};
</script>
<style>
.hm-talk-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 510.39rpx;
}

.head {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 13.64rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #5351fb;
  width: 720.78rpx;
  height: 432.47rpx;
}

.state {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 58.44rpx;
  width: 598.05rpx;
  height: 58.44rpx;
}

.imghead {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 58.44rpx;
}

.avator {
  margin-right: 29.22rpx;
  width: 58.44rpx;
  height: 58.44rpx;
}

.name {
  opacity: 1;
  max-width: 259.09rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.stateimg {
  width: 35.06rpx;
  height: 7.79rpx;
}

.main {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: 62.34rpx;
  width: 601.95rpx;
  height: 38.96rpx;
}

.text {
  font-weight: normal;
  font-size: 31.17rpx;
  color: #ffffff;
  line-height: 38.96rpx;
  opacity: 1;
  position: absolute;
  top: 0;
  float: left;
  white-space: nowrap;
  font-family: Helvetica;
}

.body {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 66.23rpx;
  margin-left: 64.29rpx;
  width: 428.57rpx;
  height: 38.96rpx;
}

.block {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 38.96rpx;
}

.iconfriendsHelp {
  margin-right: 15.58rpx;
  width: 35.06rpx;
  height: 29.22rpx;
}

.num {
  opacity: 1;
  max-width: 64.29rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.like {
  opacity: 1;
  max-width: 77.92rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 31.17rpx;
  font-weight: 400;
}

.group {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 38.96rpx;
}

.iconTest {
  margin-right: 13.64rpx;
  width: 38.96rpx;
  height: 37.01rpx;
}

.commentNum {
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.comments {
  opacity: 1;
  max-width: 114.94rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 31.17rpx;
  font-weight: 400;
}
</style>
