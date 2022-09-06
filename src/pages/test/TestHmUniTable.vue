<template>
  <hm-uni-table></hm-uni-table>
</template>

<script>
import HmUniTable from "@/components/built-in/uni-ui/HmUniTable.vue";

export default {
  components: { HmUniTable },
  data() {
    return {
      columns: [],
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
