<template>
  <view class="hm-map">
    <map class="map"
      :latitude="latitude" 
      :longitude="longitude"
      :scale="scale" 
      :markers="markers"
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
    </map>
  </view>
</template>

<script>
// 参考：https://uniapp.dcloud.io/component/map
export default {
  name: "HmUviewButton",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '375'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '500'
    },
    /**
     * 中心经度
     */
    longitude: {
      type: Number,
      default: 116.0
    },
    /**
     * 中心纬度
     */
    latitude: {
      type: Number,
      default: 39.0
    },
    /**
     * 缩放级别
     * @description 取值范围3-20
     */
    scale: {
      type: Number,
      default: 16
    },
    /**
     * 点标记
     */
    markers: {
      type: Array,
      default: []
    },
    /**
     * 路线标记
     */
    polyline: {
      type: Array,
      default: []
    },
    /**
     * 圆形标记
     */
    circles: {
      type: Array,
      default: []
    },
    /**
     * 多边形标记
     */
    polygons: {
      type: Array,
      default: []
    },
    /**
     * 视野包含点
     */
    includePoints: {
      type: Array,
      default: []
    },
    /**
     * 控件
     */
    controls: {
      type: Array,
      default: []
    },
    /**
     * 显示3D楼块
     */
    enable3D: {
      type: Boolean,
      default: true
    },
    /**
     * 显示指南针
     */
    showCompass: {
      type: Boolean,
      default: true
    },
    /**
     * 支持缩放
     */
    enableZoom: {
      type: Boolean,
      default: true
    },
    /**
     * 支持拖动
     */
    enableScroll: {
      type: Boolean,
      default: true
    },
    /**
     * 支持旋转
     */
    enableRotate: {
      type: Boolean,
      default: true
    },
    /**
     * 开启俯视
     */
    enableOverlooking: {
      type: Boolean,
      default: true
    },
    /**
     * 开启卫星图
     */
    enableSatellite: {
      type: Boolean,
      default: true
    },
    /**
     * 开启实时路况
     */
    enableTraffic: {
      type: Boolean,
      default: true
    },
    /**
     * 展示 POI 点
     */
    enablePoi: {
      type: Boolean,
      default: true
    },
    /**
     * 展示建筑物
     */
    enableBuilding: {
      type: Boolean,
      default: true
    },
    /**
     * 显示定位点
     */
    showLocation: {
      type: Boolean,
      default: true
    },
    /**
     * 展示室内地图
     */
    enableIndoorMap: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cWidth: '375px',
      cHeight: '500px',
    };
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);
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
    },
    /**
     * 视野发生变化时触发
     */
    onRegionchange(event) {
      console.log(`onMarkertap: `, event);
      this.$emit("onMarkertap", event);
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
  },
};
</script>

<style lang="less" scoped>
.map {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>
