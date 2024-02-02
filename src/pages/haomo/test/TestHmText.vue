<template>
  <text
    text="aa"
    font-size="24px"
    color="rgb(0,0,0,1)"
    @click="onClick"
    selectable="false"
    userSelect="false"
    decode="false"
  >
  </text>
</template>

<script>
import HmText from "@/components/built-in/uniapp/HmText.vue";

export default {
  components: { HmText },
  data() {
    return {};
  },
};
</script>

<style lang="less">
</style>
