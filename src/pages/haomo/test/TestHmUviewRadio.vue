<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-radio v-model:value="cValue" :list="list"></hm-uview-radio>
    <hm-uview-radio
      v-model:value="cValue2"
      title="标题1"
      :list="list1"
      :textLocation="false"
      :wrap="false"
      shape="square"
      :iconSize="50"
      activeColor="#726930"
      @radioChange="radioChange1"
      @radioGroupChange="radioGroupChange1"
    ></hm-uview-radio>
    <u-button @click="click">测试取值</u-button>
  </view>
</template>

<script>
import HmUviewRadio from "@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";
export default {
  name: "TestHmUviewRadio",
  components: { HmUviewRadio },
  data() {
    return {
      cValue: "apple",
      cValue2: "apple2",
      list: [
        {
          name: "apple",
          disabled: false,
        },
        {
          name: "banner",
          disabled: false,
        },
        {
          name: "orange",
          disabled: false,
        },
      ],
      list1: [
        {
          name: "apple2",
          disabled: false,
        },
        {
          name: "banner3",
          disabled: false,
        },
        {
          name: "orange1",
          disabled: false,
        },
      ],
    };
  },
  methods: {
    click() {
      console.log("value", this.cValue);
      console.log("value2", this.cValue2);
    },
    radioChange(e) {
      console.log("radioChange", e);
    },
    radioGroupChange(e) {
      console.log("radioGroupChange", e);
    },
    radioChange1(e) {
      console.log("radioChange1", e);
    },
    radioGroupChange1(e) {
      console.log("radioGroupChange1", e);
    },
  },
};
</script>

<style>
</style>
