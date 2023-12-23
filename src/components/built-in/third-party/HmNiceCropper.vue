<template>
  <view class="container"> 
      <image-cropper
        id="image-cropper"
        :width="width"
        :height="height"
        :cutWidth="cutWidth"
        :cutHeight="cutHeight"
        :minWidth="minWidth"
        :minHeight="minHeight"
        :center="center"
        :disableScale="disableScale"
        :src="src"
        :disableRotate="disableRotate"
        :disableTranslate="disableTranslate"
        :disableCtrl="disableCtrl"
        :boundDetect="boundDetect"
        :freeBoundDetect="freeBoundDetect"
        :keepRatio="keepRatio"
        :showCtrlBorder="showCtrlBorder"
        :resetCut="resetCut"
        :imageCenter="imageCenter"
        :fit="fit"
        :disablePreview="disablePreview"
        :maxZoom="maxZoom"
        :minZoom="minZoom"
        :angle="angle"
        :zoom="zoom"
        :offset="offset"
        :background="background"
        :canvasBackground="canvasBackground"
        :canvasZoom="canvasZoom"
        :fileType="fileType"
        :quality="quality"
        :maskType="maskType"
        :circleView="circleView"
        canvasBackground="red"
        @cropped="cropped"
        @afterDraw="afterDraw"
        @beforeDraw="beforeDraw"
        @load="load"
        @error="error"
      />
  </view>
</template>
<script>
import ImageCropper from "../../../uni_modules/uniapp-nice-cropper/cropper.vue";
export default {
  components: {
    ImageCropper,
  },
  props: {
    /**
     * 容器宽度
     */
    width: {
      type: String,
      default: "100%",
    },
    /**
     * 容器高度
     */
    height: {
      type: String,
      default: "100%",
    },
    /**
     * 裁剪宽宽度
     */
    cutWidth: {
      type: String,
      default: "50%",
    },
    /**
     * 裁剪宽高度
     */
    cutHeight: {
      type: String,
      default: "50%",
    },
    /**
     * 裁剪框最小宽度
     */
    minWidth: {
      type: Number,
      default: 50,
    },
    /**
     * 裁剪框最小高度
     */
    minHeight: {
      type: Number,
      default: 50,
    },
    /**
     * 裁剪框居中
     */
    center: {
      type: Boolean,
      default: true,
    },
    /**
     * 原始图片路径
     */
    src: {
      type: String,
      default: "",
    },
    /**
     * 禁止缩放
     */
    disableScale: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止旋转
     */
    disableRotate: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止平移
     */
    disableTranslate: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止裁剪框调整
     */
    disableCtrl: {
      type: Boolean,
      default: false,
    },
    /**
     * 开启边界探测
     */
    boundDetect: {
      type: Boolean,
      default: false,
    },
    /**
     * 旋转时开启边界探测
     */
    freeBoundDetect: {
      type: Boolean,
      default: false,
    },
    /**
     * 固定裁剪框比例
     */
    keepRatio: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示裁剪框边框
     */
    showCtrlBorder: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片改变重新裁
     */
    resetCut: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片是否居中
     */
    imageCenter: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片裁剪框吻合
     */
    fit: {
      type: Boolean,
      default: true,
    },
    /**
     * 禁止预览
     */
    disablePreview: {
      type: Boolean,
      default: false,
    },
    /**
     * 最大放大倍数
     */
    maxZoom: {
      type: Number,
      default: 10,
    },
    /**
     * 最小缩放倍数
     */
    minZoom: {
      type: Number,
      default: 1,
    },
    /**
     * 旋转角度
     */
    angle: {
      type: Number,
      default: 0,
    },
    /**
     * 放大缩放倍数
     */
    zoom: {
      type: Number,
      default: 1,
    },
    /**
     * 左侧偏移量
     */
    offset: {
      type: Array,
      default: function () {
        return [0, 0];
      },
    },
    /**
     * 容器的背景
     */
    background: {
      type: String,
      default: "#000",
    },
    /**
     * 图片的背景
     */
    canvasBackground: {
      type: String,
      default: "#fff",
    },
    /**
     * 导出图片倍数
     */
    canvasZoom: {
      type: Number,
      default: 1,
    },
    /**
     * 导出图片格式
     */
    fileType: {
      type: String,
      default: "png",
    },
    /**
     * 导出图片质量
     */
    quality: {
      type: Number,
      default: 1,
    },
    /**
     * 遮罩层类型
     * @type enum
     * @options ["shadow","outline"]
     */
    maskType: {
      type: String,
      default: "shadow",
    },
    /**
     * 使用原型预览
     */
    circleView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    beforeDraw(context, transform) {
      this.$emit("beforeDraw",context,transform);
    },
    afterDraw(ctx, info) {
     this.$emit("afterDraw",ctx,info);
    },
    cropped(imagePath, imageInfo) {
      this.$emit("cropped",imagePath,imageInfo);
    },
    error(err){
      this.$emit("error",err);
    },
    load(img){
      this.$emit("load",img);
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.cropper-wrap {
  height: 100%;
}
</style>