<template>
  <view>
    <u-swipe-action
      :show="show || item.show"
      :index="index"
      v-for="(item, index) in cList"
      :key="item.id"
      :disabled="disabled || item.disabled"
      :options="cOptions"
      :btn-width="btnWidth"
      :bg-color="bgColor"
      @click="click"
      @open="open"
      class="u-swipeAction"
    >
      <view class="item u-border-bottom">
        <image mode="aspectFill" :src="item.images" v-if="item.images" />
        <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
        <view class="title-wrap">
          <text class="title u-line-2">{{ item.title }}</text>
        </view>
      </view>
    </u-swipe-action>
    <view v-if="!cPaginationHidden" class="uni-pagination-box">
      <uni-pagination show-icon :page-size="cPagination.pageSize" :current="cPagination.current"
        :total="cPagination.total" @change="onPaginationChange" />
    </view>
  </view>
</template>

<script>
import jp from "jsonpath";

export default {
  name: "HmUviewSwipeAction",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "350",
    },
    /**
     * 组件背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 按钮宽度
     */
    btnWidth: {
      type: String,
      default: "160",
    },
    /**
     * 是否禁用按钮
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否打开
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 间距
     */
    spacing: {
      type: String,
      default: "0px",
    },
    /**
     * 按钮配置
     */
    options: {
      type: Array,
      default: function () {
        return [
          {
            style: {
              backgroundColor: "#f1f2f3",
            },
            icon:"https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/gongkan/%E7%BC%96%E8%BE%91.png"
          },
          {
            text: "删除",
            style: {
              backgroundColor: "red",
            },
          },
        ];
      },
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            title:
              "长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来",
            images: "https://cdn.uviewui.com/uview/common/logo.png",
            show: false,
          },
          {
            id: 2,
            title:
              "新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来",
            images: "https://cdn.uviewui.com/uview/common/logo.png",
            show: false,
            disabled: false,
          },
          {
            id: 3,
            title: "登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇",
            images: "https://cdn.uviewui.com/uview/common/logo.png",

            disabled: false,
          },
        ];
      },
    },
    /**
     * 标题展示字段 
     */
    titleFields: {
      type: Array,
      default: function () {
        return ["id"];
      },
    },
    /**
     * 翻页参数
     */
    pagination: {
      type: Object,
      default: function () {
        return {
          current: 1,
          pageSize: 10,
        };
      },
    },
    /**
     * 分页参数映射
     */
    paginationMap: {
      type: Object,
      default: function () {
        return {
          pageNo: 'pageNo',
          pageSize: 'pageSize'
        }
      }
    },
    /**
     * 隐藏翻页控件
     */
    paginationHidden: {
      type: Boolean,
      default: false,
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
     * @desc list为列表数据路径；total为总数路径。路径采用JSONPath格式（去掉前面的 $.）
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
     * 分页参数映射
     */
    paginationMap: {
      type: Object,
      default: function () {
        return {
          pageNo: 'pageNo',
          pageSize: 'pageSize'
        }
      }
    },
  },

  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    list(value) {
      this.cList = value;
    },
    options(value) {
      this.cOptions = value;
    },
    spacing(value) {
      this.cSpacing = this.getCssUnit(value);
    },
    paginationHidden(value) {
      this.cPaginationHidden = value;
    },
    pagination: {
      handler(value) {
        if (Object.keys(value).length === 0) {
          this.cPaginationHidden = true;
        } else {
          this.cPagination = Object.assign(this.cPagination, this.pagination);
        }
        // console.log(
        //   `table watch pagination: `,
        //   this.cPagination,
        //   this.pagination
        // );
        // this.getData();
      },
      deep: true,
    },
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cList = this.list;
    this.cOptions = this.options;
    this.cSpacing = this.getCssUnit(this.spacing);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].show == undefined) {
        this.list[i].show = false;
      }
    }
    this.cPaginationHidden = this.paginationHidden;
    if (Object.keys(this.pagination).length === 0) {
      this.cPaginationHidden = true;
    } else {
      this.cPagination = Object.assign(this.cPagination, this.pagination);
    }
    this.getData();
  },
  data() {
    return {
      cWidth: "",
      cList: [],
      cOptions: [],
      cSpacing: "",
      cPaginationHidden: false,
      cPagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
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

      // 跟表格自带的翻页过滤排序功能结合
      // 翻页
      if (typeof this.cPagination !== "boolean") {
        params = Object.assign(params, {
          [this.paginationMap.pageNo]: this.cPagination.current,
          [this.paginationMap.pageSize]: this.cPagination.pageSize,
        });
      }

      // 排序
      // if (this.sorter && this.sorter.field) {
      //   params.column = this.sorter.field;
      //   params.order = this.sorter.order === "descend" ? "desc" : "asc";
      // }

      // 过滤
      // if (this.filters) {
      //   params = Object.assign(params, this.filters);
      //   Object.entries(this.filters).forEach(e => {
      //     if (typeof e[1] === 'object') {
      //       params[e[0]] = e[1].join(",")
      //     }
      //   })
      // }

      // 加载全部，默认为最多加载100万条
      if (Number.isNaN(params.pageSize)) {
        params.pageNo = 1;
        params.pageSize = 1000000;
        self.cPagination.current = 1;
        self.cPagination.pageSize = params.pageSize;
      }

      if (Number.isNaN(params.pageNo)) {
        params.pageNo = 1;
      }

      getCiticAction(url, params).then((resp) => {
        console.log(`get table data: `, resp);
        self.cList = [];
        setTimeout(() => {
          self.cList = self.getDataList(resp);
          if (typeof self.cPagination !== "boolean") {
            self.cPagination.total = self.getDataTotal(resp);
          }
          self.cList.forEach((item, index) => {
            item.hmNo = index + 1;
          });

          // 处理翻页为全部的情况
          if (self.cPagination.pageSize === 1000000) {
            self.cPagination.pageSize = '全部';
          }
        }, 0);
      });
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataList(resp) {
      if (this.getDataMap && this.getDataMap.list) {
        let listPath = this.getDataMap.list;
        listPath = listPath.indexOf('$') === 0 ? listPath : `$.${listPath}`;
        return this.resovleListData(jp.query(resp, listPath)[0]);
      }

      if (resp.result) {
        return this.resovleListData(resp.result.records || resp.result);
      }

      if (resp.data) {
        return this.resovleListData(resp.data);
      } 
      console.warn(`接口数据格式不兼容: `, resp);
      return [];
    },
    /**
     * 处理接口返回数据，格式化为list所需格式
     */
    resovleListData(data) {
      let self = this
      return data.map(item => {
        let title = ""
        self.titleFields?.forEach((field,index) => {
          if (index != self.titleFields.length) {
            title += `${field}: ${item[field]},`
          } else {
            title += `${field}: ${item[field]}`
          }
        })

        return {
          ...item,
          title,
          show: false,
        }
      })
    },
    /**
     * 从接口返回结果里取到总数
     */
    getDataTotal(resp) {
      if (this.getDataMap.total) {
        let totalPath = this.getDataMap.total;
        totalPath = totalPath.indexOf('$') === 0 ? totalPath : `$.${totalPath}`;
        return jp.query(resp, totalPath)[0];
      }
      if (resp.result) {
        return resp.result.total || this.cPagination.pageSize;
      }
      if (resp.data) {
        return resp.total || this.cPagination.pageSize;
      }
      return this.cPagination.pageSize;
    },

    /**
     * 翻页
     */
    onPaginationChange(event) {
      console.log(`onPaginationChange: `, event);
      this.cPagination.current = event.current;
      this.getData();
      this.$emit("pagination-change", event);
    },
    click(index, index1) {
      //console.log("haha", index, index1);
      this.$emit("click", index, index1);
    },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    open(index) {
      // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
      // 原本为'false'，再次设置为'false'会无效
      this.cList[index].show = true;
      this.cList.map((val, idx) => {
        if (index != idx) this.cList[idx].show = false;
      });
      // console.log("open", index);
      this.$emit("open", index);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style lang="less">
.u-swipeAction:first-child {
  margin-top: 0px !important;
}
.u-swipeAction {
  width: v-bind(cWidth);
  margin-top: v-bind(cSpacing);
}
.item {
  display: flex;
  padding: 20rpx;
}

image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  margin-right: 20rpx;
  border-radius: 12rpx;
}

.title {
  text-align: left;
  font-size: 28rpx;
  color: #0d110d;
  margin-top: 20rpx;
}
</style>
