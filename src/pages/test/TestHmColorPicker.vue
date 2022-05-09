<template>
	<view>
		<!-- <hm-color-picker
		></hm-color-picker> -->
		<br/>
		<view>
			<hm-color-picker
				v-model:value="value"
				:width="300"
				@colorChange="colorChange"
			></hm-color-picker>
		</view>
		{{value}}
	</view>
</template>

<script>
import HmColorPicker from '@/components/built-in/uniapp-uview-vue3/HmColorPicker.vue';
export default {
	components: { 
		HmColorPicker
	},
	data() {
		return {
			value: '#693939',
		};
	},
	methods:{
		colorChange(val){
			this.value = val
		}
	}
}
</script>

<style lang="less">

</style>
