<template>
  <view>
    <hm-task-card></hm-task-card>
    <hm-task-card ref="HmTaskCard" :options="TestHmTaskCard.options">
    </hm-task-card>
  </view>
</template>

<script>
import HmTaskCard from "/@/components/built-in/uniapp-haomo/HmTaskCard.vue";
export default {
  components: { HmTaskCard },
  data() {
    return {
      TestHmTaskCard: {
        title: "清洁房间",
        tag: "家务活",
        info: "由 王先生 发布",
        shiliangzhinengduixiang:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25838_0_2.png",
        num: "2",
        minutesAgo: "分钟前",
        youhuiquan:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25838_0_3.png",
        price: "¥34",
        webduanzhifuyemiantubiao:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25838_0_1.png",
        confirmed: "已证实",
        didian:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25838_0_0.png",
        shenzhen: "深圳",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
