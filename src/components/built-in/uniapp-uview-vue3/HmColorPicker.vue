<template>
  <Chrome
    class="color-picker"
    v-model="cValue"
    @update:modelValue="colorChange"
  ></Chrome>
</template>

<script>
import { Chrome } from "@ckpack/vue-color";

export default {
  name: "HmColorPicker",
  components: {
    Chrome,
  },
  props: {
    /**
     * 当前颜色
     * @type Color
     */
    value: {
      type: String,
      default: "#000000",
    },
  },
  data() {
    return {
      cValue: "",
    };
  },
  watch: {
    value(val){
      this.cValue = val;
    }
  },
  created() {
    this.cValue = this.value;
  },
  methods: {
    colorChange(val){
      this.cValue = val
      this.$emit("colorChange", this.cValue.hex8)
    }
  },
};
</script>

<style lang="less">

</style>

