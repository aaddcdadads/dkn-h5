<template>
  <view>
    <hm-map></hm-map> 
    
    <br />

    <hm-map
    ></hm-map>
  </view>
</template>

<script>
import HmMap from "@/components/built-in/official/HmMap.vue";

export default {
  components: { HmMap },
  data() {
    return {
      latitude: "latitude", 
      longitude: "longitude",
      scale: "scale", 
      markers: "markers",
      polyline: "polyline", 
      circles: "circles", 
      polygons: "polygons",
      includePoints: "includePoints",
      controls: "controls",
      enable3D: "enable3D",
      showCompass: "showCompass",
      enableZoom: "enableZoom",
      enableScroll: "enableScroll",
      enableRotate: "enableRotate",
      enableOverlooking: "enableOverlooking",
      enableSatellite: "enableSatellite",
      enableTraffic: "enableTraffic",
      enablePoi: "enablePoi",
      enableBuilding: "enableBuilding",
      showLocation: "showLocation",
      enableIndoorMap: "enableIndoorMap",
    };
  },
};
</script>

<style lang="less">
</style>
