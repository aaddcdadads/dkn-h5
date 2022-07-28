<template>
  <view>
    <rich-text
      :nodes="nodes"
      :space="space"
      :selectable="selectable"
      :image-menu-prevent="imageMenuPrevent"
      :preview="preview"
      @itemclick="itemclick"
      :type="type"
    ></rich-text>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmRichText",
  props: {
    /**
     * 类型
     * @type Enum
     * @options ["node","text"]
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * 节点列表
     */
    nodes: {
      type: Array,
      default: function () {
        return [
          {
            name: "div",
            attrs: {
              class: "div-class",
              style: "line-height: 60px; color: red; text-align:center;",
            },
            children: [
              {
                type: "text",
                text: "Hello&nbsp;uni-app!",
              },
            ],
          },
        ];
      },
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
      default: true,
    },
    /**
     * 默认菜单
     */
    imageMenuPrevent: {
      type: Boolean,
      default: false,
    },
    /**
     * 点击预览图片
     */
    preview: {
      type: Boolean,
      default: false,
    },

    /**
     * 子节点列表
     */
    children: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  mounted() {},
  methods: {
    itemclick() {
      this.$emit("itemclick");
    },
  },
  watch: {},
};
</script>
<style lang="less">
</style>
