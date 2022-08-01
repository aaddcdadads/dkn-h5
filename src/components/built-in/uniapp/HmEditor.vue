<template>
  <view>
    <editor
      :placeholder="placeholder"
      :read-only="readOnly"
      :show-img-size="showImgSize"
      :show-img-toolbar="showImgToolbar"
      :show-img-resize="showImgResize"
      @ready="onready"
      @focus="onfocus"
      @blur="onblur"
      @input="oninput"
      @statuschange="onstatuschange"
    ></editor>
  </view>
</template>
<script>
export default {
  name: "HmEditor",
  props: {
    /**
     * 是否设置只读
     */
    readOnly: {
      type: Boolean,
      default: false
    },
    /**
     * 提示信息
     */
    placeholder: {
      type: String,
      default: "开始输入内容"
    },
    /**
     * 图片大小控件
     */
    showImgSize: {
      type: Boolean,
      default: false
    },
    /**
     * 工具栏控件
     */
    showImgToolbar: {
      type: Boolean,
      default: false
    },
    /**
     * 修改尺寸控件
     */
    showImgResize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onready() {
      this.$emit("ready");
    },
    onfocus() {
      this.$emit("focus");
    },
    onblur() {
      this.$emit("blur");
    },
    oninput() {
      this.$emit("input");
    },
    onstatuschange() {
      this.$emit("statuschange");
    }
  }
};
</script>
<style>

</style>