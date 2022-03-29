<template >
  <u-toast ref="uToast" />
</template>

<script>
export default {
  name: "HmUviewToast",
  props: {
    /**
     * 属性配置
     */
    options: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    //this.showToast(this.options);
  },
  watch: {
    options: {
      handler: function (value) {
        this.showToast(value);
      },
      deep: true,
    },
  },
  methods: {
    showToast(options) {
      console.log("12121212");
      this.$refs.uToast.show(options);
    },
  },
};
</script>

<style>
</style>
