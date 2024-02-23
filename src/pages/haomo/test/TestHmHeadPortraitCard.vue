<template>
  <view>
    <hm-head-portrait-card></hm-head-portrait-card>
    <hm-head-portrait-card
      ref="HmHeadPortraitCard"
      :options="TestHmHeadPortraitCard.options"
    >
    </hm-head-portrait-card>
  </view>
</template>

<script>
import HmHeadPortraitCard from "/@/components/built-in/uniapp-haomo/HmHeadPortraitCard.vue";
export default {
  components: { HmHeadPortraitCard },
  data() {
    return {
      TestHmHeadPortraitCard: {
        actionBg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_3.png",
        avator:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        name: "@李莉儿",
        info: "旅行社代理人",
        num: "1570",
        num2: "2570",
        num3: "230",
        fans: "粉丝",
        article: "文章",
        attention: "关注",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
