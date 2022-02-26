<template>
  <view>
    <u-tabbar
      v-model="cValue"
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
      :hide-tab-bar="hideTabBar"
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
     * @model
     */
    value: {
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
            // 点击某一个item时，跳转的路径，此路径必须是pagees.json中tabBar字段中定义的路径
            pagePath: "", // 1.5.6新增，路径需要以"/"开头
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
     *
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

    /**
     *隐藏原生tabbar
     */
    hideTabBar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cValue: -1,
      cList: [],
    };
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
    value(value) {
      this.cValue = value;
    },
  },

  mounted() {
    this.cList = this.list;
    this.cValue = this.value;
  },
  methods: {
    onChange(e) {
      //console.log("change", e);
      this.$emit("update:value", e);
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less"></style>
