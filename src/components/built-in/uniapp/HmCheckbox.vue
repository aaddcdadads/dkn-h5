<template>
  <checkbox-group>
    <label>
      <checkbox
        :value="value"
        :checked="checked"
        :color="color"
        :disabled="disabled"
        @change="checkboxChange"
      />
      {{item}}
    </label>
  </checkbox-group>
</template>
<script>
export default {
  name: "HmCheckbox",
  props: {
     /**
     * 数据
     */
    item: {
      type: String,
      default: "默认文字"
    },
    /**
     * 标识
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 默认是否选中
     */
    checked: {
      type: Boolean,
      default: true
    },
    /**
     * 颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#FFCC33"
    }
  },
  data() {
    return {};
  },
  methods: {
    checkboxChange(e) {
      this.$emit("change", e);
    }
  }
};
</script>
<style>
</style>
