<template>
  <view>
    <hm-uview-rate
      :count="5"
      :disabled="false"
      :size="32"
      inactiveColor="#b2b2b2"
      activeColor="#FA3534"
      :gutter="10"
      activeIcon="star-fill"
      inactiveIcon="star"
    ></hm-uview-rate>
	<hm-uview-rate
      :count="10"
      :disabled="false"
      :size="50"
      inactiveColor="#d9ffdb"
      activeColor="yellow"
      :gutter="20"
      activeIcon="thumb-up-fill"
      inactiveIcon="thumb-up"
    ></hm-uview-rate>
  </view>
</template>

<script>
import HmUviewRate from "@/components/built-in/HmUviewRate.vue";

export default {
  components: { HmUviewRate },
  methods: {
    onChange(value) {
      console.log("当前值：", value);
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="less"></style>
