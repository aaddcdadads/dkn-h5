<template>
  <view>
    <view>{{ title }}</view>
    <u-switch
      v-model="cChecked"
      @change.stop="onChange"
      :loading="loading"
      :size="size"
      :disabled="disabled"
      :title="title"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
    ></u-switch>
  </view>
</template>

<script>
// import uSwitch from "uview-ui/components/u-switch/u-switch";
export default {
  components: {},
  name: "HmUviewSwitch",

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
  data() {
    return {
      cChecked: false,
    };
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
    // 即使不监听此事件，this.checked此时也会相应的变成true或者false
    onChange(e) {
      //console.log("onChange.checked", this.checked);
      this.$emit("change", e);
    },
  },
};
</script >

<style lang="less">
</style>
