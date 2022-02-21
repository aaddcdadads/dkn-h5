<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-count-down
      :countStatus="countStatus2"
      :autoStart="false"
    ></hm-uview-count-down>
    <hm-uview-count-down
      :timestamp="86400"
      format="mm:ss"
      :autoStart="autoStart"
      :millisecond="false"
      :countStatus="countStatus1"
      @change="onChange"
      @finish="onFinish"
    ></hm-uview-count-down>
  </view>
  <u-button @click="start">开始</u-button>
  <u-button @click="stop">暂停</u-button>
</template>

<script>
import HmUviewCountDown from "@/components/built-in/uniapp-uview-vue3/HmUviewCountDown.vue";
export default {
  name: "TestHmUviewCountDown",
  components: { HmUviewCountDown },
  data() {
    return {
      autoStart: false,
      countStatus1: "stop",
      countStatus2: "stop",
    };
  },
  methods: {
    onChange(e) {
      console.log("e", e);
    },
    onFinish() {
      console.log("essss");
    },
    start() {
      //this.autoStart = true;
      //   this.$refs.countDown.start();
      this.countStatus1 = "start";
      this.countStatus2 = "start";
      console.log("开始倒计时");
    },
    stop() {
      this.autoStart = false;
      //   this.$refs.countDown.start();
      this.countStatus1 = "stop";
      this.countStatus2 = "stop";
      console.log("开始倒计时");
    },
  },
};
</script>

<style>
</style>
