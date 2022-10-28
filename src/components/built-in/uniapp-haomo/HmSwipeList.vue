<template>
  <uni-swipe-action class="outbox">
    <scroll-view
      :style="{ height: scrollHeight, width: '100%' }"
      :refresher-triggered="cRefresherTriggered"
      :refresher-enabled="cRefresherEnabled"
      :scroll-y="true"
      :scroll-x="false"
      :show-scrollbar="showScrollbar"
      @refresherrefresh="refresherrefresh"
      @scrolltolower="scrolltolower"
    >
      <uni-swipe-action-item
        class="list-right"
        v-for="(item, index) in cList"
        :key="index"
        :left-options="cLeftAction ? options : null"
        :right-options="!cLeftAction ? options : null"
        :auto-close="autoClose"
        @change="change($event, item, index)"
        @click="bindClick($event, item, index)"
      >
        <!-- 
          @prop item - 数组条目数据
        -->
        <slot :item="item">
          <view class="content-box">
            <view v-if="item.leftImgSrc" class="image">
              <image
                :style="{ width: width, height: height }"
                :mode="mode"
                :src="item.leftImgSrc"
              ></image>
            </view>
            <view
              :class="item.leftImgSrc ? 'content' : 'content content-false'"
            >
              <text class="content-title">{{ item.title }}</text>
              <text class="content-text">{{ item.content }}</text>
            </view>
            <view
              :class="item.rightImgSrc ? 'icon-box icon-box-true' : 'icon-box'"
            >
              <u-icon
                v-if="img.iconname"
                :name="img.iconname"
                :size="img.size"
                @click="imgClick(item, index)"
              />
              <image
                v-else
                :src="img.imgsrc"
                mode="aspectFill"
                :style="{ width: img.size + 'px', height: img.size + 'px' }"
                @click="imgClick(item, index)"
              />
            </view>
            <view v-if="item.rightImgSrc" class="image">
              <image
                :style="{ width: width, height: height }"
                :mode="mode"
                :src="item.rightImgSrc"
              ></image>
            </view>
          </view>
        </slot>
      </uni-swipe-action-item>
      <uni-load-more
        v-if="contentText.show"
        :status="status"
        :showText="contentText.show"
        :contentText="contentText"
        @clickLoadMore="clickLoadMore"
      ></uni-load-more>
    </scroll-view>
  </uni-swipe-action>
</template>
<script>
export default {
  props: {
    /**
     * 是否左边操作
     */
    leftAction: {
      type: Boolean,
      default: true,
    },
    /**
     * 滑动配置
     */
    options: {
      type: Object,
      default: function () {
        return [
          {
            text: "编辑",
            style: {
              backgroundColor: "#3B89FF",
            },
          },
          {
            text: "删除",
            style: {
              backgroundColor: "#FF8B00",
            },
          },
        ];
      },
    },
    /**
     * 图片宽度
     */
    width: {
      type: String,
      default: "80px",
    },
    /**
     * 图片高度
     */
    height: {
      type: String,
      default: "50px",
    },
    /**
     * 图片模式
     * @type Enum
     * @options ["scaleToFill","aspectFit","aspectFill","widthFix","heightFix",""]
     */
    mode: {
      type: String,
      default: "",
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            title: "123",
            content: "321",
            leftImgSrc: "",
            rightImgSrc:
              "https://scpic.chinaz.net/files/pic/pic9/202206/apic41543.jpg",
          },
          {
            title: "123",
            content: "321",
            leftImgSrc:
              "https://scpic.chinaz.net/files/pic/pic9/202206/apic41543.jpg",
            rightImgSrc: "",
          },
          {
            title: "123",
            content: "321",
            leftImgSrc:
              "https://scpic.chinaz.net/files/pic/pic9/202206/apic41543.jpg",
            rightImgSrc:
              "https://scpic.chinaz.net/files/pic/pic9/202206/apic41543.jpg",
          },
        ];
      },
    },
    /**
     * 图片图标配置
     */
    img: {
      type: Object,
      default: function () {
        return {
          iconname: "",
          imgsrc:
            "https://scpic.chinaz.net/files/pic/pic9/202206/apic41543.jpg",
          color: "",
          size: "22",
        };
      },
    },
    /**
     * 数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          imgSrc: "imgSrc",
          name: "name",
          text: "text",
        };
      },
    },
    /**
     * 自动关闭
     */
    autoClose: {
      type: Boolean,
      default: false,
    },
    /**
     * 下拉高度
     */
    scrollHeight: {
      type: String,
      default: "100%",
    },
    /**
     * 滚动条
     */
    showScrollbar: {
      type: Boolean,
      default: true,
    },
    /**
     * 上滑状态
     * @type Enum
     * @options ["more","loading","noMore"]
     */
    status: {
      type: String,
      default: "more",
    },
    /**
     * 上滑文本
     */
    contentText: {
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
    leftAction(value) {
      this.cLeftAction = value;
    },
  },
  mounted() {
    this.cList = this.mapData(this.list);
    this.cLeftAction = this.leftAction;
  },
  data() {
    return {
      cList: [],
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
<style scoped>
.outbox {
  width: 100%;
}

.list-right:not(:last-child) {
  width: 100%;
  margin-bottom: 24rpx;
}

.content-box {
  display: flex;
  background: #fff;
  padding: 12rpx 16rpx;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-title {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}

.content-text {
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
}

.content {
  display: flex;
  flex-direction: column;
  margin-left: 24rpx;
}
.content-false {
  margin-left: 0rpx;
}
.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0rpx;
}
.icon-box-true{
  margin-right: 12rpx;
}
</style>