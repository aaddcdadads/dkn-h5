<template>
  <div>
    <FormProvider id="formily" class="formily" :form="form" :key="key">
      <SchemaField id="formily" class="formily" :schema="schema" />
    </FormProvider>
  </div>
</template>

<script>
import { h, defineComponent } from "vue";


import {
  Form,
  FormItem,
  Button,
  // Checkbox,
  //CheckboxGroup,
  // RangePicker,
  // DatePicker,
  Input,
  // Textarea,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // Cascader,
  // Select,
  // Slider,
  // // HmSwitch,
  Switch,
  // TreeSelect,
  // TimePicker,
  // Upload,
  // UploadImage,
  // HmAntInput,
  // HmAntSelect,
  // HmAntUpload,
  Span,
  Pre,
  Img
} from "./formily/component"
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import cloneDeep from 'lodash/cloneDeep'

import {
  getFeiqiFilterValue, 
  getFilterValue,
  getFormValue,
  setFormValue,
} from "./formily/util"

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    // Button,
    // Checkbox,
    // CheckboxGroup,
    // RangePicker,
    // DatePicker,
    Input,
    // Textarea,
    // InputNumber,
    // Radio,
    // RadioGroup,
    // Cascader,
    // Select,
    // Slider,
    // // HmSwitch,
    Switch,
    // TreeSelect,
    // TimePicker,
    // Upload,
    // UploadImage,
    // HmAntInput,
    // HmAntSelect,
    // HmAntUpload,
    Span,
    Pre,
    Img
  },
})



export default {
  components: { FormProvider, SchemaField },
  props: {
    /**
      * schema对象
      */
    schema: {
      type: Object,
      default: function() {
        return {
          type: 'object',
          properties: {
            form: {
              type: 'void',
              'x-component': 'Form',
              'x-component-props': {
                'style': {
                  'display': 'flex',
                  'flexWrap': 'wrap'
                },
                'labelWidth': '10%',
              },
              properties: {
                span: {
                  'default': 'aaaa',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '文字',
                    'name': 'span',
                    'style': {
                      width: '50%',
                    },
                    'labelCol': { span: 4 },
                    'wrapperCol': { span: 14 },
                  },
                  'x-component': 'Span',
                  'x-component-props': {
                    'style': {
                      'overflowWrap': 'break-word'
                    },
                  },
                },
                input: {
                  type: 'string',
                  maxLength: 1,
                  default: '输入框',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '输入框',
                    'name': 'input',
                    'style': {
                      width: '50%',
                    },
                    'class': ['required']
                  },
                  'x-component': 'Input',
                  'x-component-props': {
                    '@change': function(e) {
                      console.log('change', e);
                    },
                    '@input': function(e) {
                      console.log('input', e);
                      self.$refs.xxx.setFormValues({input: e})
                    }
                  },
                },
                // inputNumber: {
                //   type: 'number',
                //   minimum: 50,
                //   exclusiveMinimum: 40,
                //   default: 20,
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '数字输入框',
                //     'name': 'inputNumber',
                //     'style': {
                //       width: '50%',
                //     }
                //   },
                //   'x-component': 'InputNumber',
                //   'x-component-props': {

                //   }
                // },
                checkbox: {
                  type: 'array',
                  default: ['Apple', 'Pear'],
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    label: '多选框',
                    name: 'checkbox',
                    'label-col': { span: 4 },
                    'wrapper-col': { span: 14 },
                    'style': {
                      width: '50%',
                    }
                  },
                  'x-component': 'CheckboxGroup',
                  'x-component-props': {
                    'options': [
                      { label: 'Apple', value: 'Apple' },
                      { label: 'Pear', value: 'Pear' },
                      { label: 'Orange', value: 'Orange' },
                    ]
                  }
                },
                // textarea: {
                //   type: 'string',
                //   maxLength: 1,
                //   default: '文本框',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '文本框',
                //     'name': 'textarea',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'Textarea',
                //   'x-component-props': {

                //   },
                // },
                // radio: {
                //   type: 'array',
                //   required: true,
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '单选框',
                //     'name': 'radio',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'RadioGroup',
                //   'x-component-props': {
                //     'options': [
                //       { label: 'Apple', value: 'Apple' },
                //       { label: 'Pear', value: 'Pear' },
                //       { label: 'Orange', value: 'Orange' },
                //     ]
                //   }
                // },
                // cascader: {
                //   type: 'array',
                //   required: true,
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '级联选择',
                //     'name': 'cascader',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'Cascader',
                //   'x-component-props': {
                //     'options': [
                //       {
                //         value: 'zhejiang',
                //         label: 'Zhejiang',
                //         children: [
                //           {
                //             value: 'hangzhou',
                //             label: 'Hangzhou',
                //             children: [
                //               {
                //                 value: 'xihu',
                //                 label: 'West Lake',
                //               },
                //             ],
                //           },
                //         ],
                //       },
                //       {
                //         value: 'jiangsu',
                //         label: 'Jiangsu',
                //         children: [
                //           {
                //             value: 'nanjing',
                //             label: 'Nanjing',
                //             children: [
                //               {
                //                 value: 'zhonghuamen',
                //                 label: 'Zhong Hua Men',
                //               },
                //             ],
                //           },
                //         ],
                //       },
                //     ]
                //   }
                // },
                // select: {
                //   type: 'string',
                //   required: true,
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '下拉选择',
                //     'name': 'select',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'Select',
                //   'x-component-props': {
                //     'allowClear': true,
                //     'options': [
                //       { label: 'Apple', value: '1' },
                //       { label: 'Pear', value: '2' },
                //       { label: 'Orange', value: '3' },
                //     ]
                //   }
                // },
                // slider: {
                //   type: 'number',
                //   required: true,
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '滑动条',
                //     'name': 'slider',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'Slider',
                //   'x-component-props': {

                //   }
                // },
                switch: {
                  type: 'boolean',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '开关',
                    'name': 'switch',
                    'label-col': { span: 2 },
                    'wrapper-col': { span: 14 },
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Switch',
                  'x-component-props': {

                  }
                },
                // tree: {
                //   type: 'string',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '树型选择',
                //     'name': 'tree',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'TreeSelect',
                //   'x-component-props': {
                //     'tree-data': [
                //       {
                //         title: 'Node1',
                //         value: '0-0',
                //         key: '0-0',
                //         children: [
                //           {
                //             value: '0-0-1',
                //             key: '0-0-1',
                //             slots: {
                //               title: 'title',
                //             },
                //           },
                //           {
                //             title: 'Child Node2',
                //             value: '0-0-2',
                //             key: '0-0-2',
                //           },
                //         ],
                //       },
                //       {
                //         title: 'Node2',
                //         value: '0-1',
                //         key: '0-1',
                //       },
                //     ]
                //   }
                // },
                // date: {
                //   type: 'date',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '日期选择',
                //     'name': 'date',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'DatePicker',
                //   'x-component-props': {

                //   }
                // },
                // rangeDate: {
                //   type: 'array',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '日期范围选择',
                //     'name': 'rangeDate',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'RangePicker',
                //   'x-component-props': {

                //   }
                // },
                // time: {
                //   type: 'datetime',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '时间选择',
                //     'name': 'time',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'TimePicker',
                //   'x-component-props': {

                //   }
                // },
                // upload: {
                //   type: 'object',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '上传',
                //     'name': 'upload',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'Upload',
                //   'x-component-props': {
                //     'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                //     '@change': function(info) {
                //       if (info.file.status !== 'uploading') {
                //         console.log(info.file, info.fileList);
                //       }
                //       if (info.file.status === 'done') {
                //         this.$message.success(`${info.file.name} file uploaded successfully`);
                //       } else if (info.file.status === 'error') {
                //         this.$message.error(`${info.file.name} file upload failed.`);
                //       }
                //     }
                //   },
                //   properties: {
                //     button: {
                //       type: 'void',
                //       'x-component': 'Button',
                //       'x-component-props': {
                //       },
                //       'x-content': "上传文件"
                //     }
                //   }
                // },
                // uploadImage: {
                //   type: 'object',
                //   'x-decorator': 'FormItem',
                //   'x-decorator-props': {
                //     'label': '上传图片',
                //     'name': 'uploadImage',
                //     'label-col': { span: 2 },
                //     'wrapper-col': { span: 14 },
                //     'style': {
                //       width: '100%',
                //     }
                //   },
                //   'x-component': 'UploadImage',
                //   'x-component-props': {
                //     'text': '上传照片',
                //     'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                //     'imageUrl': 'http://aacsb-stage.bbblackboard.com/files/1650618573870/2023_2024%20%E5%BA%B7%E7%88%B1%E5%AE%B6%E5%AD%A6%E4%BD%8D%E9%A1%B9%E7%9B%AE20211116%E8%AF%BE%E7%A8%8B%E5%9C%B0%E5%9B%BE.png',
                //   }
                // },
                // button: {
                //   "type": 'void',
                //   "x-component": 'Button',
                //   "x-component-props": {
                //     "style": {
                //       width: "50%",
                //     },
                //     "@click": function(e) {
                //       console.log("click", e);
                //     }
                //   },
                //   "x-content": "按钮"
                // }
              }
            }
          },
        }
      }
    },
  },
  data() {
    let self = this
    return {
      key: 0,
      form: createForm(),
    }
  },
  watch: {
    schema: {
      handler(val) {
        this.key++;
        this.form = createForm();
      },
      deep: true
    },
  },
  methods: {
    /**
     * 获取飞企过滤器values
     */
    getFeiqiFilterValues() {
      let newValues = cloneDeep(this.getValues());
      let obj = this.schema.properties.form.properties;
      for (let key in obj) {
        let item = obj[key]
        if (newValues[key]) {
          getFeiqiFilterValue(item['x-component'], newValues, key)
        }
      }
      newValues = newValues.map((value, key) => {
        return { name: key, value }
      }).filter(item => item.value)

      return JSON.stringify(newValues);
    },

    /**
     * 获取过滤器values
     */
    getFilterValues() {
      let newValues = cloneDeep(this.getValues());
      let obj = this.schema.properties.form.properties;
      for (let key in obj) {
        let item = obj[key]
        if (newValues[key] != undefined) {
          getFilterValue(item['x-component'], newValues, key)
        }
      }
      return newValues;
    },
    /**
     * 获取表单values
     */
    getFormValues() {
      let newValues = cloneDeep(this.getValues());
      let obj = this.schema.properties.form.properties;
      for (let key in obj) {
        let item = obj[key]
        if (newValues[key] != undefined) {
          getFormValue(item['x-component'], newValues, key);
        }
      }
      return newValues;
    },
    /**
     * 设置表单values
     */
    setFormValues(values) {
      let newValues = {};
      let obj = this.schema.properties.form.properties;
      for (let key in obj) {
        let item = obj[key]
        if (values[key] != null || values[key] != undefined) {
          newValues[key] = setFormValue(item['x-component'], values, key);
        }
      }
      this.setValues(newValues);
    },
    /**
     * 设置values
     */
    setValues(values) {
      return this.form.setValues(values);
    },
    /**
     * 获取values
     */
    getValues() {
      return this.form.values;
    },
    /**
     * 重置
     */
    reset() {
      this.form.reset();
    },
    /**
     * 校验
     */
    validate() {
      return new Promise((resolve, reject) => {
        let fields = this.form.fields
        let values = this.form.values
        this.form.validate().then(() => {
          resolve(values)
        }).catch(e => {
          this.$message.error(h('span',
            { style: { 'whiteSpace': 'pre-wrap' } },
            fields[e[0].address].decoratorProps.label + "：" + e[0].messages
          ))
          reject(e)
        })
      })
    }
  }
}
</script>
<style scoped>
/deep/ .required .ant-form-item-label label::before {
  display: inline-block;
  margin-right: 4px;
  color: #ff4d4f !important;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}
</style>
