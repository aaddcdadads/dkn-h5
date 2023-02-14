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
          <view
            class="content-box flex-row"
            @click="itemClick($event, item, index)"
          >
            <view class="left-box flex-row">
              <view
                v-if="(img.iconname || img.imgsrc) && cLayout['leftIconBtn']"
                class="icon"
                :style="{ marginLeft: img.space }"
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
                  :style="{ width: img.width, height: img.height }"
                  @click="imgClick(item, index)"
                />
              </view>
              <image
                v-if="item.leftImgSrc && cLayout['leftImg']"
                class="image"
                :style="cImgStyle"
                :mode="mode"
                :src="item.leftImgSrc"
              ></image>
            </view>
            <view
              class="center-box flex-col"
              :style="{ textAlign: cTextAlign }"
            >
              <text class="content-title"
                >{{ item.title
                }}<text class="content-title_sub">{{
                  item.subTitle
                }}</text></text
              >
              <text class="content-text">
                <u-tag
                  v-if="item.tagText"
                  :text="item.tagText"
                  color="#8b8b8b"
                  bgColor="#e6e6e6"
                  borderColor="transparent"
                ></u-tag>
                {{ item.content }}
              </text>
            </view>
            <view class="right-box flex-row">
              <image
                v-if="item.rightImgSrc && cLayout['rightImg']"
                class="image"
                :style="cImgStyle"
                :mode="mode"
                :src="item.rightImgSrc"
              ></image>
              <view
                v-if="(img.iconname || img.imgsrc) && cLayout['rightIcon']"
                class="icon"
                :style="{ marginRight: img.space }"
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
                  :style="{ width: img.width, height: img.height }"
                  @click="imgClick(item, index)"
                />
              </view>
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
import { cloneDeep } from "/@/utils/util";
import jp from "jsonpath";
import { getAction } from "/@/request/http";

export default {
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            title: "天安物业",
            content: "今日周年活动注意观察.",
            leftImgSrc:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20200326%2F09311362830_207x90.gif&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669633573&t=7c2f47e4acbaf38c640fdc86c6ab5403",
            rightImgSrc: "",
          },
          {
            title: "天安物业",
            content: "今日周年活动注意观察.",
            leftImgSrc:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20200326%2F09311362830_207x90.gif&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669633573&t=7c2f47e4acbaf38c640fdc86c6ab5403",
            rightImgSrc: "",
          },
          {
            title: "天安物业",
            tagText: "新闻",
            content: "今日周年活动注意观察.今日周年活动注意观察.",
            leftImgSrc:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20200326%2F09311362830_207x90.gif&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669633573&t=7c2f47e4acbaf38c640fdc86c6ab5403",
            rightImgSrc: "",
          },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 请求结果映射
     * @desc list为列表数据路径；路径采用JSONPath格式（去掉前面的 $.）
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          list: "",
          total: "",
        };
      },
    },
    /**
     * 开启下拉刷新
     */
    refresherEnabled: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否左边操作
     */
    leftAction: {
      type: Boolean,
      default: false,
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
              backgroundColor: "#588BE6",
              color: "#ffffff",
              fontSize: "16px",
            },
          },
          {
            text: "删除",
            style: {
              backgroundColor: "#E65E58",
              color: "#ffffff",
              fontSize: "16px",
            },
          },
        ];
      },
    },
    /**
     * 列表布局
     */
    layout: {
      type: Object,
      default: function () {
        return {
          leftIconBtn: false,
          leftImg: true,
          rightImg: false,
          rightIcon: true,
        };
      },
    },
    /**
     * 文字对齐
     * @type Enum
     * @options ["left","center","right"]
     */
    textAlign: {
      type: String,
      default: "left",
    },
    /**
     * 图片样式
     */
    imgStyle: {
      type: Object,
      default: function () {
        return {
          width: "63.72px",
          height: "64px",
          marginLeft: "36rpx",
          borderRadius: "8px",
          border: "#f1f2f3 2rpx solid",
        };
      },
    },
    /**
     * 图片模式
     * @type Enum
     * @options ["scaleToFill","aspectFit","aspectFill","widthFix","heightFix",""]
     */
    mode: {
      type: String,
      default: "aspectFill",
    },
    /**
     * 图片图标配置
     */
    img: {
      type: Object,
      default: function () {
        return {
          iconname: "",
          color: "",
          size: "22",
          imgsrc:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/uniapp-icon/juxingText.png",
          width: "148rpx",
          height: "68rpx",
          space: "0rpx",
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
    refresherEnabled(value) {
      this.cRefresherEnabled = value;
    },
    list: {
      handler: function (value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true,
    },
    url: function (value) {
      this.getData();
    },
    params: {
      handler: function (value, oldValue) {
        this.getData();
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
    this.cRefresherEnabled = this.refresherEnabled;
    this.cList = this.mapData(this.list);
    this.cLayout = this.layout;
    this.cTextAlign = this.textAlign;
    this.cLeftAction = this.leftAction;
    this.cImgStyle = this.imgStyle;
    this.getData();
  },
  data() {
    return {
      cList: [],
      total: 0,
      cLayout: {},
      cTextAlign: "",
      cImgStyle: {},
      cLeftAction: true,
      cRefresherTriggered: false,
      cRefresherEnabled: true,
    };
  },
  methods: {
    getData(url, params) {
      let self = this;
      self._getData(url, params);
    },
    _getData(url, params) {
      let self = this;
      url = url || this.url;

      if (!url) {
        return;
      }

      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});

      getAction(url, params).then((resp) => {
        console.log(`get table data: `, resp);
        self.cList = [];
        setTimeout(() => {
          self.cList = self.mapData(self.getDataList(resp));
          self.cList.forEach((item, index) => {
            item.hmNo = index + 1;
          });
          self.total = self.getDataTotal(resp);
          self.afterGetData(self.cList)
        }, 10);
      });
    },
    /**
     * 接口请求后事件
     */
    afterGetData(data){
      this.$emit("afterGetData", data)
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataList(resp) {
      if (this.getDataMap && this.getDataMap.list) {
        let listPath = this.getDataMap.list;
        listPath = listPath.indexOf("$") === 0 ? listPath : `$.${listPath}`;
        return jp.query(resp, listPath)[0];
      }

      if (resp.result) {
        return resp.result.records || resp.result;
      }

      if (resp.data) {
        return resp.data;
      }
      console.warn(`接口数据格式不兼容: `, resp);
      return [];
    },
    /**
     *  从接口返回结果里取到总数
     */
    getDataTotal(resp) {
      if (this.getDataMap.total) {
        let totalPath = this.getDataMap.total;
        totalPath = totalPath.indexOf("$") === 0 ? totalPath : `$.${totalPath}`;
        return jp.query(resp, totalPath)[0];
      }
      if (resp.result) {
        return resp.result.total;
      }
      if (resp.data) {
        return resp.total;
      }
      return 0;
    },
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
  display:block;
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
  /deep/ .u-tag {
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