<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-search
      v-model:value="cValue"
      @change="onChange"
    ></hm-uview-search>
    <hm-uview-search
      v-model:value="cValue2"
      title="标题2"
      actionText="321"
      placeholder="输qq入"
      leftIcon="level"
      rightIcon="level"
      shape="square"
      backgroundColor="#b7ba6b"
      :clearabled="false"
      :showAction="false"
      inputAlign="center"
      @change="onChange1"
    ></hm-uview-search>
    <u-button @click="click">测试取值</u-button>
  </view>
</template>

<script>
import HmUviewSearch from "@/components/built-in/uniapp-uview-vue3/HmUviewSearch.vue";
export default {
  name: "TestHmUviewSearch",
  components: { HmUviewSearch },
  data() {
    return {
      cValue: "",
      cValue2: "",
    };
  },
  methods: {
    click() {
      console.log("value", this.cValue);
      console.log("value2", this.cValue2);
    },
    onChange(e) {
      console.log("onChange", e);
    },
    onChange1(e) {
      console.log("onChange1", e);
    },
  },
};
</script>

<style>
</style>
