<template>
  <view>
    <icon class="icon" :name="name" :color="color" :size="cSize"></icon>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cSize: "20px",
      color: "inherit",
      name: "photo",
    };
  },
  watch: {
    size(value) {
      this.cSize = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cSize = this.getCssUnit(this.cSize);
  },
  components: {},
  name: "HmIcon",
  props: {
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
      type: String,
      default: "20px",
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click");
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>
<style lang="less">
</style>
