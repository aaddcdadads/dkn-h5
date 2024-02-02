<template>
  <textarea
    value="请输入"
    placeholder-style="color:#F76260"
    placeholder="输入框"
    disabled="false"
    maxlength="50"
    focus="false"
    auto-height="false"
    fixed="false"
    cursor-spacing="0"
    cursor="0"
    confirm-type="done"
    confirm-hold="false"
    show-confirm-bar="true"
    selection-start="-1"
    selection-end="-1"
    adjust-position="true"
    disable-default-padding="false"
    hold-keyboard="false"
    @blur="bindTextAreaBlur"
    @linechange="linechange"
  />
</template>

<script>
import HmTextarea from "@/components/built-in/uniapp/HmTextarea.vue";

export default {
  components: { HmTextarea },
  data() {
    return {};
  },
  methods: {
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
    },
    linechange: function (event) {
      console.log((event.detail = { height: 0, heightRpx: 0, lineCount: 0 }));
    },
  },
};
</script>

<style lang="less">
</style>
