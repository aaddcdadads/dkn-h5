<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-field></hm-uview-field>
    <hm-uview-field
      v-model:value="cValue2"
      label="标题123"
      placeholder="输入"
      icon="level"
      rightIcon="woman"
      type="textarea"
      @onInput="onInput1"
    ></hm-uview-field>
  </view>
</template>

<script>
import HmUviewField from "@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
export default {
  name: "TestHmUviewField",
  components: { HmUviewField },
  data() {
    return {
      cValue: "",
      cValue2: "",
    };
  },
  methods: {
    click() {
      //console.log("value2", this.cValue2);
    },

    onInput1(e) {
      console.log("onInput1", e);
      console.log("value2", this.cValue2);
    },
  },
};
</script>

<style>
</style>
