<template>
  <view>
    <hm-dynamic-detail-card></hm-dynamic-detail-card>
    <hm-dynamic-detail-card
      ref="HmDynamicDetailCard"
      :minutesAgo="TestHmDynamicDetailCard.minutesAgo"
      :name="TestHmDynamicDetailCard.name"
      :avator="TestHmDynamicDetailCard.avator"
      :introduce="TestHmDynamicDetailCard.introduce"
      :dynamicDetail="TestHmDynamicDetailCard.dynamicDetail"
      :dynamicImage="TestHmDynamicDetailCard.dynamicImage"
      :submain="TestHmDynamicDetailCard.submain"
      :Heart="TestHmDynamicDetailCard.Heart"
      :messagingspeechbub="TestHmDynamicDetailCard.messagingspeechbub"
      :tiaozhuandaomulu="TestHmDynamicDetailCard.tiaozhuandaomulu"
    >
    </hm-dynamic-detail-card>
  </view>
</template>

<script>
import HmDynamicDetailCard from "/@/components/built-in/uniapp-haomo/HmDynamicDetailCard.vue";
export default {
  components: { HmDynamicDetailCard },
  data() {
    return {
      TestHmDynamicDetailCard: {
        minutesAgo: "5分钟前",
        name: "张三",
        avator:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
        introduce: "xx国际ceo",
        dynamicDetail: "一切尽在计划之中",
        dynamicImage:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
        submain: "124 喜欢",
        Heart:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
        messagingspeechbub:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
        tiaozhuandaomulu:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25823_0_3.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
