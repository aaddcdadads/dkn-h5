<template>
  <hm-uni-table></hm-uni-table>

  <hm-uni-table :columns="columns" :url="url"></hm-uni-table>
</template>

<script>
import HmUniTable from "@/components/built-in/uni-ui/HmUniTable.vue";

export default {
  components: { HmUniTable },
  data() {
    return {
      url: '/api/restify/sysUser/list',
      columns: [
        {
          title: "姓名",
          dataIndex: "realname",
          key: "realname",
          customRender: function(value, index) {
            console.log(`customRender: `, value, index)
          }
        },
        {
          title: "账号",
          dataIndex: "username",
          key: "username",
        },
        {
          title: "邮箱",
          dataIndex: "email",
          key: "email",
        },
      ],
      data: []
    };
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
</style>
