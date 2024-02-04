<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FAFAFA" class="ele-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"> 
            <view class="ele-wrapper ele-wrapper-messageTitle">
      <hm-uview-bg-card ref="messageTitle" width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-messageTitle"> 
            <view class="ele-wrapper ele-wrapper-messageText">
      <hm-uview-bg-card ref="messageText" width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FFFFFF00" class="ele-messageText"> 
            <view class="ele-wrapper ele-wrapper-36f2fc1e-d87f-40cb-98bc-cb8e56e54ca8">
      <hm-uview-text text="待核销/已核销" font-size="17px" color="#FFFFFF"> 
       
    </hm-uview-text>
    </view> 
            <view class="ele-wrapper ele-wrapper-d8c285e5-318c-441c-8246-12398d4f880c">
      <hm-uview-text text="活动名称" font-size="17px" color="#FFFFFF" padding="3"> 
       
    </hm-uview-text>
    </view> 
            <view class="ele-wrapper ele-wrapper-3239cafa-d69b-4857-821d-3eb017166e18">
      <hm-uview-text text="请在 2024-03-31 23:59:59 前完成核销" font-size="12px" color="#FFFFFF" padding="2"> 
       
    </hm-uview-text>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-messageCode">
      <hm-uview-bg-card ref="messageCode" width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FFFFFF00"> 
            <view class="ele-wrapper ele-wrapper-3b0b65a9-03ab-4be8-89f2-1ace4afa48fd">
      <hm-uview-image src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/ScanCode.png" width="40px" height="40px"> 
       
    </hm-uview-image>
    </view> 
    </hm-uview-bg-card>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="15" box-shadow-v-shadow="" box-shadow-blur="" class="ele-2da4517d-7fb0-4bdc-825d-f295b2c74751"> 
            <view class="ele-wrapper ele-wrapper-2060a060-910f-4964-925f-6601124d2f0d">
      <event-registration-information-card :list='[{"checked":true,"image":"https://img.js.design/assets/img/65bc6430a6a4a8693349c559.png","name":"套餐A","description":"时代看风使舵丰动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名富的少年疯狂是否达到减肥的步伐简单方便的","price":"29.9","number":0},{"checked":false,"image":"https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png","name":"套餐B","description":"动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名","price":"0.0","number":0}]'> 
       
    </event-registration-information-card>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"> 
            <view class="ele-wrapper ele-wrapper-56227592-0e4c-421a-9289-8d03b31a9c1f">
      <hm-uview-formily :schema='{"type":"object","properties":{"form":{"type":"void","x-component":"Form","x-component-props":{"labelWidth":"10%","labelPosition":"top"},"properties":{"span":{"default":"aaaa","x-decorator":"FormItem","x-decorator-props":{"label":"文字","name":"span"},"x-component":"Span","x-component-props":{"style":{"overflowWrap":"break-word"}}},"input":{"type":"string","maxLength":1,"default":"输入框","x-decorator":"FormItem","x-decorator-props":{"label":"输入框","name":"input","class":["required"]},"x-component":"Input","x-component-props":{"disabled":true}},"inputNumber":{"type":"number","minimum":50,"exclusiveMinimum":40,"default":20,"x-decorator":"FormItem","x-decorator-props":{"label":"数字输入框","name":"inputNumber","style":{"width":"50%"}},"x-component":"InputNumber","x-component-props":{}},"checkbox":{"type":"array","default":["Apple","Pear"],"x-decorator":"FormItem","x-decorator-props":{"label":"多选框","name":"checkbox","label-col":{"span":4},"wrapper-col":{"span":14},"style":{"width":"50%"}},"x-component":"CheckboxGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"textarea":{"type":"string","maxLength":1,"default":"文本框","x-decorator":"FormItem","x-decorator-props":{"label":"文本框","name":"textarea","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Textarea","x-component-props":{}},"radio":{"type":"array","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"单选框","name":"radio","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RadioGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"select":{"type":"string","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"下拉选择","name":"select","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Select","x-component-props":{"allowClear":true,"@confirm":"function(e, item){\n                      console.log('e', e, item)\n                      self.schema.properties.form.properties.switch['x-component-props'].style = {\n                        display: 'none'\n                      }\n                    }","params":{"pageSize":-1},"options":[{"label":"aa","value":"aa"}]}},"switch":{"type":"boolean","default":true,"x-decorator":"FormItem","x-decorator-props":{"label":"开关","name":"switch","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Switch","x-component-props":{"disabled":true}},"date":{"default":"2022-01-01","type":"date","x-decorator":"FormItem","x-decorator-props":{"label":"日期选择","name":"date","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"DatePicker","x-component-props":{"format":"YYYY-MM-DD","params":{"year":true,"month":true,"day":true,"hour":false,"minute":false,"second":false,"timestamp":true},"disabled":true}},"rangeDate":{"type":"array","x-decorator":"FormItem","x-decorator-props":{"label":"日期范围选择","name":"rangeDate","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RangePicker","x-component-props":{}},"time":{"default":"2022-01-01 00:00:00","type":"datetime","x-decorator":"FormItem","x-decorator-props":{"label":"时间选择","name":"time","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"TimePicker","x-component-props":{}},"upload":{"default":"http://xh.ispace.dev.haomo-tech.com/files/1668147473752/WechatIMG2996.jpeg","type":"string","x-decorator":"FormItem","x-decorator-props":{"label":"上传","name":"upload","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Upload","x-component-props":{"action":"http://aacsb-stage.bbblackboard.com/api/obe/uploadFile","maxCount":11}},"arraySelect":{"type":"array","default":[],"x-decorator":"FormItem","x-decorator-props":{},"x-component":"ArraySelect","x-component-props":{"@onConfirm":"function(select,list){}","@onCancel":"function(select,boolean){}"}}}}}}'> 
       
    </hm-uview-formily>
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
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import EventRegistrationInformationCard from "/@/components/dkn-h-5/event-registration-information-card/index.vue";
import HmUviewFormily from "/@/components/built-in/uniapp-uview-vue3/HmUviewFormily.vue";


export default {
  name: "NewActivityRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewImage,
    EventRegistrationInformationCard,
    HmUviewFormily,
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
height:100%;
}

.ele-wrapper-messageTitle {
  width:100%;
height:121px;
.ele-messageTitle{
background: radial-gradient(50% 144.19%, #FFFFFF 0%, #E1A4B9 7.58%, #C6537B 100%) !important;
}
.ele-messageTitle{
display:flex;
justify-content: space-between;
  align-items: center;
}
}

.ele-wrapper-messageText {
  .hm-bg-card{
  display: flex;
    flex-direction: column;
}
}

.ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751 {
  width:100%;
}

.ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58 {
  width:100%;
}

</style>
