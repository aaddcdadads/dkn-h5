<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-checkbox
      title="123"
      :list="list"
      @checkboxGroupChange="checkboxGroupChange"
      @checkboxChange="checkboxChange"
    ></hm-uview-checkbox>
    <hm-uview-checkbox title="321" :list="list1" @checkboxGroupChange="checkboxGroupChange1"
      @checkboxChange="checkboxChange1"></hm-uview-checkbox>
  </view>
</template>

<script>
import HmUviewCheckbox from "@/components/built-in/HmUviewCheckbox.vue";
export default {
  name: "TestHmUviewCheckbox",
  components: { HmUviewCheckbox },
  data() {
    return {
      list: [
        {
          name: "123",
          checked: true,
          disabled: false
        },
        {
          name: "321",
          checked: false,
          disabled: false
        },
        {
          name: "44",
          checked: false,
          disabled: false
        }
      ],
      list1: [
        {
          name: "qqq",
          checked: false,
          disabled: false
        },
        {
          name: "www",
          checked: true,
          disabled: false
        },
        {
          name: "eee",
          checked: false,
          disabled: true
        }
      ]
    };
  },
  methods: {
    checkboxGroupChange(e) {
      console.log("checkboxGroupChange", e);
    },
    checkboxChange(e) {
      console.log("checkboxChange", e);
    },
    checkboxGroupChange1(e) {
      console.log("checkboxGroupChange1", e);
    },
    checkboxChange1(e) {
      console.log("checkboxChange1", e);
    },
  }
};
</script>

<style>
</style>
