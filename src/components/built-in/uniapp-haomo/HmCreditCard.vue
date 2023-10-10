<template>
  <view>
    <view class="hm-credit-card" @click="onClick()">
      <view class="container">
        <view class="header">
          <view class="avatar">
            <text class="avatarText">{{ avatarText }}</text>
          </view>
          <view class="person">
            <view class="name">
              <text class="nameText">{{ nameText }}</text>
              <image class="nameIcon" :src="nameIcon" />
            </view>
            <text class="introduce">{{ introduce }}</text>
          </view>
        </view>
        <view class="main">
          <view class="backgourdLine"><view class="pointLine" /></view>
        </view>
        <view class="bottom">
          <text class="curriculum">{{ curriculum }}</text>
          <text class="points">{{ points }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmCreditCard",
  props: {
    /**
     * 姓
     */
    avatarText: {
      type: String,
      default: "王",
    },
    /**
     * 姓名
     */
    nameText: {
      type: String,
      default: "王小二",
    },
    /**
     * 更多
     */
    nameIcon: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
    },
    /**
     * 介绍
     */
    introduce: {
      type: String,
      default: "介绍",
    },
    /**
     * 课程
     */
    curriculum: {
      type: String,
      default: "课程",
    },

    /**
     * 分数
     */
    points: {
      type: String,
      default: "79分",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.hm-credit-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 455.84rpx;
}

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 377.92rpx;
}

.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 718.83rpx;
  height: 116.88rpx;
}

.avatar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 58.44rpx;
  background-color: #eeeeff;
  padding-right: 38.96rpx;
  padding-left: 38.96rpx;
  height: 116.88rpx;
}

.avatarText {
  opacity: 1;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #5351fb;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.person {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 29.22rpx;
  height: 116.88rpx;
}

.name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 453.9rpx;
}

.nameText {
  opacity: 1;
  max-width: 395.45rpx;
  height: 46.75rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  white-space: pre;
  color: #141821;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.nameIcon {
  margin-top: 40.91rpx;
  width: 35.06rpx;
  height: 7.79rpx;
}

.introduce {
  opacity: 1;
  max-width: 490.91rpx;
  height: 40.91rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40.91rpx;
  white-space: pre;
  color: #858997;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 58.44rpx;
  width: 718.83rpx;
}

.backgourdLine {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  border-radius: 3.9rpx;
  background-color: #eeeff3;
  width: 603.9rpx;
  height: 9.74rpx;
}

.pointLine {
  border-radius: 3.9rpx;
  background-color: #5351fb;
  width: 370.13rpx;
  height: 9.74rpx;
}

.bottom {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 29.22rpx;
  padding-right: 56.49rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
}

.curriculum {
  opacity: 1;
  width: 173.38rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.points {
  opacity: 1;
  width: 148.05rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: pre;
  color: #858997;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}
</style>
