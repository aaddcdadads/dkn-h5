<template>
  <view>
    <hm-information-card></hm-information-card>
    <hm-information-card
      ref="HmInformationCard"
      :options="TestHmInformationCard.options"
    >
    </hm-information-card>
  </view>
</template>

<script>
import HmInformationCard from "/@/components/built-in/uniapp-haomo/HmInformationCard.vue";
export default {
  components: { HmInformationCard },
  data() {
    return {
      TestHmInformationCard: {
        tag: "阿杰",
        alexander: "阿雷",
        data: "星期三",
        titleImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        summary:
          "全息用户界面提供输入到电子或机电设备通过通过手指通过复制全息图像什么",
        word: "…",
        shoucang:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_0.png",
        num: "783",
        like: "喜欢",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
