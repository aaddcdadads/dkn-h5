<template>
  <view>
    <hm-lottery 
    :lotterySize="700"
    :prize-list="prizeList"
    :imgWidth="60"
    :imgHeight="60"
    :colors="colors"
    :self-rotaty="false"
    :prize-index="prizeIndex"
    :str-font-size="30"
    :str-max-len="3"
    :str-line-height="1"
    :duration="18"
    :ring-count="9"
    :self-time="2000"
    @reset-index="resetIndex"
    @draw-before="drawBefore"
    @finish="finish"
    @draw-start="drawStart"
    @draw-end="drawEnd"
    ></hm-lottery>
  </view>
</template>
<script>
import HmLottery from '../../components/built-in/third-party/HmLottery.vue';
export default {
  components:{
    HmLottery
  },
  data(){
    return{
      colors:['#F00', '#0F0','#00F','#FFF','#eee','#FFF'],
      prizeList:[
      {
							prizeId:1,//奖品对应 ID
							prizeName:"10元话费",//奖品名称	
							prizeStock:20,//奖品库存	
							prizeWeight:2,//奖品权重	
						  prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址				  	
						},
						{
							prizeId:2,
							prizeName:"20元打车费",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址
													
						},
						{
							prizeId:3,
							prizeName:"谢谢参与",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址
								
						},
						{
							prizeId:4,
							prizeName:"再抽一次",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址						
						},
						{
							prizeId:5,
							prizeName:"1000金币",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址
							
						},
						{
							prizeId:6,
							prizeName:"1000元现金",
							prizeStock:20,
							prizeWeight:2,
							prizeImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABCElEQVRoge3YMa4BURSH8Y8o7UAp0WgkotBZwluAfhqlZSgUGr23ENUUCpppJnTswAIUSCaTiziZJ8d9/193zdzrfMltABF5plb+oLscDoAV0Pn8OC/lwDhL0k35QT3wstcIuM61Cj0IhXiNuAvOFwr5SgrxRiHeKMSbhnHfAVgU1i1gajhnBpwK6wnQtgxkDTlmSTq/L7rLYQ9byG+WpLvCOT8YQ6K5WgrxRiHeKMQbhXijEG8U4o1CvIkmxPrDquwMrI37KlFJSJake2BUxVlW0VytaEKsV6t5+8Ohak3rRmtIH9hav/QvRHO1FOKNQrwJheQfn+I9wflCIeNHLzuQc51PRP6rC1ZeIm1I8cC5AAAAAElFTkSuQmCC",//奖品图片地址							
						},

      ],
      prizeIndex:2
    }
  },
  methods:{
    resetIndex(){
      console.log("resetIndex");
    },
    drawBefore(callback){
      console.log("drawBefore");
      let flag = true; 
      callback(true);
    },
    finish(e){
     console.log("finish",e);
    },
    drawStart(){
      console.log("drawStart");
    },
    drawEnd(e){
      console.log("drawEnd",e);
    }

  }
  
}
</script>