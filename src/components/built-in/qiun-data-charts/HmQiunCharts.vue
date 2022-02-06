<template>
  <view class="charts-box">
    <qiun-data-charts type="line" :chartData="chartData" background="none" />
  </view>
</template>

<script>
export default {
  name: "HmQiunCharts",
  props: {
    /**
     * 图表类型
     * @type Enum
     * @options ["line", "pie", "ring", "rose", "word", "funnel", "map", "arcbar", "column", "bar", "area", "radar", "gauge", "candle", "mix", "tline", "tarea", "scatter", "bubble"]
     */
    type: {
      type: String,
      default: "line",
    },
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 图表数据
     */
    chartData: {
      type: Object,
      default: function () {
        return {
          "categories": [
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021"
          ],
          "series": [
            {
              "name": "成交量A",
              "data": [
                35,
                8,
                25,
                37,
                4,
                20
              ]
            },
            {
              "name": "成交量B",
              "data": [
                70,
                40,
                65,
                100,
                44,
                68
              ]
            },
            {
              "name": "成交量C",
              "data": [
                100,
                80,
                95,
                150,
                112,
                132
              ]
            }
          ]
        }
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less">
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
