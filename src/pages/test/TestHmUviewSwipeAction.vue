<template>
  <view>
    <hm-uview-swipe-action width="100%"></hm-uview-swipe-action>
    <!-- <hm-uview-swipe-action
      :list="list1"
      :options="list2"
      arrowDirection="right"
      btn-width="200"
      bg-color="#ffefef"
      @onClick="onClick"
    ></hm-uview-swipe-action> -->
  </view>
</template>

<script>
import HmUviewSwipeAction from "@/components/built-in/uniapp-uview-vue3/HmUviewSwipeAction.vue";

export default {
  components: { HmUviewSwipeAction },
  data() {
    return {
      list1: [
        {
          id: 1,
          title:
            "长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来",
          images: "https://cdn.uviewui.com/uview/common/logo.png",
          show: false,
        },
        {
          id: 2,
          title:
            "新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来",
          images: "https://cdn.uviewui.com/uview/common/logo.png",
          show: true,
          disabled: true,
        },
        {
          id: 3,
          title: "登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇",
          images: "https://cdn.uviewui.com/uview/common/logo.png",
          show: false,
          disabled: false,
        },
      ],
      list2: [
        {
          text: "收藏",
          style: {
            backgroundColor: "#007aff",
          },
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d",
          },
        },
      ],
    };
  },
  methods: {
    onClick(e1, e2) {
      console.log("e", e1, e2);
    },
  },
};
</script>

<style lang="less"></style>
