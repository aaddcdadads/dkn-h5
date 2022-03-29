<template >
  <u-toast ref="uToast" />
</template>

<script>
export default {
  name: "HmUviewToast",
  props: {},
  data() {
    return {};
  },
  mounted() {
    //this.showToast(this.options);
  },
  watch: {},
  methods: {
    show(options) {
      this.$refs.uToast.show(options);
    },
  },
};
</script>

<style>
</style>
