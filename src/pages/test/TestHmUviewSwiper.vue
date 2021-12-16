<template>
  <view>
    <Hm-Uview-Swiper></Hm-Uview-Swiper>
    <Hm-Uview-Swiper
      :list="list"
      :title="true"
      mode="rect"
      :height="300"
      indicatorPos="topLeft"
      :effect3d="true"
      :autoplay="true"
      :interval="4000"
      :circular="true"
      :duration="1000"
      :borderRadius="30"
      :effect3dPreviousMargin="50"
      bgColor="#f1ec38"
      :current="2"
      @click="click"
      @change="change"
    ></Hm-Uview-Swiper>
  </view>
</template>

<script>
import HmUviewSwiper from "@/components/built-in/HmUviewSwiper.vue";

export default {
  components: {
    HmUviewSwiper,
  },
  data() {
    return {
      list: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
      ],
    };
  },
  methods: {
    click(e) {
      console.log("click", e);
    },
    change(e) {
      console.log("change", e);
    },
  },
};
</script>

<style>
</style>
