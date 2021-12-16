<template>
  <view>
    <hm-uview-empty></hm-uview-empty>
    <hm-uview-empty
      text="页面不存在"
      color="#aec6f7"
      mode="page"
      src="https://cdn.uviewui.com/uview/demo/empty/page.png"
      iconColor="#aec6f7"
      iconSize="80px"
      fontSize="18px"
      :show="true"
    ></hm-uview-empty>
  </view>
</template>

<script>
import HmUviewEmpty from "@/components/built-in/uview/HmUviewEmpty.vue";

export default {
  components: { HmUviewEmpty },
};
</script>

<style lang="less"></style>
