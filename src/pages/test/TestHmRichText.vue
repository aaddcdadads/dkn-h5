<template>
  <rich-text
    space="&nbsp"
    selectable="true"
    image-menu-prevent="false"
    preview="false"
    @itemclick="itemclick"
    type="text"
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
