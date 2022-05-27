<template>

	<view>
		<!-- 扫码页面 -->
		<!-- #ifndef APP-PLUS -->
		<view class="wrap">
			<view class="u-tips-color">

			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barcode: null,
				flash: false,
				tip: '将二维码放入框中，即可自动扫描',
			}
		},
		onShow() {
			// 页面展示时，重新启动扫描检测
			if (this.barcode) {
				//this.barcode.start()
			}
		},
		onLoad(params) {
			const {
				tip
			} = params
			if (tip) {
				this.tip = tip
			}
            // #ifdef APP-PLUS
			plus.navigator.setFullscreen(true); //全屏
			let currentWebview = this.$scope.$getAppWebview();
			this.createBarcode(currentWebview)
			this.createTipInfoView(currentWebview)
			this.createFlashBarView(currentWebview)
            // #endif
		},
		mounted() {

		},
		methods: {
            open(){
                this.barcode.start()
            },
			/**
			 * 创建二维码
			 * @param {Object} currentWebview
			 */
			createBarcode(currentWebview) {
				if (!this.barcode) {
					this.barcode = plus.barcode.create('barcode', [plus.barcode.QR], {
						top: `0px`,
						left: '0px',
						height: `100%`,
						width: '100%',
						position: 'absolute',
						background: '#FFCC00',
						frameColor: '#FFCC33',
						scanbarColor: '#FFCC33',
					});
					this.barcode.onmarked = this.onmarked;
                    this.barcode.onerror = this.onerror;
					this.barcode.setFlash(this.flash);
					//此处未演示扫码成功回调的地址设置，实际请参考HTML5Plus API自行处理  
					//注意扫码区域需为正方形，否则影响扫码识别率  
					currentWebview.append(this.barcode);
				}
                //console.log("start",this.barcode);
			},

			/**
			 * 创建提示信息
			 * @param {Object} currentWebview
			 */
			createTipInfoView(currentWebview) {
				const content = new plus.nativeObj.View('content', {
						top: '0px',
						left: '0px',
						height: '100%',
						width: '100%'
					},
					[{
						tag: 'font',
						id: 'scanTips',
						text: this.tip,
						textStyles: {
							size: '16px',
							color: '#ffffff',
							whiteSpace: 'normal'
						},
						position: {
							top: '150px',
							left: '10%',
							width: '80%',
							height: 'wrap_content'
						}
					}]);
				currentWebview.append(content);

			},
			// 创建 开关灯按钮
			createFlashBarView(currentWebview) {

				const openImg = this.crtFlashImg('https://block-design.oss-cn-shenzhen.aliyuncs.com/uniapp-icon/%E6%89%8B%E7%94%B5%E7%AD%92%E5%BC%80.png')
				const closeImg = this.crtFlashImg('https://block-design.oss-cn-shenzhen.aliyuncs.com/uniapp-icon/%E6%89%8B%E7%94%B5%E7%AD%92%E5%85%B3.png')
				const scanBarVew = new plus.nativeObj.View('scanBarVew', {
						top: '70%',
						left: '40%',
						height: '10%',
						width: '20%',
					},
					closeImg);
				scanBarVew.interceptTouchEvent(true);

				currentWebview.append(scanBarVew);

				scanBarVew.addEventListener("click", (e) => { //点亮手电筒
					this.flash = !this.flash;
					if (this.flash) {
						scanBarVew.draw(openImg);
					} else {
						scanBarVew.draw(closeImg)
					}
					if (this.barcode) {
						this.barcode.setFlash(this.flash);
					}
				}, false)
			},
			crtFlashImg(imgsrc) {
				return [{
					tag: 'img',
					id: 'scanBar',
					src: imgsrc,
					position: {
						width: '36%',
						left: '30%',
						height: '40%'
					}
				}, {
					tag: 'font',
					id: 'font',
					text: '轻触照亮',
					textStyles: {
						size: '16px',
						color: '#ffffff'
					},
					position: {
						width: '80%',
						left: '10%'
					}
				}]
			},
			// 扫码成功回调
			onmarked(type, result) {
				console.log('条码类型：' , type);
				console.log('条码内容：' , result);
				// 业务代码
				// 核对扫描结果
				// 判断是否是正确的格式
				// 不正确则跳转到 错误页面
					
			},
            // 扫码失败回调
			onerror(error) {
				console.log('扫码失败' , error);
			}

		}
	}
</script>

<style scoped>
	.wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

