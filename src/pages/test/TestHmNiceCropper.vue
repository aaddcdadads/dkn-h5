<template>
  <view class="box">
    <hm-nice-cropper
      :width="width"
      :height="height"
      :cutWidth="cutWidth"
      :cutHeight="cutHeight"
      :minWidth="30"
      :minHeight="30"
      :center="true"
      :src="src"
      :disableScale="false"
      :disableRotate="false"
      :disableTranslate="false"
      :disableCtrl="false"
      :boundDetect="true"
      :freeBoundDetect="false"
      :keepRatio="false"
      :showCtrlBorder="false"
      :resetCut="false"
      :imageCenter="false"
      :fit="false"
      :disablePreview="true"
      :maxZoom="10"
      :minZoom="1"
      :angle="0"
      :zoom="2"
      :offset="[10, 0]"
      background="#fff"
      canvasBackground="#fff"
      :canvasZoom="1"
      fileType="jpg"
      :quality="1"
      maskType="shadow"
      :circleView="false"
      @load="load"
      @error="error"
      @afterDraw="afterDraw"
      @cropped="cropped"
      @beforeDraw="beforeDraw"
    ></hm-nice-cropper>
    <img :src="img"/>
    <button @click="onClick">上传照片</button>
  </view>
</template>
<script>
import HmNiceCropper from "../../components/built-in/third-party/HmNiceCropper.vue";
export default {
  components: {
    HmNiceCropper,
  },
  data() {
    return {
      width: "80%",
      height: "70%",
      cutWidth: "60%",
      cutHeight: "50%",
      minWidth: 20,
      minHeight: 20,
      center: true,
      src: "",
      img:"",
    };
  },
  methods:{
    onClick(){
      uni.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: ['album', 'camera'],
        success: res => {
          var tempFilePaths = res.tempFilePaths
          this.src = tempFilePaths[0]
        }
      })
    },
    load(img){
      console.log("load",img);
    },
    beforeDraw(context, transform) {
      context.setFillStyle('red')
    },
    afterDraw(ctx, info) {
      ctx.fillText('我是一行文字水印', 50, 50);
    },
    cropped(imagePath, imageInfo) {
      console.log(imagePath,imageInfo);
      this.img = imagePath; 
    },
    error(err){
      console.log("error",err);
    }

  }
};
</script>
<style scoped>
.box {
  height: 80%;
}
</style>