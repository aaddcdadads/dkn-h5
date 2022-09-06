<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :chartData="cChartData"   
      :opts="cChartDeploy"
      @complete="onComplete"
      @getIndex="getIndex"
      @click="onClick"
    />
  </view>
</template>
<script>
export default {
  name: "HmColumnCharts",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100%",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300rpx",
    },
    /**
     * 图表数据
     */
    chartData: {
      type: Object,
      default: function () {
        return {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [
            {
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34],
            },
            {
              name: "完成量",
              data: [18, 27, 21, 24, 6, 28],
            },
          ],
        };
      },
    },
    /**
     * 图表配置
     */
    chartDeploy: {
      type: Object,
      default: function () {
        return {
          //  此方式调用组件chartData需自行按图表类型需求的数据格式拼接
          //  配置参数请用在线生成工具(http://demo.ucharts.cn/)生成
          //  较完整的默认配置
          type: "column",
          canvasId: "",
          canvas2d: false,
          background: "none",
          animation: true,
          timing: "easeOut",
          duration: 1000,
          color: [
            "#1890FF",
            "#91CB74",
            "#FAC858",
            "#EE6666",
            "#73C0DE",
            "#3CA272",
            "#FC8452",
            "#9A60B4",
            "#ea7ccc",
          ],
          padding: [15, 15, 0, 5],
          rotate: false,
          errorReload: true,
          fontSize: 13,
          fontColor: "#666666",
          enableScroll: false,
          touchMoveLimit: 60,
          enableMarkLine: false,
          dataLabel: true,
          dataPointShape: true,
          dataPointShapeType: "solid",
          tapLegend: true,
          xAxis: {
            disabled: false,
            axisLine: true,
            axisLineColor: "#CCCCCC",
            calibration: false,
            fontColor: "#666666",
            fontSize: 13,
            rotateLabel: false,
            itemCount: 5,
            boundaryGap: "center",
            disableGrid: true,
            gridColor: "#CCCCCC",
            gridType: "solid",
            dashLength: 4,
            gridEval: 1,
            scrollShow: false,
            scrollAlign: "left",
            scrollColor: "#A6A6A6",
            scrollBackgroundColor: "#EFEBEF",
            format: "",
          },
          yAxis: {
            disabled: false,
            disableGrid: false,
            splitNumber: 5,
            gridType: "solid",
            dashLength: 8,
            gridColor: "#CCCCCC",
            padding: 10,
            showTitle: false,
            data: [],
          },
          legend: {
            show: true,
            position: "bottom",
            float: "center",
            padding: 5,
            margin: 5,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            fontSize: 13,
            fontColor: "#666666",
            lineHeight: 11,
            hiddenColor: "#CECECE",
            itemGap: 10,
          },
          extra: {
            column: {
              type: "group",
              width: 30,
              seriesGap: 2,
              categoryGap: 3,
              barBorderCircle: false,
              linearType: "none",
              linearOpacity: 1,
              colorStop: 0,
              meterBorder: 1,
              meterFillColor: "#FFFFFF",
              activeBgColor: "#000000",
              activeBgOpacity: 0.08,
              meterBorde: 1,
            },
            tooltip: {
              showBox: true,
              showArrow: true,
              showCategory: false,
              borderWidth: 0,
              borderRadius: 0,
              borderColor: "#000000",
              borderOpacity: 0.7,
              bgColor: "#000000",
              bgOpacity: 0.7,
              gridType: "solid",
              dashLength: 4,
              gridColor: "#CCCCCC",
              fontColor: "#FFFFFF",
              splitLine: true,
              horizentalLine: false,
              xAxisLabel: false,
              yAxisLabel: false,
              labelBgColor: "#FFFFFF",
              labelBgOpacity: 0.7,
              labelFontColor: "#666666",
            },
            markLine: {
              type: "solid",
              dashLength: 4,
              data: [],
            },
          },
        };
      },
    },
  },
  watch:{
    width(val){
      this.cWidth = this.getCssUnit(val);
    },
    height(val){
      this.cHeight = this.getCssUnit(val);
    },
    chartData(val){
      this.cChartData = JSON.parse(JSON.stringify(val));
    },
    chartDeploy(val){
      this.cChartDeploy = JSON.parse(JSON.stringify(val));
    }
  },
  data() {
    return {
      cWidth: "100%",
      cHeight: "300rpx",
      cChartData:{},
      cChartDeploy:{}
    };
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cChartData = JSON.parse(JSON.stringify(this.chartData));
    this.cChartDeploy = JSON.parse(JSON.stringify(this.chartDeploy));
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onComplete(e) {
      this.$emit("complete", e);
      console.log(e);
    },
    onClick(e) {
      this.$emit("click", e);
      console.log(e);
    },
    getIndex(e) {
      this.$emit("getIndex", e);
      console.log(e);
    },
  },
};
</script>

<style lang="less">
.charts-box {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>