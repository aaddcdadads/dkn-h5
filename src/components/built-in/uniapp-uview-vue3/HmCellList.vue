<template>
  <view>
    <view class="big">
      <view class="head_bg">
        <view class="head"></view>
      </view>
      <view class="body">
        <view class="left_bg"
          ><view class="left_bgd"
            ><text class="left_title">Title</text
            ><text class="left_descrip"
              >DescripDescripDescripDescrip</text
            ></view
          >
        </view>
        <view class="right_bg"><text class="left_Date">2022-01-25</text></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: "HmCellList",
  props: {
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            key: 1,
            title: "左侧标题",
            icon: "setting-fill",
            required: true,
            borderTop: false,
            borderBottom: true,
            label: "标题下方的描述信息",
            value: "右侧",
          },
          {
            key: 2,
            title: "左侧标题",
            icon: "setting-fill",
            required: false,
            borderTop: false,
            borderBottom: false,
            label: "",
            value: "右侧内容",
          },
        ];
      },
    },
    /**
     * 显示右侧箭头
     */
    arrow: {
      type: Boolean,
      default: false,
    },
    /**
     * 箭头方向
     * @type Enum
     * @default right
     * @options ["right", "up", "down"]
     */
    arrowDirection: {
      type: String,
    },
    /**
     * 是否显示外边框
     */
    isBorder: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示下边框
     */
    borderBottom: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示上边框
     */
    borderTop: {
      type: Boolean,
      default: false,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
    },
    /**
     * 左侧图标大小
     */
    iconSize: {
      type: String,
      default: "17px",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(e, index) {
      console.log("onClick", e);
      this.$emit("onClick", e, index);
    },
  },
};
</script>

<style lang="less">
.big {
  width: 90%;
  height: 80px;
  display: flex;
}
.head_bg {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-image: url("https://img2.baidu.com/it/u=3886895525,3764775842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
  border: 1px solid rgb(235, 235, 235);
}
.body {
  width: calc(100% - 80px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
}
.body:first-child {
  border-top: 1px solid #e2e2e2;
}
.left_bg {
  width: 60%;
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
  width: 35%;
  padding: 14px 5px;
  height: 80px;
}
.left_title {
  font-size: 16px;
  font-weight: 500;
}
.left_descrip {
  font-size: 12px;
  margin-top: 10px !important;
}
.left_date {
  font-size: 12px;
}
</style>
