<template>
	<view>
		<hm-uview-button
		text="默认"
		@click="visible1 = true"
		></hm-uview-button>
		<br/>
		<hm-uview-button
		text="带属性"
		@click="visible2 = true"
		></hm-uview-button>
		
		<hm-uview-action-sheet
		:visible="visible1"
		@close="visible1 = false"
		></hm-uview-action-sheet>
		<hm-uview-action-sheet
		:tips="tips"
		:visible="visible2"
		:list="list"
		cancelText="cancel"
		:cancelBtn="true"
		:borderRadius="10"
		:maskCloseAble="false"
		:safeAreaInsetBottom="true"
		:zIndex="2000"
		@close="visible2 = false"
		></hm-uview-action-sheet>
	</view>
</template>

<script>
	import HmUviewActionSheet from "@/components/built-in/uniapp-uview-vue3/HmUviewActionSheet.vue";
	import HmUviewButton from "@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

	export default {
		components: { HmUviewActionSheet, HmUviewButton },
		data() {
			return {
				visible1: false,
				visible2: false,
				list: [
          {
            text: 'test1',
          }, {
            text: 'test2'
          }, {
            text: 'test3' 
          }
        ],
				tips: {
					text: '提示',
				}
			};
		},
	}
</script>

<style lang="less">

</style>
