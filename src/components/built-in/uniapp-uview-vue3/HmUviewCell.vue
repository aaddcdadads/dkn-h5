<template>
  <view>
    <u-cell-group :border="isBorder">
      <u-cell-item
        v-for="(item, index) in cList"
        :key="index"
        :title="item.title"
        :title-style="cTitleStyle"
        :icon="item.icon"
        :icon-style="iconStyle"
        :value-style="valueStyle"
        :label-style="labelStyle"
        :label="item.label"
        :index="index"
        :value="item.value"
        :arrow="arrow"
        :hover-class="hoverClass"
        :arrow-direction="arrowDirection"
        :required="item.required"
        :border-bottom="borderBottom || item.borderBottom"
        :border-top="borderTop || item.borderTop"
        :bg-color="bgColor"
        :icon-size="iconSize"
        @click="onClick"
      ></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  components: {},
  name: "HmUviewCell",
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
     * 图标样式
     */
    iconStyle:{
      type: Object,
      default: function () {
          return{
          }
      }
    },
    /**
     * 标题样式
     */
    titleStyle:{
      type: Object,
      default: function () {
          return{
          }
      }
    },
    /**
     * 标题样式
     */
    valueStyle:{
      type: Object,
      default: function () {
          return{
          }
      }
    },
    /**
     * 描述样式
     */
    labelStyle:{
      type: Object,
      default: function () {
          return{
          }
      }
    },
    /**
     * 点击反馈
     */
    hoverClass: {
      type: String,
      default: "none",
    },
    /**
     * 外边框
     */
    isBorder: {
      type: Boolean,
      default: false,
    },
    /**
     * 下边框
     */
    borderBottom: {
      type: Boolean,
      default: true,
    },
    /**
     * 上边框
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
    return {
      cList: [],
      cTitleStyle:{}
    };
  },
  watch: {
    list: {
      handler: function (value) {
        this.cList = value;
      },
      deep: true,
    },
    titleStyle: {
      handler: function (value) {
        this.cTitleStyle = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.list;
    this.cTitleStyle = this.titleStyle;
  },
  methods: {
    onClick(index) {
      //console.log("click", index);
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style lang="less">
// .u-cell-box /deep/ .u-border-bottom:after {
//   border-bottom: none !important;
// }
</style>
