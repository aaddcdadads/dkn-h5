<template>
  <u-checkbox-group
    @change="checkboxGroupChange"
    :icon-size="iconSize"
    :size="size"
    :shape="shape"
    :active-color="activeColor"
    :label-disabled="labelDisabled"
    :width="width"
    :wrap="wrap"
  >
    <u-checkbox
      v-for="(item, index) in cList"
      :key="index"
      v-model="item.checked"
      :name="index"
      :disabled="disabled || item.disabled"
      @change="checkboxChange"
    >{{ item.name }}</u-checkbox>
  </u-checkbox-group>
</template>

<script>
export default {
  name: "HmUviewCheckbox",
  props: {
    /**
     * 禁用所有复选
     */
    disabled: {
      type: Boolean,
      default: true,
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "20",
    },
    /**
     * 整体大小
     */
    size: {
      type: String,
      default: "34",
    },
    /**
     * 形状
     * @type Enum
     * @options ["circle","square"]
     */
    shape: {
      type: String,
      default: "square",
    },
    /**
     * 选中颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * 禁用文本点击
     */
    labelDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "auto",
    },
    /**
     * 各自占一行
     */
    wrap: {
      type: Boolean,
      default: false,
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            key: 1,
            name: "123",
            checked: false,
            disabled: false,
          },
          {
            key: 2,
            name: "321",
            checked: false,
          },
          {
            key: 3,
            name: "44",
            checked: false,
          },
        ];
      },
    },
  },
  data() {
    return {
      cList: [],
    };
  },
  watch: {
    list: {
      handler: function(value) {
        this.cList = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.list;
  },
  methods: {
    // 选中某个复选框时，由checkbox时触发
    checkboxChange(e) {
      this.$emit("checkboxChange", e);
    },
    checkboxGroupChange(e) {
      this.$emit("checkboxGroupChange", e);
    },
  },
};
</script>

<style lang="less">
</style>
