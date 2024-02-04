<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"> 
            <view class="ele-wrapper ele-wrapper-messageTitle">
      <hm-uview-bg-card ref="messageTitle" class="ele-messageTitle"> 
            <view class="ele-wrapper ele-wrapper-30d9aca9-d99f-43e8-a872-6af24ae1bf9c">
      <hm-uview-text text="待核销/已核销" font-size="17px" color="#FFFFFF"> 
       
    </hm-uview-text>
    </view> 
            <view class="ele-wrapper ele-wrapper-08025ba6-d526-4961-8082-28c8f82e3389">
      <hm-uview-text> 
       
    </hm-uview-text>
    </view> 
            <view class="ele-wrapper ele-wrapper-21010713-c118-4c9d-8a75-30201410d520">
      <hm-uview-text> 
       
    </hm-uview-text>
    </view> 
    </hm-uview-bg-card>
    </view> 
    </hm-uview-bg-card>
    </view>
    </view>
  </view>
</template>

<script>
import { h } from 'vue';
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";


export default {
  name: "NewActivityRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {};
  },
  watch: {
  },
  methods:{

  }
};
</script>

<style lang="less" scoped>
.page {
  
}

.ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46 {
  width:100%;
}

.ele-wrapper-messageTitle {
  background: radial-gradient(50% 144.19%, #FFFFFFFF 0%, #FFE1A4B9 7.58%, #FFC6537B 100%);
}

</style>
