<template>
  <hm-uni-ele-table :columns="columns" :data="data" :span-method="arraySpanMethod"></hm-uni-ele-table>
</template>

<script>
import HmUniEleTable from "@/components/built-in/third-party/HmUniEleTable/index.vue";

export default {
  components: { HmUniEleTable },
  data() {
    return {
      url: '/api/restify/sysUser/list',
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "性别",
          dataIndex: "sexual",
          key: "sexual",
        },
        {
          title: "地址",
          dataIndex: "address",
          key: "address",
        },
      ],
      data: [
        {
          key: "1",
          name: "胡小根",
          age: 32,
          address: "深圳市龙岗区坂田街道",
          sexual: "男",
          school: "毫末科技",
          rowspan: 3
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
      ]
    };
  },
  methods: {
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
    arraySpanMethod(
      row,
      column,
      rowIndex,
      columnIndex
    ) {
      if (columnIndex == 0) {
        if (row.rowspan) {
          return {
            rowspan: row.rowspan,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 1
          };
        }
      }
      else {
        return {
          rowspan: 1,
          colspan: 1
        };
      }
    },
  },
};
</script>

<style lang="less">

</style>
