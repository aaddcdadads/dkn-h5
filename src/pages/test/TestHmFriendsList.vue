<template>
  <view>
    <hm-friends-list></hm-friends-list>
    <hm-friends-list ref="HmFriendsList" :options="TestHmFriendsList.options">
    </hm-friends-list>
  </view>
</template>

<script>
import HmFriendsList from "/@/components/built-in/uniapp-haomo/HmFriendsList.vue";
export default {
  components: { HmFriendsList },
  data() {
    return {
      TestHmFriendsList: {
        friendsList: "朋友表",
        img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
        avator:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        miller: "张三",
        user: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        lingna: "李四",
        word: "MY",
        tom: "王五",
        userImage:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        than: "黄磊",
        text: "LW",
        louis: "赵高",
        userImg:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
        romi: "罗生",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
