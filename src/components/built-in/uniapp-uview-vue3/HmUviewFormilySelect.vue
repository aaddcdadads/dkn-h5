<template>
  <view style="width: 100%;">
    <u-input type="select" :border="border" placeholder="请选择" :modelValue="value" @click="cShow = true"></u-input>
    <u-select 
      v-if="autoSelect"
      v-model="cShow"
      :list="cOptions"
      :mode="mode"
      :cancel-color="cancelColor"
      :confirm-color="confirmColor"
      :default-value="value"
      :mask-Close-Able="maskCloseAble"
      :title="title"
      :confirm-text="confirmText"
      :cancel-Text="cancelText"
      :child-name="childName"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></u-select>
  </view>
</template>

<script>
import {
  getAction,
} from "/@/request/http";
export default {
  components: {},
  name: "HmUviewFormilySelect",
  props: {
    modelValue: {
      type: String,
    },
    /**
     * 模式选择
     * @type Enum
     * @options ["single-column", "mutil-column", "mutil-column-auto"]
     */
    mode: {
      type: String,
      default: "single-column",
    },
    /**
     * 列数据
     */
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },

    /**
     * 是否显示
     * @model
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 取消按钮颜色
     * @type Color
     */
    cancelColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 确定按钮颜色
     * @type Color
     */
    confirmColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * 默认选中下标
     */
    value: {
      type: Array,
      default: [0],
    },
    /**
     * 点击遮罩关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: true,
    },

    /**
     * children属性名
     */
    childName: {
      type: String,
      default: "children",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * 确认按钮文字
     */
    confirmText: {
      type: String,
      default: "确认",
    },
    /**
     * 取消按钮文字
     */
    cancelText: {
      type: String,
      default: "取消",
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
    /**
     * 自动选择
     */
    autoSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * 边框
     */
    border: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    value(){
      if(!this.cOptions || this.cOptions.length == 0 || (!this.modelValue && this.modelValue != 0)){
        return this.modelValue;
      }
      let obj = this.cOptions.find(item => {
        return item.value == this.modelValue.toString()
      })
      if(!obj){
        return this.modelValue
      }
      return obj.label;
    }
  },
  data() {
    return {
      cShow: false,
    };
  },
  watch: {
    show(value) {
      this.cShow = value;
    },
    cShow(value) {
      if (value == false) 
        this.onCancel();
      this.$emit("update:show", this.cShow);
      this.$emit("showChange", this.cShow);
    },
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
    this.cShow = this.show;
    this.cOptions = this.options
    this.getData();
  },
  methods: {
    onConfirm(e) {
      this.$emit("confirm", e);
      this.$emit("update:modelValue", e[0].value.toString());
    },
    onCancel(e) {
      this.$emit("cancel", e);
    },
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
        this.$emit("optionsChange", self.cOptions);
      });
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
          item[key] = item[self.dataMap[key]];
        });
      });
      return data;
    },
  },
};
</script>

<style lang="less">
</style>
