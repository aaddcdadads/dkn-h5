<template>
  <view class="u-label" @click.stop="onClick">
    <view class="text_head"
      ><text
        class="text_1"
        :style="{ color: isColor ? mainColor : valueColor }"
        >{{ this.cValue }}</text
      ></view
    >
    <u-icon
      class="icon"
      name="arrow-down"
      :color="isColor ? mainColor : valueColor"
      :size="iconSize"
    ></u-icon>
    <view class="select-class" v-if="show">
      <view
        class="list-item"
        @click="onList(item, index)"
        v-for="(item, index) in list"
        :key="index"
        ><text class="text_list">{{ item.value }}</text></view
      >
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
      default: "auto",
    },
    /**
     * 选择框宽度
     */
    seatWidth: {
      type: String,
      default: "120px",
    },
    /**
     * 默认值
     */
    value: {
      type: String,
      default: "全部设备",
    },
    /**
     * 主题色
     * @type Color
     */
    mainColor: {
      type: String,
      default: "#1CB9C2",
    },
    /**
     * 默认值大小
     */
    valueSize: {
      type: String,
      default: "20px",
    },
    /**
     * 默认值颜色
     * @type Color
     */
    valueColor: {
      type: String,
      default: "black",
    },
    /**
     * 列表值大小
     */
    listSize: {
      type: String,
      default: "16px",
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "30",
    },
    /**
     * 选择框位置
     */
    seat: {
      type: String,
      default: "30px",
    },
    /**
     * 列表背景颜色
     * @type Color
     */
    listColor: {
      type: String,
      default: "#ffffff",
    },

    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            value: "全部设备",
          },
          {
            value: "客厅",
          },
          {
            value: "卧室",
          },
          {
            value: "厨房",
          },
        ];
      },
    },
  },

  watch: {
    textWidth(value) {
      this.cTextWidth = this.getCssUnit(value);
    },
    seatWidth(value) {
      this.cSeatWidth = this.getCssUnit(value);
    },
    mainColor(value) {
      this.cMainColor = value;
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
    listColor(value) {
      this.cListColor = value;
    },
  },

  mounted() {
    this.cTextWidth = this.getCssUnit(this.textWidth);
    this.cSeatWidth = this.getCssUnit(this.seatWidth);
    this.cMainColor = this.mainColor;
    this.cValue = this.value;
    this.cValueSize = this.getCssUnit(this.valueSize);
    this.cListSize = this.getCssUnit(this.listSize);
    this.cSeat = this.getCssUnit(this.seat);
    this.cListColor = this.listColor;
    window.addEventListener("click", this.handleClick);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick() {
      this.show = !this.show;
      this.isColor = !this.isColor;
    },
    onList(item, index) {
      console.log("item", item, index);
      this.cValue = item.value;
    },
    handleClick() {
      this.show = false;
    },
  },

  data() {
    return {
      cMainColor: "",
      show: false,
      isColor: false,
      cValue: "",
      cValueSize: "",
      cListSize: "",
      cSeat: "",
      cListColor: "",
      cTextWidth: "",
      cSeatWidth: "",
    };
  },
};
</script>

<style lang="less">
.icon {
  margin-left: 3px;
}
.text_head {
  width: v-bind(cTextWidth);
  display: inline-block;
}
.u-label {
  display: inline-block;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  //border: 1px solid red;
  //margin-left: 30px;
}

.text_1 {
  font-size: v-bind(cValueSize);
  font-weight: 500;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.select-class {
  position: absolute;
  top: v-bind(cSeat);
  z-index: 999;
  width: v-bind(cSeatWidth);
  box-shadow: 0px 0px 12px 0px #dadada;
  background-color: v-bind(cListColor);
  border-radius: 5px;
}
.list-item {
  height: 35px;
  font-size: v-bind(cListSize);
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;

  //   background-color: sandybrown;
}
.text_list {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.list-item:first-child {
  border-radius: 5px 5px 0 0;
  background-color: v-bind(cMainColor);
  color: aliceblue;
}
.list-item:last-child {
  border-radius: 0 0 5px 5px;
}
</style>
