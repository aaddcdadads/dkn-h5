<template>
    <mumu-get-qrcode 
      :continue="continue"
      :exact="exact"
      :size="size"
      :definition="definition"  
      @success='qrcodeSucess' 
      @error="qrcodeError" 
    >  
    </mumu-get-qrcode>
</template>

<script>
import mumuGetQrcode from '@/uni_modules/mumu-getQrcode/components/mumu-getQrcode/mumu-getQrcode.vue'

export default {
  name: "HmQrcode",
  components: {
    mumuGetQrcode
  },
  props: {
    /**
     * 连续监听
     */
    continue: {
			type: Boolean,
			default: false 
		},
    /**
     * 前后摄像头
     * @type Enum
     * @options ["environment","user"]
     */
		exact: {
			type: String,
			default: 'environment' 
		},
    /**
     * 显示区域
     * @type Enum
     * @options ["whole","balf"]
     */
		size: {
			type: String,
			default: 'whole'
		},
    /**
     * 高清
     */
		definition: {
			type: Boolean,
			default: false
		}
  },
  data() {
    return {
    }
  },
  watch: {},

  mounted() {
  },
  beforeDestroy(){
  },
  methods: {
    qrcodeSucess(data) {
      this.$emit("qrcodeSucess", data);
    },
    qrcodeError(err) {
      this.$emit("qrcodeError", err);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
