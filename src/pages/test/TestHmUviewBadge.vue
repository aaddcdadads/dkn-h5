<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-divider
      text="1231231"
      color="red"
      halfWidth="600"
      borderColor="#5c7a29"
      fontSize="24"
      bgcolor="#4e72b8"
      height="50"
      type="info"
      @onClick="onClick"
    ></hm-uview-divider>
    <hm-uview-divider
      text="qqqq"
      color="#4e72b8"
      halfWidth="100"
      borderColor="red"
      fontSize="50"
      bgcolor="#5c7a29"
      height="20"
      type="warning"
      @onClick="onClick1"
    ></hm-uview-divider>
  </view>
</template>

<script>
import HmUviewDivider from "@/components/built-in/HmUviewDivider.vue";
export default {
  name: "TestHmUviewDivider",
  components: { HmUviewDivider },
  data() {
    return {
      onClick() {
        console.log(1);
      },
      onClick1() {
        console.log(2);
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>
