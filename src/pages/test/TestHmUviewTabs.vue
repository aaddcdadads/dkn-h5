<template>
  <view>
    <hm-uview-tabs
      :widthPercent="20"
    >
      <template #left>
        <hm-uview-button
        size="medium"
        type="success"
        :plain="false"
        :disabled="false"
        shape="circle"
        text="左插槽"
        ></hm-uview-button>
      </template>
      <template #right>
        <hm-uview-button
        size="medium"
        type="success"
        :plain="false"
        :disabled="false"
        shape="circle"
        text="右插槽"
        ></hm-uview-button>
      </template>
    </hm-uview-tabs>
    <hm-uview-tabs
      :is-scroll="true"
      :list="list"
      :current="2"
      :height="100"
      :font-size="50"
      :duration="2"
      active-color="yellow"
      inactive-color="blue"
      :bar-width="50"
      :bar-height="50"
      :gutter="40"
      bg-color="red"
      :bold="false"
      :show-bar="true"
      :bar-style="{border: '1px solid black'}"
      :active-item-style="{border: '1px solid black'}"
      :item-width="200"
      :offset="[10, 20]"
      @change="onChange"
    ></hm-uview-tabs>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{name: "1", count: 100},{name: "2", count: 100},{name: "3", count: 100},{name: "4", count: 100},{name: "5", count: 100}]
    };
  },
  methods:{
    onChange(val){
      console.log('cahnge', val)
    }
  }
};
</script>

<style lang="less"></style>
