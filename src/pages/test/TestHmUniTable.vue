<template>
  <hm-uni-table></hm-uni-table>
  <hm-uni-table :row-height="'6em'" :columns="columns" :data="data"></hm-uni-table>
  <!-- <hm-uni-table :row-height="'3em'" :columns="columns" :url="url"></hm-uni-table> -->
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
          key: "realname"
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
      data: [{
        key: "1",
        realname: "胡小根",
        username: 'hxg',
        email: "hxg@haomo-studio.com"
      }, {
        key: "2",
        realname: "胡小根",
        username: 'hxg',
        email: "hxg@haomo-studio.com"
      }, {
        key: "3",
        realname: "胡小根",
        username: 'hxg',
        email: "hxg@haomo-studio.com"
      }]
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
