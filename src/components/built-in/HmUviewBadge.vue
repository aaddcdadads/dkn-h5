<template>
  <view>
    <view class="child">
      <u-badge
        class="badge-class"
        :is-dot="isDot"
        :count="count"
        :offset="offset"
        :type="type"
        :color="color"
        :bgColor="bgColor"
      ></u-badge>
    </view>
  </view>
</template>

<script>
import uBadge from "uview-ui/components/u-badge/u-badge";
export default {
  name: "HmUviewBadge",
  components: {
    uBadge,
  },
  props: {
    /**
     * 类型
     * @type Enum
     * @options ["error","success","primary","warning","info"]
     */
    type: {
      type: String,
      default: "error",
    },
    /**
     * 状态指示
     */
    isDot: {
      type: Boolean,
      default: false,
    },
    /**
     * 数值
     */
    count: {
      type: Number,
      default: 8,
    },
    /**
     * 字体颜色
     * @type Color
     */
    color: {
      type: String,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
    },
    /**
     * 偏移
     */
    offset: {
      type: Array,
      default: function () {
        return [-8, -8];
      },
    },
  },
  watch: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.badge {
}
.child {
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  width: 40px;
  height: 40px;
  background: #f2f3f5;
  border-radius: 4px;
}
</style>
