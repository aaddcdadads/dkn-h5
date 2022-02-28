<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :chartData="chartData"
      :rotate="rotate"
      background="none"
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
            "name": "目标值",
            "data": [
                35,
                36,
                31,
                33,
                13,
                34
            ]
        },
        {
            "name": "完成量",
            "data": [
                18,
                27,
                21,
                24,
                6,
                28
            ]
        }
    ]
        };
      },
    },
  },data() {
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