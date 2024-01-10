<template>
	<view>
		<almost-lottery 
		:pixelRatio="pixelRatio"
		:canvasId="canvasId"
		:lotterySize="lotterySize"
		:renderDelay="renderDelay"
		:prizeList="prizeList"
		:actionSize="actionSize"
		:canvasMarginOutside="canvasMarginOutside"
		:prizeIndex="index"
		:lotteryBg="lotteryBg"
		:actionBg="actionBg"
		:colors="colors"
		:prizeNameDrawed="prizeNameDrawed"
		:stroked="stroked"
		:strDirection="strDirection"
		:strokeColor="strokeColor"
		:rotateType="rotateType"
		:selfRotaty="selfRotaty"
		:selfTime="selfTime"
		:duration="duration"
		:ringCount="ringCount"
		:pointerPosition="pointerPosition"
		:strFontColors="strFontColors"
		:strFontSize="strFontSize"
		:strLineHeight="strLineHeight"
		:strMaxLen="strMaxLen"
		:strLineLen="strLineLen"
		:strMarginOutside="strMarginOutside"
		:imgMarginStr="imgMarginStr"
		:imgWidth="imgWidth"
		:imgHeight="imgHeight"
		:imgDrawed="imgDrawed"
		:imgCircled="imgCircled"
		:successMsg="successMsg"
		:failMsg="failMsg"
		:canvasCached="canvasCached"	
		@reset-index="resetIndex"
		@draw-before="drawBefore"
		@draw-start="drawStart"
		@draw-end="drawEnd" 
		@finish="finish" />
	</view>
</template>
<script>
	import AlmostLottery from '@/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue'
	export default {
		components: {
			AlmostLottery
		},
		props: {
			/**
			 * 移动端设计稿的像素比基准值
			 */
			pixelRatio: {
				type: Number,
				default: 2
			},
			/**
			 * Canvas的标识
			 */
			canvasId: {
				type: String,
				default: 'Lottery'
			},
			/**
			 * 渲染延迟
			 */
			renderDelay: {
				type: Number,
				default: 0
			},
			/**
			 * 抽奖转盘的整体尺寸
			 */
			lotterySize: {
				type: Number,
				default: 550
			},
			/**
			 * 抽奖按钮尺寸
			 */
			actionSize: {
				type: Number,
				default: 150
			},
			/**
			 * 距转盘边缘距离
			 */
			canvasMarginOutside: {
				type: Number,
				default: 60
			},
			/**
			 * 获奖奖品的列表序号
			 */
			prizeIndex: {
				type: Number,
				default: -1
			},
			/**
			 * 奖品列表
			 */
			prizeList: {
				type: Array,
				default: function() {
					return [
						{
							prizeId:1,//奖品对应 ID
							prizeName:"5元话费",//奖品名称	
							prizeStock:20,//奖品库存	
							prizeWeight:2,//奖品权重	
						  prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址				  	
						},
						{
							prizeId:2,
							prizeName:"2元打车费",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址
													
						},
						{
							prizeId:3,
							prizeName:"谢谢参与",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址					
						},
						{
							prizeId:4,
							prizeName:"再抽一次",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址						
						},
						{
							prizeId:5,
							prizeName:"100金币",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址
							
						},
						{
							prizeId:6,
							prizeName:"0.01元现金",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址							
						},
					]
				}
			},
			/**
			 * 转盘外环图片
			 */
			lotteryBg: {
				type: String,
				// default:"",
			},
			/**
			 * 抽奖按钮图片
			 */
			actionBg: {
				type: String,
				// default:"",
			},
			/**
			 * 奖品背景颜色
			 */
			colors: {
				type: Array,
				default: function() {
					return ['#FFFFFF', '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF']
				}
			},
			/**
			 * 绘制奖品名称
			 */
			prizeNameDrawed: {
				type: Boolean,
				default: true,
			},
			/**
			 * 开启奖品区块描边	
			 */
			stroked: {
				type: Boolean,
				default: true,
			},
			/**
			 * 奖品名称展示方向
			 * @type Enum
			 * @options ["horizontal","vertical"]
			 */
			strDirection: {
				type: String,
				default: "horizontal"
			},
			/**
			 * 奖品边框颜色
			 */
			strokeColor: {
				type: String,
				default: '#000000'
			},
			/**
			 * 旋转的类型
			 * @type Enum
			 * @options ["roulette","pointer"]
			 */
			rotateType: {
				type: String,
				default: 'roulette'
			},
			/**
			 * 是否开启自转
			 */
			selfRotaty: {
				type: Boolean,
				default: false
			},
			/**
			 * 最少转多少毫秒
			 */
			selfTime: {
				type: Number,
				default: 1000
			},
			/**
			 * 旋转动画时长
			 */
			duration: {
				type: Number,
				default: 8
			},
			/**
			 * 旋转的圈数
			 */
			ringCount: {
				type: Number,
				default: 8
			},
			/**
			 * 按钮指针的位置
			 */
			pointerPosition: {
				type: String,
				default: 'edge'
			},
			/**
			 * 奖品文字颜色
			 */
			strFontColors: {
				type: Array,
				default: ['#FFBF05', '#FF0000','#0F0000']
			},
			/**
			 * 奖品名称的字号
			 */
			strFontSize: {
				type: Number,
				default: 24
			},
			/**
			 * 奖品名称行高
			 */
			strLineHeight: {
				type: Number,
				default: 1.2
			},
			/**
			 * 奖品名称长度
			 */
			strMaxLen: {
				type: Number,
				default: 12,
			},
			/**
			 * 奖品名称文字长度
			 */
			strLineLen: {
				type: Number,
				default: 6
			},
			/**
			 * 奖品文字到边缘距离
			 */
			strMarginOutside: {
				type: Number,
				default:20
			},
			/**
			 * 奖品图片文字距离
			 */
			imgMarginStr: {
				type: Number,
				default:80
			},
			/**
			 * 奖品图片的宽度
			 */
			imgWidth: {
				type: Number,
				default: 30
			},
			/**
			 * 奖品图片的高度
			 */
			imgHeight: {
				type: Number,
				default: 30
			},
			/**
			 * 是否绘制奖品图片
			 */
			imgDrawed: {
				type: Boolean,
				default:true
			},
			/**
			 * 奖品图片裁切为圆形
			 */
			imgCircled: {
				type: Boolean,
				default: false
			},
			/**
			 * 转盘绘制成功的提示
			 */
			successMsg: {
				type: String,
				default: '奖品准备就绪，快来参与抽奖吧'
			},
			/**
			 * 转盘绘制失败的提示
			 */
			failMsg: {
				type: String,
				default: '奖品仍在准备中，请稍后再来...'
			},
			/**
			 * 是否开启缓存
			 */
			canvasCached: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				index:-1,
			}
		},
		mounted(){},
		methods: {
			resetIndex(){
				this.index = -1;
				this.$emit("resetIndex");
			},
			drawBefore(callback) {
				this.$emit("drawBefore", callback);
			},
			drawStart() {
				this.index = this.prizeIndex;
				this.$emit("drawStart");	
			},
			drawEnd() {
				this.$emit("drawEnd");
			},
			finish(e) {
				this.$emit("finish",e);
			}
		}
	}
</script>

<style>
</style>