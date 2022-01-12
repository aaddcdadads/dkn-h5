<template>
  <view>
    <view class="charts-box">
      <qiun-data-charts
        type="column"
        canvasId="test"
        :chartData="cChartData"
        background="none"
      />
    </view>
  </view>
</template>

<script>

export default {
  name: "TestQiunDataCharts",
  components: {
  },
  props: {
    /**
     * 数据项
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
            }
          ],
        };
      },
    },
  },
  data() {
    return {
      cChartData: {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
          series: [
            {
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34],
            }
          ],
        },
    };
  },
  watch: {
    chartData: {
			handler: function(value, oldValue) {
        this.cChartData = value;
			},
			deep: true,
		},
  },
  mounted() {
  	this.cChartData = this.chartData;
  },
};
</script>
<style scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
