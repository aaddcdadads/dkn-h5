<template>
	<view>
		<hm-color-picker
		
		></hm-color-picker>
		<!-- <hm-color-picker
			:value="value"
			@colorChange="colorChange"
		></hm-color-picker> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '#693939FF'
		};
	},
	methods:{
		colorChange(val){
			console.log('val',val)
			this.value = val
		}
	}
}
</script>

<style lang="less">

</style>
