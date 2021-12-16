<template>
  <view>
    <Hm-uview-switch></Hm-uview-switch>
    <Hm-uview-switch
      :loading="false"
      size="100"
      :disabled="false"
      title="是否打开"
      activeColor="red"
      inactiveColor="#f15b6c"
      :checked="checked"
      @change="change"
    ></Hm-uview-switch>
  </view>
</template>

<script>
import HmUviewSwitch from "@/components/built-in/uview/HmUviewSwitch.vue";

export default {
  components: { HmUviewSwitch },

  data() {
    return {
      checked: true,
    };
  },
  methods: {
    change(e) {
      console.log("this.checked", this.checked);
    },
  },
};
</script>

<style lang="less">
</style>
