<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-slider v-model:value="cValue"></hm-uview-slider>
    <hm-uview-slider
      v-model:value="cValue2"
      title="标题123"
      :max="100"
      :min="1"
      :step="1"
      blockWidth="输入321"
      height="10"
      inactiveColor="#726930"
      activeColor="red"
      @onStart="onStart1"
      @onMoving="onMoving1"
      @onEnd="onEnd1"
    ></hm-uview-slider>
    <u-button @click="click">测试取值</u-button>
  </view>
</template>

<script>
import HmUviewSlider from "@/components/built-in/uview/HmUviewSlider.vue";
export default {
  name: "TestHmUviewSlider",
  components: { HmUviewSlider },
  data() {
    return {
      cValue: 0,
      cValue2: 0,
    };
  },
  methods: {
    click() {
      console.log("value", this.cValue);
      console.log("value2", this.cValue2);
    },
    onStart() {
      console.log("onStart");
    },
    onMoving() {
      console.log("onMoving");
    },
    onEnd() {
      console.log("onEnd");
    },
    onStart1() {
      console.log("onStart1");
    },
    onMoving1() {
      console.log("onMoving1");
    },
    onEnd1() {
      console.log("onEnd1");
    },
  },
};
</script>

<style>
</style>
