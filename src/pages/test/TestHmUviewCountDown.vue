<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-count-down
      :timestamp="86400"
      :autoplay="true"
      separator="colon"
      :separatorSize="30"
      separatorColor="#303133"
      :fontSize="30"
      color="#303133"
      bgColor="#ffffff"
      :showBorder="false"
      borderColor="#303133"
      :height="50"
      :showDays="true"
      :showConfirmbar="true"
      :showHours="true"
      :showMinutes="true"
      :showSeconds="true"
    ></hm-uview-count-down>
    <hm-uview-count-down
      :timestamp="86400"
      :autoplay="true"
      separator="zh"
      :separatorSize="50"
      separatorColor="#639cff"
      :fontSize="50"
      color="#639cff"
      bgColor="#c3d9ff"
      :showBorder="true"
      borderColor="#639cff"
      :height="70"
      :showDays="true"
      :showConfirmbar="true"
      :showHours="true"
      :showMinutes="true"
      :showSeconds="true"
    ></hm-uview-count-down>
  </view>
</template>

<script>
import HmUviewCountDown from "@/components/built-in/HmUviewCountDown.vue";
export default {
  name: "TestHmUviewCountDown",
  components: { HmUviewCountDown },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style>
</style>
