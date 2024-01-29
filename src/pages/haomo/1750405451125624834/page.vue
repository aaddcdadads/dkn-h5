<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-6b016e0e-a5f1-4300-b1e0-0c13b00f4094">
      <event-registration-card> 
       
    </event-registration-card>
    </view>
        <view class="ele-wrapper ele-wrapper-3db7938d-bfde-4dab-8407-1f4c36196318">
      <prize-list-component class="ele-3db7938d-bfde-4dab-8407-1f4c36196318"> 
       
    </prize-list-component>
    </view>
        <view class="ele-wrapper ele-wrapper-f40917e1-4d2e-4644-a40c-e0768901e934">
      <hm-uview-formily :schema='{"type":"object","properties":{"form":{"type":"void","x-component":"Form","x-component-props":{"labelWidth":"10%","labelPosition":"top"},"properties":{"span":{"default":"aaaa","x-decorator":"FormItem","x-decorator-props":{"label":"文字","name":"span"},"x-component":"Span","x-component-props":{"style":{"overflowWrap":"break-word"}}},"input":{"type":"string","maxLength":1,"default":"输入框","x-decorator":"FormItem","x-decorator-props":{"label":"输入框","name":"input","class":["required"]},"x-component":"Input","x-component-props":{"disabled":true}},"inputNumber":{"type":"number","minimum":50,"exclusiveMinimum":40,"default":20,"x-decorator":"FormItem","x-decorator-props":{"label":"数字输入框","name":"inputNumber","style":{"width":"50%"}},"x-component":"InputNumber","x-component-props":{}},"checkbox":{"type":"array","default":["Apple","Pear"],"x-decorator":"FormItem","x-decorator-props":{"label":"多选框","name":"checkbox","label-col":{"span":4},"wrapper-col":{"span":14},"style":{"width":"50%"}},"x-component":"CheckboxGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"textarea":{"type":"string","maxLength":1,"default":"文本框","x-decorator":"FormItem","x-decorator-props":{"label":"文本框","name":"textarea","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Textarea","x-component-props":{}},"radio":{"type":"array","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"单选框","name":"radio","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RadioGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"select":{"type":"string","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"下拉选择","name":"select","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Select","x-component-props":{"allowClear":true,"@confirm":"function(e, item){\n                      console.log('e', e, item)\n                      self.schema.properties.form.properties.switch['x-component-props'].style = {\n                        display: 'none'\n                      }\n                    }","params":{"pageSize":-1},"options":[{"label":"aa","value":"aa"}]}},"switch":{"type":"boolean","default":true,"x-decorator":"FormItem","x-decorator-props":{"label":"开关","name":"switch","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Switch","x-component-props":{"disabled":true}},"date":{"default":"2022-01-01","type":"date","x-decorator":"FormItem","x-decorator-props":{"label":"日期选择","name":"date","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"DatePicker","x-component-props":{"format":"YYYY-MM-DD","params":{"year":true,"month":true,"day":true,"hour":false,"minute":false,"second":false,"timestamp":true},"disabled":true}},"rangeDate":{"type":"array","x-decorator":"FormItem","x-decorator-props":{"label":"日期范围选择","name":"rangeDate","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RangePicker","x-component-props":{}},"time":{"default":"2022-01-01 00:00:00","type":"datetime","x-decorator":"FormItem","x-decorator-props":{"label":"时间选择","name":"time","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"TimePicker","x-component-props":{}},"upload":{"default":"http://xh.ispace.dev.haomo-tech.com/files/1668147473752/WechatIMG2996.jpeg","type":"string","x-decorator":"FormItem","x-decorator-props":{"label":"上传","name":"upload","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Upload","x-component-props":{"action":"http://aacsb-stage.bbblackboard.com/api/obe/uploadFile","maxCount":11}},"arraySelect":{"type":"array","default":[],"x-decorator":"FormItem","x-decorator-props":{},"x-component":"ArraySelect","x-component-props":{"@onConfirm":"function(select,list){}","@onCancel":"function(select,boolean){}"}}}}}}'> 
       
    </hm-uview-formily>
    </view>
    </view>
  </view>
</template>

<script>
import { h } from 'vue';
import EventRegistrationCard from "/@/components/dkn-h-5/event-registration-card/index.vue";
import PrizeListComponent from "/@/components/dkn-h-5/prize-list-component/index.vue";
import HmUviewFormily from "/@/components/built-in/uniapp-uview-vue3/HmUviewFormily.vue";


export default {
  name: "Test",
  components: {
    EventRegistrationCard,
    PrizeListComponent,
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

.ele-wrapper-3db7938d-bfde-4dab-8407-1f4c36196318 {
  position:relative;
}

</style>
