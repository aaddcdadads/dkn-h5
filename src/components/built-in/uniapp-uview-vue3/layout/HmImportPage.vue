<template>
  <view class="hm-import-page" v-show="!hidden">
    <!-- #ifdef APP-PLUS || H5 -->
    <component ref="component" :is="pageComponent"></component>
    <!-- #endif -->
  </view>
</template>

<script>
import { h, defineAsyncComponent, toRefs } from 'vue';
const modules = import.meta.glob('/src/pages/**/page.vue') || {};

/**
 * 背景卡片
 */
export default {
  name: "HmImportPage",
  components: {
  },
  props: {
    /**
     * 页面id
     */
    pageId: {
      type: String,
    },
  },
  setup(props, context) {
    function getPage(pageId) {
      let page;
      Object.keys(modules).forEach((key) => {
        if (key == `/src/pages/${pageId}/page.vue`) {
          page = defineAsyncComponent(modules[key]);
        }
      });
      return page;
    }

    const pageComponent = getPage(props.pageId);
    return {
      pageComponent,
      getPage
    }
  },
  mounted() {
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.hm-import-page {
}
</style>