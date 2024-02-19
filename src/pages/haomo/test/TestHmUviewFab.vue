<template>
  <view>
    <hm-uview-fab></hm-uview-fab>
    <hm-uview-fab
      ref="test"
      :pattern="test.pattern"
      :horizontal="test.horizontal"
      :vertical="test.vertical"
      :popMenu="test.popMenu"
      :content="test.content"
      :direction="test.direction"
      @trigger="onTrigger"
      @fabClick="onFabClick"
      @addClick="onAddClick"
    ></hm-uview-fab>
  </view>
</template>
<script>
import HmUviewFab from "/@/components/built-in/uniapp-uview-vue3/HmUviewFab.vue";
export default {
  name:"TestHmUviewFab",
  components:{HmUviewFab},
  data() {
    return {
      test: {
        pattern: {},
        horizontal: "right",
        vertical: "top",
        popMenu: true,
        content: [
          {
            iconPath: "/static/logo.png",
            selectedIconPath: "/static/image-active.png",
            text: "溜溜球",
            active: false,
          },
          {
            iconPath: "/static/logo.png",
            selectedIconPath: "/static/home-active.png",
            text: "激活",
            active: false,
          },
          {
            iconPath: "/static/logo.png",
            selectedIconPath: "/static/star-active.png",
            text: "收藏",
            active: false,
          },
        ],
        direction: "vertical",
      },
    };
  },
  methods: {
    onTrigger(e) {
      console.log("点击菜单项");
    },
    onFabClick(e) {
      console.log("点击展开菜单项");
    },
    onAddClick(e) {
      console.log("点击非菜单项");
    },
  },
};
</script>
<style lang="less" scoped></style>
