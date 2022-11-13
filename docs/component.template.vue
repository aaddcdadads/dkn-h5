<template>
  <view>
  </view>
</template>
<script>
export default {
  name: "ComponentTemplate",
  components: {},
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
