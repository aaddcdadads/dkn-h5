<template>
  <view>
    <!-- <slot 
      v-for="(item, index) in cData" 
      :key="index"
      v-bind="item"
    >
    </slot> -->
  </view>
</template>

<script>
import { getAction } from "/@/request/http";

/**
 * 背景卡片
 */
export default {
  name: "HmUviewList",
  components: {},
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default: function () {
        return [
          {
            text: "John Brown1",
          },
          {
            text: "John Brown2",
          },
          {
            text: "John Brown3",
          },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 数据映射
     */
    dataMap: {
      type: Object,
    },
  },
  data() {
    return {
      cData: [],
    };
  },
  watch: {
    data: {
      handler: function (value, oldValue) {
        this.cData = JSONfn.parse(JSONfn.stringify(value));
      },
      deep: true,
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          // 修复相等的情况下也调用watch的bug
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
  },
  computed: {},
  mounted() {
    this.cData = this.data;
    this.getData();
  },
  methods: {
    getData(url, params) {
      let self = this;
      self._getData(url, params);
    },
    _getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});

      getAction(url, params).then((resp) => {
        console.log(`get list data: `, resp);
        self.cData = [];
        let data = [];

        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.data) {
          data = resp.data;
        }

        self.cData = self.dataMap
          ? self.handleDataMapping(data, self.dataMap)
          : data;
      });
    },
    /**
     * 处理数据映射
     */
    handleDataMapping(data, dataMap) {
      let ret = [];
      data.forEach(item => {
        let obj = {};
        Object.keys(dataMap).forEach(key => {
          let value = dataMap[key];
          obj[key] = item[value] || "";
        });
        ret.push(obj);
      });
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
</style>