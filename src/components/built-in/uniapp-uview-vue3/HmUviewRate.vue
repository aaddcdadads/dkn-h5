<template>
  <view>
    <u-rate v-model="cValue" :count="count" :disabled="disabled" :size="size" :inactive-color="inactiveColor"
      :active-color="activeColor" :gutter="gutter" :active-icon="activeIcon" :inactive-icon="inactiveIcon"
      @change.stop="onChange" />
  </view>
</template>

<script>
export default {
  components: {},
  name: "HmUviewRate",
  props: {
    /**
     * 当前值
     */
    value: {
      type: Number,
    },
    /**
     * 图标总数
     */
    count: {
      type: Number,
      default: 5,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 图标大小
     */
    size: {
      type: Number,
      default: 32,
    },
    /**
     * 未选中颜色
     * @type Color
     */
    inactiveColor: {
      type: String,
    },
    /**
     * 选中颜色
     * @type Color
     */
    activeColor: {
      type: String,
    },
    /**
     * 图标间距
     */
    gutter: {
      type: Number,
      default: 10,
    },
    /**
     * 选中图标
     * @type Icon
     */
    activeIcon: {
      type: String,
      default: "star-fill",
    },
    /**
     * 未选中图标
     */
    inactiveIcon: {
      type: String,
      default: "star",
    },
  },
  watch: {
    value(val) {
      this.cValue = val;
    }
  },
  mounted() {
    this.cValue = this.value
  },
  data() {
    return {
      cValue: ""
    };
  },
  methods: {
    onChange(value) {
      console.log("当前值：", value);
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="less"></style>
