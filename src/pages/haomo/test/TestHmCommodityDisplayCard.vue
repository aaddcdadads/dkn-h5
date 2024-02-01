<template>
  <view>
    <hm-commodity-display-card></hm-commodity-display-card>
    <hm-commodity-display-card
      ref="HmCommodityDisplayCard"
      :options="TestHmCommodityDisplayCard.options"
    >
    </hm-commodity-display-card>
  </view>
</template>

<script>
import HmCommodityDisplayCard from "/@/components/built-in/uniapp-haomo/HmCommodityDisplayCard.vue";
export default {
  components: { HmCommodityDisplayCard },
  data() {
    return {
      TestHmCommodityDisplayCard: {
        title: "凳子",
        item: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25335_0_2.png",

        shanchulanmu:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25366_0_2.png",
        iconfriendsHelp:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25252_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
