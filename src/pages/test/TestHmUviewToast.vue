<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <Hm-uview-toast ref="toast1"></Hm-uview-toast>
    <Hm-uview-toast ref="toast2"></Hm-uview-toast>
    <u-button @click="click">打开</u-button>
    <u-button @click="click2">打开2</u-button>
  </view>
</template>

<script>
import HmUviewToast from "@/components/built-in/uniapp-uview-vue3/HmUviewToast.vue";
export default {
  name: "TestHmUviewToast",
  components: { HmUviewToast },
  data() {
    return {
      options: {},
      options2: {},
    };
  },
  methods: {
    click() {
      this.$refs.toast1.show({
        title: "操作成功操作成功操作成功操作成功",
        type: "error",
      });
    },
    click2() {},
  },
};
</script>

<style>
</style>
