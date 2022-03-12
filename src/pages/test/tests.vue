<template>
  <view class="inbox flex-col">
    <view class="flex-row topbox">
      <picker
        :title="title"
        :value="cIndex"
        :range="array"
        @change="pickerChange"
        @confirm="pickerConfirm"
        @cancel="pickerCancel"
      >
        <view class="toptext">
          <text>{{ array[cIndex].substring(2, 6) }}</text>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107674901033051.png"
            class="img_arrow"
          />
        </view>
      </picker>
    </view>
    <view class="flex-col">
      <view
        v-for="(item, index) in cTimingList"
        :key="item.index"
        class="listbox flex-row"
        @click="timingClick(item, index)"
        @touchstart="getTouchStartCond(item)"
        @touchend="getTouchEndCond(item)"
      >
        <view class="halfw lefttext">
          <image
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107726929788831.png"
            v-show="condShow"
            class="img_clear"
            @click.stop=""
            @click="condclearLine(index)"
          />
          <text decode="decode">{{ item.name }}</text>
        </view>
        <view class="halfw righttext">
          <text decode="decode">{{ item.action }}</text>
        </view>
      </view>
      <view class="flex-row addbox">
        <text
          decode="decode"
          class="lefttext addtext"
          @click="condaddLine(item)"
          >继续添加</text
        >
      </view>
    </view>
    <view class="hrbox"><hr /></view>
    <view class="flex-col bottom">
      <view class="topbox">
        <text decode="decode" class="toptext">就执行:</text>
      </view>
      <view
        v-for="(cont, seq) in cActionList"
        :key="cont.seq"
        class="listbox flex-row"
        @click="actionClick(cont, seq)"
        @touchstart="getTouchStartAct(cont)"
        @touchend="getTouchEndAct(cont)"
      >
        <view class="lefttext">
          <image
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107726929788831.png"
            v-show="actShow"
            class="img_clear"
            @click.stop=""
            @click="actclearLine(seq)"
          />
          <text decode="decode">{{ cont.imact }}</text>
        </view>
      </view>
      <view class="flex-row addbox">
        <text decode="decode" class="lefttext addtext" @click="actaddLine(cont)"
          >继续添加</text
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "timingpage",
  props: {
    /**
     * 条件默认值
     */
    ind: {
      type: Number,
      default: 1,
    },
    /**
     * 条件删除图标
     */
    condclear: {
      type: Boolean,
      default: false,
    },
    /**
     * 动作删除图标
     */
    actclear: {
      type: Boolean,
      default: false,
    },
    /**
     * 条件数据
     */
    timingList: {
      type: Array,
      default: function () {
        return [
          {
            id: "123",
            name: "定时",
            action: "每天 7:00",
          },
          {
            id: "133",
            name: "灯21",
            action: "打开",
          },
          {
            id: "333",
            name: "灯22",
            action: "关闭",
          },
        ];
      },
    },
    /**
     * 动作数据
     */
    actionList: {
      type: Array,
      default: function () {
        return [
          {
            id: "123",
            imact: "灯全开",
          },
        ];
      },
    },
  },
  watch: {
    ind(val) {
      this.cIndex = val;
    },
    condclear(val){
this.condShow = val;
    },
    actclear(val){
this.actShow = val;
    }
  },
  mounted() {
    this.cIndex = this.ind;
  },
  data() {
    return {
      title: "请选择多条件关系",
      array: ["如果同时满足时", "如果任意满足时"],
      cIndex: 1,
      condShow:false,
      actShow :false,
      timeOutEvent: 0,
      cTimingList: [
        {
          id: "123",
          name: "定时",
          action: "每天 7:00",
        },
        {
          id: "133",
          name: "灯21",
          action: "打开",
        },
        {
          id: "333",
          name: "灯22",
          action: "关闭",
        },
      ],
      cActionList: [
        {
          id: "123",
          imact: "灯全开",
        },
      ],
    };
  },
  methods: {
    pickerChange: function (e) {
      this.$emit("pickerChange", e);
      console.log("picker发送选择改变，携带值为", e.detail.value);
      this.cIndex = e.detail.value;
    },
    pickerConfirm: function (e) {
      this.$emit("pickerConfirm", e);
    },
    pickerCancel: function (e) {
      this.$emit("pickerCancel", e);
    },
    condclearLine(e) {
      this.$emit("condclearLine", e);
      console.log("条件,删除一行");
    },
    actclearLine(e) {
      this.$emit("actclearLine", e);
      console.log("动作,删除一行");
    },
    timingClick: function (item, index) {
      this.$emit("timingClick", item, index);
      console.log("触发条件点击事件", item, index);
    },
    actionClick: function (cont, seq) {
      this.$emit("actionClick", cont, seq);
      console.log("触发动作点击事件", cont, seq);
    },
    condaddLine(e) {
      this.$emit("condaddLine", e);
      console.log("添加一行");
    },
    actaddLine(e) {
      this.$emit("actaddLine", e);
      console.log("添加一行");
    },
    getTouchStartCond: function (item) {
      //条件
      var self = this;
      this.timeOutEvent = setTimeout(function () {
        console.log("进入长按");
        self.condlongtap(item);
      }, 500);
    },
    getTouchStartAct: function (item) {
      //动作
      var self = this;
      this.timeOutEvent = setTimeout(function () {
        console.log("进入长按");
        self.actlongtap(item);
      }, 500);
    },
    getTouchEndCond(item) {
      clearTimeout(this.timeOutEvent);
    },
    getTouchEndAct(item) {
      clearTimeout(this.timeOutEvent);
    },
    condlongtap(e) {
      this.$emit("condlongtap", e);
      this.timeOutEvent = 0;
      console.log("进入长按", e);
    },
    actlongtap(e) {
      this.$emit("actlongtap", e);
      this.timeOutEvent = 0;
      console.log("进入长按", e);
    },
  },
  watch: {
    timingList(value) {
      this.cTimingList = value;
    },
    actionList(value) {
      this.cActionList = value;
    },
  },
  mounted() {
    this.cTimingList = this.timingList;
    this.cActionList = this.actionList;
  },
};
</script>

<style>
page {
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.halfw {
  width: 50%;
}

text {
  font-size: 16px;
  color: #333333;
  line-height: 24px;
  font-weight: 400;
}

.lefttext {
  text-align: left;
}

.righttext {
  text-align: right;
}

.inbox {
  width: 100%;
  min-width: 200px;
  padding: 12px;
  background-color: #ffffff;
}

.listbox {
  margin: 10px 0px;
  min-height: 20px;
}

.topbox {
  margin: 6px 0px;
}

.addbox {
  margin-top: 14px;
}
.hrbox {
  margin: 32px 0px;
  padding: 0px 32px;
}
.hrbox hr {
  border: 0.5px solid #eeeeee;
}
.toptext {
  font-size: 14px;
  color: #666666;
  line-height: 22px;
  letter-spacing: 1px;
  font-weight: 400;
}

.img_arrow {
  width: 6px;
  height: 12px;
  margin: 0px 4px;
  margin-top: 6px;
}

.img_clear {
  width: 12px;
  height: 12px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
}

.addtext {
  font-size: 16px;
  color: #999999;
  line-height: 24px;
  font-weight: 400;
}
</style>
