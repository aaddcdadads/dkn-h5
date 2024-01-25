<template>
  <view>
    <hm-mp-html 
    :content="content"
    :containerStyle="containerStyle"
    :pauseVideo="false"
    :previewImg="false"	
    :setTitle="true"
    :useAnchor="true"
    :scrollTable="true"
    @load="load"
    @ready="ready"
    @error="error"
    @imgtap="imgtap"
    @linktap="linktap"
    @play="play"
    >
    </hm-mp-html>
  </view>
</template>
<script>
import HmMpHtml from '../../components/built-in/third-party/HmMpHtml.vue';
export default {
  components:{
    HmMpHtml,
  },
  data(){
    return{
      content:`
         <p id="text">Hello World!</p>
         <title>Hello World!</title>
         <video src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" enable-danmu danmu-btn controls></video>
         <video src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" enable-danmu danmu-btn controls></video>
         <img style="width:300px;" src='https://img0.baidu.com/it/u=2136891175,1458697858&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702486800&t=6b43c417ef2b2855b53fe1bcf71d4485'/>
         <table width="500px" cellspacing="0" cellpadding="5">
             <thead>
              <tr>
               <th align="center">标题 1</th>
               <th align="center">标题 2</th>
               <th align="center">标题 3</th>
              </tr>
             </thead>
            <tbody>
             <tr>
              <td align="center" colspan="2">内容 1</td>
              <td align="center" rowspan="2">内容 2</td>
             </tr>
            <tr>
              <td align="center" rowspan="2">内容 3</td>
              <td align="center">内容 4</td>
            </tr>
            <tr>
              <td align="center" colspan="2">内容 5</td>
            </tr>
            <tr>
             <td align="center">内容 6</td>
             <td align="center">内容 7</td>
             <td align="center"><a>链接</a></td>
            </tr>
           </tbody>
           </table>
           <p style="text-align: center;margin-top:0.5em"><a href="#text">锚点链接</a></p>
         `,
      containerStyle:"font-size:20px",
    }
  },
  methods:{
    load(){
      console.log("load");
    },
    ready(e){
      console.log("ready",e)
    },
    imgtap(e){
      console.log("imgtap",e);
    },
    linktap(e){
      console.log("linktap",e);
    },
    play(){
      console.log("play");
    },
    error(e){
      console.log("error",e);
    }
  }

  
}
</script>