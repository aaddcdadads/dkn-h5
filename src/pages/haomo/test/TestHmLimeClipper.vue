<template>
  <view>
    <hm-lime-clipper
    :source="source"
    :isDisableRotate="false"
    :show="show"
    :quality="0.9"
    :width="600"
    :height="400"
    :min-width="400"
    :min-height="400"
    :max-width="400"
    :max-height="600"		
    :min-ratio="0.1"
    :max-ratio="100"
    :rotate-angle="45"
    :scale-ratio="0.5"
    :is-lock-width="false"
    :is-lock-height="false"
    :is-lock-ratio="false"
    :is-disable-scale="true"
    :is-limit-move="false"
    :is-show-photo-btn="true"
    :is-show-rotate-btn="true"
    :is-show-confirm-btn="true"
    :is-show-cancel-btn="true"
    @success="onSuccess"
    @fail="onFail"
    @cancel="onCancel"
    @ready="onReady"
    @change="onChange"
    @rotate="onRotate"
    ></hm-lime-clipper>
    <img :src="url"/>
    <button @click="show = true">裁剪</button>
  </view>
</template>

<script>
import HmLimeClipper from "/@/components/built-in/third-party/HmLimeClipper.vue"
export default {
  components:{
    HmLimeClipper,
  },
  data(){
    return{
      url:"",
      source:{
        album: "从相册中选择",
        camera: "拍照12",
      },
      show:false
    }
  },
  methods:{
    onSuccess(e){
      this.url = e.url;
      this.show = false;
    },
    onFail(e){
      console.log("fail",e);
    },
    onCancel(e){
      console.log("cancel",e);
      this.show = false
    },
    onReady(e){
      console.log("ready",e);
    },
    onChange(e){
      console.log("change",e);
    },
    onRotate(e){
      console.log("rotate",e);
    }
  }
}
</script>