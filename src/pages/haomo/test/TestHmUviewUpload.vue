<template>
  <view>
    <!-- <hm-uview-upload></hm-uview-upload> -->
    <hm-uview-upload
      action="https://yuos.x2intell.com/api/userapp/upload"
      :fileList="cFileList"
      :formData="formData"
      :header="header"
      :isUpload="isUpload"
      name="img"
      maxCount="55"
      width="300"
      height="300"
      :showProgress="false"
      :disabled="false"
      :previewFullImage="false"
      :deletable="true"
      maxSize="5 * 1024 * 1024 "
      uploadText="请上传"
      :autoUpload="false"
      :showTips="false"
      :showUploadList="true"
      delIcon="close"
      delBgColor="#ffffff"
      delColor="#fa3534"
      index="2"
      @onSuccess="success"
      @onError="error"
      @onRemove="remove"
    ></hm-uview-upload>
    <u-button @click="click">上传</u-button>
  </view>
</template>

<script>
import HmUviewUpload from "@/components/built-in/uniapp-uview-vue3/HmUviewUpload.vue";
export default {
  name: "TestHmUviewUpload",
  components: { HmUviewUpload },
  data() {
    return {
      cFileList: [],
      isUpload: false,
      formData: {
        type: "question",
      },
      header: {
        token: "ebe49f90f93ebb87ace6ce4ef9d8c14a",
      },
    };
  },
  methods: {
    success(data, index, lists, name) {
      console.log("success", data, index, lists, name);
    },
    error(res, index, lists, name) {
      console.log("error", res, index, lists, name);
    },
    remove(index, lists, name) {
      console.log("onRemove", index, lists, name);
    },
    click() {
      console.log("cFileList", this.cFileList);
      this.isUpload = true;
    },
  },
};
</script>

<style>
</style>
