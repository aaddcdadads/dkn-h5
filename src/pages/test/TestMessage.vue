<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <u-button @click="click">打开</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.click();
  },
  methods: {
    click() {
      let options = {
        title: "操作成功操作成功操作成功操作成功",
        // 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
        type: "error",
        // 如果不需要图标，
      };

      this.$message({ options });
    },
  },
};
</script>

<style>
</style>
