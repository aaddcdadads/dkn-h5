<template>
  <view>
    <view class="hm-dynamic-detail-card" @click="onClick()">
      <view class="box">
        <text class="minutesAgo">{{ minutesAgo }}</text>
        <view class="hd">
          <text class="name">{{ name }}</text>
          <image class="avator" :src="avator" />
          <text class="introduce">{{ introduce }}</text>
        </view>
        <text class="dynamicDetail">{{ dynamicDetail }}</text>
        <image class="dynamicImage" :src="dynamicImage" />
        <text class="submain">{{ submain }}</text>
        <view class="row" />
        <view class="ft">
          <image class="Heart" :src="Heart" />
          <image class="messagingspeechbub" :src="messagingspeechbub" />
          <image class="tiaozhuandaomulu" :src="tiaozhuandaomulu" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmDynamicDetailCard",
  props: {
    /**
     * 时间
     */
    minutesAgo: {
      type: String,
      default: "5分钟前",
    },
    /**
     * 姓名
     */
    name: {
      type: String,
      default: "张三",
    },
    /**
     * 头像
     */
    avator: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
    },
    /**
     * 介绍
     */
    introduce: {
      type: String,
      default: "xx国际ceo",
    },
    /**
     * 场景
     */
    dynamicDetail: {
      type: String,
      default: "一切尽在计划之中",
    },
    /**
     * 图片
     */
    dynamicImage: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_4.png",
    },

    /**
     * 描述
     */
    submain: {
      type: String,
      default: "124 喜欢",
    },
    /**
     * 点赞图标
     */
    Heart: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_2.png",
    },
    /**
     * 信息图标
     */
    messagingspeechbub: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_1.png",
    },
    /**
     * 跳转图标
     */
    tiaozhuandaomulu: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_0.png",
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
.hm-dynamic-detail-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 1066.22rpx;
}

.box {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 14.19rpx;
  border-radius: 16.22rpx;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  width: 721.62rpx;
  height: 985.14rpx;
}

.minutesAgo {
  position: absolute;
  top: 111.49rpx;
  left: 145.95rpx;
  opacity: 1;
  line-height: 40.54rpx;
  letter-spacing: 0.36px;
  white-space: nowrap;
  color: #8a8a8a;
  font-size: 20.27rpx;
  font-weight: 400;
}

.hd {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 32.43rpx;
  margin-left: 32.43rpx;
  width: 214.86rpx;
  height: 97.3rpx;
}

.name {
  position: absolute;
  top: 14.19rpx;
  right: 42.57rpx;
  opacity: 1;
  line-height: 40.54rpx;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #222222;
  font-size: 28.38rpx;
  font-weight: 400;
}

.avator {
  position: relative;
  margin-right: 16.22rpx;
  width: 97.3rpx;
  height: 97.3rpx;
}

.introduce {
  position: relative;
  opacity: 1;
  margin-top: 50.68rpx;
  line-height: 40.54rpx;
  letter-spacing: 0.36px;
  white-space: nowrap;
  color: #8a8a8a;
  font-size: 20.27rpx;
  font-weight: 400;
}

.dynamicDetail {
  position: relative;
  opacity: 1;
  margin-top: 32.43rpx;
  margin-left: 32.43rpx;
  max-width: 664.86rpx;
  height: 40.54rpx;
  overflow: hidden;
  text-indent: 6px;
  text-overflow: ellipsis;
  line-height: 40.54rpx;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #222222;
  font-size: 28.38rpx;
  font-weight: 400;
}

.dynamicImage {
  position: relative;
  margin-top: 28.38rpx;
  width: 721.62rpx;
  height: 583.78rpx;
}

.submain {
  position: relative;
  opacity: 1;
  margin-top: 22.3rpx;
  margin-left: 32.43rpx;
  max-width: 664.86rpx;
  height: 40.54rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40.54rpx;
  letter-spacing: 0.5px;
  white-space: pre;
  color: #222222;
  font-size: 28.38rpx;
  font-weight: 400;
}

.row {
  position: relative;
  align-self: center;
  margin-top: 12.16rpx;
  background-color: #dcdcdc;
  width: 656.76rpx;
  height: 2.03rpx;
}

.ft {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26.35rpx;
  width: 658.78rpx;
  height: 36.49rpx;
}

.Heart {
  width: 44.59rpx;
  height: 36.49rpx;
}

.messagingspeechbub {
  width: 36.49rpx;
  height: 36.49rpx;
}

.tiaozhuandaomulu {
  width: 34.46rpx;
  height: 36.49rpx;
}
</style>
