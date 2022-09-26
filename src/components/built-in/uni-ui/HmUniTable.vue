<template>
  <view>
    <view class="uni-container">
      <uni-table ref="table" :loading="loading" :border="bordered" stripe :type="rowSelectFlag ? 'selection' : ''"
        emptyText="暂无更多数据" @selection-change="selectionChange">
        <uni-tr>
          <uni-th v-for="column in columns" :width="column.width || 100" :align="column.align || 'center'">{{
              column.title
          }}</uni-th>

          <uni-th v-if="actions.length > 0" :width="140">操作</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in cData" :key="index">
          <uni-td align="center" v-for="column in columns">{{ item[column.dataIndex] }}</uni-td>
          <uni-td v-if="actions.length > 0">
            <view class="uni-group action">
              <button v-for="(action, index) in actions" :key="index" class="uni-button" :size="action.size || 'mini'"
                :type="action.type || 'primary'" @click="action.callback">{{ action.name }}</button>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <view v-if="!cPaginationHidden" class="uni-pagination-box">
        <uni-pagination show-icon :page-size="cPagination.pageSize" :current="cPagination.current"
          :total="cPagination.total" @change="onPaginationChange" />
      </view>
    </view>
  </view>
</template>

<script>
import JSONfn from "/@/utils/jsonfn";
import {
  getAction,
  getCiticAction,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";

export default {
  name: "HmUniTable",
  components: {},
  name: "HmButton",
  props: {
    /**
     * 列定义
     */
    columns: {
      type: Array,
      default: function () {
        return [
          {
            title: "姓名",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "年龄",
            dataIndex: "age",
            key: "age",
            width: 80,
          },
          {
            title: "性别",
            dataIndex: "sexual",
            key: "sexual",
            ellipsis: true,
          }
        ];
      },
    },
    /**
     * 数据
     */
    data: {
      type: Array,
      default: function () {
        return [
          {
            key: "1",
            name: "胡小根",
            age: 32,
            address: "深圳市龙岗区坂田街道",
            sexual: "男",
            school: "毫末科技",
          },
          {
            key: "2",
            name: "胡小根",
            age: 42,
            address: "深圳市龙岗区坂田街道",
            sexual: "男",
            school: "毫末科技",
          },
          {
            key: "3",
            name: "胡小根",
            age: 32,
            address: "深圳市龙岗区坂田街道",
            sexual: "男",
            school: "毫末科技",
          },
        ];
      },
    },
    /**
     * 隐藏翻页控件
     */
    paginationHidden: {
      type: Boolean,
      default: false,
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
     * 显示序号列
     */
    showColumnNo: {
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
    /**
     * 可选择行
     */
    rowSelectFlag: {
      type: Boolean,
      default: false,
    },
    /**
     * 带边框
     */
    bordered: {
      type: Boolean,
      default: true,
    },
    /**
     * 操作按钮
     */
    actions: {
      type: Array,
      default: function () {
        return [
          {
            name: "编辑",
            callback: function (item) {
              console.log("点击编辑: ", item);
            },
          },
          {
            name: "删除",
            type: 'warn',
            callback: function (item) {
              console.log("点击删除: ", item);
            },
          },
        ];
      },
    },
    /**
     * 清空过滤排序
     */
    clearFiltersAndSortersFlag: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      cColumns: [],
      cData: [],
      cPaginationHidden: false,
      cPagination: {
        current: 1,
        pageSize: 10,
        total: 0
      },
    }
  },
  watch: {
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
        console.log(
          `table watch pagination: `,
          this.cPagination,
          this.pagination
        );
        // this.getData();
      },
      deep: true,
    },
    columns: {
      handler: function (value, oldValue) {
        console.log("watch columns");
        this.cColumns = JSONfn.parse(JSONfn.stringify(this.columns));
        this.processShowColumnNo(true, false);
      },
      deep: true,
    },
    data: {
      handler: function (value, oldValue) {
        console.log("watch data");
        this.cData = JSONfn.parse(JSONfn.stringify(value));
        this.processShowColumnNo(false, true);
      },
      deep: true,
    },
  },
  mounted() {
    this.cData = JSONfn.parse(JSONfn.stringify(this.data));
    this.cColumns = JSONfn.parse(JSONfn.stringify(this.columns));
    this.processShowColumnNo(true, true);
    this.cPaginationHidden = this.paginationHidden;
    if (Object.keys(this.pagination).length === 0) {
      this.cPaginationHidden = true;
    } else {
      this.cPagination = Object.assign(this.cPagination, this.pagination);
    }
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

      // 跟表格自带的翻页过滤排序功能结合
      // 翻页
      if (typeof this.cPagination !== "boolean") {
        params = Object.assign(params, {
          [this.paginationMap.pageNo]: this.cPagination.current,
          [this.paginationMap.pageSize]: this.cPagination.pageSize,
        });
      }

      // 排序
      if (this.sorter && this.sorter.field) {
        params.column = this.sorter.field;
        params.order = this.sorter.order === "descend" ? "desc" : "asc";
      }

      // 过滤
      if (this.filters) {
        params = Object.assign(params, this.filters);
        Object.entries(this.filters).forEach(e => {
          if (typeof e[1] === 'object') {
            params[e[0]] = e[1].join(",")
          }
        })
      }

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
        self.cData = [];
        setTimeout(() => {
          self.cData = self.getDataList(resp);
          if (typeof self.cPagination !== "boolean") {
            self.cPagination.total = self.getDataTotal(resp);
          }
          self.cData.forEach((item, index) => {
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

    processShowColumnNo(columnFlag, dataFlag) {
      if (!this.showColumnNo) {
        return;
      }
      if (columnFlag) {
        this.cColumns.unshift({
          title: "序号",
          dataIndex: "hmNo",
          key: "hmNo",
          width: 60,
        });
      }

      if (dataFlag) {
        this.cData.forEach((item, index) => {
          item.hmNo = index + 1;
        });
      }
    },
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.action.uni-group {
  width: v-bind(actionTdWidth);

  button {
    margin-left: 5px;
  }
}
</style>
