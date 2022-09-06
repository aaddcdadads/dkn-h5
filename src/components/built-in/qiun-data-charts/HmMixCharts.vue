<template>
    <view class="charts-box">
        <qiun-data-charts type="mix" :opts="cChartDeploy" :chartData="cChartData" @complete="onComplete" @getIndex="getIndex"
            @click="onClick">
        </qiun-data-charts>
    </view>
</template>
<script>
export default {
    name: "HmMixCharts",
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
                    categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
                    series: [
                        {
                            name: "曲面",
                            type: "area",
                            style: "curve",
                            data: [70, 50, 85, 130, 64, 88]
                        },
                        {
                            name: "柱1",
                            index: 1,
                            type: "column",
                            data: [40, { "value": 30, "color": "#f04864" }, 55, 110, 24, 58]
                        },
                        {
                            name: "柱2",
                            index: 1,
                            type: "column",
                            data: [50, 20, 75, 60, 34, 38]
                        },
                        {
                            name: "曲线",
                            type: "line",
                            style: "curve",
                            color: "#1890ff",
                            disableLegend: true,
                            data: [70, 50, 85, 130, 64, 88]
                        },
                        {
                            name: "折线",
                            type: "line",
                            color: "#2fc25b",
                            data: [120, 140, 105, 170, 95, 160]
                        },
                        {
                            name: "点",
                            index: 2,
                            type: "point",
                            color: "#f04864",
                            data: [100, 80, 125, 150, 112, 132]
                        }
                    ]
                }
            }
        },
        /**
         * 图表配置
         */
         chartDeploy: {
            type: Object,
            default: function () {
                return {
                    color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
                    padding: [15, 15, 0, 15],
                    legend: {},
                    xAxis: {
                        disableGrid: true
                    },
                    yAxis: {
                        disabled: false,
                        disableGrid: false,
                        splitNumber: 5,
                        gridType: "dash",
                        dashLength: 4,
                        gridColor: "#CCCCCC",
                        padding: 10,
                        showTitle: true,
                        data: [
                            {
                                position: "left",
                                title: "折线"
                            },
                            {
                                position: "right",
                                min: 0,
                                max: 200,
                                title: "柱状图",
                                textAlign: "left"
                            },
                            {
                                position: "right",
                                min: 0,
                                max: 200,
                                title: "点",
                                textAlign: "left"
                            }
                        ]
                    }
                };
            }
        }
    },
    data() {
        return {
            cWidth: "100%",
            cHeight: "300rpx",
            cChartData: {},
            cChartDeploy: {}
        }
    },
    watch: {
        width(val) {
            this.cWidth = this.getCssUnit(val);
        },
        height(val) {
            this.cHeight = this.getCssUnit(val);
        },
        chartData(val) {
            this.cChartData = JSON.parse(JSON.stringify(val));
        },
        chartDeploy(val) {
            this.cChartDeploy = JSON.parse(JSON.stringify(val));
        }
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
}
</script>
<style scoped>
.charts-box {
    width: 100%;
    height: 300px;
}
</style>