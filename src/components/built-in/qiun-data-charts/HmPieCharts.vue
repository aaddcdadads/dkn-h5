<template>
  <view class="charts-box">
    <qiun-data-charts
      type="pie"
      :rotate="rotate"
      :chartData="chartData"
      :opts="chartDeploy"
    />
  </view>
</template>
<script>
export default {
  name: "HmColumnCharts",
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
     * 横屏模式
     */
    rotate: {
      type: Boolean,
      default: false,
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