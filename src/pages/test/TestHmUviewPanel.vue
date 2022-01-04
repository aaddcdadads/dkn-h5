<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-panel></hm-uview-panel>
    <hm-uview-panel
      width="90%"
      height="300"
      title="面板title"
      titleSize="16"
      titleHeight="60"
      borderRadius="15"
      textAlign="left"
      padding="10"
      boxShadowHShadow="0"
      boxShadowVShadow="5"
      boxShadowBlur="20"
      boxShadowSpread="5"
      boxShadowColor="#b63131"
      backgroundColor="#fff"
      :hidden="false"
      titleBlockWidth="6"
      titleBlockHeight="20"
      titleBlockColor="#121A2A"
      titleColor="#b63131"
      slotMarginRight="20"
      slotWidth="60"
      slotHeight="50"
    >
      <hm-uview-text
        text="hah哈哈哈哈"
        fontSize="26px"
        color="red"
        textAlign="right"
        padding="10"
        style="margin-left: 0px"
      ></hm-uview-text>
    </hm-uview-panel>
  </view>
</template>

<script>
import HmUviewPanel from "@/components/built-in/uniapp-uview-vue3/HmUviewPanel.vue";
import HmUviewText from "@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

export default {
  name: "TestHmUviewPanel",
  components: { HmUviewPanel, HmUviewText },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
