<template>
  <u-checkbox-group
    @change="checkboxGroupChange"
    :icon-size="iconSize"
    :size="size"
    :shape="shape"
    :active-color="activeColor"
    :label-disabled="labelDisabled"
    :width="width"
    :wrap="wrap"
  >
    <u-checkbox
      v-for="(item) in cOptions"
      :key="item.value"
      v-model="item.checked"
      :name="item.value"
      :disabled="disabled || item.disabled"
      @change="checkboxChange"
    >{{ item.label }}</u-checkbox>
  </u-checkbox-group>
</template>

<script>
export default {
  name: "HmUviewFormilyCheckbox",
  props: {
    modelValue: {
      type: Array,
    },
    /**
     * 禁用所有复选
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "20",
    },
    /**
     * 整体大小
     */
    size: {
      type: String,
      default: "34",
    },
    /**
     * 形状
     * @type Enum
     * @options ["circle","square"]
     */
    shape: {
      type: String,
      default: "square",
    },
    /**
     * 选中颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * 禁用文本点击
     */
    labelDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "auto",
    },
    /**
     * 各自占一行
     */
    wrap: {
      type: Boolean,
      default: false,
    },
    /**
     * 配置项
     */
    options: {
      type: Array,
      default: function() {
        return [
          {
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
          {
            label: "3",
            value: "3",
          },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          label: "label",
          value: "value",
        };
      },
    },
  },
  data() {
    return {
      cOptions: [],
    };
  },
  computed: {
    value(){
      return this.modelValue;
    }
  },
  watch: {
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    options: {
      handler: function (value, oldValue) {
        this.cOptions = this.mapData(value);
      },
      deep: true,
    },
  },
  created() {
    this.cOptions = this.mapData(this.options)
    this.setOptionsChecked();
    this.getData();
  },
  methods: {
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      getAction(url, params).then((resp) => {
        //查询数据库的数组
        let data = [];
        if (resp.data) {
          data = resp.data.list;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.list) {
          data = resp.list;
        }
        self.cOptions = self.mapData(data);
        console.log('self.cOptions', self.cOptions)
        this.$emit("optionsChange", self.cOptions);
      });
    },
    setOptionsChecked(){
      if(this.value){
        this.cOptions.forEach(item => {
          Object.assign(item, {
            checked: this.value.indexOf(item.value) > -1
          })
        })  
      }
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.dataMap || Object.keys(this.dataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.dataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = key == "label" ? item[self.dataMap[key]].toString() : item[self.dataMap[key]];
        });
      });
      return data;
    },
    // 选中某个复选框时，由checkbox时触发
    checkboxChange(e) {
      console.log("checkboxChange", e)
      this.$emit("checkboxChange", e);
    },
    checkboxGroupChange(e) {
      console.log("checkboxGroupChange", e)
      this.$emit("checkboxGroupChange", e);
      this.$emit("update:modelValue", e);
    },
  },
};
</script>

<style lang="less">
</style>
