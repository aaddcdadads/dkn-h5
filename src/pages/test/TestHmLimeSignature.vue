<template>
  <view>
    <hm-lsignature class="HmLimeSignature"
    :penSize="6"
    :minLineWidth="2"
    penColor="red"
    backgroundColor="black"
    :beforeDelay="300"
    :maxHistoryLength="0"
    ></hm-lsignature>
    <hm-lsignature class="HmLimeSignature"></hm-lsignature>
  </view>
</template>
<script>
import HmLsignature from "/@/components/built-in/third-party/HmLimeSignature.vue"
export default {
  name:"TestHmLimeSignature",
  components: { HmLsignature },
}
</script>
<style scoped>
.HmLimeSignature {
  width: 100%;
  height: 300px;
}
</style>