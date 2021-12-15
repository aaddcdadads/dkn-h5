<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-badge></hm-uview-badge>
    <hm-uview-badge
      :isDot="false"
      count="15"
      :offset="arr"
      type="success"
      color="#b63131"
      bgcolor="#121a2a"
    ></hm-uview-badge>
    <hm-uview-badge
      :isDot="true"
      :count="2"
      :offset="arr"
      type="primary"
      color="#b62521"
      bgcolor="##2e841a"
    ></hm-uview-badge>
  </view>
</template>

<script>
import HmUviewBadge from "@/components/built-in/HmUviewBadge.vue";
export default {
  name: "TestHmUviewBadge",
  components: { HmUviewBadge },
  data() {
    return {
      arr: [-8, -8],
    };
  },
  methods: {},
};
</script>

<style>
</style>
