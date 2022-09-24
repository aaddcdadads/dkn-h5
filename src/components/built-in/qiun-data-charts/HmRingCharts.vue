<template>
  <view :style="[chartsBoxStyle]" class="charts-box">
    <qiun-data-charts
      :reshow="cReshow"
      type="ring"
      :chartData="cChartData"   
      :opts="cChartDeploy"
      @complete="onComplete"
      @getIndex="getIndex"
      @click="onClick"
    />
  </view>
</template>
<script>
export default {
  name: "HmRingCharts",
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
      default: "300px",
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
                  name: "1班",
                  value: 50,
                  "labelText": "四班:18人"
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
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 数据映射
     * @desc 
     *  直角坐标系：categoryColumn不为空(如 'category')，seriesColumns形如['num', 'money']，其中num/money为返回数组的列
     *  非直角坐标系：categoryColumn为空，seriesColumns形如：[{'name': 'year', 'value': 'num'}]，其中year/num为返回数组的列
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          categoryColumn: '',
          seriesColumns: []
        }
      }
    },
    /**
     * 是否重绘
     */
    reshow: {
      type: Boolean,
      default: false
    }
  },
  watch:{
    width(val){
      this.cWidth = this.getCssUnit(val);
      this.chartsBoxStyle.width = this.cWidth;
    },
    height(val){
      this.cHeight = this.getCssUnit(val);
      this.chartsBoxStyle.height = this.cHeight;
    },
    chartData: {
      handler: function(val, oldVal) {
        this.cChartData = JSON.parse(JSON.stringify(val));
      },
      deep: true
    },
    chartDeploy: {
      handler: function(val, oldVal) {
        this.cChartDeploy = JSON.parse(JSON.stringify(val));
      },
      deep: true
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        this.getData(this.url, value);
      },
      deep: true,
    },
    reshow(val) {
      console.log(`watch HmRingCharts reshow: `, val);
      this.cReshow = val;
    }
  },
  data() {
    return {
      cWidth: "100%",
      cHeight: "300px",
      cChartData:{},
      cChartDeploy:{},
      cReshow: false,
      chartsBoxStyle: {}
    };
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cChartData = JSON.parse(JSON.stringify(this.chartData));
    this.cChartDeploy = JSON.parse(JSON.stringify(this.chartDeploy));
    this.cReshow = this.reshow;
    this.chartsBoxStyle = {
      width: this.cWidth,
      height: this.cHeight
    }

    // 调整接口返回数据的赋值
    this.getData();
  },
  methods: {
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      this.cReshow = false;
      getAction(url, params).then((resp) => {
        this.cChartData = this.getDataSource(resp)
        this.$refs.chart.setOption(this.cOption, {
          notMerge: true,
          lazyUpdate: true,
          silent: false,
        });
        this.cReshow = true;
      });
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataSource(resp) {
      let respDataList = [];
      if (resp.result) {
        respDataList = resp.result.records || resp.result;
      }

      if (resp.data) {
        respDataList = resp.data;
      }

      // 根据getDataMap，将respDataList映射为cChartData的数据
      if (this.getDataMap.categoryColumn) {
        // 直角坐标系的数据
        return {
          categories: _.map(respDataList, this.getDataMap.categoryColumn),
          series: _.map(this.chartData.series, (serie, index) => {
            let newSerie =  JSON.parse(JSON.stringify(serie))
            newSerie.data =  _.map(respDataList, this.getDataMap.seriesColumns[index])
            return newSerie;
          })
        }
      }

      // 返回非直角坐标系的数据
      return {
        series: _.map(this.chartData.series, (serie, index) => {
          let newSerie =  JSON.parse(JSON.stringify(serie))
          newSerie.data =  _.map(respDataList, item => {
            let map = this.getDataMap.seriesColumns[index];
            return {
              name: item[map.name],
              value: item[map.value]
            }
          });
          return newSerie;
        })
      }
    },
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

<style lang="less" scoped>
  .charts-box {
    width: v-bind(cWidth);
    height: v-bind(cHeight);
  }
</style>