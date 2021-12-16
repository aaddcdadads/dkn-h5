<template>
  <view>
    <Hm-uview-image />
    <Hm-uview-image
      src="https://scpic.chinaz.net/files/pic/pic9/202101/apic30599.jpg"
      shape="circle"
      width="200px"
      height="200px"
      :borderRedius="20"
      loadingIcon="photo"
    />
  </view>
</template>

<script>
import HmUviewImage from "@/components/built-in/uview/HmUviewImage.vue";

export default {
  components: { HmUviewImage },
};
</script>

<style>
</style>
