<template>
  <view>
    <u-select
      v-model="cShow"
      :list="list"
      :mode="mode"
      :cancel-color="cancelColor"
      :confirm-color="confirmColor"
      :default-value="defaultValue"
      :mask-Close-Able="maskCloseAble"
      :title="title"
      :confirm-text="confirmText"
      :cancel-Text="cancelText"
      :child-name="childName"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></u-select>
    <!-- <u-button @click="cShow = true">打开</u-button> -->
  </view>
</template>

<script>
export default {
  components: {},
  name: "HmUviewSelect",

  props: {
    /**
     * 模式选择
     * @type Enum
     * @options ["single-column", "mutil-column", "mutil-column-auto"]
     */
    mode: {
      type: String,
      default: "single-column",
    },
    /**
     * 列数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            value: "1",
            label: "江",
          },
          {
            value: "2",
            label: "湖",
          },
        ];
      },
    },

    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 取消按钮颜色
     * @type Color
     */
    cancelColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 确定按钮颜色
     * @type Color
     */
    confirmColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * 默认选中下标
     */
    defaultValue: {
      type: Array,
      default: [0],
    },
    /**
     * 点击遮罩关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: true,
    },

    /**
     * 自定义children属性名
     */
    childName: {
      type: String,
      default: "children",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题",
    },
    /**
     * 确认按钮文字
     */
    confirmText: {
      type: String,
      default: "确认",
    },
    /**
     * 取消按钮文字
     */
    cancelText: {
      type: String,
      default: "取消",
    },
  },
  computed: {},
  data() {
    return {
      cShow: false,
    };
  },
  watch: {
    show(value) {
      this.cShow = value;
    },
  },
  mounted() {
    this.cShow = this.show;
  },
  methods: {
    onConfirm(e) {
      //console.log(e);
      this.$emit("confirm", e);
    },
    onCancel(e) {
      //console.log(e);
      this.$emit("cancel", e);
    },
  },
};
</script>

<style lang="less">
</style>
