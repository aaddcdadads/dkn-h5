<template>
  <view class="calendar" :style="{width: width + 'px',minWidth: 100 + 'px'}">
    <span style="float: left;margin-top:8% ;">{{title}}：</span>
    <u-calendar class="calendar-class" v-model:show="cShow" :mode="mode" @change="calendarChange"></u-calendar>
    <u-input v-model:value="cValue" @click="click" :placeholder="placeholder" />
  </view>
</template>

<script>
export default {
  name: "HmUviewCalendar",
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "选择日期"
    },
    /**
     * 展示日期
     * @v-model
     * @type Date
     */
    value: {
      type: String
    },
    /**
     * 日期类型
     * @type Enum
     * @options ["date","range"]
     */
    mode: {
      type: String,
      default: "date"
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择日期"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300"
		},
		show:{
			type:Boolean,
			default:false
		}
	},
	computed: {
    cValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('changeValue', val)
      }
    }
  },
  data() {
    return {
      cShow: false,
      cDate: "",
      // 				mode: 'date'
    };
  },
  methods: {
		// calendarChange: function(e) {
    //   console.log("e", e);
    //   this.$emit("calendarChange", e);
    //   this.cShow = false;
    // },
    calendarChange: function(e) {
      console.log("e", e);
      if (this.mode == "date") {
        this.cValue = e.result;
      } else if (this.mode == "range") {
        this.cValue = [e.startDate +"-"+e.endDate];
      }
      
			console.log("cDate",this.cValue);
      this.$emit("update:value", this.cValue);
      this.$emit("calendarChange", e);
      this.cShow = false;
    },
    click: function() {
      this.cShow = true;
      this.$emit("click");
    }
  }
};
</script>

<style lang="less">
.calendar-class {
  // border: 1px solid ;
  float: left;
  
}
</style>
