<template>
  <view>
    <hm-uview-tabbar></hm-uview-tabbar>
    <hm-uview-tabbar
      v-model:current="cCurrent"
      :list="cList"
      :show="true"
      bgColor="#ffffff"
      height="50px"
      iconSize="20px"
      midButtonSize="45px"
      activeColor="#303133"
      inactiveColor="#606266"
      :midButton="true"
      :borderTop="true"
    ></hm-uview-tabbar>
  </view>
</template>

<script>
import HmUviewTabbar from "@/components/built-in/HmUviewTabbar.vue";

export default {
  components: { HmUviewTabbar },
  data() {
    return {
      cCurrent: "0",
      cList: [
        {
          //未激活的图标
          iconPath: "home",
          //激活(选中)的图标
          selectedIconPath: "home-fill",
          text: "首页",
          // 红色角标显示的数字，如果需要移除角标，配置此参数为0即可
          count: 2,
          // 如果配置此值为true，那么角标将会以红点的形式显示
          isDot: true,
          // 如果是凸起按钮项，需配置此值为true
          midButton: false,
          // 如果使用自定义扩展的图标库字体，需配置此值为true
          customIcon: false,
        },
        {
          iconPath: "photo",
          selectedIconPath: "photo-fill",
          text: "放映厅",
          customIcon: false,
        },
        {
          iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
          selectedIconPath:
            "https://cdn.uviewui.com/uview/common/min_button_select.png",
          text: "发布",
          midButton: true,
          customIcon: false,
        },
        {
          iconPath: "play-right",
          selectedIconPath: "play-right-fill",
          text: "直播",
          customIcon: false,
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: "我的",
          count: 23,
          isDot: false,
          customIcon: false,
        },
      ],
    };
  },
};
</script>

<style lang="less"></style>
