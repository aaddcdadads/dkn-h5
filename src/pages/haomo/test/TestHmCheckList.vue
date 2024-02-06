<template>
  <view style="background-color: #F7FAFB;padding: 20px;">
    <hm-check-list ref="check" @change="change"></hm-check-list>
    <br/>
    <hm-check-list
      url="/HmCheckListData"
      :dataMap="{
        phone: 'createTime',
        name: 'name',
      }"
      :params="{
        pageSize: '3'
      }"
    ></hm-check-list>
    <br/><br/>
    <button @click="test">test</button>
  </view>
</template>

<script>
export default {
  methods:{
    test(){
      console.log('this.$refs.check',this.$refs.check.selected)
    },
    change(selected){
      console.log('selected', selected)
    }
  }
};
</script>

<style lang="less">
</style>
