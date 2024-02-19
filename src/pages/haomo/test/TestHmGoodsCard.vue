<template>
  <view>
    <hm-email-card></hm-email-card>
    <hm-email-card ref="HmEmailCard" :options="TestHmEmailCard.options">
    </hm-email-card>
  </view>
</template>

<script>
import HmEmailCard from "/@/components/built-in/uniapp-haomo/HmEmailCard.vue";
export default {
  components: { HmEmailCard },
  data() {
    return {
      TestHmEmailCard: {
        icon: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25353_0_2.png",
        num: "1",
        newMessages: "条新消息",
        summary:
          "摄影是通过记录光线或其他电磁辐射，或通过图像传感器以电子方式，或通过化学方式，通过",
        word: "…",
        avator:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        alexander: "王二",
        statimg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
