<template>
    <HmMumuPeview :fileUrl='fileUrl' v-model:value='showPreview'></HmMumuPeview>
    <button @click='showPreview = true'>打开网络文件</button>
  </template>
  <script>
  import HmMumuPeview from "@/components/built-in/uniapp-uview-vue3/HmMumuPeview.vue";
  export default {
    components: {
      HmMumuPeview,
    },
    data() {
        return {
            showPreview: false,
            fileUrl: 'https://block-design.oss-cn-shenzhen.aliyuncs.com/preview-files/block-design-intro.pdf',
            // fileUrl: 'https://block-design.oss-cn-shenzhen.aliyuncs.com/preview-files/block-design-intro.docx',
        }
    },
  };
  </script>