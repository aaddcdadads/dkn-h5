<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"> 
            <view class="ele-wrapper ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3">
      <hm-loop :value='[{"label":"姓名/昵称","placeholder":"姓名/昵称"},{"label":"手机号码","placeholder":"17722729038"},{"label":"领奖门店","placeholder":"迪卡侬深圳北站店"}]' class="ele-3d5cca18-be80-4c03-83e5-d43ea90a2db3"> 
      <template #default="{item}">
              <view class="ele-wrapper ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db">
      <hm-uview-field value="" :label="item.label" :placeholder="item. placeholder" label-width="160" :label-align="'center'" icon="" right-icon="" class="ele-0ded82e1-3f32-400b-915d-b361c39f83db"> 
    </hm-uview-field>
    </view> 
          </template> 
    </hm-loop>
    </view> 
            <view class="ele-wrapper ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c"> 
            <view class="ele-wrapper ele-wrapper-f21446f1-ffe9-4863-bd6e-1ea56bc01b82">
      <hm-uview-formily :schema='{"type":"object","properties":{"form":{"type":"void","x-component":"Form","x-component-props":{"labelWidth":"10%","labelPosition":"top"},"properties":{"span":{"default":"aaaa","x-decorator":"FormItem","x-decorator-props":{"label":"文字","name":"span"},"x-component":"Span","x-component-props":{"style":{"overflowWrap":"break-word"}}},"input":{"type":"string","maxLength":1,"default":"输入框","x-decorator":"FormItem","x-decorator-props":{"label":"输入框","name":"input","class":["required"]},"x-component":"Input","x-component-props":{"disabled":true}},"inputNumber":{"type":"number","minimum":50,"exclusiveMinimum":40,"default":20,"x-decorator":"FormItem","x-decorator-props":{"label":"数字输入框","name":"inputNumber","style":{"width":"50%"}},"x-component":"InputNumber","x-component-props":{}},"checkbox":{"type":"array","default":["Apple","Pear"],"x-decorator":"FormItem","x-decorator-props":{"label":"多选框","name":"checkbox","label-col":{"span":4},"wrapper-col":{"span":14},"style":{"width":"50%"}},"x-component":"CheckboxGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"textarea":{"type":"string","maxLength":1,"default":"文本框","x-decorator":"FormItem","x-decorator-props":{"label":"文本框","name":"textarea","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Textarea","x-component-props":{}},"radio":{"type":"array","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"单选框","name":"radio","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RadioGroup","x-component-props":{"options":[{"label":"Apple","value":"Apple"},{"label":"Pear","value":"Pear"},{"label":"Orange","value":"Orange"}]}},"select":{"type":"string","required":true,"x-decorator":"FormItem","x-decorator-props":{"label":"下拉选择","name":"select","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Select","x-component-props":{"allowClear":true,"@confirm":"function(e, item){\n                      console.log('e', e, item)\n                      self.schema.properties.form.properties.switch['x-component-props'].style = {\n                        display: 'none'\n                      }\n                    }","params":{"pageSize":-1},"options":[{"label":"aa","value":"aa"}]}},"switch":{"type":"boolean","default":true,"x-decorator":"FormItem","x-decorator-props":{"label":"开关","name":"switch","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Switch","x-component-props":{"disabled":true}},"date":{"default":"2022-01-01","type":"date","x-decorator":"FormItem","x-decorator-props":{"label":"日期选择","name":"date","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"DatePicker","x-component-props":{"format":"YYYY-MM-DD","params":{"year":true,"month":true,"day":true,"hour":false,"minute":false,"second":false,"timestamp":true},"disabled":true}},"rangeDate":{"type":"array","x-decorator":"FormItem","x-decorator-props":{"label":"日期范围选择","name":"rangeDate","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"RangePicker","x-component-props":{}},"time":{"default":"2022-01-01 00:00:00","type":"datetime","x-decorator":"FormItem","x-decorator-props":{"label":"时间选择","name":"time","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"TimePicker","x-component-props":{}},"upload":{"default":"http://xh.ispace.dev.haomo-tech.com/files/1668147473752/WechatIMG2996.jpeg","type":"string","x-decorator":"FormItem","x-decorator-props":{"label":"上传","name":"upload","label-col":{"span":2},"wrapper-col":{"span":14},"style":{"width":"100%"}},"x-component":"Upload","x-component-props":{"action":"http://aacsb-stage.bbblackboard.com/api/obe/uploadFile","maxCount":11}},"arraySelect":{"type":"array","default":[],"x-decorator":"FormItem","x-decorator-props":{},"x-component":"ArraySelect","x-component-props":{"@onConfirm":"function(select,list){}","@onCancel":"function(select,boolean){}"}}}}}}' class="ele-f21446f1-ffe9-4863-bd6e-1ea56bc01b82"> 
       
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
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewFormily from "/@/components/built-in/uniapp-uview-vue3/HmUviewFormily.vue";


export default {
  name: "NewVerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmLoop,
    HmUviewField,
    HmUviewFormily,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
  "3d5cca18-be80-4c03-83e5-d43ea90a2db3": {
    "value": [
      {
        "label": "姓名/昵称",
        "placeholder": "姓名/昵称"
      },
      {
        "label": "手机号码",
        "placeholder": "17722729038"
      },
      {
        "label": "领奖门店",
        "placeholder": "迪卡侬深圳北站店"
      }
    ]
  },
  "0ded82e1-3f32-400b-915d-b361c39f83db": {
    "value": ""
  }
};
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

.ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7 {
  width:100%;
}

.ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3 {
  width:100%;
}

.ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db {
  width:100%;
}

.ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c {
  width:100%;
}

.ele-wrapper-f21446f1-ffe9-4863-bd6e-1ea56bc01b82 {
  width:100%;
}

</style>
