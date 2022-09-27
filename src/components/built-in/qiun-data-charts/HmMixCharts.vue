<template>
  <view :style="[chartsBoxStyle]" class="charts-box">
    <qiun-data-charts
      :reshow="cReshow"
      :canvasId="canvasId"
      :canvas2d="canvas2d"
      type="mix"
      :opts="cChartDeploy"
      :chartData="cChartData"
      :tooltipCustom="tooltipCustom"
      :tooltipFormat="tooltipFormat"
      @complete="onComplete"
      @getIndex="getIndex"
      @click="onClick"
    >
    </qiun-data-charts>
  </view>
</template>
<script>
export default {
  name: "HmMixCharts",
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
              name: "曲面",
              type: "area",
              style: "curve",
              data: [70, 50, 85, 130, 64, 88],
            },
            {
              name: "柱1",
              index: 1,
              type: "column",
              data: [40, { value: 30, color: "#f04864" }, 55, 110, 24, 58],
            },
            {
              name: "柱2",
              index: 1,
              type: "column",
              data: [50, 20, 75, 60, 34, 38],
            },
            {
              name: "曲线",
              type: "line",
              style: "curve",
              color: "#1890ff",
              disableLegend: true,
              data: [70, 50, 85, 130, 64, 88],
            },
            {
              name: "折线",
              type: "line",
              color: "#2fc25b",
              data: [120, 140, 105, 170, 95, 160],
            },
            {
              name: "点",
              index: 2,
              type: "point",
              color: "#f04864",
              data: [100, 80, 125, 150, 112, 132],
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
          padding: [15, 15, 0, 15],
          legend: {},
          xAxis: {
            disableGrid: true,
          },
          yAxis: {
            disabled: false,
            disableGrid: false,
            splitNumber: 5,
            gridType: "dash",
            dashLength: 4,
            gridColor: "#CCCCCC",
            padding: 10,
            showTitle: true,
            data: [
              {
                position: "left",
                title: "折线",
              },
              {
                position: "right",
                min: 0,
                max: 200,
                title: "柱状图",
                textAlign: "left",
              },
              {
                position: "right",
                min: 0,
                max: 200,
                title: "点",
                textAlign: "left",
              },
            ],
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
          categoryColumn: "",
          seriesColumns: [],
        };
      },
    },
    /**
     * 是否重绘
     */
    reshow: {
      type: Boolean,
      default: false,
    },
    /**
     * canvas模式
     */
    canvas2d: {
      type: Boolean,
      default: true,
    },
    /**
     * 提示框自定义
     */
    tooltipCustom: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 调用格式化
     */
    tooltipFormat: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      canvasId: `canvas-id-${new Date().getTime()}-${parseInt(
        Math.random() * 1000000
      )}`,
      cWidth: "100%",
      cHeight: "300px",
      cChartData: {},
      cChartDeploy: {},
      cReshow: false,
      chartsBoxStyle: {},
    };
  },
  watch: {
    width(val) {
      this.cWidth = this.getCssUnit(val);
      this.chartsBoxStyle.width = this.cWidth;
    },
    height(val) {
      this.cHeight = this.getCssUnit(val);
      this.chartsBoxStyle.height = this.cHeight;
    },
    chartData: {
      handler: function (val, oldVal) {
        this.cChartData = JSON.parse(JSON.stringify(val));
      },
      deep: true,
    },
    chartDeploy: {
      handler: function (val, oldVal) {
        this.cChartDeploy = JSON.parse(JSON.stringify(val));
      },
      deep: true,
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
      console.log(`watch HmMixCharts reshow: `, val);
      this.cReshow = val;
    },
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cChartData = JSON.parse(JSON.stringify(this.chartData));
    this.cChartDeploy = JSON.parse(JSON.stringify(this.chartDeploy));
    this.cReshow = this.reshow;
    this.chartsBoxStyle = {
      width: this.cWidth,
      height: this.cHeight,
    };

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
        this.cChartData = this.getDataSource(resp);
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
            let newSerie = JSON.parse(JSON.stringify(serie));
            newSerie.data = _.map(
              respDataList,
              this.getDataMap.seriesColumns[index]
            );
            return newSerie;
          }),
        };
      }

      // 返回非直角坐标系的数据
      return {
        series: _.map(this.chartData.series, (serie, index) => {
          let newSerie = JSON.parse(JSON.stringify(serie));
          newSerie.data = _.map(respDataList, (item) => {
            let map = this.getDataMap.seriesColumns[index];
            return {
              name: item[map.name],
              value: item[map.value],
            };
          });
          return newSerie;
        }),
      };
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
