<template>
  <view>
    <view
      class="big"
      v-for="(item, index) in list"
      :key="item.id"
      @click="onClick(item, index)"
    >
      <view class="head_bg">
        <view
          class="head"
          :style="`background-image: url(${item.image})`"
        ></view>
      </view>
      <view
        class="body"
        :style="`border-bottom:${isBorder ? '1px solid #e2e2e2' : 'none'}`"
      >
        <view class="left_bg"
          ><view class="left_bgd"
            ><text class="left_title">{{ item.title }}</text
            ><text class="left_descrip">{{ item.descrip }}</text></view
          >
        </view>
        <view class="right_bg"
          ><text class="left_date">{{ item.date }}</text></view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmCellList",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "350px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "80px",
    },
    /**
     * 下边框
     */
    isBorder: {
      type: Boolean,
      default: true,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 时间位置
     */
    dateSize: {
      type: String,
      default: "16px",
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
            title: "title 1",
            descrip: "在吗？",
            date: "2012-08-21",
            image:
              "https://img2.baidu.com/it/u=3886895525,3764775842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          },
          {
            id: "2",
            title: "title  2",
            descrip: "干嘛呢？",
            date: "2012-08-21",
            image:
              "https://img0.baidu.com/it/u=1056811702,4111096278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          },

          {
            id: "3",
            title: "title  3",
            descrip: "吃了吗？",
            date: "2012-08-21",
            image:
              "https://img0.baidu.com/it/u=4117713405,2961605581&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
          },
        ];
      },
    },
  },
  data() {
    return {
      cWidth: "",
      cHeight: "",
      cBgColor: "",
      cDateSize: "",
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    bgColor(value) {
      this.cBgColor = value;
    },
    dateSize(value) {
      this.cDateSize = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cBgColor = this.bgColor;
    this.cDateSize = this.getCssUnit(this.dateSize);
  },
  methods: {
    onClick(item, index) {
      console.log("onClick", item, index);
      this.$emit("onClick", item, index);
    },
    //单位转换
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style lang="less">
.big {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  display: flex;
  background-color: v-bind(cBgColor);
}
.head_bg {
  width: v-bind(cHeight);
  height: v-bind(cHeight);
  display: flex;
  align-items: center;
  justify-content: center;
}
.head {
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
  border: 1px solid rgb(235, 235, 235);
}
.body {
  width: calc(100% - v-bind(cHeight));
  height: v-bind(cHeight);
  display: flex;
  justify-content: space-between;
}
.body:first-child {
  border-top: 1px solid #e2e2e2;
}
.left_bg {
  width: calc(95% - v-bind(cHeight));
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
}
.left_bgd {
  display: flex;
  flex-direction: column;
}
.right_bg {
  width: 70px;
  min-width: 70px;
  padding-top: v-bind(cDateSize);
  height: v-bind(cHeight);
}
.left_title {
  font-size: 16px;
  font-weight: 500;
}
.left_descrip {
  font-size: 12px;
  color: #888888;
  margin-top: 8px !important;
}
.left_date {
  color: #888888;
  font-size: 12px;
}
</style>
