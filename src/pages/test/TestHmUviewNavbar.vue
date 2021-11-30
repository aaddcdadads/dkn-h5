<template>
  <view>
    <hm-uview-navbar
      title="剑未配妥，出门已是江湖"
      :titleWidth="250"
      titleColor="#606266"
      :titleSize="22"
      :titleBold="false"
      :height="44"
      backIconName="nav-back"
      backIconColor="#606266"
      :backIconSize="30"
      backText="返回"
      :backTextStyle="backTextStyleA"
      :isBack="true"
      :background="backgroundA"
      :isFixed="true"
      :borderBottom="false"
    ></hm-uview-navbar>
    <hm-uview-navbar
      title="剑未配妥，出门已是江湖"
      :titleWidth="150"
      titleColor="red"
      :titleSize="30"
      :titleBold="true"
      :height="50"
      backIconName="arrow-leftward"
      backIconColor="red"
      :backIconSize="40"
      backText="返回"
      :backTextStyle="backTextStyleB"
      :isBack="true"
      :background="backgroundB"
      :isFixed="false"
      :borderBottom="true"
    >插槽</hm-uview-navbar>
  </view>
</template>

<script>
import HmUviewNavbar from "@/components/built-in/HmUviewNavbar.vue";
export default {
  components: { HmUviewNavbar },
  data() {
    return {
      backTextStyleA: {
        color: "#606266",
        fontSize: "16px",
      },
      backTextStyleB: {
        color: "red",
        fontSize: "20px",
      },
      backgroundA: { background: "#ffffff" },
      backgroundB: { background: "#39CCCC" },
    };
  },
  methods: {},
};
</script>

<style></style>
