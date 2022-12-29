<template>
  <view class="u-label" @click.stop="onClick">
    <view class="text_head" :style="{ width: cTextWidth}">
      <text class="text_1" :style="{ color: valueColor , fontSize : cValueSize }">{{ this.cValue }}</text>
    </view>
    <u-icon v-if="this.icon" class="icon" :name="icon" :color="valueColor" :size="iconSize"></u-icon>
    <view
      class="select-class"
      :style="{ backgroundColor: cListColor,top :cSeat,left: cLeftSeat,width:cSeatWidth,maxHeight:cMaxHeight}"
      v-if="show">
      <view
        class="list-item"
        :style="{ backgroundColor: this.cValue == item.value ? cMainColor:'', color: this.cValue == item.value ? mainTextColor:'',fontSize : cListSize }"
        @click.stop="onChange(item, index)"
        v-for="(item, index) in cList"
        :key="index">
        <text class="text_list">{{ item.value }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmDropDownBox",
  props: {
    /**
     * 字体宽度
     */
    textWidth: {
      type: String,
      default: "auto"
    },
    /**
     * 选中颜色
     * @type Color
     */
    mainColor: {
      type: String,
      default: "#1CB9C2"
    },
    /**
     * 选择框文字颜色
     * @type Color
     */
    mainTextColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 默认值
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * 默认值字体大小
     */
    valueSize: {
      type: String,
      default: "20px"
    },
    /**
     * 默认值字体颜色
     * @type Color
     */
    valueColor: {
      type: String,
      default: "black"
    },
    /**
     * 列表值字体大小
     */
    listSize: {
      type: String,
      default: "16px"
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "arrow-down"
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "30"
    },
    /**
     * 选择框宽度
     */
    seatWidth: {
      type: String,
      default: "120px"
    },
    /**
     * 最大高度
     */
    maxHeight: {
      type: String,
      default: "140px"
    },
    /**
     * 选项上下位置
     */
    seat: {
      type: String,
      default: "34px"
    },
    /**
     * 选项左右位置
     */
    leftSeat: {
      type: String,
      default: "0rpx"
    },
    /**
     * 列表背景颜色
     * @type Color
     */
    listColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 是否禁用
     */
    disable: {
      type: Boolean,
      default: false
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            id: "1",
            value: "全部设备"
          },
          {
            id: "2",
            value: "客厅"
          },
          {
            id: "3",
            value: "卧室"
          },
          {
            id: "4",
            value: "厨房"
          }
        ];
      }
    }
  },

  watch: {
    textWidth(value) {
      this.cTextWidth = this.getCssUnit(value);
    },
    seatWidth(value) {
      this.cSeatWidth = this.getCssUnit(value);
    },
    maxHeight(value) {
      this.cMaxHeight = this.getCssUnit(value);
    },
    value(value) {
      this.cValue = value;
    },
    valueSize(value) {
      this.cValueSize = this.getCssUnit(value);
    },
    listSize(value) {
      this.cListSize = this.getCssUnit(value);
    },
    seat(value) {
      this.cSeat = this.getCssUnit(value);
    },
    leftSeat(value) {
      this.cLeftSeat = this.getCssUnit(value);
    },
    list(value) {
      this.cList = value;
    },
    listColor(value) {
      this.cListColor = value;
    },
    mainColor(value) {
      this.cMainColor = value;
    }
  },

  mounted() {
    this.cTextWidth = this.getCssUnit(this.textWidth);
    this.cSeatWidth = this.getCssUnit(this.seatWidth);
    this.cMaxHeight = this.getCssUnit(this.maxHeight);
    this.cList = this.list;
    this.cValue = this.value ? this.value : this.cList[0]?this.cList[0].value:"";
    this.cValueSize = this.getCssUnit(this.valueSize);
    this.cListSize = this.getCssUnit(this.listSize);
    this.cSeat = this.getCssUnit(this.seat);
    this.cLeftSeat = this.getCssUnit(this.leftSeat);
    this.cListColor = this.listColor;
    this.cMainColor = this.mainColor;
    // #ifdef H5
    window.addEventListener("click", this.handleClick);
    // #endif
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick() {
      if (!this.disable) {
        this.show = !this.show;
      } else {
      }
    },
    onChange(item, index) {
      this.show = false;
      if (this.cValue === this.list[index].value) {
        this.isColor = false;
      } else {
        this.isColor = true;
      }
      this.cValue = item.value;
      this.$emit("change", item, index);
    },

    handleClick() {
      this.show = false;
    }
  },

  data() {
    return {
      show: false,
      cList: [],
      isColor: false,
      cValue: "",
      cValueSize: "",
      cListSize: "",
      cSeat: "",
      cListColor: "",
      cTextWidth: "",
      cSeatWidth: "",
      cMainColor: "",
      cMaxHeight: "",
      defaultColorIndex: -1
    };
  }
};
</script>

<style lang="less">
.icon {
  margin-left: 3px;
}
.u-label {
  //width: 100px;
  display: inline-flex;
  flex-direction: row;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  //margin-left: 30px;
  padding: 8rpx 12rpx;
}
.text_head {
  display: inline-block;
  //width: 90% !important;与属性cTextWidth冲突
  white-space: normal;
}
.text_1 {
  // margin: 4rpx 12rpx 0;
  //width: 85%; 取消85%
  // width:calc(100% - 24rpx);
  // font: 26rpx/38rpx PingFangSC-regular;
  color: black;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  // word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.select-class {
  position: absolute;
  //top: v-bind(cSeat);
  //left: v-bind(cLeftSeat);
  z-index: 999;
  //width: v-bind(cSeatWidth);
  box-shadow: 0px 0px 12px 0px #dadada;
  //background-color: v-bind(cListColor);
  border-radius: 5px;
  overflow: auto;
}
.list-item {
  height: 35px;
  //font-size: v-bind(cListSize);
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
}
.text_list {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.list-item:first-child {
  border-radius: 5px 5px 0 0;
}
.list-item:last-child {
  border-radius: 0 0 5px 5px;
}
</style>

