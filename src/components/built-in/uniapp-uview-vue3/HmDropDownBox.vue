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
      v-if="this.icon"
      class="icon"
      :name="icon"
      :color="isColor ? mainColor : valueColor"
      :size="iconSize"
    ></u-icon>
    <view class="select-class" v-if="show">
      <view
        class="list-item"
        :class="{ list_itemColor: this.cValue == item.value }"
        @click.stop="onChange(item, index)"
        v-for="(item, index) in cList"
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
     * 主题色
     * @type Color
     */
    mainColor: {
      type: String,
      default: "#1CB9C2",
    },
    /**
     * 默认值
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 默认值字体大小
     */
    valueSize: {
      type: String,
      default: "20px",
    },
    /**
     * 默认值字体颜色
     * @type Color
     */
    valueColor: {
      type: String,
      default: "black",
    },
    /**
     * 列表值字体大小
     */
    listSize: {
      type: String,
      default: "16px",
    },
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "arrow-down",
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "30",
    },
    /**
     * 选择框宽度
     */
    seatWidth: {
      type: String,
      default: "120px",
    },
    /**
     * 选项上下位置
     */
    seat: {
      type: String,
      default: "30px",
    },
    /**
     * 选项左右位置
     */
    leftSeat: {
      type: String,
      default: "0px",
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
     * 是否禁用
     */
    disable: {
      type: Boolean,
      default: false,
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: "1",
            value: "全部设备",
          },
          {
            id: "2",
            value: "客厅",
          },
          {
            id: "3",
            value: "卧室",
          },
          {
            id: "4",
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
      this.cListColor = value;
    },
  },

  mounted() {
    this.cTextWidth = this.getCssUnit(this.textWidth);
    this.cSeatWidth = this.getCssUnit(this.seatWidth);
    this.cList = this.list;
    this.cValue = this.value ? this.value : this.cList[0].value;
    this.cValueSize = this.getCssUnit(this.valueSize);
    this.cListSize = this.getCssUnit(this.listSize);
    this.cSeat = this.getCssUnit(this.seat);
    this.cLeftSeat = this.getCssUnit(this.leftSeat);
    this.cListColor = this.listColor;
    this.cMainColor = this.mainColor;
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
    },
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
      cListColor:"",
      cListColor: "",
      cTextWidth: "",
      cSeatWidth: "",
      cMainColor: "",
      defaultColorIndex: -1,
    };
  },
};
</script>

<style lang="less">
.icon {
  margin-left: 3px;
}

.u-label {
  //width: 100px;
  display: inline-block;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;

  //margin-left: 30px;
}
.text_head {
  width: v-bind(cTextWidth);
  display: inline-block;
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
  left: v-bind(cLeftSeat);
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
}
.text_list {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.list_itemColor {
  background-color: v-bind(cMainColor);
  color: aliceblue;
}
.list-item:first-child {
  border-radius: 5px 5px 0 0;
}
.list-item:last-child {
  border-radius: 0 0 5px 5px;
}
</style>

