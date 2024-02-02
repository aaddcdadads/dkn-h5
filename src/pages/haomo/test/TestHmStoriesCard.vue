<template>
  <view>
    <hm-stories-card></hm-stories-card>
    <hm-stories-card ref="HmStoriesCard" :options="TestHmStoriesCard.options">
    </hm-stories-card>
  </view>
</template>

<script>
import HmStoriesCard from "/@/components/built-in/uniapp-haomo/HmStoriesCard.vue";
export default {
  components: { HmStoriesCard },
  data() {
    return {
      TestHmStoriesCard: {
        text: "故事与瞬间",
        titleImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        tianjia:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24029_0_1.png",
        avator:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        largeIcon:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
