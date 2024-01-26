<template>
  <view>
    <hm-follow-card></hm-follow-card>
    <hm-follow-card
      ref="TestHmFollowCard"
      :options="TestHmFollowCard.options"
    ></hm-follow-card>
  </view>
</template>

<script>
import HmFollowCard from "/@/components/built-in/uniapp-haomo/HmFollowCard.vue";
export default {
  components: { HmFollowCard },
  data() {
    return {
      TestHmFollowCard: {
        options: {
          backgroudImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/banner.png",
          followText: "+ 关注",
          name: "关注的人",
          personImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%A4%B4%E5%83%8F%402x.png",
          fanNumbers: "784",
          fanNumbersCompany: "个",
          likeImage: "",
          likeNumbers: "189",
          likeNumbersCompany: "个",
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
