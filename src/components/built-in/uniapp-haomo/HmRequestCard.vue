<template>
  <view>
    <view class="hm-request-card" @click="onClick()">
      <view class="box">
        <view class="head">
          <view class="outer">
            <image class="avator" :src="avator" />
            <view class="wrap">
              <text class="name">{{ name }}</text>
              <text class="address">{{ address }}</text>
            </view>
          </view>
          <image class="statimg" :src="statimg" />
        </view>
        <view class="body">
          <view class="block">
            <image class="largeIcon" :src="largeIcon" />
            <text class="agree">{{ agree }}</text>
          </view>
          <view class="tagWrap">
            <text class="cancel">{{ cancel }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmRequestCard",
  props: {
    /**
     * 头像
     */
    avator: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
    },
    /**
     * 姓名
     */
    name: {
      type: String,
      default: "马莉",
    },
    /**
     * 地址
     */
    address: {
      type: String,
      default: "上海",
    },
    /**
     * 更多
     */
    statimg: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
    },
    /**
     * 大图标
     */
    largeIcon: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_2.png",
    },
    /**
     * 同意
     */
    agree: {
      type: String,
      default: "同意",
    },
    /**
     * 取消
     */
    cancel: {
      type: String,
      default: "取消",
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
.hm-request-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 448.05rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 15.58rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 370.13rpx;
}

.head {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 58.44rpx;
  width: 598.05rpx;
  height: 116.88rpx;
}

.outer {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 116.88rpx;
}

.avator {
  margin-right: 29.22rpx;
  width: 116.88rpx;
  height: 116.88rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 62.34rpx;
  height: 83.77rpx;
}

.name {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.address {
  position: relative;
  opacity: 1;
  margin-top: 5.84rpx;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 27.27rpx;
  font-weight: normal;
}

.statimg {
  width: 35.06rpx;
  height: 7.79rpx;
}

.body {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  width: 444.16rpx;
  height: 77.92rpx;
}

.block {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 144.16rpx;
  height: 77.92rpx;
}

.largeIcon {
  position: absolute;
  top: 0;
  left: 0;
  width: 144.16rpx;
  height: 77.92rpx;
}

.agree {
  position: relative;
  opacity: 1;
  max-width: 95.45rpx;
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

.tagWrap {
  width: 144.16rpx;
  height: 77.92rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 19.48rpx;
  background-color: #c3c6d1;

  height: 77.92rpx;
  line-height: 77.92rpx;
  text-align: center;
}

.cancel {
  position: relative;
  opacity: 1;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
  width: 100%;
}
</style>
