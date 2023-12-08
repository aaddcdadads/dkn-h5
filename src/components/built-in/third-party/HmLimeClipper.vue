<template>
  <view>
    <!-- 图片裁剪 -->
    <l-clipper
      ref="lclipper"
      v-if="cShow"
      :image-url="imageUrl"
      :quality="quality"
      :source="source"
      :width="width"
      :height="height"
      :min-width="minWidth"
      :min-height="minHeight"
      :max-width="maxWidth"
      :max-height="maxHeight"
      :min-ratio="minRatio"
      :max-ratio="maxRatio"	
      :rotate-angle="rotateAngle"
      :scale-ratio="scaleRatio"
      :is-lock-width="isLockWidth"
      :is-lock-height="isLockHeight"
      :is-lock-ratio="isLockRatio"
      :is-disable-scale="isDisableScale"
      :is-disable-rotate="isDisableRotate"
      :is-limit-move="isLimitMove"
      :is-show-photo-btn="isShowPhotoBtn"
      :is-show-rotate-btn="isShowRotateBtn"
      :is-show-confirm-btn="isShowConfirmBtn"
      :is-show-cancel-btn="isShowCancelBtn"
      @cancel="onCancel"
      @success="onSuccess"
      @fail="onFail"
      @ready="onReady"
      @change="onChange"
      @rotate="onRotate"
    >
    <slot></slot>
  </l-clipper>
  </view>
</template>
<script>
import lClipper from "/@/uni_modules/lime-clipper/components/l-clipper/l-clipper.vue";
export default {
  components: {
    lClipper,
  },
  props: {
    /**
     * 是否显示
     */
    show:{
      type:Boolean,
      default:true
    },
    /**
     * 图片路径
     */
    imageUrl: {
      type: String,
      default: "",
    },
    /**
     * 图片质量
     */
    quality: {
      type: Number,
      default: 1,
    },
    /**
     * 图片源类型
     */
     source: {
      type: Object,
      default: function () {
        return {
          album: "从相册中选择",
          camera: "拍照",
        };
      },
    },
    /**
     * 裁剪框宽度
     */
    width: {
      type: Number,
      default: 400,
    },
    /**
     * 裁剪框高度
     */
    height: {
      type: Number,
      default: 400,
    },
    /**
     * 最小宽度
     */
    minWidth: {
      type: Number,
      default: 200,
    },
    /**
     * 最小高度
     */
    minHeight: {
      type: Number,
      default: 200,
    },
    /**
     * 裁剪框最大宽度
     */
    maxWidth: {
      type: Number,
      default: 600,
    },
    /**
     * 裁剪框最大高度
     */
    maxHeight: {
      type: Number,
      default: 600,
    },
    /**
     * 最小缩放比
     */
    minRatio: {
      type: Number,
      default: 0.5,
    },
    /**
     * 最大缩放比
     */
    maxRatio: {
      type: Number,
      default: 2,
    },
    /**
     * 每次旋转角度
     */
    rotateAngle: {
      type: Number,
      default: 90,
    },
    /**
     * 图片与裁剪框比例
     */
    scaleRatio: {
      type: Number,
      default: 1,
    },
    /**
     * 锁定裁剪框宽
     */
    isLockWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * 锁定裁剪框高度
     */
    isLockHeight: {
      type: Boolean,
      default: false,
    },
    /**
     * 锁定裁剪框比例
     */
    isLockRatio: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止缩放
     */
    isDisableScale: {
      type: Boolean,
      default: false,
    },
    /**
     * 禁止旋转
     */
    isDisableRotate: {
      type: Boolean,
      default: false,
    },
    /**
     * 限制移动范围
     */
    isLimitMove: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示选择图片按钮
     */
    isShowPhotoBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示转按钮
     */
    isShowRotateBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示确定按钮
     */
    isShowConfirmBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示关闭按钮
     */
    isShowCancelBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cShow: false,
      url: "",
    };
  },
  watch:{
    show(val){
      this.cShow = val;
    }
  },
  mounted(){
    this.cShow = this.show;
  },
  methods:{
    onSuccess(e){
      this.$emit("success",e);
      console.log("22",this.$refs.lclipper.source);
    },
    onFail(e){
      this.$emit("fail",e);
    },
    onReady(e){
      this.$emit("ready",e);
    },
    onChange(e){
      this.$emit("change",e);
    },
    onRotate(e){
      this.$emit("rotate",e);
    },
    onCancel(e){
      this.$emit("cancel",e);
      console.log(e);
    }
  }
};
</script>