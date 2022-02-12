<template>
	<view class="inbox flex-col">
		<view class="flex-row topbox">
			<picker @change="condChange" :title="title" :value="index" :range="array">
				<view class="toptext">
          <text>{{array[index].substring(2,6)}}</text>
          <image
				src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107674901033051.png"
				class="img_arrow"/>
        </view>
			</picker>
		</view>
		<view class="flex-col">
			<view v-for="(item,index) in cTimingList" :key="item.index" class="listbox flex-row"
       @touchstart="getTouchStartCond()"
      @touchend="getTouchEndCond()">
				<view class="halfw lefttext">
					<image
						src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107726929788831.png"
						v-show="showclear1" class="img_clear" @click="condclearLine(index)" />
					<text decode="decode">{{item.name}}</text>
				</view>
				<view class="halfw righttext">
					<text decode="decode">{{item.action}}</text>
				</view>
			</view>
			<view class="flex-row addbox">
				<text decode="decode" class="lefttext addtext" @click="condaddLine()">继续添加</text>
			</view>
		</view>
		<view class="hrbox"><hr/></view>
		<view class="flex-col bottom">
			<view class="topbox">
				<text decode="decode" class="toptext">就执行:</text>
			</view>
			<view v-for="(cont,seq) in cActionList" :key="cont.seq" class="listbox flex-row" 
      @touchstart="getTouchStartAct()"
      @touchend="getTouchEndAct()">
				<view class="lefttext">
					<image
						src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107726929788831.png"
						v-show="showclear2" class="img_clear" @click="actclearLine(seq)" />
					<text decode="decode">{{cont.imact}}</text>
				</view>
			</view>
			<view class="flex-row addbox">
				<text decode="decode" class="lefttext addtext" @click="actaddLine()">继续添加</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"timingpage",
		props: {
			/**
			 * 条件数据
			 */
			timingList: {
				type: Array,
				default: function(){return[{
						id: "123",
						name: "定时",
						action: "每天 7:00"
					},
					{
						id: "133",
						name: "灯21",
						action: "打开"
					},
					{
						id: "333",
						name: "灯22",
						action: "关闭"
					}
				];}
			},
			/**
			 * 动作数据
			 */
			actionList: {
				type: Array,
				default: function(){return[{
						id: "123",
						imact: "灯全开"
					},
				];
				},
			},
		},
		data() {
			return {
        title: '请选择多条件关系',
				array: ['如果同时满足时', '如果任意满足时'],
				index: 0,
        timeOutEvent:0,
				showclear1: false,
				showclear2: false,
				cTimingList:[
					{
							id: "123",
							name: "定时",
							action: "每天 7:00"
						},
						{
							id: "133",
							name: "灯21",
							action: "打开"
						},
						{
							id: "333",
							name: "灯22",
							action: "关闭"
						}
				],
				cActionList:[
					{
							id: "123",
							imact: "灯全开"
						}
				]
			}
		},
		methods: {
			condChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			timing() {
				this.$emit("timing")
				console.log("选择时间")
			},
			condclearLine(e) {
				this.$emit("condclearLine", e);
				console.log("触发关闭点击事件");
			},
			actclearLine(e) {
				this.$emit("actclearLine", e);
				console.log("触发关闭点击事件");
				},
			condaddLine() {
				this.$emit("condaddLine")
				console.log("添加一行")
			},
			actaddLine() {
				this.$emit("actaddLine")
				console.log("添加一行")
			},
       getTouchStartCond: function (item) {
      var self = this;
      this.timeOutEvent = setTimeout(function () {
        console.log("进入长按");
        self.condlongtap(item);
      }, 500);
    },
    getTouchStartAct: function (item) {
      var self = this;
      this.timeOutEvent = setTimeout(function () {
        console.log("进入长按");
        self.actlongtap(item);
      }, 500);
    },
    getTouchEndCond(item) {
      clearTimeout(this.timeOutEvent);
    },
    getTouchEndAct(item) {
      clearTimeout(this.timeOutEvent);
    },
			condlongtap() {
				this.$emit("condlongtap")
        this.timeOutEvent = 0;
				this.showclear1 = true
				console.log("进入长按")
			},
			actlongtap() {
				this.$emit("actlongtap")
        this.timeOutEvent = 0;
				this.showclear2 = true
				console.log("进入长按")
			}
		},
		watch:{
			timingList(value){
				this.cTimingList = value;
			},
			actionList(value){
				this.cActionList = value;
			}
		},
		mounted() {
			this.cTimingList = this.timingList;
			this.cActionList = this.actionList;
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

	.halfw {
		width: 50%;
	}

	text {
		font-size: 16px;
		color: #333333;
		line-height: 24px;
		font-weight: 400;
	}

	.lefttext {
		text-align: left;
	}

	.righttext {
		text-align: right;
	}

	.inbox {
		width: 100%;
		min-width: 200px;
		padding: 12px;
		background-color: #ffffff;
	}

	.listbox {
		margin: 10px 0px;
		min-height: 20px;
	}

	.topbox {
		margin: 6px 0px;
	}

	.addbox {
		margin-top: 14px;
	}
	.hrbox{
		margin:32px 0px;
		padding:0px 32px;
	}
	.hrbox hr{
		border: 0.5px solid #EEEEEE;
	}
	.toptext {
		font-size: 14px;
		color: #666666;
		line-height: 22px;
		letter-spacing: 1px;
		font-weight: 400;

	}

	.img_arrow {
		width: 6px;
		height: 12px;
		margin: 0px 4px;
		margin-top: 6px;
	}

	.img_clear {
		width: 12px;
		height: 12px;
		margin-right: 12px;
		display: inline-block;
		vertical-align: middle;
	}

	.addtext {
		font-size: 16px;
		color: #999999;
		line-height: 24px;
		font-weight: 400;
	}
</style>
