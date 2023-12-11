<template>
  <view>
    <hm-zebra-swiper 
    :list="list" 
    :custom-style="customStyle"
    :itemCustomStyle="itemCustomStyle"
    :options="options"
    @init="init"
    @touchStart="touchStart"
    @loopFix="loopFix"
    @beforeLoopFix="beforeLoopFix"
    @autoplay="autoplay"
    @autoplayStop="autoplayStop"
    @autoplayStart="autoplayStart"
    @slideChange="slideChange"
    @toEdge="toEdge"
    @fromEdge="fromEdge"
    @slidePrevTransitionEnd="slidePrevTransitionEnd"
    @slidePrevTransitionStart="slidePrevTransitionStart"
    @slideNextTransitionStart="slideNextTransitionStart"
    @slideNextTransitionEnd="slideNextTransitionEnd"
    @setTranslate="setTranslate"
    @click="click"
    @progress="progress"
    @sliderMove="sliderMove"
    @touch-end="touchEnd"
    @slideChangeTransitionStart="slideChangeTransitionStart"
    @transitionStart="transitionStart"
    @doubleTap="doubleTap"

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
        loop:false,
        initialSlide :0, //初始轮播下标
        noSwiping:false,
        autoplay:false,
      }
    };
  },
  methods:{
    init(e){
      console.log("init",e);
    },
    touchStart(e){
      console.log("touchStart",e);
    },
    loopFix(e){
      console.log("loopFix",e);
    },
    beforeLoopFix(e){
      console.log("beforeLoopFix",e);
    },
    autoplay(e){ 
      console.log("autoplay",e.activeIndex);
    },
    autoplayStop(){
      console.log("autoplayStop",e);
    },
    autoplayStart(e){
      console.log("autoplayStart",e);
    },
    slideChange(e){
      console.log("slideChange",e);
    },
    toEdge(e){
      console.log("toEdge",e);
    },
    fromEdge(e){
      console.log("fromEdge",e);
    },  
    slidePrevTransitionEnd(e){
      console.log("slidePrevTransitionEnd",e);
    },
    slidePrevTransitionStart(e){
      console.log("slidePrevTransitionStart",e);
    },
    slideNextTransitionStart(e){
      console.log("slideNextTransitionStart",e);
    },
    slideNextTransitionEnd(e){
      console.log("slideNextTransitionEnd",e);
    },
    setTranslate(e){
      console.log("setTranslate",e);
    },
    click(e){
      console.log("click",e);
    },
    progress(e){
      console.log("progress",e);
    },
    sliderMove(e){
      console.log("sliderMove",e);
    },
    touchEnd(e){
      console.log("touchEnd",e);
    },
    slideChangeTransitionStart(e){
      console.log("slideChangeTransitionStart",e);
    },
    transitionStart(e){
      console.log("transitionStart",e);
    },
    doubleTap(e){
      console.log("doubleTap",e);
    }

    
  }
};
</script>