<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-count-down></hm-uview-count-down>
    <hm-uview-count-down
      :timestamp="86400"
      format="mm:ss"
      :autoplay="false"
      :millisecond="false"
      @change="onChange"
      @finish="onFinish"
    ></hm-uview-count-down>
  </view>
</template>

<script>
import HmUviewCountDown from "@/components/built-in/uniapp-uview-vue3/HmUviewCountDown.vue";
export default {
  name: "TestHmUviewCountDown",
  components: { HmUviewCountDown },
  data() {
    return {};
  },
  methods: {
    onChange(e) {
      console.log("e", e);
    },
    onFinish() {
      console.log("essss");
    },
  },
};
</script>

<style>
</style>
