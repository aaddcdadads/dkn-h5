<template>
  <view class="charts-box">
    <qiun-data-charts 
    :type="type" 
    :chartData="chartData" 
    background="none" />
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
      default: "column",
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '300rpx'
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
    return {
      cWidth: "100%",
			cHeight: "300rpx",
    };
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
		this.cHeight = this.$getCssUnit(this.height);
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
  width: v-bind(cWidth);
	height: v-bind(cHeight);
}
</style>
