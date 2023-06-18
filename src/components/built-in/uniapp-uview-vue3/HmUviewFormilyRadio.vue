<template>
  <view class="radio-class">
    {{ title }}
    <u-radio-group v-model:value="cValue" :wrap="wrap" @change="radioGroupChange">
      <p v-if="textLocation" style="margin-left: 1px; margin-right: 5px">{{ item.name }}</p>
      <u-radio
        v-for="(item) in cOptions"
        @change="radioChange"
        :key="item.value"
        :name="item.value"
        :disabled=" disabled || item.disabled"
        :shape="shape"
        :icon-size="iconSize"
        :active-color="activeColor"
      >
        <p v-if="!textLocation" style>{{ item.label }}</p>
      </u-radio>
    </u-radio-group>
  </view>
</template>

<script>
// import uRadio from "uview-ui/components/u-radio/u-radio";
// import uRadioGroup from "uview-ui/components/u-radio-group/u-radio-group";
import {
  getAction,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";
export default {
  components: {},
  name: "HmUviewFormilyRadio",
  props: {
    /**
     * 值
     * @model
     */
    modelValue: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "单选：",
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
      default: function() {
        return {};
      },
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function() {
        return {
          name: "name",
          disabled: "disabled",
        };
      },
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
     * 排列方向
     */
    wrap: {
      type: Boolean,
      default: false,
    },
    /**
     * 文本位置
     */
    textLocation: {
      type: Boolean,
      default: false,
    },
    /**
     * 形状
     * @type Enum
     * @options ["circle","square"]
     */
    shape: {
      type: String,
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: Number,
    },
    /**
     * 选中颜色
     * @type Color
     */
    activeColor: {
      type: String,
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    value(){
      return this.modelValue;
    }
  },
  data() {
    return {
      cList: [],
      cValue: "",
    };
  },
  mounted() {
    this.cValue = this.value;
    this.cOptions = this.mapData(this.options);
    this.getData();
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function(value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    options: {
      handler: function(value, oldValue) {
        this.cOptions = this.mapData(value);
      },
      deep: true,
    },
  },
  methods: {
    // 选中某个单选框时，由radio时触发
    radioChange(e) {
      this.$emit("radioChange", e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange(e) {
      this.$emit("update:modelValue", e);
      this.$emit("radioGroupChange", e);
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      console.log("getData", url, params);
      getAction(url, params).then((resp) => {
        console.log("res", resp);
        //查询数据库的数组
        self.cOptions = [];
        let data = [];
        if (resp.data) {
          data = resp.data.list;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }

        self.cOptions = self.mapData(data);
      });
      //console.log("请求使用的url和参数", url, params);
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
      console.log("data", data);
      return data;
    },
  },
};
</script>

<style lang="less">
</style>
