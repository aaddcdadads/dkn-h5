<template>
  <view>
    <hm-active-users-card></hm-active-users-card>
    <hm-active-users-card
      ref="HmActiveUsersCard"
      :options="TestHmActiveUsersCard.options"
    >
    </hm-active-users-card>
  </view>
</template>

<script>
import HmActiveUsersCard from "/@/components/built-in/uniapp-haomo/HmActiveUsersCard.vue";
export default {
  components: { HmActiveUsersCard },
  data() {
    return {
      TestHmActiveUsersCard: {
        title: "活越用户",
        titleImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        wan: "4.8万",
        monthly: "每月",
        weekNum: "1.3万",
        weekly: "每周",
        people: "166人",
        daily: "每日",
        floorBg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_1.png",
        longBg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_2.png",
        barImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_3.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
