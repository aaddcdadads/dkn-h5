<template>
  <view>
    <hm-zebra-swiper 
    :list="list" 
    :custom-style="customStyle"
    :itemCustomStyle="itemCustomStyle"
    :options="options"
    ></hm-zebra-swiper>
  </view>
</template>
<script>
import HmZebraSwiper from "../../components/built-in/third-party/HmZebraSwiper.vue";
export default {
  components: {
    HmZebraSwiper,
  },
  data() {
    return {
      list: [
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
        "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
      ],
      customStyle:{
        height: "500rpx",
      },
      itemCustomStyle:{
        // backgroundColor:"blue",
        // padding:'20px',
        marginBottom:'20px',
      },
      options:{
        effect:"cube",
        loop:true,
        initialSlide :2, //初始轮播下标
        noSwiping:false,
      }
    };
  },
};
</script>