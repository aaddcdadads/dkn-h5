<template>
  <view class="charts-box">
    <qiun-data-charts :type="type" :chartData="chartData" background="none" />
  </view>
</template>
<script>
export default {
  name: "HmBarCharts",
  props: {
    /**
     * 图表类型
     */
    type: {
      type: String,
      default: "column",
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
  },
};
</script>