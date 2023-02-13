<template>
  <view class="HmCalendarPro">
    <uni-calendar
      class="uni_calendar"
      :lunar="lunar"
      :date="date"
      :startDate="startDate"
      :endDate="endDate"
      :range="range"
      insert
      :selected="selected"
      :showMonth="showMonth"
      @change="change"
      @monthSwitch="monthSwitch"
      @confirm="confirm"
      @open="open"
      @close="close"
    />
    <view class="calendar flex-col">
      <slot name="titleSlot"></slot>
      <view
        class="calendar__item flex-col"
        v-for="(item, index) in cList"
        :key="index"
        @click="itemClick(item, index)"
      >
        <slot name="contentSlot" :item="item">
          <view class="calendar__item_schedule flex-row">
            <text decode>{{ item.title }}</text>
            <text decode>{{ item.subTitle }}</text>
          </view>
          <view class="calendar__item_scheduleInfo flex-row">
            <text decode>{{ item.time }}</text>
            <text decode>{{ item.thing }}</text>
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>
<script>
import {
  getAction,
  postAction,
} from "/@/request/http";
export default {
  name: "HmCalendarPro",
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            title: "第1节课",
            subTitle: "语文",
            time: "7:00-8:00",
            thing: "一年级(1)班",
          },
        ];
      },
    },
    /**
     * 请求方法
     * @type Enum
     * @options ["get", "post"]
     */
     httpMethod: {
      type: String,
      default: "get"
    },
    /**
     * GET URL
     */
     url: {
      type: String,
      default: "/api/web/viewTeacherClassScheduleNode/list",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function() {
        return {
          teacherId:"01066144494024021027"
        };
      },
    },
    /**
     * 远程数据映射
     */
    getDataMap: {
      type: Object,
      default: function() {
        return {
          id: "id",
          title: "title",
          subTitle: "subTitle",
          time: "time",
          thing: "thing"   
        };
      },
    },
    /**
     * 默认当前时间
     */
    date: {
      type: String,
      default:""
    },
    /**
     * 日期范围选择
     */
    range: {
      type: Boolean,
      default: false,
    },
    /**
     * 开始日期
     */
    startDate: {
      type: String,
      default: "",
    },
    /**
     * 结束日期
     */
    endDate: {
      type: String,
      default: "",
    },
    /**
     * 显示农历
     */
    lunar: {
      type: Boolean,
      default: true,
    },
    /**
     * 标记
     */
    selected: {
      type: Array,
      default: function () {
        return [
          {
            date: "2022-12-08",
            info: "休息",
          },
          {
            date: "2022-12-09",
            info: "签到",
            data: {
              custom: "自定义信息",
              name: "自定义消息头",
            },
          },
        ];
      },
    },
    /**
     * 月份数字背景
     */
    showMonth: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function(value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    list: {
      handler: function(value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true,
    },
  },
  data() {
    return {
      cList: [],
      resultData : []
    };
  },
  mounted() {
    console.log("默认时间",this.date);
    this.cList = this.mapData(this.list);
    this.getData();  
  },
  methods: {
    open() {
      this.$emit("open", e);
      console.log("open", e);
    },
    close() {
      this.$emit("close", e);
      // console.log("close", e);
    },
    change(e) {
      this.$emit("change", e);
      this.cList = this.getWeekData(e.lunar.nWeek,this.resultData)
      console.log("change", e);
    },
    monthSwitch(e) {
      this.$emit("monthSwitch", e);
      // console.log("monthSwitch", e);
    },
    confirm(e) {
      this.$emit("confirm", e);
      // console.log("confirm", e);
    },
    itemClick(e, index) {
      this.$emit("itemClick", e, index);
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      let request = getAction;
      if (this.httpMethod && this.httpMethod.toLowerCase() == 'post') {
        request = postAction;
      }
      request(url, params).then((resp) => {
        // console.log("res", resp);
        //查询数据库的数组
        self.cList = [];
        let data = [];
        if (resp.data) {
          data = resp.data.list || resp.data;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        self.resultData = self.mapData(data);
        //根据星期处理数据
        self.cList = self.getWeekData(self.getWeek(self.date),self.resultData)
        console.log("cList", self.cList);
      });
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.getDataMap || Object.keys(this.getDataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.getDataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.getDataMap[key]];
        });
      });
      return data;
    },
    //计算默认时间是星期几
    getWeek(dateString){
      let date;
      if (!dateString) {
          date = new Date();
      } else {
          date = new Date(dateString);
      }
      return date.getDay();
    },
    //根据星期转换数据
    // {
    //   id: 1,
    //   title: "第1节课",
    //   subTitle: "语文",
    //   time: "7:00-8:00",
    //   thing: "一年级(1)班",
    // },
    getWeekData(week,data){
      if(!week || !data || data.length == 0){
        return []
      }
      let weekStrs = ["sunDay","monDay","tuesDay","wednesDay","thursDay","friDay","saturDay"]
      let weekStr = weekStrs[week]
      let weekData = [];
      // console.log("weekStr",weekStr);
      data.forEach(item=>{
        if(!item[weekStr]){
          return
        }
        let obj = {}
        if(item.nodeTime){
          obj.title = item.nodeTime.slice(0,item.nodeTime.indexOf("\n")>0 ? item.nodeTime.indexOf("\n") : 0).trim()
        }
        if(item.nodeTime){
          obj.time = item.nodeTime.slice(item.nodeTime.indexOf("\n")>0 ? item.nodeTime.indexOf("\n")+1 : item.nodeTime.length).trim()
        }
        if(item[weekStr]){
          obj.thing = item[weekStr].slice(0,item[weekStr].indexOf("|")>0 ? item[weekStr].indexOf("|") : 0).trim()
        }
        if(item[weekStr]){
          obj.subTitle = item[weekStr].slice(item[weekStr].indexOf("|")>0 ? item[weekStr].indexOf("|")+1 : item[weekStr].length).trim()
        }
        weekData.push(obj)
      })
      return weekData;
    }
  },
  
};
</script>
<style lang="less" scoped>
.HmCalendarPro {
  text,
  view {
    font-family: PingFangSC-Medium;
    text-align: left;
    letter-spacing: 0;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .calendar {
    &__item {
      width: 100%;
      background: #fff;
      margin-top: 20rpx;
      padding: 24rpx 30rpx 32rpx;
      &_schedule {
        font-size: 32rpx;
        font-weight: 550;
        color: #333;
        > text:last-child {
          margin-left: auto;
          margin-right: 0rpx;
        }
      }
      &_scheduleInfo {
        font-size: 32rpx;
        font-weight: 400;
        color: #999;
        margin-top: 24rpx;
        > text:last-child {
          margin-left: auto;
          margin-right: 0rpx;
        }
      }
    }
  }
}
</style>