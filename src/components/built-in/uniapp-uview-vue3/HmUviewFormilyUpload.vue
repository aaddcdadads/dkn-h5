<template>
  <view :class="{uploadContainer: this.showUpload}">
    <u-upload
      ref="uUpload"
      :accept="accept"
      :action="action"
      :file-list="cFileList"
      :name="name"
      :max-count="maxCount"
      :width="width"
      :height="height"
      :custom-btn="disabled"
      :show-progress="showProgress"
      :preview-full-image="previewFullImage"
      :deletable="!disabled && deletable"
      :max-size="maxSize"
      :upload-text="uploadText"
      :auto-upload="autoUpload"
      :show-tips="showTips"
      :show-upload-list="showUploadList"
      :del-icon="delIcon"
      :del-bg-color="delBgColor"
      :delColor="delColor"
      :header="header"
      :form-data="formData"
      :index="index"
      @on-remove="onRemove"
      @on-success="onSuccess"
      @on-change="onChange"
      @on-error="onError"
      @on-uploaded="onUploaded"
      @on-choose-complete="onChooseComplete"

    ></u-upload
  ></view>
</template>

<script>
import jp from "jsonpath";
export default {
  components: {},
  name: "HmUviewFormilyUpload",
  props: {
    modelValue: {
      type: String,
    },
    /**
     * 上传文件类型
     * @type Enum
     * @options ["all", "media", "image", "file", "video"]
     */
    accept:{
      type: String,
      default: "image",
    },
    /**
     * 服务器地址
     */
    action: {
      type: String,
      default: "",
    },
    /**
     * 上传额外参数
     */
    formData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 请求头
     */
    header: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 上传文件名
     */
    name: {
      type: String,
      default: "file",
    },
    /**
     * 上传最大数量
     */
    maxCount: {
      type: Number,
      default: 99,
    },
    /**
     * 图片宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 图片高度
     */
    height: {
      type: String,
      default: "200",
    },
    /**
     * 显示进度条
     */
    showProgress: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否隐藏
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * 是否预览图片
     */
    previewFullImage: {
      type: Boolean,
      default: true,
    },
    /**
     * 删除图片按钮
     */
    deletable: {
      type: Boolean,
      default: true,
    },
    /**
     * 最大大小(byte)
     */
    maxSize: {
      type: String,
      default: "Number.MAX_VALUE",
    },
    /**
     * 图片提示文字
     */
    uploadText: {
      type: String,
      default: "选择图片",
    },
    /**
     * 自动上传
     */
    autoUpload: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否上传
     */
    isUpload: {
      type: Boolean,
      default: false,
    },
    /**
     * 隐藏上传按钮
     */
    showUpload: {
      type: Boolean,
      default: false,
    },
    /**
     * 提示
     */
    showTips: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示图片预览
     */
    showUploadList: {
      type: Boolean,
      default: true,
    },
    /**
     * 删除图标样式
     */
    delIcon: {
      type: String,
      default: "close",
    },
    /**
     * 删除背景颜色
     * @type Color
     */
    delBgColor: {
      type: String,
      default: "#fa3534",
    },
    /**
     * 删除图标颜色
     * @type Color
     */
    delColor: {
      type: String,
      default: "#ffffff",
    },

    /**
     * 回调最后参数
     */
    index: {
      type: String,
      default: "upload",
    },
    /**
     * 接口url地址
     */
    urlPath: {
      type: String,
      default: "result.url"
    }
  },
  data() {
    return {
      cAction: null,
      cFileList: [],
    };
  },
  watch: {
    modelValue(value){
      this.getFileList()
    }
  },
  created(){
    this.getFileList()
  },
  methods: {
    getFileList(){
      if(!this.modelValue) 
        return
      
      this.cFileList = this.modelValue.split(",").map(item => {
        return {
          url: item
        }
      });
    },
    updateModelValue(lists){
      let modelValue = "";
      modelValue = lists?.map(item => {
        if(item.response){
          let url = jp.query(
            item.response, 
            this.urlPath.indexOf('$') === 0 ? this.urlPath : `$.${this.urlPath}`
          )[0]
          item.url = url
          return url;
        }else{
          return item.url;
        }
      }).join(",")
      this.$emit("update:modelValue", modelValue);
    },
    //移除图片时触发
    onRemove(index, lists, name) {
      this.updateModelValue(lists)
      this.$emit("onRemove", index, lists, name);
    },
    //图片上传成功时触发
    onSuccess(data, index, lists, name) {
      this.$emit("onSuccess", data, index, lists, name);
    },
    //图片上传后，无论成功或者失败都会触发
    onChange(res, index, lists, name) {
      if(res.errMsg == 'uploadFile:ok'){
        this.updateModelValue(lists)
      }
      console.log('res', res, index, lists, name)
      this.$emit("onChange", res, index, lists, name);
    },
    //图片上传失败时触发
    onError(res, index, lists, name) {
      this.$emit("onError", res, index, lists, name);
    },
    //所有图片上传完毕触发
    onUploaded(lists, name) {
      console.log("onUploaded", lists, name);
      this.$emit("onUploaded", lists, name);
    },
    //每次选择图片后触发
    onChooseComplete(lists, name) {
      //console.log("onChooseComplete", lists, name);
      this.$emit("onChooseComplete", lists, name);
    },
  },
};
</script>

<style lang="less">
    .uploadContainer {
        /deep/ .u-add-wrap{
            display:none;
        }
    }
</style>
