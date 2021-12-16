<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-steps></hm-uview-steps>
    <hm-uview-steps
      direction="column"
      :list="list1"
      icon="level"
      activeColor="#224b8f"
      unActiveColor="red"
      mode="dot"
      :current="3"
    ></hm-uview-steps>
  </view>
</template>

<script>
import HmUviewSteps from "@/components/built-in/uview/HmUviewSteps.vue";
export default {
  name: "TestHmUviewSteps",
  components: { HmUviewSteps },
  data() {
    return {
      list1: [
        {
          name: "下单1",
        },
        {
          name: "出库2",
        },
        {
          name: "运输3",
        },
        {
          name: "签收4",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>
