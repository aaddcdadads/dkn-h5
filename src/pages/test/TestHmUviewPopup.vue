<template>
  <!-- <hm-uview-button @click="click">123</hm-uview-button> -->
  <view>
    <hm-uview-popup :show="cShow1" @close="close1"> </hm-uview-popup>
    <hm-uview-popup
      :show="cShow2"
      mode="center"
      :mask="true"
      width="50%"
      height="40%"
      :maskCloseAble="true"
      borderRadius="20"
      :closeable="true"
      closeIcon="close"
      closeIconPos="top-right"
      closeIconColor="#909399"
      closeIconSize="30"
      @open="open"
      @close="close2"
    >
      <Hm-uview-image />
    </hm-uview-popup>
    <u-button @click="cShow1 = true">打开1</u-button>
    <u-button @click="cShow2 = true">打开2</u-button>
  </view>
</template>

<script>
import HmUviewPopup from "@/components/built-in/uview/HmUviewPopup.vue";
import HmUviewImage from "@/components/built-in/uview/HmUviewImage.vue";
export default {
  name: "TestHmUviewPopup",
  components: { HmUviewPopup, HmUviewImage },
  data() {
    return {
      cShow1: false,
      cShow2: false,
    };
  },
  methods: {
    open() {},
    close1() {
      this.cShow1 = false;
    },
    close2() {
      this.cShow2 = false;
    },
  },
};
</script>

<style>
</style>
