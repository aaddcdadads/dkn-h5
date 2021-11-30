<template>
  <view>
    <u-steps
      :direction="direction"
      :list="list"
      :mode="mode"
      :icon="icon"
      :current="current"
      :un-active-color="unActiveColor"
      :active-color="activeColor"
    ></u-steps>
  </view>
</template>

<script>
export default {
  name: "HmUviewSteps",
  props: {
    /**
     * 方向
     * @type Enum
     * @options ["row","column"]
     */
    direction: {
      type: String,
      default: "row"
    },
    /**
     * 数据内容
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            name: "下单"
          },
          {
            name: "出库"
          },
          {
            name: "运输"
          },
          {
            name: "签收"
          }
        ];
      }
    },
    /**
     * 步骤图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "man"
    },
    /**
     * 当前完成颜色
     * @type Color
     */
    activeColor: {
      type: String
    },
    /**
     * 未激活颜色
     * @type Color
     */
    unActiveColor: {
      type: String
    },
    /**
     * Icon图标加不上去
     */
    /**
     * 模式
     * @type Enum
     * @options ["dot","number"]
     */
    mode: {
      type: String,
      default: "number"
    },
    /**
     * 当前步骤
     */
    current: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
