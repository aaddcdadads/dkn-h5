<template>
  <view class="charts-box">
    <qiun-data-charts :type="type" :chartData="chartData" background="none" />
  </view>
</template>
<script>
export default {
  name: "HmCharts",
  props: {
    /**
     * 图表类型
     */
    type: {
      type: String,
      default: "pie",
    },
    /**
     * 图表数据
     */
    chartData: {
      type: Object,
      default: function () {
        return {
          series: [
            {
              data: [
                {
                  name: "一班",
                  value: 50,
                },
                {
                  name: "二班",
                  value: 30,
                },
                {
                  name: "三班",
                  value: 20,
                },
                {
                  name: "四班",
                  value: 18,
                },
                {
                  name: "五班",
                  value: 8,
                },
              ],
            },
          ],
        };
      },
    },
  },
};
</script>