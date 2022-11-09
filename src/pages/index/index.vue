<template>
  <view>
    <HmEcharts :height="chartHeight" :options="chartOptions" />
  </view>
</template>
<script>
import { cloneDeep } from "/@/utils/util";
import HmEcharts from "@/components/built-in/echarts-for-wx/HmEcharts.vue";
export default {
  components: {
    HmEcharts
  },
  props: {
    /**
     * 图表高度
     */
    height: {
      type: String,
      default: "300px"
    },
    /**
     * Echarts表配置
     */
    option: {
      type: Object,
      default: function() {
        return {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [120, 200, 150, -80, -70, 110, 130],
              type: "bar"
            }
          ]
        };
      }
    }
  },
  watch: {
    height(value) {
      this.chartHeight = value;
    },
    option(value) {
      this.chartOptions = cloneDeep(value);
    }
  },
  data() {
    return {
      chartHeight: "",
      chartOptions: {}
    };
  },
  mounted() {
    this.chartHeight = this.height;
    this.chartOptions = cloneDeep(this.option);
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$emit("initData");
    }
  }
};
</script>
<style scoped lang="scss"></style>
