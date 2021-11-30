<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-field
      v-model:value="cValue"
      label="标题"
      placeholder="测试"
      icon="man"
      rightIcon="50"
      type="text"
      @onInput="onInput"
    ></hm-uview-field>
    <hm-uview-field
      v-model:value="cValue2"
      label="标题123"
      placeholder="输入"
      icon="level"
      rightIcon="100"
      type="textarea"
      @onInput="onInput1"
    ></hm-uview-field>
    <u-button @click="click">测试取值</u-button>
  </view>
</template>

<script>
import HmUviewField from "@/components/built-in/HmUviewField.vue";
export default {
  name: "TestHmUviewField",
  components: { HmUviewField },
  data() {
    return {
      cValue: "",
      cValue2: ""
    };
  },
  methods: {
    click() {
      console.log("value", this.cValue);
      console.log("value2", this.cValue2);
    },
    onInput(e) {
      console.log("onInput", e);
    },
    onInput1(e) {
      console.log("onInput1", e);
    }
  }
};
</script>

<style>
</style>
