<template>
  <icon class="icon" :type="type" :color="color" :size="size"></icon>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  components: {},
  name: "HmIcon",
  props: {
    /**
     * 类型
     * @type Enum
     * @options ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
     */
    type: {
      type: String,
      default: "success",
    },
    /**
     * 图标颜色
     * @type Color
     */
    color: {
      type: String,
      default: "inherit",
    },
    /**
     * 图标大小
     */
    size: {
      type: Number,
      default: 20,
    },
  },
  methods: {},
};
</script>
<style lang="less">
</style>
