<template>
  <view>
    <hm-request-card></hm-request-card>
    <hm-request-card
      ref="HmRequestCard"
      :avator="TestHmRequestCard.avator"
      :name="TestHmRequestCard.name"
      :address="TestHmRequestCard.address"
      :statimg="TestHmRequestCard.statimg"
      :largeIcon="TestHmRequestCard.largeIcon"
      :agree="TestHmRequestCard.agree"
    >
    </hm-request-card>
  </view>
</template>

<script>
import HmRequestCard from "/@/components/built-in/uniapp-haomo/HmRequestCard.vue";
export default {
  components: { HmRequestCard },
  data() {
    return {
      TestHmRequestCard: {
        avator: "/static/hm-request-card/images/img_25260_0_0.png",
        name: "马莉",
        address: "上海",
        statimg: "/static/hm-request-card/images/img_25260_0_1.png",
        agree: "同意",
        cancel: "取消",
        largeIcon:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
