<template>
  <view>
    <hm-comment-items-card></hm-comment-items-card>
    <hm-comment-items-card
      ref="TestHmCommentItemsCard"
      :options="TestHmCommentItemsCard.options"
    >
    </hm-comment-items-card>
  </view>
</template>

<script>
import HmCommentItemsCard from "/@/components/built-in/uniapp-haomo/HmCommentItemsCard.vue";
export default {
  components: { HmCommentItemsCard },
  data() {
    return {
      TestHmCommentItemsCard: {
        options: {
          shopCreditLv1:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20200326%2F09311362830_207x90.gif&refer=http%3A%2F%2Fimage.cnpp.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669633573&t=7c2f47e4acbaf38c640fdc86c6ab5403",
          daysAgo: "3 days ago",
          info: "老王回复了您",
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
