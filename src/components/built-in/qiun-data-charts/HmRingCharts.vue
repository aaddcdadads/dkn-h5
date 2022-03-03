<template>
  <view class="charts-box">
    <qiun-data-charts
      type="ring"
      :ontap="ontap"
      :ontouch="ontouch"
      :onmouse="onmouse"
      :chartData="chartData"
      :opts="chartDeploy"
      @complete="onComplete"
      @getIndex="getIndex"
      @click="onClick"
    />
  </view>
</template>
<script>
export default {
  name: "HmColumnCharts",
  props: {
    /**
     * 监听点击事件
     */
    ontap: {
      type: Boolean,
      default: true,
    },
    /**
     * 监听拖动事件
     */
    ontouch: {
      type: Boolean,
      default: false,
    },
    /**
     * 监听滑动事件
     */
    onmouse: {
      type: Boolean,
      default: true,
    },
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

          title: {
            name: "收",
            fontSize: 15,
            color: "#666666",
            offsetX: 0,
            offsetY: 0,
          },
          subtitle: {
            name: "70%",
            fontSize: 25,
            color: "#7cb5ec",
            offsetX: 0,
            offsetY: 0,
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