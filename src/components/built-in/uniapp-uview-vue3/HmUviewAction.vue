<template>
  <view v-show="cShowBox">
    <u-swipe-action
      v-for="(item, index) in cList"
      :index="index"
      :key="index"
      :show="show || item.show"
      :disabled="disabled || item.disabled"
      :options="cOptions"
      :btn-width="btnWidth"
      :bg-color="bgColor"
      @content-click="contentClick(item, index)"
      @click="onClick"
      @open="open"
      class="u-swipeAction"
    >
      <view class="flex-row page">
        <view class="leftBox">
          <img :src="item.imgSrc || imgSrc" :style="imgStyle" />
        </view>
        <view class="rightBox">
          <text class="text">{{ item.title }}</text>
          <view class="flex-col group">
            <text
              >{{ textOption[0]
              }}<text class="text_black">{{ item.text1 }}</text></text
            >
            <text class="text_2"
              >{{ textOption[1]
              }}<text class="text_black">{{ item.text2 }}</text></text
            >
          </view>
        </view>
      </view>
    </u-swipe-action>
  </view>
</template>

<script>
export default {
  name: "HmExplorationSwipeAction",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100%",
    },
    /**
     * 组件背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 按钮宽度
     */
    btnWidth: {
      type: String,
      default: "160",
    },
    /**
     * 是否禁用按钮
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否打开
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 间距
     */
    spacing: {
      type: String,
      default: "0px",
    },
    /**
     * 按钮配置
     */
    options: {
      type: Array,
      default: function () {
        return [
          {
            style: {
              color: "#333",
            },
            text: "编辑",
          },
          {
            style: {
              color: "#333",
            },
            text: "删除",
          },
        ];
      },
    },
    /**
     * 图片
     */
    imgSrc: {
      type: String,
      default:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.51tietu.net%2Fupload%2Fwww.51tietu.net%2F2016-051116%2F20160511161410sdgptjfdwql488.jpg&refer=http%3A%2F%2Fimg2.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662108849&t=7b10d0a9d3b6f5b1b75554ae03df8922",
    },
    /**
     * 图片样式
     */
    imgStyle: {
      type: Object,
      default: function () {
        return {
          width: "80px",
          height: "80px",
        };
      },
    },
    /**
    * 副标题
    */
    textOption: {
      type: Array,
      default: function () {
        return ["单位:", "时间:"];
      },
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            show: false,
            disabled: false,
            imgSrc: "",
            title: "电气火灾预警监控系统查堪表",
            text1: "深圳市中电数通智慧安全科技有限公司",
            text2: "2022-3-7 10:00:12",
          },
          {
            id: 2,
            title: "电气火灾预警监控系统查堪表",
            text1: "深圳市中电数通智慧安全科技有限公司",
            text2: "2022-3-7 10:00:12",
          },
        ];
      },
    },
    /**
     * 是否显示
     */
    showBox: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    list(value) {
      this.cList = value;
    },
    options(value) {
      this.cOptions = value;
    },
    spacing(value) {
      this.cSpacing = this.getCssUnit(value);
    },
    showBox(value) {
      this.cShowBox = value;
    },
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cList = this.list;
    this.cShowBox = this.showBox;
    this.cOptions = this.options;
    this.cSpacing = this.getCssUnit(this.spacing);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].show == undefined) {
        this.list[i].show = false;
      }
    }
  },
  data() {
    return {
      cWidth: "",
      cList: [],
      cShowBox: true,
      cOptions: [],
      cSpacing: "",
    };
  },
  methods: {
    onClick(index,index1) {
      let id = this.cList[index].id;
      //console.log( index, index1,id );
      this.$emit("btnClick",index,index1,id);
    },
    contentClick(item, index) {
      //console.log("contentClick", item, index);
      this.$emit("contentClick", { item, index });
    },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    open(index) {
      // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
      // 原本为'false'，再次设置为'false'会无效
      this.cList[index].show = true;
      this.cList.map((val, idx) => {
        if (index != idx) this.cList[idx].show = false;
      });
    },
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
.u-swipeAction {
  width: v-bind(cWidth);
  margin-top: v-bind(cSpacing);
  border: 1px solid #e2e2e2;
}
.u-swipeAction:first-child {
  margin-top: 0px !important;
}

.page {
  padding: 12px 12px;
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .text {
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
  }
  .group {
    margin-top: 8px;
    color: rgb(153, 153, 153);
    font-size: 12px;
    line-height: 17px;
    white-space: nowrap;
    .text_black {
      color: rgb(51, 51, 51);
    }
    .text_2 {
      margin-top: 4px;
    }
  }
}
.rightBox {
  padding-left: 12px;
}
.list-item {
  padding-bottom: 18px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  margin-top: 30px;
}

.list-item:last-of-type {
  margin-top: 0px;
}
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
