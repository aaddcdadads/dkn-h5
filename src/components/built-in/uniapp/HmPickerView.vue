<template>
  <view>
    <view>
      <view></view>
    </view>
    <picker-view :value="value" :indicator-style="indicatorStyle">
      <picker-view-column v-for="(item,index) in testList" :key="index">
        <view v-for="(item2,index2) in test" :key="index2">{{item}}</view>
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
        return ["中国", "美国", "俄罗斯", "日本"];
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