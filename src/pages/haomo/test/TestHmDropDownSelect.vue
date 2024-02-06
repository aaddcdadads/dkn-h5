<template>
  <view>
    <HmDropDownSelect @onClick="click" @change="change"></HmDropDownSelect>
    <HmDropDownSelect :icon="icon1" :list="list1" :selectItemStyle="style1" @onClick="click" @change="change"></HmDropDownSelect>
  </view>
</template>
<script>
import HmDropDownSelect from "@/components/built-in/uniapp-haomo/HmDropDownSelect.vue";
export default {
  components: { HmDropDownSelect },
  props: {},
  data() {
    return {
      list1: [{ value: 1 }, { value: 2 }],
      style1: {
        color: "#000",
        background: "#999"
      },
      icon1: {
        text: "全部设备",
        textAlign: "left",
        iconName: "arrow-down",
        boxStyle: {
          padding: "24rpx",
          backgroundColor: "#ccc"
        }
      }
    };
  },
  watch: {},
  mounted() {},
  methods:{
    click(e){
        console.log("click",e)
    },
    change(e,index){
        console.log("change",e,index)
    }
  }
};
</script>
<style lang="less" scoped>
</style>