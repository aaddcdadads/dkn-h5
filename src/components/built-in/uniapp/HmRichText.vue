<template>
  <rich-text
    :nodes="cNodes"
    :space="space"
    :selectable="selectable"
    @itemclick="itemclick"
  ></rich-text>
</template>
<script>
import htmlParser from "@/components/built-in/third-party/HmRichText/html-parser.js";

export default {
  data() {
    return {
      cNodes:''
    };
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
  mounted() {
    this.cNodes =this.nodes instanceof  Array ? this.nodes : htmlParser(this.nodes);
  },
  methods: {
    itemclick() {
      this.$emit("itemclick");
    }
  },
  watch: {
    nodes(value){
      this.cNodes = value instanceof  Array ? value : htmlParser(this.nodes);
    }
  },
};
</script>
<style lang="less">
</style>
