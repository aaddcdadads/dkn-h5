<template>
  <view class="hm-news-detail" @click="onClick(cOptions)">
    <view class="hd">
      <img class="yunshu" :src="cOptions.yunshu" />
      <view class="container">
        <view class="outer">
          <span class="author">{{ cOptions.author }}</span>
          <view class="wrap">
            <img class="like" :src="cOptions.like" />
            <img class="share" :src="cOptions.share" />
          </view>
        </view>
        <span class="time">{{ cOptions.time }}</span>
      </view>
    </view>
    <span class="title">{{ cOptions.title }}</span>
    <view class="main">
      <view class="entryPicWrap"><img class="img" :src="cOptions.img" /></view>
    </view>
    <view class="ft">
      <span class="content">{{ cOptions.content }}</span>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmNewsDetail",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          yunshu:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_0.png",
          author: "毫末科技",
          like: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_1.png",
          share:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_2.png",
          time: "2 minutes ago",
          title: "如何用 Python 在笔记本上分析100GB 数据",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_3.png",
          content:
            "第 1 种是对数据进行子抽样，但它有一个明显缺点：可能因忽略部分数据而错失关键信息，甚至误解数据表达的含义。第 2 种是使用分布式计算。虽然在某些情况下这是一种有效的方法，但是管理和维护集群会带来巨大开销。想象一下，要为一个刚超出内存大小、大概 30-50GB 的数据集就建立一套集群，对我来说，这似乎有点“用力过猛”。",
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
.hm-news-detail {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  width: 750rpx;
  height: 1228rpx;
}

.hd {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 52rpx;
  width: 748rpx;
}

.yunshu {
  width: 76rpx;
  height: 76rpx;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.09));
}

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20rpx;
  height: 76rpx;
}

.outer {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rpx;
  width: 510rpx;
  height: 46rpx;
}

.author {
  max-width: 368rpx;
  height: 44rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 44rpx;
  white-space: nowrap;
  color: #000000;
  font-size: 32rpx;
  font-weight: 400;
}

.wrap {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 12rpx;
  height: 34rpx;
}

.like {
  opacity: 0.5;
  width: 38rpx;
  height: 34rpx;
}

.share {
  opacity: 0.5;
  margin-left: 52rpx;
  width: 30rpx;
  height: 30rpx;
}

.time {
  opacity: 0.6;
  max-width: 560rpx;
  height: 28rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 28rpx;
  white-space: pre;
  color: #000000;
  font-family: Helvetica;
  font-size: 24rpx;
  font-weight: normal;
}

.title {
  margin-top: 36rpx;
  margin-left: 68rpx;
  width: 512rpx;
  height: 100rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 50rpx;
  white-space: pre-wrap;
  color: #000000;
  font-size: 36rpx;
  font-weight: 400;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16rpx;
  width: 748rpx;
}

.entryPicWrap {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 686rpx;
  height: 368rpx;
}

.img {
  position: relative;
  width: 686rpx;
  height: 368rpx;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));
}

.ft {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50rpx;
  width: 748rpx;
}

.content {
  width: 670rpx;
  height: 496rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 62rpx;
  letter-spacing: 0px;
  white-space: pre-wrap;
  color: #000000;
  font-size: 36rpx;
  font-weight: 400;
}
</style>
