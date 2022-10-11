<template>
  <rich-text
    :nodes="nodes"
    :space="space"
    :selectable="selectable"
    @itemclick="itemclick"
  ></rich-text>
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
     * 节点列表
     */
    nodes: {
      type: [Array, String],
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
