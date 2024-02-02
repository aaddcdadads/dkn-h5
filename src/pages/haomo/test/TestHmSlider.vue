<template>
  <view>
    {{ title }}
    <slider
      max="100"
      min="0"
      step="1"
      disabled="false"
      :value="value"
      active-color="#1aad19"
      backgroundColor="#e9e9e9"
      block-size="28"
      block-color="#ffffff"
      show-value="false"
      @change="onChange"
      @changing="onChanging"
    />
  </view>
</template>

<script>
import HmSlider from "@/components/built-in/uniapp/HmSlider.vue";

export default {
  components: { HmSlider },
  data() {
    return {
      title: "进度条：",
      value: "10",
    };
  },
  computed: {
    cValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changeValue", val);
      },
    },
  },
  methods: {
    onChange() {
      this.$emit("update:value", this.cValue);
      this.$emit("onChange");
    },
    onChanging() {
      this.$emit("update:value", this.cValue);
      this.$emit("onChanging");
    },
  },
};
</script>

<style lang="less">
</style>
