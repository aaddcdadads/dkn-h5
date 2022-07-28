<template>
  <view>
    <view>{{ title }}</view>
    <switch
      v-model="cChecked"
      @change="onChange"
      :loading="loading"
      :size="size"
      :disabled="disabled"
      :title="title"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
    />
  </view>
</template>
<script>
export default {
  data() {
    return {
      cChecked: false,
    };
  },
  components: {},
  name: "HmSwitch",
  props: {
    /**
     * 加载中
     */
    loading: {
      type: Boolean,
      default: false,
    },

    /**
     * 大小
     */
    size: {
      type: String,
      default: "25px",
    },

    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * 开关标题
     */
    title: {
      type: String,
      default: "开关",
    },

    /**
     * 打开背景色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#2979ff",
    },

    /**
     * 关闭背景色
     * @type Color
     */
    inactiveColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     *默认开关
     */
    checked: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    checked(val) {
      this.cChecked = val;
    },
  },
  mounted() {
    this.cChecked = this.checked;
  },
  methods: {
    // switch打开或者关闭时触发，值为true或者false
    onChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>
<style lang="less">
</style>
