<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <Hm-uview-toast :options="options"></Hm-uview-toast>
    <Hm-uview-toast :options="options2"></Hm-uview-toast>
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
      this.options = {
        title: "操作成功操作成功操作成功操作成功",
        // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
        type: "error",
        // 如果不需要图标，
      };
    },
    click2() {
      this.options = {
        title: "操作成功操作成功操作成功操作成功",
        // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
        type: "warning",
        // 如果不需要图标，
      };
    },
  },
};
</script>

<style>
</style>
