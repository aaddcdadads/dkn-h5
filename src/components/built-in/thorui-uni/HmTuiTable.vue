<template>
  <tui-table>
    <!-- 表头 -->
    <tui-tr>
      <tui-td v-for="(column, index) in cColumns"
        :span="column.span"
        :height="column.height || cRowHeight"
        :align-items="column.alignItems"
        :size="column.size || 28"
        :color="column.color || 'black'"
        :bold="column.bold">
        {{ column.title }}
      </tui-td>
    </tui-tr>

    <!-- table-body -->
    <tui-tr v-for="(item, index) in cData">
      <tui-td v-for="(column, index) in cColumns"
        :span="column.span"
        :height="column.height || cRowHeight"
        :align-items="column.alignItems"
        :size="column.size || 28"
        :color="column.color || 'black'"
        :bold="column.bold">
        {{ item[column.dataIndex] }}
      </tui-td>
    </tui-tr>
  </tui-table>
</template>
<script>
import { cloneDeep } from '/@/utils/util';
import tuiTable from "@/components/built-in/thorui-uni/tui-table/tui-table.vue"
import tuiTr from "@/components/built-in/thorui-uni/tui-tr/tui-tr.vue"
import tuiTd from "@/components/built-in/thorui-uni/tui-td/tui-td.vue"

export default {
  name: "HmTuiTable",
  components: {
    tuiTable,
		tuiTr,
		tuiTd
  },
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
            customRender: function(item, row, index) {
              return {
                children: h('a', {}, item + '岁')
              }
            }
          },
          {
            title: "性别",
            dataIndex: "sexual",
            key: "sexual",
            ellipsis: true,
            formatter: function(value) {
              return value;
            }
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
     * 行高
     */
    rowHeight: {
      type: String,
      default: '34px'
    },
  },
  data() {
    return {
      cColumns: [],
      cData: [],
    };
  },
  watch: {
    columns: {
      handler: function (value, oldValue) {
        console.log("watch columns");
        this.cColumns = cloneDeep(value);
      },
      deep: true,
    },
    data: {
      handler: function (value, oldValue) {
        console.log("watch data");
        this.cData = cloneDeep(value);
      },
      deep: true,
    },
  },
  mounted() {
    this.cRowHeight = this.$getCssUnit(this.rowHeight);
    this.cData = cloneDeep(this.data);
    this.cColumns = cloneDeep(this.columns);
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
