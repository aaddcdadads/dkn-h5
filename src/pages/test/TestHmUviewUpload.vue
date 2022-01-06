<template>
  <view>
    <hm-uview-upload></hm-uview-upload>
    <hm-uview-upload
      action="http://www.example.com/upload"
      :fileList="cFileList"
      name="names"
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
      @onRemove="remove"
    ></hm-uview-upload>
  </view>
</template>

<script>
import HmUviewUpload from "@/components/built-in/uniapp-uview-vue3/HmUviewUpload.vue";
export default {
  name: "TestHmUviewUpload",
  components: { HmUviewUpload },
  data() {
    return {
      cFileList: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100122420C335-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644055421&t=8a17927351c6025dc8c1b191fdeb4aa0",
        },
      ],
    };
  },
  methods: {
    remove(index, lists, name) {
      console.log("onRemove", index, lists, name);
    },
  },
};
</script>

<style>
</style>
