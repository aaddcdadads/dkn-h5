<template>
  <view>
    <hm-credit-card></hm-credit-card>
    <hm-credit-card
      ref="HmCreditCard"
      :avatarText="TestHmCreditCard.avatarText"
      :nameText="TestHmCreditCard.nameText"
      :introduce="TestHmCreditCard.introduce"
      :nameIcon="TestHmCreditCard.nameIcon"
      :curriculum="TestHmCreditCard.curriculum"
      :points="TestHmCreditCard.points"
    >
    </hm-credit-card>
  </view>
</template>

<script>
import HmCreditCard from "/@/components/built-in/uniapp-haomo/HmCreditCard.vue";
export default {
  components: { HmCreditCard },
  data() {
    return {
      TestHmCreditCard: {
        avatarText: "王",
        nameText: "王小二",
        nameIcon:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        introduce: "介绍",
        curriculum: "课程",
        points: "79分",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
