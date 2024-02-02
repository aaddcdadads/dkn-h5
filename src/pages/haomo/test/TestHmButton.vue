<template>
  <button
    size="mini"
    plain="false"
    type="primary"
    disabled="false"
    shape="square"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
import HmButton from "@/components/built-in/uniapp/HmButton.vue";

export default {
  components: { HmButton },
  data() {
    return {
      text: "按钮",
    };
  },
  methods: {
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less">
</style>
