<template>
  <view>
    <hm-downloads-card></hm-downloads-card>
    <hm-downloads-card
      ref="HmDownloadsCard"
      :options="TestHmDownloadsCard.options"
    >
    </hm-downloads-card>
  </view>
</template>

<script>
import HmDownloadsCard from "/@/components/built-in/uniapp-haomo/HmDownloadsCard.vue";
export default {
  components: { HmDownloadsCard },
  data() {
    return {
      TestHmDownloadsCard: {
        count: "299.674",
        downloads: "下载量",
        downloadImage:
          "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24402_0_0.png",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
