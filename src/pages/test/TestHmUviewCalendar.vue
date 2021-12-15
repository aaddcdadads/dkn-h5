<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-calendar></hm-uview-calendar>
    <hm-uview-calendar
      v-model:value="cValue2"
      title="标题1"
      mode="range"
      placeholder="选择"
      width="150"
    ></hm-uview-calendar>
    <u-button @click="click">测试取值</u-button>
  </view>
</template>

<script>
import HmUviewCalendar from "@/components/built-in/HmUviewCalendar.vue";
export default {
  name: "TestHmUviewCalendar",
  components: { HmUviewCalendar },
  data() {
    return {
      //cValue: "",
      cValue2: "",
    };
  },
  methods: {
    click() {
      //console.log("value", this.cValue);
      console.log("value2", this.cValue2);
    },
  },
};
</script>

<style>
</style>
