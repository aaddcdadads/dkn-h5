<template>
  <view>
    <hm-uview-count-down-input></hm-uview-count-down-input>
    <hm-uview-count-down-input
      :label="data.label"
      :labelWidth="data.labelWidth"
      :height="data.height"
    ></hm-uview-count-down-input>
  </view>
</template>
<script>
import HmUviewCountDownInput from "@/components/built-in/uniapp-uview-vue3/HmUviewCountDownInput.vue";
export default {
  name: "TestHmUviewCountDownInput",
  components: { HmUviewCountDownInput },
  data() {
    return {
      data: {
        label: "",
        labelWidth: "0",
        height: "auto",
      },
    };
  },
};
</script>