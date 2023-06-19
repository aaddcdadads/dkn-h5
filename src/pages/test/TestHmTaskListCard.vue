<template>
  <view>
    <hm-task-list-card></hm-task-list-card>
    <hm-task-list-card
      ref="HmTaskListCard"
      :options="TestHmTaskListCard.options"
    >
    </hm-task-list-card>
  </view>
</template>

<script>
import HmTaskListCard from "/@/components/built-in/uniapp-haomo/HmTaskListCard.vue";
export default {
  components: { HmTaskListCard },
  data() {
    return {
      TestHmTaskListCard: {
        text: "P",
        projectMeeting: "项目会议",
        word: "…",
        num: "2019年2月26日下午2:29",
        loremIpsumPrev: "在出版和设计中，",
        loremIpsum: "lorem ipsum",
        isPlaceholder: "是一个占位",
        characterText: "符文本。",
        side: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25847_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
