<template>
  <view>
    <view class="charts-box">
      <qiun-data-charts
        type="column"
        :chartData="chartData"
        background="none"
      />
    </view>
  </view>
</template>

<script>
import uCharts from "@/qiun-data-charts/js_sdk/u-charts/u-charts.js";
import QiunDataCharts from "@/qiun-data-charts/components/u-charts/u-qiun-data-charts/qiun-data-charts.vue";
export default {
  name: "tablede",
  components: {
    uCharts,
    QiunDataCharts,
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
            },
            {
              name: "完成量",
              data: [18, 27, 21, 24, 6, 28],
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      chartData: {},
    };
  },
  // watch: {
  // 	option(value) {
  // 		this.chartData = value;
  // 	},
  // },
  // mounted() {
  // 	this.chartData = this.option;
  // },
};
</script>
<style scoped>
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
