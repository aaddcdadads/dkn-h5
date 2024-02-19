<template>
  <input
    value="默认初始值"
    type="text"
    text-content-type="111"
    password="false"
    placeholder="请输入"
    placeholder-style="#F76260"
    disabled="false"
    maxlength="140"
    focus="false"
    confirm-type="done"
    confirm-hold="false"
    cursor="0"
    adjust-position="true"
    hold-keyboard="false"
    auto-blur="false"
    safe-password-length="10"
    safe-password-time-stamp="20"
    @focus="inputfocus"
    @input="input"
    @blur="blur"
    @confirm="confirm"
    @keyboardheightchange="keyboardheightchange"
  />
</template>

<script>
import HmInput from "@/components/built-in/uniapp/HmInput.vue";

export default {
  components: { HmInput },
  data() {
    return {};
  },
  methods: {
    inputfocus() {
      this.$emit("inputfocus");
    },
    input() {
      this.$emit("input");
    },
    blur() {
      this.$emit("blur");
    },
    confirm() {
      this.$emit("confirm");
    },
    keyboardheightchange() {
      this.$emit("keyboardheightchange");
    },
  },
};
</script>

<style lang="less">
</style>
