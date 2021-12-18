<template>
  <view>
    <u-tabbar
      v-model:current="cCurrent"
      :list="cList"
      :show="show"
      :bg-color="bgColor"
      :height="height"
      :icon-size="iconSize"
      :mid-button-size="midButtonSize"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :mid-button="midButton"
      :border-top="borderTop"
      @change="onChange"
    ></u-tabbar>
  </view>
</template>

<script>
// import uTabbar from "uview-ui/components/u-tabbar/u-tabbar";

export default {
  components: {},
  name: "HmUviewTabbar",
  props: {
    /**
     * 当前值
     */
    current: {
      type: Number,
      default: 0,
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            //未激活的图标
            iconPath: "home",
            //激活(选中)的图标
            selectedIconPath: "home-fill",
            text: "首页",
            // 红色角标显示的数字，如果需要移除角标，配置此参数为0即可
            count: 2,
            // 如果配置此值为true，那么角标将会以红点的形式显示
            isDot: true,
            // 如果是凸起按钮项，需配置此值为true
            midButton: false,
            // 如果使用自定义扩展的图标库字体，需配置此值为true
            customIcon: false,
          },
          {
            iconPath: "photo",
            selectedIconPath: "photo-fill",
            text: "放映厅",
            customIcon: false,
          },
          {
            iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
            selectedIconPath:
              "https://cdn.uviewui.com/uview/common/min_button_select.png",
            text: "发布",
            midButton: true,
            customIcon: false,
          },
          {
            iconPath: "play-right",
            selectedIconPath: "play-right-fill",
            text: "直播",
            customIcon: false,
          },
          {
            iconPath: "account",
            selectedIconPath: "account-fill",
            text: "我的",
            count: 23,
            isDot: false,
            customIcon: false,
          },
        ];
      },
    },
    /**
     * 是否显示组件
     */
    show: {
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
     * 高度
     */
    height: {
      type: String,
      default: "50px",
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "20px",
    },
    /**
     * 凸起图标大小
     */
    midButtonSize: {
      type: String,
      default: "45px",
    },
    /**
     * 激活颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#303133",
    },
    /**
     * 未激活颜色
     * @type Color
     */
    inactiveColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 中部凸起按钮
     */
    midButton: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示顶部边框
     */
    borderTop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cCurrent: "",
      cList: [],
    };
  },
  watch: {
    list(val) {
      this.cList = val;
    },
    current(value) {
      this.cCurrent = value;
    },
  },

  mounted() {
    this.cList = this.list;
    this.cCurrent = this.current;
  },
  methods: {
    onChange(e) {
      console.log("change", e);
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less"></style>
