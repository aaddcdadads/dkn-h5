<template>
  <camera
    device-position="back"
    flash="auto"
    @error="error"
    style="width: 100%; height: 300px"
  ></camera>
</template>

<script>
import HmCamera from "@/components/built-in/uniapp/HmCamera.vue";

export default {
  components: { HmCamera },
  data() {
    return {};
  },
  methods: {
    error(e) {
      this.$emit(e.detail);
    },
  },
};
</script>

<style lang="less">
</style>
