<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-divider></hm-uview-divider>
    <hm-uview-divider
      text="这是一条分割线"
      halfWidth="300"
      borderColor="#2a5caa"
      color="#f8aba6"
      fontSize="30"
      bgColor="#585eaa"
      height="50"
      type="success"
    ></hm-uview-divider>
  </view>
</template>

<script>
import HmUviewDivider from "@/components/built-in/uniapp-uview-vue3/HmUviewDivider.vue";
export default {
  name: "TestHmUviewDivider",
  components: { HmUviewDivider },
  data() {
    return {};
  },
  methods: {
    click() {},
  },
};
</script>

<style>
</style>
