<template>
  <view>
    <view>
      <view></view>
    </view>
    <picker-view
      :indicator-style="indicatorStyle" 
    >
      <picker-view-column v-for="(item,index) in testList" :key="index">
        <view>{{item}}</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>
<script>
export default {
  name: "HmPickerView",
  props: {
    /**
     * 数据
     */
    testList: {
      type: Array,
      default: function() {
        return [
           1,2,3,4,5
        ];
      }
    },
    /**
     * 选中框样式
     */
    indicatorStyle: {
      type: String,
      default: ""
    }
  },
  data: function() {},
  methods: {}
};
</script>
<style>
</style>