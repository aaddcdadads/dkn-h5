<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-sticky><Hm-uview-image /></hm-uview-sticky>
    <hm-uview-sticky
      offsetTop="321"
      index="2"
      :enable="true"
      bgColor="#726930"
      zIndex="9999"
      @onFixed="onFixed1"
      @onUnfixed="onUnfixed1"
      ><Hm-uview-image
    /></hm-uview-sticky>
  </view>
</template>

<script>
import HmUviewSticky from "@/components/built-in/uview/HmUviewSticky.vue";
import HmUviewImage from "@/components/built-in/uview/HmUviewImage.vue";
export default {
  name: "TestHmUviewSticky",
  components: { HmUviewSticky, HmUviewImage },
  data() {
    return {};
  },
  methods: {
    onFixed(e) {
      console.log("onFixed", e);
    },
    onUnfixed(e) {
      console.log("onUnfixed", e);
    },
    onFixed1(e) {
      console.log("onFixed1", e);
    },
    onUnfixed1(e) {
      console.log("onUnfixed1", e);
    },
  },
};
</script>

<style>
</style>
