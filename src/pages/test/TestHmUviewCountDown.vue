<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-count-down></hm-uview-count-down>
    <hm-uview-count-down
      ref="countDown"
      :timestamp="86400"
      format="mm:ss"
      :autoStart="autoStart"
      :millisecond="false"
      @change="onChange"
      @finish="onFinish"
    ></hm-uview-count-down>
  </view>
  <u-button @click="onClick">开始</u-button>
</template>

<script>
import HmUviewCountDown from "@/components/built-in/uniapp-uview-vue3/HmUviewCountDown.vue";
export default {
  name: "TestHmUviewCountDown",
  components: { HmUviewCountDown },
  data() {
    return {
      autoStart: false,
    };
  },
  methods: {
    onChange(e) {
      console.log("e", e);
    },
    onFinish() {
      console.log("essss");
    },
    onClick() {
      //this.autoStart = true;
      this.$refs.countDown.start();
      console.log("开始倒计时");
    },
  },
};
</script>

<style>
</style>
