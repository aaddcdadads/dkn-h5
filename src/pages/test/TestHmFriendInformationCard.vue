<template>
  <view>
    <hm-friend-information-card></hm-friend-information-card>
    <hm-friend-information-card
      ref="HmFriendInformationCard"
      :options="TestHmFriendInformationCard.options"
    >
    </hm-friend-information-card>
  </view>
</template>

<script>
import HmFriendInformationCard from "/@/components/built-in/uniapp-haomo/HmFriendInformationCard.vue";
export default {
  components: { HmFriendInformationCard },
  data() {
    return {
      TestHmFriendInformationCard: {
        primary:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        name: "张三",
        titleImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        address: "深圳",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
