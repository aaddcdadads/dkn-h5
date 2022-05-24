<template>
	<view class="search-view" v-if="searchView">
		<view class="search-top">
			<view class="search-top__div">
				<u-search 
					class="search-top__search"
					v-model="keyword"
					:showAction="false"
					shape="square"
					bgColor="transparent"
					@change="search"
				/>
			</view>
			<view class="search-top__text" @click="cancel">取消</view>
		</view>
		<view class="search-list">
			<view 
				v-for="item in addressList" 
				:key="item.id" 
				class="search-list__item"
				@click="selectAddress(item)"
			>
				{{item.address}}
			</view>
		</view>
	</view>
	<view class="hm-map" v-if="!searchView">
		<map
			class="map"
			id="map"
			ref="map"
			:key="key"
			:latitude="cLatitude"
			:longitude="cLongitude"
			:scale="scale"
			:markers="cMarkers"
			:polyline="polyline"
			:circles="circles"
			:polygons="polygons"
			:includePoints="includePoints"
			:controls="controls"
			:enable3D="enable3D"
			:showCompass="showCompass"
			:enableZoom="enableZoom"
			:enableScroll="enableScroll"
			:enableRotate="enableRotate"
			:enableOverlooking="enableOverlooking"
			:enableSatellite="enableSatellite"
			:enableTraffic="enableTraffic"
			:enablePoi="enablePoi"
			:enableBuilding="enableBuilding"
			:showLocation="showLocation"
			:enableIndoorMap="enableIndoorMap"
			@markertap="onMarkertap"
			@labeltap="onLabeltap"
			@callouttap="onCallouttap"
			@controltap="onControltap"
			@regionchange="onRegionchange"
			@tap="onTap"
			@updated="onUpdated"
			@anchorpointtap="onAnchorpointtap"
			@poitap="onPoitap"
		>
		<cover-view v-if="showSearch" class="serch-div" @click="showSearchView">
			{{address}}
		</cover-view>
		</map>
	</view>
</template>

<script>
// 参考：https://uniapp.dcloud.io/component/map
import {
  getAction,
} from "/@/request/http";

export default {
	name: "HmMap",
	props: {
		/**
		 * 宽度
		 */
		width: {
			type: String,
			default: "100%",
		},
		/**
		 * 高度
		 */
		height: {
			type: String,
			default: "500",
		},
		/**
		 * 中心经度
		 */
		longitude: {
			type: Number,
			default: 116.397428,
		},
		/**
		 * 中心纬度
		 */
		latitude: {
			type: Number,
			default: 39.90765,
		},
		/**
		 * 缩放级别
		 * @description 取值范围3-20
		 */
		scale: {
			type: Number,
			default: 16,
		},
		/**
		 * 点标记
		 */
		markers: {
			type: Array,
			default: function () {
				return [];
			},
		},
		/**
		 * 路线标记
		 */
		polyline: {
			type: Array,
			default: function () {
				return [];
			},
		},
		/**
		 * 圆形标记
		 */
		circles: {
			type: Array,
			default: function () {
				return [];
			},
		},
		/**
		 * 多边形标记
		 */
		polygons: {
			type: Array,
			default: function () {
				return [];
			},
		},
		/**
		 * 视野包含点
		 */
		includePoints: {
			type: Array,
			default: function () {
				return [];
			},
		},
		/**
		 * 控件
		 */
		controls: {
			type: Array,
			default: function () {
				return [
					{
						id: "move-to-location",
						position: {
							width: 32,
							height: 32,
							left: 5,
							top: 50,
						},
						iconPath:
							"https://block-design.oss-cn-shenzhen.aliyuncs.com/component-libs/uniapp/%E5%AE%9A%E4%BD%8D.png",
						clickable: true,
					},
				];
			},
		},
		/**
		 * 显示3D楼块
		 */
		enable3D: {
			type: Boolean,
			default: false,
		},
		/**
		 * 显示指南针
		 */
		showCompass: {
			type: Boolean,
			default: false,
		},
		/**
		 * 支持缩放
		 */
		enableZoom: {
			type: Boolean,
			default: true,
		},
		/**
		 * 支持拖动
		 */
		enableScroll: {
			type: Boolean,
			default: true,
		},
		/**
		 * 支持旋转
		 */
		enableRotate: {
			type: Boolean,
			default: true,
		},
		/**
		 * 开启俯视
		 */
		enableOverlooking: {
			type: Boolean,
			default: true,
		},
		/**
		 * 开启卫星图
		 */
		enableSatellite: {
			type: Boolean,
			default: true,
		},
		/**
		 * 开启实时路况
		 */
		enableTraffic: {
			type: Boolean,
			default: true,
		},
		/**
		 * 展示 POI 点
		 */
		enablePoi: {
			type: Boolean,
			default: true,
		},
		/**
		 * 展示建筑物
		 */
		enableBuilding: {
			type: Boolean,
			default: true,
		},
		/**
		 * 显示定位点
		 */
		showLocation: {
			type: Boolean,
			default: true,
		},
		/**
		 * 展示室内地图
		 */
		enableIndoorMap: {
			type: Boolean,
			default: true,
		},
		/**
		 * 显示搜索框
		 */
		showSearch: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			key: 0,
			cLatitude: 39.90925,
			cLongitude: 116.397628,
			address: '',
			cWidth: "100%",
			cHeight: "500px",
			searchView: false,
			keyword: '',
			addressList: [],
			centerMarker: {
				id: 1,
				longitude: 116.397628,
				latitude: 39.90925,
				iconPath:
					"https://block-design.oss-cn-shenzhen.aliyuncs.com/component-libs/uniapp/red-marker.png",
				width: 32,
				height: 32,
			},
		};
	},
	computed: {
		cMarkers: function() {
			return this.markers.concat([this.centerMarker])
		}
	},
	created() {
		this.cWidth = this.$getCssUnit(this.width);
		this.cHeight = this.$getCssUnit(this.height);
		this.cLatitude = this.latitude
		this.cLongitude = this.longitude
	},
	methods: {
		/**
		 * 点击标记点时触发，e.detail = {markerId}
		 */
		onMarkertap(event) {
			console.log(`onMarkertap: `, event);
			this.$emit("onMarkertap", event);
		},
		/**
		 * 点击label时触发，e.detail = {markerId}
		 */
		onLabeltap(event) {
			console.log(`onLabeltap: `, event);
			this.$emit("onLabeltap", event);
		},
		/**
		 * 点击标记点对应的气泡时触发，e.detail = {markerId}
		 */
		onCallouttap(event) {
			console.log(`onCallouttap: `, event);
			this.$emit("onCallouttap", event);
		},
		/**
		 * 点击控件时触发，e.detail = {controlId}
		 */
		onControltap(event) {
			console.log(`onControltap: `, event);
			this.$emit("onControltap", event);
			if(event.detail.controlId == "move-to-location"){
				this.location()
			}
		},
		/**
		 * 视野发生变化时触发
		 */
		onRegionchange(event) {
			let self = this;
			console.log(`onMarkertap: `, event);
			this.$emit("onMarkertap", event);
			self.centerMarker = {
				...self.centerMarker,
				longitude: self.cLongitude,
				latitude: self.cLatitude,
			}
		},
		/**
		 * 点击地图时触发; App-nuve、微信小程序2.9支持返回经纬度
		 */
		onTap(event) {
			console.log(`onTap: `, event);
			this.$emit("onTap", event);
		},
		/**
		 * 在地图渲染更新完成时触发
		 */
		onUpdated(event) {
			console.log(`onUpdated: `, event);
			this.$emit("onUpdated", event);
		},
		/**
		 * 点击定位标时触发，e.detail = {longitude, latitude}
		 */
		onAnchorpointtap(event) {
			console.log(`onAnchorpointtap: `, event);
			this.$emit("onAnchorpointtap", event);
		},
		/**
		 * 点击地图poi点时触发，e.detail = {name, longitude, latitude}
		 */
		onPoitap(event) {
			console.log(`onPoitap: `, event);
			this.$emit("onPoitap", event);
		},
		/**
		 * 打开搜索界面
		 */
		showSearchView() {
			this.searchView = true
			console.log('showSearchView', this.searchView)
		},
		/**
		 * 取消
		 */
		cancel(){
			this.searchView = false
		},
		/**
		 * 获取当前定位
		 */
		async location(){
			let self = this
			let addressUrl;
			// #ifdef H5
			addressUrl = '/ws/geocoder/v1'
			// #endif
			// #ifndef H5
			addressUrl = 'https://apis.map.qq.com/ws/geocoder/v1'
			// #endif
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: async function (res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					console.log('addressUrl', addressUrl)
					getAction(addressUrl, {
						location: res.latitude + "," + res.longitude,
						key: "423BZ-I6S3D-PVU4X-HH7XG-26MFJ-SGF7M",
					}).then(addressRes => {
						self.address = addressRes.result.address
						self.cLatitude = addressRes.result.location.lat
						self.cLongitude = addressRes.result.location.lng
						self.key++;
					}).catch(e => {
						console.log('error', e)
					})
				}
			})
		},
		/**
		 * 搜索
		 */
		search(val){
			let url;
			// #ifdef H5
			url = '/ws/place/v1/suggestion'
			// #endif
			// #ifndef H5
			url = 'https://apis.map.qq.com/ws/place/v1/suggestion'
			// #endif
			
			getAction(url, {
				key: "423BZ-I6S3D-PVU4X-HH7XG-26MFJ-SGF7M",
				// boundary: `nearby(${this.latitude},${this.longitude},1000,1)`,
				keyword: val,
			}).then(res => {
				console.log('res', res)
				this.addressList = res.data;
			}).catch(e => {
				console.log('error', e)
			})
		},
		selectAddress(item){
			let self = this
			self.searchView = false
			self.address = item.address
			self.cLatitude = item.location.lat
			self.cLongitude = item.location.lng
			self.$emit("onAddressSelect", item);
		}
	},
};
</script>

<style lang="less" scoped>
.hm-map {
	width: v-bind(cWidth);
	height: v-bind(cHeight);
}
.map {
	width: 100%;
	height: 100%;
}
.serch-div{
	position: relative;
	background-color: #FAFAFA;
	width: 85%;
	left: 10%;
	top: 5%;
	height: 40px;
	line-height: 40px;
	z-index: 999;
	box-shadow: 1px 1px 1px #B7B6B5;
}

.search-view{
	margin-left: 2%;
	margin-right: 2%;
}

.search-top{
	display: flex;
	margin-top: 10px;
	height: 35px;
	justify-content: space-between;

	&__div{
		background-color: #FAFAFA;
		width: 85%;
		height: 35px;
		box-shadow: 1px 1px 1px #B7B6B5;
	}

	&__search{
		background-color: transparent;
		height: 35px;
		box-shadow: 1px 1px 1px #B7B6B5;
	}

	&__text{
		width: 10%;
		height: 35px;
		line-height: 35px;
	}
}

.search-list{
	margin-top: 20px;
	&__item{
		margin-top: 10px;
		background-color: #FAFAFA;
		// height: 35px;
		line-height: 35px;
	}
}

.search{
	height: 100%;
}
</style>
