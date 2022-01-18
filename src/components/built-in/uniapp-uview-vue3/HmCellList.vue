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
     * 宽度
     */
    wdith: {
      type: String,
      default: "300px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "80px",
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
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
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
            title: "左侧标题",
            descrip: "",
            date: "标题下方的描述信息",
            image: "右侧",
          },
        ];
      },
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
