<template>
  <view>
    <hm-uview-bg-card
    >
      <hm-uview-button
      size="medium"
      type="success"
      :plain="false"
      :disabled="false"
      shape="circle"
      text="微信按钮"
      ></hm-uview-button>
      <hm-uview-button
      ></hm-uview-button>
    </hm-uview-bg-card>
    <hm-uview-bg-card
      width="300"
      height="300"
      borderRadius="10"
      borderStyle="solid"
      borderWidth="3"
      borderColor="red"
      textAlign="right"
      padding="10"
      boxShadowHShadow="5"
      boxShadowVShadow="5"
      boxShadowBlur="5"
      boxShadowSpread="5"
      boxShadowColor="red"
      backgroundColor="blue"
      backgroundImage="http://jira.haomo-tech.com/s/-6vilev/805001/6411e0087192541a09d88223fb51a6a0/_/images/jira-core.png"
      :hidden="false"
    >
      <hm-uview-button
      size="medium"
      type="success"
      :plain="false"
      :disabled="false"
      shape="circle"
      text="微信按钮"
      ></hm-uview-button>
      <hm-uview-button
      ></hm-uview-button>
    </hm-uview-bg-card>
  </view>
</template>

<script>
import HmUviewBgCard from "@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewButton from "@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  components: { HmUviewBgCard, HmUviewButton },
  data() {
    return {
    };
  },
};
</script>

<style lang="less"></style>
