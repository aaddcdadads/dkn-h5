<template>
  <view class="content">
    <button @tap="chooseImage()">选择图片</button>
    <image class="image" :src="path"></image>
    <!-- <kps-image-cutter
      @ok="onok"
      @cancel="oncancle"
      :url="url"
      :fixed="true"
      :width="200"
      :height="300"
    ></kps-image-cutter> -->
    <kps-image-cutter
      @ok="onok"
      @cancel="oncancle"
      :url="url"
      :fixed="false"
      :maxWidth="500"
      :minHeight="300"
    ></kps-image-cutter>
  </view>
</template>

<script>
import kpsImageCutter from "@/components/built-in/third-party/HmImageCrop.vue";
export default {
  components: { kpsImageCutter },
  data() {
    return {
      url: "",
      path: "",
    };
  },
  methods: {
    chooseImage() {
      uni.chooseImage({
        success: (res) => {
          // 设置url的值，显示控件
          this.url = res.tempFilePaths[0];
        },
      });
    },
    onok(ev) {
      this.path = ev.path;
      this.url = "";
    },
    oncancle() {
      // url设置为空，隐藏控件
      this.url = "";
    },
  },
};
</script>

<style>
.image {
  width: 200px;
  height: 200px;
}
</style>