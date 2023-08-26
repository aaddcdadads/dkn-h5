<template>
  <view>
    <hm-lsignature class="HmLsignature"
    :penSize="6"
    :minLineWidth="2"
    penColor="red"
    backgroundColor="black"
    :beforeDelay="300"
    :maxHistoryLength="0"
    ></hm-lsignature>
    <hm-lsignature class="HmLsignature"></hm-lsignature>
  </view>
</template>
<script>
import HmLsignature from "/@/components/built-in/uniapp-haomo/HmLsignature.vue"
export default {
  name:"TestHmLsignature",
  components: { HmLsignature },
}
</script>
<style scoped>
.HmLsignature {
  width: 100%;
  height: 300px;
}
</style>