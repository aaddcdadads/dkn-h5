<template>
  <view>
    <hm-uview-loading
      mode="circle"
      color="#c7c7c7"
      size="17px"
      :show="true"
    ></hm-uview-loading>
	<hm-uview-loading
      mode="flower"
      size="24px"
      :show="true"
    ></hm-uview-loading>
  </view>
</template>

<script>
import HmUviewLoading from "@/components/built-in/HmUviewLoading.vue";

export default {
  components: { HmUviewLoading },
};
</script>

<style lang="less"></style>
