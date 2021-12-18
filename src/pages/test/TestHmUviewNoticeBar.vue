<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-noticeBar></hm-uview-noticeBar>

    <hm-uview-noticeBar
      mode="vertical"
      :volumeIcon="false"
      :moreIcon="false"
      :closeIcon="false"
      bgColor="#426ab3"
      color="red"
      :list="list1"
      :isCircular="false"
      @onClick="onClick1"
      @close="close1"
      @getMore="getMore1"
    ></hm-uview-noticeBar>
  </view>
</template>

<script>
import HmUviewNoticeBar from "@/components/built-in/uniapp-uview-vue3/HmUviewNoticeBar.vue";
export default {
  name: "TestHmUviewNoticeBar",
  components: { HmUviewNoticeBar },
  data() {
    return {
      list: ["测试", "滚动", "弹幕"],
      list1: ["测试1", "滚动2", "弹幕3"],
    };
  },
  methods: {
    onClick1() {
      console.log("onClick1");
    },
    close1() {
      console.log("close1");
    },
    getMore1() {
      console.log("getMore1");
    },
  },
};
</script>

<style>
</style>
