<template>
  <view>
    <hm-photo-card></hm-photo-card>
    <hm-photo-card ref="HmPhotoCard" :options="TestHmPhotoCard.options">
    </hm-photo-card>
  </view>
</template>

<script>
import HmPhotoCard from "/@/components/built-in/uniapp-haomo/HmPhotoCard.vue";
export default {
  components: { HmPhotoCard },
  data() {
    return {
      TestHmPhotoCard: {
        title: "我的 图片",
        titleImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
        img1: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
        img2: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
        img3: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
        img4: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
        img5: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
