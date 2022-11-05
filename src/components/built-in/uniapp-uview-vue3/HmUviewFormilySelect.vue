<template>
  <view style="width: 100%;">
    <u-input type="select" :modelValue="value" @click="cShow = true"></u-input>
    <u-select
      v-model="cShow"
      :list="options"
      :mode="mode"
      :cancel-color="cancelColor"
      :confirm-color="confirmColor"
      :default-value="value"
      :mask-Close-Able="maskCloseAble"
      :title="title"
      :confirm-text="confirmText"
      :cancel-Text="cancelText"
      :child-name="childName"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></u-select>
  </view>
</template>

<script>
export default {
  components: {},
  name: "HmUviewFormilySelect",
  props: {
    modelValue: {
      type: String,
    },
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
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },

    /**
     * 是否显示
     * @model
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
    value: {
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
     * children属性名
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
      default: "",
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
  computed: {
    value(){
      let a = "请选择"
      console.log('123', this.options, this.modelValue == undefined, !this.modelValue)
      if(!this.options || this.options.length == 0 || !this.modelValue){
        console.log('222')
        return a;
      }
      let obj = this.options.find(item => {
        return item.value == this.modelValue.toString()
      })
      if(!obj){
        return this.modelValue
      }
      return obj.label;
    }
  },
  data() {
    return {
      cShow: false,
    };
  },
  watch: {
    show(value) {
      this.cShow = value;
    },
    cShow(value) {
      if (value == false) this.onCancel();
    },
  },
  mounted() {
    this.cShow = this.show;
  },
  methods: {
    onConfirm(e) {
      this.$emit("update:show", this.cShow);
      this.$emit("confirm", e);
      this.$emit("update:modelValue", e[0].value.toString());
    },
    onCancel(e) {
      this.$emit("update:show", this.cShow);
      this.$emit("cancel", e);
    },
  },
};
</script>

<style lang="less">
</style>
