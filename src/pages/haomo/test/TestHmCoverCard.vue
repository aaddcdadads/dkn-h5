<template>
  <view>
    <hm-cover-card></hm-cover-card>
    <hm-cover-card ref="HmCoverCard" :options="TestHmCoverCard.options">
    </hm-cover-card>
  </view>
</template>

<script>
import HmCoverCard from "/@/components/built-in/uniapp-haomo/HmCoverCard.vue";
export default {
  components: { HmCoverCard },
  data() {
    return {
      TestHmCoverCard: {
        entryPic:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_1.png",
        title: "单色摄影",
        text: "456张风景照片",
        shoucang:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
