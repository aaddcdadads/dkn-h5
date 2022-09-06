<template>
  <view>
    <view class="uni-container">
      <uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据"
        @selection-change="selectionChange">
        <uni-tr>
          <uni-th v-for="column in columns" 
            :width="column.width || 100" 
            :align="column.align || 'center'">{{ column.title }}</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in cData" :key="index">
          <uni-td align="center" v-for="column in columns">{{ item[column.dataIndex] }}</uni-td>
          <uni-td v-if="actions.length > 0">
            <view class="uni-group action">
              <button v-for="(action, index) in actions" :key="index" 
                class="uni-button" 
                :size="action.size || 'mini'"
                :type="action.type || 'primary'"
                @click="action.callback">{{ action.name }}</button>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <view class="uni-pagination-box">
        <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
      </view>
    </view>
  </view>
</template>

<script>
import _ from "lodash";
import {
  getAction,
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
            title: "地址",
            dataIndex: "address",
            key: "address",
            ellipsis: true,
          },
          {
            title: "性别",
            dataIndex: "sexual",
            key: "sexual",
            ellipsis: true,
          },
          {
            title: "毕业院校",
            dataIndex: "school",
            key: "school",
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
     * 操作按钮展开
     */
    isFlatAction: {
      type: Boolean,
      default: false,
    },
    /**
     * 固定行列
     */
    scroll: {
      type: Object,
      default: function () {
        return {
          x: "100%",
        };
      },
    },
    /**
     * 自动合并单元
     * @description 数据相同的内容自动合并. 形如 ["r1c1:r10c1", "r2c2:r10c2", "r1:r2", "c4"]，这里的r1c1表示的是第1行（row 1），第1列（column 1）。第1列不包含表格，指的是数据行。
     */
    combined: {
      type: Array,
      default: [],
    },
    /**
     * 清空过滤排序
     */
    clearFiltersAndSortersFlag: {
      type: Boolean,
      default: false,
    },
    /**
     * 行高
     */
    rowHeight: {
      type: String,
      default: "42",
    },
    /**
     * 表格背景颜色
     * @type Color
     * */
    backgroundColor: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      cData: []
    }
  },
  watch: {

  },
  mounted() {
    this.cData = this.data;
  },
  methods: {
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less">
.action.uni-group {
  width: 140px;

  button {
    margin-left: 5px;
  }
}
</style>
