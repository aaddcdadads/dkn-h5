<template>
  <hm-video :src="url"></hm-video>
</template>

<script>
import HmVideo from "@/components/built-in/uniapp/HmVideo.vue";

export default {
  components: { HmVideo },
  data() {
    return {
      url: "ws://192.168.202.164:18080/live/192.168.1.18.live.flv",
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
