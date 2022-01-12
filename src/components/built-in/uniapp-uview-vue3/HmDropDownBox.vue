<template>
  <view class="u-label" @click.stop="onClick">
    <text class="text_1" :style="{ color: isColor ? mainColor : 'black' }">{{
      this.cValue
    }}</text>
    <u-icon
      class="icon"
      name="arrow-down"
      :color="isColor ? mainColor : 'black'"
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
     * 默认值字体大小
     */
    valueSize: {
      type: String,
      default: "20px",
    },
    /**
     * 列表值字体大小
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
    };
  },
};
</script>

<style lang="less">
.icon {
  margin-left: 3px;
}

.u-label {
  display: inline-block;
  position: relative;
  display: flex;
  align-items: center;
  //border: 1px solid red;
  //margin-left: 30px;
}

.text_1 {
  font-size: v-bind(cValueSize);
  font-weight: 500;
  color: black;
}
.select-class {
  position: absolute;
  top: v-bind(cSeat);
  z-index: 999;
  width: 120px;
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
