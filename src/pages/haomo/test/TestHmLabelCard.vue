<template>
  <view>
    <hm-label-card></hm-label-card>
    <hm-label-card ref="HmLabelCard" :options="TestHmLabelCard.options">
    </hm-label-card>
  </view>
</template>

<script>
import HmLabelCard from "/@/components/built-in/uniapp-haomo/HmLabelCard.vue";
export default {
  components: { HmLabelCard },
  data() {
    return {
      TestHmLabelCard: {
        img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_2.png",
        pinglun:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_0.png",
        xinImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_1.png",
        dot: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_3.png",
        play: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_4.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
