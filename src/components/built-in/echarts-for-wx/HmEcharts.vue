<template>
  <view class="container" 
    :style="{width: cWidth, height: cHeight || '300px' }">
    <ec-charts id="mychart-dom-bar" 
      width="100%" 
      :canvasId="canvasId" 
      :ec="{onInit: echartBarInit}" />
  </view>
</template>

<script>
const echarts = require("../../../../wxcomponents/ec-canvas/echarts");
export default {
  name: "HmEcharts",
  components: {
  },
  props: {
    /**
     * 选项
     */
    option: {
      type: Object,
      default: function() {
        return {
          title: {
            text: "ECharts 基础柱状图",
          },
          tooltip: { trigger: "axis" },
          dataset: {
            dimensions: ["weekDay", "sales"],
          },
          xAxis: {
            type: "category"
          },
          yAxis: {},
          series: [
            {
              name: "y",
              type: "bar"
            }
          ]
        };
      }
    },
    /**
     * 数据项
     */
     data: {
      type: Array,
      default: function () {
        return [
          {"weekDay": "Mon", "sales": 120},
          {"weekDay": "Tue", "sales": 200},
          {"weekDay": "Wed", "sales": 150},
          {"weekDay": "Thu", "sales": 80},
          {"weekDay": "Fri", "sales": -70},
          {"weekDay": "Sat", "sales": 110},
          {"weekDay": "Sun", "sales": 130}
        ];
      },
    },
    /**
     * 宽度
     */
     width: {
      type: String,
      default: "300",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300",
    },
  },
  data() {
    return {
      canvasId: this.createCanvasId(),
      cWidth: "300px",
      cHeight: "300px",
      cOption: {},
      chart: {}
    };
  },
  watch: {
    option: {
      handler(value) {
        if (!this.chart || !this.chart.setOption) {
          return;
        }

        let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
        this.cOption = value;
        this.cOption.dataset = dataset;

        this.chart.setOption(this.cOption);
      },
      deep: true
    },
    data: {
      handler: function (value, oldValue) {
        this.cOption.dataset.source = value;
        if (!this.chart) {
          return;
        }
        this.chart.setOption(this.cOption || {});
        console.log(`setOption:`, this.cOption);
      },
      deep: true,
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
  },
  mounted() {
    console.log(`HmEcharts mounted`)
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
    this.combineOptionWithData();
  },
  methods: {
    echartBarInit(canvas, width, height, dpr) {
      console.log(`init: `, canvas, width, height, dpr);
      const chart = echarts.init(canvas, null, {
        width: 300,
        height,
        devicePixelRatio: dpr // 像素
      });
      this.combineOptionWithData();
      console.log(`this.cOption: `, this.cOption);
      chart.setOption(this.cOption || {});
      canvas.setChart(chart);
      this.chart = chart;
      return chart;
    },
    combineOptionWithData() {
      this.cOption = this.option;
      if (typeof this.cOption.dataset === "undefined") {
        this.cOption.dataset = {};
      }
      this.cOption.dataset.source = this.data;
    },
    createCanvasId() {
      return 'canvas-id-' + 
        new Date().getTime() + "-" + parseInt(Math.random() * 1000000);
    }
  }
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
