<template>
  <view>
    <hm-echarts></hm-echarts>
    <!-- <hm-echarts ref="echarts" :height="echarts.chartHeight" :options="echarts.chartOptions"></hm-echarts> -->
  </view>
</template>
<script>
import HmEcharts from "../components/built-in/echarts-for-wx/HmEcharts.vue";
export default {
  components: {
    HmEcharts
  },
  data() {
    return {
      echarts: {
        chartHeight: "300px",
        chartOptions: {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [120, 200, 150, -80, -70, 110, 130],
              type: "bar"
            }
          ]
        }
      }
    };
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss"></style>
