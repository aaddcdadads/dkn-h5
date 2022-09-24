<template>
  <view :style="[chartsBoxStyle]" class="charts-box">
    <qiun-data-charts
      :reshow="cReshow" 
      type="bar"
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
  name: "HmBarCharts",
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
      default: "300px",
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
          type: "bar",
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
          padding: [15, 30, 0, 5],
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
            axisLine: false,
            axisLineColor: "#CCCCCC",
            calibration: false,
            fontColor: "#666666",
            fontSize: 13,
            rotateLabel: false,
            itemCount: 5,
            boundaryGap: "justify",
            disableGrid: false,
            gridColor: "#CCCCCC",
            gridType: "solid",
            dashLength: 4,
            gridEval: 1,
            scrollShow: false,
            scrollAlign: "left",
            scrollColor: "#A6A6A6",
            scrollBackgroundColor: "#EFEBEF",
            min: 0,
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
            bar: {
              type: "group",
              width: 30,
              seriesGap: 2,
              categoryGap: 3,
              barBorderCircle: false,
              linearType: "none",
              linearOpacity: 1,
              colorStop: 0,
              activeBgColor: "#000000",
              activeBgOpacity: 0.08,
              meterBorde: 1,
              meterFillColor: "#FFFFFF",
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
     * @desc 
     *  直角坐标系：categoryColumn不为空(如 'category')，seriesColumns形如['num', 'money']，其中num/money为返回数组的列
     *  非直角坐标系：categoryColumn为空，seriesColumns形如：[{'name': 'year', 'value': 'num'}]，其中year/num为返回数组的列
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          categoryColumn: '',
          seriesColumns: []
        }
      }
    },
    /**
     * 是否重绘
     */
    reshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cWidth: "100%",
      cHeight: "300px",
      cChartData:{},
      cChartDeploy:{},
      cReshow: false,
      chartsBoxStyle: {}
    };
  },
  watch:{
    width(val){
      this.cWidth = this.getCssUnit(val);
      this.chartsBoxStyle.width = this.cWidth;
    },
    height(val){
      this.cHeight = this.getCssUnit(val);
      this.chartsBoxStyle.height = this.cHeight;
    },
    chartData: {
      handler: function(val, oldVal) {
        this.cChartData = JSON.parse(JSON.stringify(val));
      },
      deep: true
    },
    chartDeploy: {
      handler: function(val, oldVal) {
        this.cChartDeploy = JSON.parse(JSON.stringify(val));
      },
      deep: true
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        this.getData(this.url, value);
      },
      deep: true,
    },
    reshow(val) {
      console.log(`watch HmBarCharts reshow: `, val);
      this.cReshow = val;
    }
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cChartData = JSON.parse(JSON.stringify(this.chartData));
    this.cChartDeploy = JSON.parse(JSON.stringify(this.chartDeploy));
    this.cReshow = this.reshow;
    this.chartsBoxStyle = {
      width: this.cWidth,
      height: this.cHeight
    }

    // 调整接口返回数据的赋值
    this.getData();
  },
  methods: {
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      this.cReshow = false;
      getAction(url, params).then((resp) => {
        this.cChartData = this.getDataSource(resp)
        this.$refs.chart.setOption(this.cOption, {
          notMerge: true,
          lazyUpdate: true,
          silent: false,
        });
        this.cReshow = true;
      });
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataSource(resp) {
      let respDataList = [];
      if (resp.result) {
        respDataList = resp.result.records || resp.result;
      }

      if (resp.data) {
        respDataList = resp.data;
      }

      // 根据getDataMap，将respDataList映射为cChartData的数据
      if (this.getDataMap.categoryColumn) {
        // 直角坐标系的数据
        return {
          categories: _.map(respDataList, this.getDataMap.categoryColumn),
          series: _.map(this.chartData.series, (serie, index) => {
            let newSerie =  JSON.parse(JSON.stringify(serie))
            newSerie.data =  _.map(respDataList, this.getDataMap.seriesColumns[index])
            return newSerie;
          })
        }
      }

      // 返回非直角坐标系的数据
      return {
        series: _.map(this.chartData.series, (serie, index) => {
          let newSerie =  JSON.parse(JSON.stringify(serie))
          newSerie.data =  _.map(respDataList, item => {
            let map = this.getDataMap.seriesColumns[index];
            return {
              name: item[map.name],
              value: item[map.value]
            }
          });
          return newSerie;
        })
      }
    },
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

<style lang="less" scoped>
  .charts-box {
    width: v-bind(cWidth);
    height: v-bind(cHeight);
  }
</style>