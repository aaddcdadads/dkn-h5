<template>
  <view>
    <hm-uview-loading></hm-uview-loading>
    <hm-uview-loading mode="flower" size="100" :show="true"></hm-uview-loading>
  </view>
</template>

<script>
import HmUviewLoading from "@/components/built-in/uview/HmUviewLoading.vue";

export default {
  components: { HmUviewLoading },
};
</script>

<style lang="less"></style>
