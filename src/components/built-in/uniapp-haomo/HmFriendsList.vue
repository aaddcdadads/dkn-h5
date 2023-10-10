<template>
  <view class="hm-friends-list" @click="onClick(cOptions)">
    <view class="firendClass">
      <view class="hd">
        <text class="friendsList">{{ options.friendsList }}</text>
        <image class="img" :src="options.img" />
      </view>
      <view class="bd">
        <view class="col1">
          <image class="avator" :src="options.avator" />
          <text class="miller">{{ options.miller }}</text>
        </view>
        <view class="col2">
          <image class="user" :src="options.user" />
          <text class="lingna">{{ options.lingna }}</text>
        </view>
        <view class="col3">
          <view class="wrap">
            <text class="word">{{ options.word }}</text>
          </view>
          <text class="tom">{{ options.tom }}</text>
        </view>
      </view>
      <view class="main">
        <view class="headClass">
          <image class="userImage" :src="options.userImage" />
          <text class="than">{{ options.than }}</text>
        </view>
        <view class="portraitClass">
          <view class="block">
            <text class="text">{{ options.text }}</text>
          </view>
          <text class="louis">{{ options.louis }}</text>
        </view>
        <view class="userClass">
          <image class="userImg" :src="options.userImg" />
          <text class="romi">{{ options.romi }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmFriendsList",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          friendsList: "朋友表",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          miller: "张三",
          user: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          lingna: "李四",
          word: "MY",
          tom: "王五",
          userImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          than: "黄磊",
          text: "LW",
          louis: "赵高",
          userImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          romi: "罗生",
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
.hm-friends-list {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 744.16rpx;
}

.firendClass {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 666.23rpx;
}

.hd {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 62.34rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
}

.friendsList {
  opacity: 1;
  width: 151.95rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: pre;
  color: #858997;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.img {
  margin-top: 19.48rpx;
  width: 35.06rpx;
  height: 7.79rpx;
}

.bd {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-top: 58.44rpx;
  padding-right: 27.27rpx;
  padding-left: 29.22rpx;
}

.col1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 220.13rpx;
  height: 192.86rpx;
}

.avator {
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.miller {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 116.88rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.col2 {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 220.13rpx;
  height: 192.86rpx;
}

.user {
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.lingna {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 114.94rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.col3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1.95rpx;
  width: 220.13rpx;
  height: 192.86rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 58.44rpx;
  background-color: #eeeeff;
  width: 116.88rpx;
  height: 116.88rpx;
}

.word {
  opacity: 1;
  max-width: 93.51rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #5351fb;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.tom {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 146.1rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.main {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-top: 58.44rpx;
  padding-right: 27.27rpx;
  padding-left: 29.22rpx;
}

.headClass {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 220.13rpx;
  height: 192.86rpx;
}

.userImage {
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.than {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 116.88rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.portraitClass {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 220.13rpx;
  height: 192.86rpx;
}

.block {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 58.44rpx;
  background-color: #fec4b0;
  width: 116.88rpx;
  height: 116.88rpx;
}

.text {
  opacity: 1;
  max-width: 93.51rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #f64000;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.louis {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 130.52rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.userClass {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1.95rpx;
  width: 220.13rpx;
  height: 192.86rpx;
}

.userImg {
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.romi {
  opacity: 1;
  margin-top: 29.22rpx;
  max-width: 146.1rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}
</style>
