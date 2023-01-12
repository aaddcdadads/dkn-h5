<template>
  <div>
    <HmUviewFormily ref="test" :schema="schema"></HmUviewFormily>
    <u-button @click="validate">validate</u-button>
    <u-button @click="reset">reset</u-button>
    <u-button @click="getValues">getValues</u-button>
    <u-button @click="setValues">setValues</u-button>
    <u-button @click="getFormValues">getFormValues</u-button>
    <u-button @click="setFormValues">setFormValues</u-button>
    <u-button @click="changeSelectOption">changeSelectOption</u-button>
  </div>
</template>

<script>
import HmUviewFormily from '/@/components/built-in/uniapp-uview-vue3/HmUviewFormily.vue'

export default {
  components: {
    HmUviewFormily
  },
  data(){
    let self = this;
    return{
      schema: {
        type: 'object',
        properties: {
          form: {
            type: 'void',
            'x-component': 'Form',
            'x-component-props': {
              'labelWidth': '10%',
              'labelPosition': 'top'
            },
            properties: {
              span: {
                'default': 'aaaa',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '文字',
                  'name': 'span',
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
                  // 'required': true,
                  'class': ['required']
                },
                'x-component': 'Input',
                'x-component-props': {
                },
              },
              inputNumber: {
                type: 'number',
                minimum: 50,
                exclusiveMinimum: 40,
                default: 20,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '数字输入框',
                  'name': 'inputNumber',
                  'style': {
                    width: '50%',
                  }
                },
                'x-component': 'InputNumber',
                'x-component-props': {

                }
              },
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
              textarea: {
                type: 'string',
                maxLength: 1,
                default: '文本框',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '文本框',
                  'name': 'textarea',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'Textarea',
                'x-component-props': {

                },
              },
              radio: {
                type: 'string',
                default: 'Pear',
                required: true,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '单选框',
                  'name': 'radio',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'RadioGroup',
                'x-component-props': {
                  'options': [
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' },
                  ]
                }
              },
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
              select: {
                type: 'string',
                required: true,
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '下拉选择',
                  'name': 'select',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'Select',
                'x-component-props': {
                  'allowClear': true,
                  '@confirm': function(e, item){
                    console.log('e', e, item)
                    self.schema.properties.form.properties.switch['x-component-props'].style = {
                      display: 'none'
                    }
                  },
                  'params': {
                    pageSize: -1,
                  },
                  // 'url': '/api/design/framework/list',
                  // "dataMap": {
                  //   "label": "name",
                  //   "value": "id"
                  // },
                  "options": [{
                    label: "aa",
                    value: "aa"
                  }]
                }
              },
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
                default: true,
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
                  'disabled': true,
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
              date: {
                default: '2022-01-01',
                type: 'date',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '日期选择',
                  'name': 'date',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'DatePicker',
                'x-component-props': {
                  "format": "YYYY-MM-DD",
                  "params": {
                    year: true,
                    month: true,
                    day: true,
                    hour: false,
                    minute: false,
                    second: false,
                    timestamp: true,
                  },
                  'disabled': true,
                }
              },
              rangeDate: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '日期范围选择',
                  'name': 'rangeDate',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'RangePicker',
                'x-component-props': {

                }
              },
              time: {
                default: '2022-01-01 00:00:00',
                type: 'datetime',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '时间选择',
                  'name': 'time',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'TimePicker',
                'x-component-props': {
                }
              },
              upload: {
                default: 'http://xh.ispace.dev.haomo-tech.com/files/1668147473752/WechatIMG2996.jpeg',
                type: 'string',
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  'label': '上传',
                  'name': 'upload',
                  'label-col': { span: 2 },
                  'wrapper-col': { span: 14 },
                  'style': {
                    width: '100%',
                  }
                },
                'x-component': 'Upload',
                'x-component-props': {
                  'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                  'maxCount': 11,
                },
              },
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
  created(){
    this.testValue = 'testValue';

    // setTimeout(() => {
    //   this.schema.properties.form.properties.input.default = '234'
    // }, 1000)
  },
  methods:{
    reset(){
      this.$refs.test.reset()
    },
    validate(){
      this.$refs.test.validate().then(res => {
        console.log('通过', res)
      }).catch(e => {
        console.log('未通过', e)
      })
    },
    getValues(){
      let values = this.$refs.test.getValues()
      console.log('values', values)
    },
    getFormValues(){
      let values = this.$refs.test.getFormValues()
      console.log('values', values)
    },
    setValues(){
      let values = {
        select: '2',
        uploadImage: {
          file: {},
          fileList: [{
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://aacsb-stage.bbblackboard.com/files/1650618573870/2023_2024%20%E5%BA%B7%E7%88%B1%E5%AE%B6%E5%AD%A6%E4%BD%8D%E9%A1%B9%E7%9B%AE20211116%E8%AF%BE%E7%A8%8B%E5%9C%B0%E5%9B%BE.png',
          }]
        }
      }
      this.$refs.test.setValues(values)
    },
    setFormValues(){
      let values = {
        input: '2',
        upload: 'http://aacsb-stage.bbblackboard.com/files/1667796110048/72BED9E6-91B7-4117-9C4E-F2F03AB39BE0.png,http://aacsb-stage.bbblackboard.com/files/1667826283797/42476B84-AE1A-413D-AE79-544D4164096C.png',
      }
      this.$refs.test.setFormValues(values)
    },
    changeSelectOption(){
      this.schema.properties.form.properties.select['x-component-props'].options = [{
        label: 'test1',
        value: '1'
      },{
        label: 'test2',
        value: '2'
      }]
    }
  }
}
</script>

<style>

</style>
