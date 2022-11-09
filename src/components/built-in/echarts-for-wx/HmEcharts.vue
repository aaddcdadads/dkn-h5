<template>
  <view class="container" :style="{width: '100%', height: height || '300px' }">
    <ec-charts id="mychart-dom-bar" width="100%" canvasId="mychart-bar" :ec="ecoptions" />
  </view>
</template>

<script>
import { log } from "@/utils/log";
// #ifdef MP-WEIXIN
const echarts = require("../../../wxcomponents/ec-canvas/echarts");
// #endif
// #ifdef H5
import * as echarts from "../../../wxcomponents/ec-canvas/echarts";
// #endif

export default {
  name: "HmEcharts",
  props: {
    /**
     * 选项
     */
    options: {
      type: Object,
      default: function() {
        return {};
      },
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '300px',
    },
  },
  data() {
    return {
      chart: {},
      ecoptions: {}
    };
  },
  watch: {
    options: {
      handler(newVal) {
        if (!this.chart || !this.chart.setOption) {
          return;
        }
        this.chart.setOption(newVal)
      },
      deep: true,
    },
  },
  mounted() {
    this.ecoptions = {
      onInit: this.echartBarInit
    }
  },
  methods: {
    echartBarInit(canvas, width, height, dpr) {
      console.log(`init: `, canvas, width, height, dpr)
      const chart = echarts.init(canvas, null, {
        width: 300,
        height,
        devicePixelRatio: dpr, // 像素
      });
      log.d(this.options, "this.options");
      chart.setOption(this.options || {});
      canvas.setChart(chart);
      this.chart = chart;
      console.log("this.chart: ", this.chart)
      return chart;
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
.mychart-bar {
  width: 100%;
  height: 100%;
}
</style>
