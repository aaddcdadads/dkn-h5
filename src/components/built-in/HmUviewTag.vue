<template>
  <view>
    <u-tag
      v-for="(item, index) in cList"
      :key="index"
      :type="type"
      :text="item.text"
      :show="item.show"
      :size="size"
      :shape="shape"
      :mode="mode"
      :closeable="closeable"
      :bg-color="bgColor"
      :color="color"
      :border-color="borderColor"
      :close-color="closeColor"
      @close="onClose(item)"
      :style="{ marginRight: marginRight }"
    />
  </view>
</template>

<script>
// import uTag from "uview-ui/components/u-tag/u-tag";

export default {
  components: {},
  name: "HmUviewTag",
  props: {
    /**
     * 类型
     * @type Enum
     * @default primary
     * @options ["primary", "success", "info", "warning", "error"]
     */
    type: {
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
            text: "标签1",
            show: true,
          },
          {
            text: "标签2",
            show: true,
          },
        ];
      },
    },
    /**
     * 标签大小
     * @type Enum
     * @default default
     * @options ["default", "mini"]
     */
    size: {
      type: String,
    },
    /**
     * 标签形状
     * @type Enum
     * @default square
     * @options ["square", "circle", "circleLeft", "circleRight"]
     */
    shape: {
      type: String,
    },
    /**
     * 模式选择
     * @type Enum
     * @default light
     * @options ["light", "dark", "plain"]
     */
    mode: {
      type: String,
    },
    /**
     * 显示关闭图标
     */
    closeable: {
      type: Boolean,
      default: true,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
    },
    /**
     * 标签边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
    },
    /**
     * 关闭按钮颜色
     * @type Color
     */
    closeColor: {
      type: String,
    },
    /**
     * 标签右边距
     */
    marginRight: {
      type: String,
      default: "10px",
    },
  },
  data() {
    return {
      cShow: "",
      cList: [],
    };
  },
  watch: {
    list(val) {
      this.cList = val;
    },
    show(value) {
      this.cShow = value;
    },
  },

  mounted() {
    this.cList = this.list;
    this.cShow = this.show;
  },
  methods: {
    onClose(item) {
      item.show = false;
    },
  },
};
</script>

<style lang="less"></style>
