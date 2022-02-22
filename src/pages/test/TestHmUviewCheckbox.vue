<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <!-- <hm-uview-checkbox></hm-uview-checkbox> -->
    <hm-uview-checkbox
      :list="list1"
      @checkboxGroupChange="checkboxGroupChange1"
      @checkboxChange="checkboxChange1"
    ></hm-uview-checkbox>
  </view>
</template>

<script>
import HmUviewCheckbox from "@/components/built-in/uniapp-uview-vue3/HmUviewCheckbox.vue";
export default {
  name: "TestHmUviewCheckbox",
  components: { HmUviewCheckbox },
  data() {
    return {
      list1: [
        {
          name: "qqq",
          checked: false,
          disabled: false,
        },
        {
          name: "www",
          checked: true,
          disabled: false,
        },
        {
          name: "eee",
          checked: false,
          disabled: false,
        },
      ],
    };
  },
  methods: {
    checkboxGroupChange1(e) {
      console.log("checkboxGroupChange1", e);
    },
    checkboxChange1(e) {
      console.log("checkboxChange1", e);
    },
  },
};
</script>

<style>
</style>
