<template>
  <view>
    <hm-uview-rate></hm-uview-rate>
    <hm-uview-rate
      :count="10"
      :disabled="false"
      :size="50"
      inactiveColor="#d9ffdb"
      activeColor="yellow"
      :gutter="20"
      activeIcon="thumb-up-fill"
      inactiveIcon="thumb-up"
    ></hm-uview-rate>
  </view>
</template>

<script>
import HmUviewRate from "@/components/built-in/uview/HmUviewRate.vue";

export default {
  components: { HmUviewRate },
  methods: {
    onChange(value) {
      console.log("当前值：", value);
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="less"></style>
