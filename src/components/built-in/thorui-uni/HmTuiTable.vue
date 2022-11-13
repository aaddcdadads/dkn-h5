<template>
  <tui-table>
  </tui-table>
</template>
<script>
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
     * 大小
     * @type Enum
     * @options ["default","mini"]
     */
    size: {
      type: String,
      default: "default",
    }
  },
  data() {
    return {};
  },
  watch: {

  },
  mounted() {

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
