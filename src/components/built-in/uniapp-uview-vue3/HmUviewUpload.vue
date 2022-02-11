<template>
  <view>
    <u-upload
      :action="cAction"
      :file-list="cFileList"
      :name="name"
      :max-count="maxCount"
      :width="width"
      :height="height"
      :show-progress="showProgress"
      :disabled="disabled"
      :preview-full-image="previewFullImage"
      :deletable="deletable"
      :max-size="maxSize"
      :upload-text="uploadText"
      :auto-upload="autoUpload"
      :show-tips="showTips"
      :show-upload-list="showUploadList"
      :del-icon="delIcon"
      :del-bg-color="delBgColor"
      :delColor="delColor"
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
export default {
  components: {},
  name: "HmUviewUpload",

  props: {
    /**
     * 服务器地址
     */
    action: {
      type: String,
      default: "",
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
      type: String,
      default: "99",
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
     * 默认上传图片
     */
    fileList: {
      type: Array,
      default: function () {
        return [
          {
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100120461512E-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644055421&t=e70c7723874c5e040900e75daded2cb4",
          },
        ];
      },
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
      default: "1",
    },
  },
  data() {
    return {
      cAction: null,
      cFileList: [],
    };
  },
  watch: {
    fileList(value) {
      this.cFileList = value;
    },
    action(value) {
      this.cAction = this.convertUrl(value);
    },
  },
  mounted() {
    this.cAction = this.convertUrl(this.action);
    this.cFileList = this.fileList;
  },
  methods: {
    convertUrl(url) {
      if (!url) {
        return null;
      }
      if (window.location.origin.indexOf("block-design.cn") < 0) {
        return url;
      }
      let urlObj = new URL(url);
      let schema = urlObj.origin.split(":")[0];
      let port = urlObj.port || (schema === "http" ? 80 : 443);
      VueCookieNext.setCookie("x-project-api-schema", schema);
      VueCookieNext.setCookie("x-project-api-hostname", urlObj.hostname);
      VueCookieNext.setCookie("x-project-api-port", port);
      return `/project-api${urlObj.pathname}`;
    },
    //移除图片时触发
    onRemove(index, lists, name) {
      //console.log("onRemove", index, lists, name);
      this.$emit("onRemove", index, lists, name);
    },
    //图片上传成功时触发
    onSuccess(data, index, lists, name) {
      //console.log("onSuccess", data, index, lists, name);
      this.$emit("onSuccess", data, index, lists, name);
    },
    //图片上传后，无论成功或者失败都会触发
    onChange(res, index, lists, name) {
      // console.log("onChange", res, index, lists, name);
      this.$emit("onChange", res, index, lists, name);
    },
    //图片上传失败时触发
    onError(res, index, lists, name) {
      // console.log("onError", res, index, lists, name);
      this.$emit("onError", res, index, lists, name);
    },
    //所有图片上传完毕触发
    onUploaded(lists, name) {
      //console.log("onUploaded", lists, name);
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
</style>
