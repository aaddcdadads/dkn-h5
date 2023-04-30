<template>
  <!-- #ifdef H5 -->
  <hm-video></hm-video>
  <!-- #endif -->

  <!-- #ifdef MP-WEIXIN -->
  <hm-video :src="hlsUrl"></hm-video>
  <!-- #endif -->

  <!-- #ifdef APP-PLUS -->
  <hm-video :src="url"></hm-video>
  <!-- #endif -->
</template>

<script>
import HmVideo from "@/components/built-in/uniapp/HmVideo.vue";

export default {
  components: { HmVideo },
  data() {
    return {
      hlsUrl: "http://192.168.202.164:18080/live/192.168.1.18/hls.m3u8",
      url: "http://192.168.202.164:18080/live/192.168.1.18.live.flv",
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
</style>
