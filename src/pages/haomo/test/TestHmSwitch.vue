<template>
  <view>
    <view>{{ title }}</view>
    <switch
      @change="onChange"
      loading="false"
      size="25px"
      disabled="false"
      title="开关"
      active-color="#2979ff"
      inactive-color="#ffffff"
    />
  </view>
</template>

<script>
import HmSwitch from "@/components/built-in/uniapp/HmSwitch.vue";

export default {
  components: { HmSwitch },
  data() {
    return {};
  },
  computed: {},
  watch: {
    checked(val) {
      this.cChecked = val;
    },
  },
  mounted() {
    this.cChecked = this.checked;
  },
  methods: {
    // switch打开或者关闭时触发，值为true或者false
    onChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less">
</style>
