<template>
  <view>
    <view class="hm-sms-list-card" @click="onClick(e)">
      <view class="box">
        <image class="xueshengdangan" :src="xueshengdangan" />
        <image class="primary" :src="primary" />
        <view class="sub">
          <view class="outer">
            <view class="wrap">
              <text class="paybak">{{ paybak }}</text>
              <text class="company">{{ company }}</text>
            </view>
            <text class="txt">{{ txt }}</text>
          </view>
          <view class="block">
            <text class="desc">{{ desc }}</text>
          </view>
        </view>
        <image class="side" :src="side" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmSmsListCard",
  props: {
    /**
     * 图片
     */
    xueshengdangan: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%85%89-%E8%93%9D%E8%89%B2%402x.png",
    },
    /**
     * 图片2
     */
    primary: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%85%89-%E8%93%9D%E8%89%B2%402x.png",
    },
    /**
     * 标题1
     */
    paybak: {
      type: String,
      default: "IM PAYBAK",
    },
    /**
     * 标题2
     */
    company: {
      type: String,
      default: "公司",
    },
    /**
     * 标题3
     */
    txt: {
      type: String,
      default: "3:46 PM",
    },
    /**
     * 描述
     */
    desc: {
      type: String,
      default: "糟糕的星期三！通常用于演示",
    },
    /**
     * 图片3
     */
    side: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%85%89-%E8%93%9D%E8%89%B2%402x.png",
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
.hm-sms-list-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 315.18rpx;
}

.box {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  margin-left: 16.1rpx;
  border-radius: 32.21rpx;
  background-color: #ffffff;
  width: 720.09rpx;
  height: 223.16rpx;
  overflow: hidden;
}

.xueshengdangan {
  position: absolute;
  top: 66.72rpx;
  left: 69.02rpx;
  width: 82.82rpx;
  height: 110.43rpx;
}

.primary {
  position: relative;
  margin-top: 46.01rpx;
  margin-right: 34.51rpx;
  width: 128.83rpx;
  height: 115.03rpx;
}

.sub {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 36.81rpx;
  margin-right: 29.91rpx;
  height: 112.73rpx;
}

.outer {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 421.01rpx;
  height: 50.61rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 46.01rpx;
}

.paybak {
  opacity: 1;
  max-width: 220.86rpx;
  height: 46.01rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 46.01rpx;
  white-space: pre;
  color: #34c1fe;
  font-family: Helvetica;
  font-size: 32.21rpx;
  font-weight: normal;
}

.company {
  opacity: 1;
  max-width: 80.52rpx;
  height: 46.01rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 46.01rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-size: 32.21rpx;
  font-weight: 400;
}

.txt {
  opacity: 1;
  line-height: 46.01rpx;
  white-space: pre;
  color: #b3c0ce;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 25.31rpx;
  font-weight: normal;
}

.block {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 16.1rpx;
  height: 46.01rpx;
}

.desc {
  opacity: 1;
  line-height: 46.01rpx;
  white-space: nowrap;
  color: #15232e;
  font-size: 25.31rpx;
  font-weight: 400;
}

.side {
  position: relative;
  margin-top: 46.01rpx;
  width: 16.1rpx;
  height: 27.61rpx;
}
</style>
