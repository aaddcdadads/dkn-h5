<template>
  <view>
    <hm-call-option-card></hm-call-option-card>
    <hm-call-option-card
      ref="TestHmCallOptionCard"
      :yaoqingjiangli="TestHmCallOptionCard.yaoqingjiangli"
      :title="TestHmCallOptionCard.title"
      :help="TestHmCallOptionCard.help"
      :date="TestHmCallOptionCard.date"
      :startChat="TestHmCallOptionCard.startChat"
    >
    </hm-call-option-card>
  </view>
</template>

<script>
import HmCallOptionCard from "/@/components/built-in/uniapp-haomo/HmCallOptionCard.vue";
export default {
  components: { HmCallOptionCard },
  data() {
    return {
      TestHmCallOptionCard: {
        yaoqingjiangli:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%85%89-%E8%93%9D%E8%89%B2%402x.png",
        title: "我们会给您回电话的",
        help: "帮助",
        date: "24/7",
        startChat: "发起聊天",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
