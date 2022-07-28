<template>
  <view>
    <icon
      class="icon"
      :type="type"
      :name="name"
      :color="color"
      :size="size"
    ></icon>
  </view>
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
     * 名称
     */
    name: {
      type: String,
      default: "photo",
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
  methods: {
    onClick(e) {
      this.$emit("click");
    },
  },
};
</script>
<style lang="less">
</style>
