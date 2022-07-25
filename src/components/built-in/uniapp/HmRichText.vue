<template>
  <view>
    <rich-text
      :nodes="nodes"
      :space="space"
      :selectable="selectable"
      :imageMenuPrevent="imageMenuPrevent"
      :preview="preview"
      @itemclick="itemclick"
      :name="name"
      :attrs="attrs"
      :text="text"
    ></rich-text>
  </view>
</template>
<script>
export default {
  data() {
    return {
      nodes: "Array",
      space: "&nbsp",
      selectable: "true",
      imageMenuPrevent: "false",
      preview: "false",
      name: "rich-text",
      attrs: "",
      children: "",
      text: "文本",
    };
  },
  components: {},
  name: "HmRichText",
  props: {
    /**
     * 节点列表
     */
    nodes: {
      type: String,
      default: "Array",
    },
    /**
     * 显示连续空格
     */
    space: {
      type: String,
      default: "&nbsp",
    },
    /**
     * 长按选中
     */
    selectable: {
      type: Boolean,
      default: "true",
    },
    /**
     * 默认菜单
     */
    imageMenuPrevent: {
      type: Boolean,
      default: "false",
    },
    /**
     * 点击预览图片
     */
    preview: {
      type: Boolean,
      default: "false",
    },
    /**
     * 标签名
     */
    name: {
      type: String,
      default: "rich-text",
    },
    /**
     * 属性
     */
    attrs: {
      type: Object,
      default: "",
    },
    /**
     * 子节点列表
     */
    children: {
      type: Array,
      default: "",
    },
    /**
     * 文本
     */
    text: {
      type: String,
      default: "文本",
    },
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang="less">
</style>
