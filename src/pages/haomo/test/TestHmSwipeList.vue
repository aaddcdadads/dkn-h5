<template>
  <view>
    <hm-swipe-list ref="default"></hm-swipe-list>
    <hm-swipe-list
      ref="HmSwipeList"
      :list="HmSwipeList.list"
      :url="HmSwipeList.url"
      :params="HmSwipeList.params"
      :status="HmSwipeList.status"
      :contentText="HmSwipeList.contentText"
      @clickLoadMore="onHmSwipeListClickLoadMore"
    ></hm-swipe-list>
  </view>
</template>
<script>
import HmSwipeList from "@/components/built-in/uniapp-haomo/HmSwipeList.vue";
export default {
  components: { HmSwipeList },
  data() {
    return {
      HmSwipeList: {
        list: [],
        url: "",
        params: {},
        status: "more",
        contentText: {
          show: true,
          contentdown: "-显示更多-",
          contentrefresh: "正在加载...",
          contentnomore: "没有更多数据了",
        },
      },
    };
  },
  mounted() {},
  methods: {
    onHmSwipeListClickLoadMore() {
        this.HmSwipeList.status = "loading"
    },
  },
};
</script>