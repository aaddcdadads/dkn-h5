<template>
  <view class="hm-comment-items-card" @click="onClick(cOptions)">
    <view class="primary">
      <view class="shopCreditWrap">
        <image class="shopCreditLv1" :src="cOptions.shopCreditLv1" />
      </view>
      <text class="daysAgo">{{ cOptions.daysAgo }}</text>
      <text class="info">{{ cOptions.info }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmCommentItemsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          shopCreditLv1:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20200326%2F09311362830_207x90.gif&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669633573&t=7c2f47e4acbaf38c640fdc86c6ab5403",
          daysAgo: "3 days ago",
          info: "老王回复了您",
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
.hm-comment-items-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 750rpx;
  height: 219.3rpx;
  position: relative;
  background-color: #f3f7ff;
}

.primary {
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15.35rpx;
  border-radius: 24.12rpx;
  background-color: #ffffff;
  padding-right: 13.16rpx;
  padding-left: 35.09rpx;
  width: 719.3rpx;
  height: 131.58rpx;
}

.shopCreditWrap {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 39.47rpx;
  height: 70.18rpx;
}

.shopCreditLv1 {
  margin-right: 17.54rpx;
  width: 52.63rpx;
  height: 52.63rpx;
}

.daysAgo {
  position: relative;
  opacity: 1;
  margin-top: 43.86rpx;
  line-height: 43.86rpx;
  white-space: pre;
  color: #7d90aa;
  font-family: Helvetica;
  font-size: 26.32rpx;
  font-weight: normal;
}

.info {
  font-weight: normal;
  font-size: 28.51rpx;
  color: #092058;
  line-height: 43.86rpx;
  opacity: 1;
  position: absolute;
  top: 43.86rpx;
  left: 105.26rpx;
  white-space: pre;
  font-family: Helvetica;
}
</style>
