<template>
  <progress
    percent="75"
    showInfo="true"
    border-radius="6"
    font-size="20"
    stroke-width="10"
    active-color="#09BB07"
    backgroundColor="#EBEBEB"
    active="false"
    active-mode="backwards"
    duration="30"
  ></progress>
</template>

<script>
import HmProgress from "@/components/built-in/uniapp/HmProgress.vue";

export default {
  components: { HmProgress },
  data() {
    return {};
  },
};
</script>

<style lang="less">
</style>
