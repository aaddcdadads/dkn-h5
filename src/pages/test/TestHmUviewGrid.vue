<template>
  <view>
    <hm-uview-grid
    >
      <template v-slot:ant-col-slot-0>
        <hm-uview-button
        size="medium"
        type="success"
        :plain="false"
        :disabled="false"
        shape="circle"
        text="微信按钮"
        ></hm-uview-button>
        <hm-uview-button
        size="medium"
        ></hm-uview-button>
      </template>
      <template v-slot:ant-col-slot-2>
        <hm-uview-button
        ></hm-uview-button>
      </template>
    </hm-uview-grid>
    <hm-uview-grid
      :colNum="4"
      colSpans="6 1 1 1"
      align="top"
      justify="flex-end"
    >
      <template v-slot:ant-col-slot-0>
        <hm-uview-button
        size="medium"
        type="success"
        :plain="false"
        :disabled="false"
        shape="circle"
        text="微信按钮"
        ></hm-uview-button>
        <hm-uview-button
        size="medium"
        ></hm-uview-button>
      </template>
      <template v-slot:ant-col-slot-2>
        <hm-uview-button
        ></hm-uview-button>
      </template>
    </hm-uview-grid>
  </view>
</template>

<script>
import HmUviewGrid from "@/components/built-in/uniapp-uview-vue3/HmUviewGrid.vue";
import HmUviewButton from "@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  components: { HmUviewGrid, HmUviewButton },
  data() {
    return {
    };
  },
};
</script>

<style lang="less"></style>
