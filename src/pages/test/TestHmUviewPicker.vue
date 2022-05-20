<template>
  <view>
    <hm-uview-picker 
        v-model:show="show1"
        :params="params1"
        defaultTime="00:02:20"
    ></hm-uview-picker>
    <u-button @click="show1 = true">打开</u-button>
    <hm-uview-picker
      v-model:show="show2"
      mode="region"
      title="地区"
      confirmText="确定"
      confirmColor="red"
      cancelText="取消"
      :params="params2"
      cancelColor="#2979ff"
      :maskCloseAble="true"
      :startYear="1950"
      :endYear="2050"
      :showTimeTag="true"
    ></hm-uview-picker>
    <u-button @click="show2 = !show2">打开</u-button>
  </view>
</template>

<script>
import HmUviewPicker from "@/components/built-in/uniapp-uview-vue3/HmUviewPicker.vue";

export default {
  components: { HmUviewPicker },
  data() {
    return {
      show1: false,
      show2: false,
        params1: {
        //时间参数
        
        minute: true,
        second: true,
        
      },
      params2: {
        //时间参数
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true,
        timestamp: true,
        //地区参数
        province: true,
        city: true,
        area: true,
      },
    };
  },
};
</script>

<style lang="less"></style>
