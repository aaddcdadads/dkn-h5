<template>
  <view>
    <u-swipe-action
      :show="show || item.show"
      :index="index"
      v-for="(item, index) in cList"
      :key="item.id"
      :disabled="disabled || item.disabled"
      :options="cOptions"
      :btn-width="btnWidth"
      :bg-color="bgColor"
      @click="click"
      @open="open"
      class="u-swipeAction"
    >
      <view class="item u-border-bottom">
        <image mode="aspectFill" :src="item.images" v-if="item.images" />
        <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
        <view class="title-wrap">
          <text class="title u-line-2">{{ item.title }}</text>
        </view>
      </view>
    </u-swipe-action>
  </view>
</template>

<script>
export default {
  name: "HmUviewSwipeAction",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "350",
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
      default: "180",
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
      default: "10",
    },
    /**
     * 按钮配置
     */
    options: {
      type: Array,
      default: function () {
        return [
          {
            text: "收藏",
            style: {
              backgroundColor: "#007aff",
            },
          },
          {
            text: "删除",
            style: {
              backgroundColor: "#dd524d",
            },
          },
        ];
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
            title:
              "长安回望绣成堆，山顶千门次第开，一骑红尘妃子笑，无人知是荔枝来",
            images: "https://cdn.uviewui.com/uview/common/logo.png",
            show: false,
          },
          {
            id: 2,
            title:
              "新丰绿树起黄埃，数骑渔阳探使回，霓裳一曲千峰上，舞破中原始下来",
            images: "https://cdn.uviewui.com/uview/common/logo.png",
            show: false,
            disabled: false,
          },
          {
            id: 3,
            title: "登临送目，正故国晚秋，天气初肃。千里澄江似练，翠峰如簇",
            images: "https://cdn.uviewui.com/uview/common/logo.png",

            disabled: false,
          },
        ];
      },
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
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cList = this.list;
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
      cOptions: [],
      cSpacing: "",
    };
  },
  methods: {
    click(index, index1) {
      //console.log("haha", index, index1);
      this.$emit("onClick", index, index1);
    },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    open(index) {
      // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
      // 原本为'false'，再次设置为'false'会无效
      this.cList[index].show = true;
      this.cList.map((val, idx) => {
        if (index != idx) this.cList[idx].show = false;
      });
      //console.log("open", index);
      this.$emit("onOpen", index);
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
.u-swipeAction:first-child {
  margin-top: 0px !important;
}
.u-swipeAction {
  width: v-bind(cWidth);
  margin-top: v-bind(cSpacing);
}
.item {
  display: flex;
  padding: 20rpx;
}

image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  margin-right: 20rpx;
  border-radius: 12rpx;
}

.title {
  text-align: left;
  font-size: 28rpx;
  color: #0d110d;
  margin-top: 20rpx;
}
</style>
