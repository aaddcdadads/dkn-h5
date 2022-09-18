<template>
  <hm-import-page
    pageId="testImportPage"
  >
  </hm-import-page>
</template>

<script>
import HmImportPage from "@/components/built-in/uniapp-uview-vue3/layout/HmImportPage.vue";

export default {
  components: { 
    HmImportPage 
  },
  data() {
    return {
    };
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less">
</style>
