<template>
  <view>
    <u-cell-group :border="isBorder">
      <u-cell-item
        v-for="(item, key) in list"
        :key="key"
        :title="item.title"
        :icon="item.icon"
        :label="item.label"
        :value="item.value"
        :arrow="arrow"
        :arrow-direction="arrowDirection"
        :required="item.required"
        :border-bottom="borderBottom"
        :border-top="borderTop"
        :bg-color="bgColor"
        :icon-size="iconSize"
        @click="onClick(item.key)"
      ></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
// import uCellItem from "uview-ui/components/u-cell-item/u-cell-item";
// import uCellGroup from "uview-ui/components/u-cell-group/u-cell-group";
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
            label: "标题下方的描述信息",
            value: "右侧内容",
          },
          {
            key: 2,
            title: "左侧标题",
            icon: "setting-fill",
            required: false,
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
    onClick(e) {
      console.log("e", e);
      this.$emit("e", e);
    },
  },
};
</script>

<style lang="less"></style>
