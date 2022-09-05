<template>
  <view class="charts-box">
    <qiun-data-charts
      type="pie"
      :chartData="cChartData"   
      :opts="cChartDeploy"
      @complete="onComplete"
      @getIndex="getIndex"
      @click="onClick"
    />
  </view>
</template>
<script>
import qiunDataCharts from '@/components/built-in/qiun-data-charts/HmQiunCharts.vue';
export default {
  name: "HmColumnCharts",
  components:{qiunDataCharts},
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
    /**
     * 图表配置
     */
    chartDeploy: {
      type: Object,
      default: function () {
        return {
          //  此方式调用组件chartData需自行按图表类型需求的数据格式拼接
          //  配置参数请用在线生成工具(http://demo.ucharts.cn/)生成
          color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE"],
          extra: {
            pie: {
              activeOpacity: 0.5,
              activeRadius: 10,
              offsetAngle: 0,
              customRadius: 0,
              labelWidth: 15,
              border: true,
              borderWidth: 3,
              borderColor: "#FFFFFF",
              linearType: "none",
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