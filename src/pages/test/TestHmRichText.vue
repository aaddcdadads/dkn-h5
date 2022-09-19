<template>
  <rich-text
    :nodes="nodes"
    space="&nbsp"
    selectable="true"
    @itemclick="itemclick"
  ></rich-text>
</template>

<script>
import HmRichText from "@/components/built-in/uniapp/HmRichText.vue";

export default {
  components: { HmRichText },
  data() {
    return {
      nodes: [
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
      ],
    };
  },
  methods: {
    itemclick() {
      this.$emit("itemclick");
    },
  },
};
</script>

<style lang="less">
</style>
