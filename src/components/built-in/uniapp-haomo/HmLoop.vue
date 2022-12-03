<template>
  <scroll-view
    :style="{ height: scrollHeight, width: '100%' }"
    :refresher-triggered="cRefresherTriggered"
    :refresher-enabled="cRefresherEnabled"
    :scroll-y="scrollY"
    :scroll-x="scrollX"
    :show-scrollbar="showScrollbar"
    @refresherrefresh="refresherrefresh"
    @scrolltolower="scrolltolower"
  >
    <!-- 
      @prop item - 数组条目数据
    -->
    <view v-for="(item, index) in value" :key="index">
      <slot :item="item">
        <view>循环内容</view>
      </slot>
    </view>
    <uni-load-more
      v-if="refreshConfig.show"
      :status="status"
      :showText="refreshConfig.show"
      :contentText="refreshConfig"
      @refreshConfig="clickLoadMore"
    ></uni-load-more>
  </scroll-view>
</template>
<script>
export default {
  props: {
    /**
     * 循环数组
     */
    value: {
      type: Array,
      default: []
    },
    /**
     * 横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 横向滚动
     */
     scrollY: {
      type: Boolean,
      default: false
    },
    /**
     * 滑动配置
     */
    refreshConfig: {
      type: Object,
      default: function () {
        return {
          show: false,
          contentdown: "显示更多",
          contentrefresh: "正在加载...",
          contentnomore: "没有更多数据了",
        };
      },
    },
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true,
    },
    layout(value) {
      this.cLayout = value;
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    leftAction(value) {
      this.cLeftAction = value;
    },
    imgStyle(value) {
      this.cImgStyle = value;
    },
  },
  mounted() {
    this.cList = this.mapData(this.list);
    this.cLayout = this.layout;
    this.cTextAlign = this.textAlign;
    this.cLeftAction = this.leftAction;
    this.cImgStyle = this.imgStyle;
  },
  data() {
    return {
      cList: [],
      cLayout:{},
      cTextAlign:"",
      cImgStyle: {},
      cLeftAction: true,
      cRefresherTriggered: false,
      cRefresherEnabled: true,
    };
  },
  methods: {
    change(e, item, index) {
      this.$emit("change", e, item, index);
    },
    bindClick(e, item, index) {
      this.$emit("bindClick", e, item, index);
    },
    itemClick(e, item, index) {
      this.$emit("itemClick", e, item, index);
    },
    imgClick(item, index) {
      this.$emit("imgClick", item, index);
    },
    scrolltolower() {
      console.log("到底了");
      this.$emit("scrolltolower");
    },
    refresherrefresh(e) {
      console.log("下拉触发", e);
      //下拉刷新
      let self = this;
      if (!this.cRefresherTriggered) {
        this.cRefresherTriggered = true; //下拉加载，先让其变true再变false才能关闭
        //关闭加载状态 (转动的圈)，需要一点延时才能关闭
        setTimeout((e) => {
          self.cRefresherTriggered = false;
        }, 1000);
      }
      this.$emit("refresherrefresh", e);
    },
    clickLoadMore(e) {
      this.$emit("clickLoadMore", e);
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.dataMap || Object.keys(this.dataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.dataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.dataMap[key]];
        });
      });
      //console.log("data", data);
      return data;
    },
  },
};
</script>
<style scoped lang="less">
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.outbox {
  width: 100%;
}
.list-right:not(:last-child) {
  width: 100%;
  margin-bottom: 24rpx;
}
/* 控制滑动按钮宽度,高度由图片高度+内边距控制 */
.list-right /deep/ .uni-swipe_button {
  padding: 0rpx 67rpx !important;
}
.content-box {
  background: #fff;
  padding: 24rpx 0rpx;
}
.right-box {
  margin-left: auto;
  margin-right: 0rpx;
}
.icon {
  display: flex;
  align-items: center;
}
.left-box .icon,
.left-box .image {
  margin-right: 24rpx;
}
.right-box .icon,
.right-box .image {
  margin-left: 24rpx;
}
.center-box {
  width: 100%;
  height: 128rpx;
  display: flex;
  justify-content: space-around;
}
.content-title {
  font-size: 32rpx;
  color: #0d0d0d;
  line-height: 48rpx;
  font-weight: 500;
}
.content-text {
  font-size: 24rpx;
  color: #404040;
  font-weight: 400;
  /deep/ .u-tag{
    padding: 6rpx 8rpx;
  }
}
.content-title,
.content-text {
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>