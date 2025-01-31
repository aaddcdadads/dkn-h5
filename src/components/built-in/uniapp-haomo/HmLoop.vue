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
    <view v-for="(item, index) in cValue" :key="index" @click="itemClick({
      e: $event,
      item: item,
      index: index
    })">
      <!-- 
        @prop item - 数组条目数据
      -->
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
import { cloneDeep } from '/@/utils/util';
import jp from "jsonpath";
import {
  getAction
} from "/@/request/http";

export default {
  props: {
    /**
     * 循环数组
     * @model
     */
    value: {
      type: Array,
      default: function() {
        return [];
      }
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
        return {}
      }
    },
    /**
     * 请求结果映射
     * @desc list为列表数据路径；路径采用JSONPath格式（去掉前面的 $.）
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          list: '',
          total: ''
        }
      }
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
     * 上滑状态
     * @type Enum
     * @options ["more","loading","noMore"]
     */
    status: {
      type: String,
      default: "more",
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
  data() {
    return {
      cValue: [],
      total: 0
    };
  },
  watch: {
    value: {
      handler: function (value, oldValue) {
        this.cValue = cloneDeep(value);
      },
      deep: true,
    },
    url: function(value) {
      this.getData();
    },
    params: {
      handler: function (value, oldValue) {
        this.getData();
      },
      deep: true,
    }
  },
  mounted() {
    this.cValue = cloneDeep(this.value);
    this.getData();
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
        self.cValue = self.getDataList(resp);
        self.cValue.forEach((item, index) => {
          item.hmNo = index + 1;
        });
        self.total = self.getDataTotal(resp);
      });
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataList(resp) {
      if (this.getDataMap && this.getDataMap.list) {
        let listPath = this.getDataMap.list;
        listPath = listPath.indexOf('$') === 0 ? listPath : `$.${listPath}`;
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
        totalPath = totalPath.indexOf('$') === 0 ? totalPath : `$.${totalPath}`;
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
    }
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