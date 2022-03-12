<template>
	<view class="inbox flex-col">
		<view v-for="(item,index) in shareList" class="listbox flex-col" @click="onClick(item,index)" :key="index">
			<view class="flex-row">				
					<text decode="decode" class="boldtext flex3">{{item.sharetype}}分享-给{{item.sharer}}</text>		
							<view v-if="sharestate">
					<text decode="decode" v-if="item.sharestate == 1" class="btntxt btntext1">分享成功</text>
					<text decode="decode" v-if="item.sharestate == 0" class="btntxt btntext2">分享失败</text>	
								</view>
			</view>
			<view class="flex-row">
				<view class="flex-col flex3">
					<text decode="decode" class="putext">分享时间:{{item.sharetime}}</text>
					<text decode="decode" class="putext">截止时间:{{item.endtime}}</text>
				</view>
				<view class="flex-justify flex1" v-if="stateshow">
					<text decode="decode" class="statetext">{{item.state}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Sharepower",
		props: {
			/**
			 * 分享状态显示
			 */
			sharestate: {
				type: Boolean,
				default: true,
			},
			/**
			 * 数据内容
			 */
			shareList: {
				type: Array,
				default: function() {
					return [{
							id: "1",
							sharetype: "访客权限",
							sharer: "法外狂徒张三",
							sharestate: 1,
							state: "已退回",
							sharetime: '2020-12-31 12:30',
							endtime: '2025-12-31 12:30'
						},
						{
							id: "2",
							sharetype: "分享类别",
							sharer: "五星好市民约翰",
							sharestate: 0,
							state: "已过期",
							sharetime: '2021-12-20 20:21',
							endtime: '2026-12-20 20:21',
						},
					];
				},
			},
			/**
			 * 状态显示
			 */
			stateshow: {
				type: Boolean,
				default: true,
			},
			/**
			 * 描述字大小
			 */
			txtsize: {
				type: String,
				default: "12px",
			
			},
			/**
			 * 描述字颜色
			 * @type Color
			 */
			txtcolor: {
				type: String,
				default: "#666666",
			}
		},
		watch:{
			shareList(value){
				this.cShareList = value
			},
			textsize(value) {
				this.textsize = this.getCssUnit(value);
			},
			textcolor(value) {
				this.textcolor = value;
			},
		},
		mounted(){
			this.cShareList = this.shareList;
			this.textsize = this.getCssUnit(this.txtsize);
			this.textcolor = this.txtcolor;
		},
		data() {
			return {
				textsize: "", 
				textcolor: "",
				cShareList:[
					{
							id: "1",
							sharetype: "访客权限",
							sharer: "法外狂徒张三",
							sharestate: 1,
							state: "已退回",
							sharetime: '2020-12-31 12:30',
							endtime: '2025-12-31 12:30'
						},
						{
							id: "2",
							sharetype: "分享类别",
							sharer: "五星好市民约翰",
							sharestate: 0,
							state: "已过期",
							sharetime: '2021-12-20 20:21',
							endtime: '2026-12-20 20:21',
						}
				]

			}
		},
		methods: {
			getCssUnit(value) {
				if (isNaN(Number(value))) {
					return value;
				}
				return `${value}px`;
			},
			onClick: function(e, index) {
				this.$emit("onClick")
				console.log(e, index)
			}
		}
	}
</script>

<style>
	page {
		width: 100vw;
		height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
			'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
	}

	view,
	image,
	text {
		box-sizing: border-box;
		flex-shrink: 0;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.flex-justify {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.flex3 {
		flex: 3;
	}

	.flex1 {
		flex: 1;
	}

	.inbox {
		/* flex-wrap: wrap; */
		background-color: #ffffff00;
		width: 100%;
	}

	.listbox {
		width: 100%;
		background-color: rgb(255, 255, 255);
		border-radius: 4px;
		padding: 20px 12px 17px;
		margin-bottom: 12px;
	}

	.listbox:last-child {
		margin-bottom: 0px;
	}

	.boldtext {
		width: 100%;
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		line-height: 22px;
		font-size: 16px;
		color: #000000;
		font-weight: 500;
	}

	.btntxt {
		width: 74px;
		text-align: center;
		border-radius: 2.8px;
		font-size: 10px;
		line-height: 24px;
		letter-spacing: 0;
		text-align: center;
		font-weight: 500;
		padding:2px 4px;
	}

	.btntext1 {
		border: 0.8px solid #1CB9C2;
		color: #1DADB5;
		background: rgba(28, 185, 194, 0.10);
	}

	.btntext2 {
		line-height: 24px;
		background: rgba(153, 153, 153, 0.10);
		border: 0.8px solid #999999;
		color: #999999;
	}

	.putext {
		line-height: 24px;
		text-overflow: ellipsis;
		font-size: 12px;
		color: #8C8C8C;
		font-weight: 400;
	}

	.statetext {
		font-size: v-bind(textsize);
		color: v-bind(textcolor);
		letter-spacing: 0;
		font-weight: 400;
		text-align: center;
	}
</style>
