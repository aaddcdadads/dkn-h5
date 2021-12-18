<template>
  <view>
    <hm-uview-list 
      url="http://dev.block-design.cn/api/design/code/list"
      :params="{pageSize: 5}"
      :dataMap="{text: 'name'}"
      v-slot="slotProps"
    >
      <hm-uview-button
        v-bind="slotProps"
      ></hm-uview-button>
    </hm-uview-list>
  </view>
</template>

<script>
import HmUviewList from "@/components/built-in/uniapp-uview-vue3/HmUviewList.vue";
import HmUviewButton from "@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  components: { HmUviewList, HmUviewButton },
  data() {
    return {
    };
  },
};
</script>

<style lang="less"></style>