<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="0" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FAFAFA" class="ele-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"> 
            <view class="ele-wrapper ele-wrapper-loopList">
      <hm-loop ref="loopList" v-model:value="loopList.value" class="ele-loopList"> 
      <template #default="{item}">
              <view class="ele-wrapper ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db">
      <hm-uview-field :value="item.value" :label="item.label" placeholder="" label-width="160" :label-align="'center'" icon="" right-icon="" :disabled="true" class="ele-0ded82e1-3f32-400b-915d-b361c39f83db"> 
    </hm-uview-field>
    </view> 
          </template> 
    </hm-loop>
    </view> 
            <view class="ele-wrapper ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FAFAFA" class="ele-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c"> 
            <view class="ele-wrapper ele-wrapper-acNameField">
      <hm-uview-field ref="acNameField" v-model:value="acNameField.value" label="活动名称" placeholder="" label-width="160" :label-align="'center'" icon="" right-icon="" :disabled="true" class="ele-acNameField"> 
    </hm-uview-field>
    </view> 
            <view class="ele-wrapper ele-wrapper-prizeImageBox">
      <hm-uview-bg-card ref="prizeImageBox" width="100%" height="100%" border-radius="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-prizeImageBox"> 
            <view class="ele-wrapper ele-wrapper-a46c4597-9e01-4191-8f9e-fc2396ae8aea">
      <hm-uview-text text="活动奖品" font-size="14px" color="#999999" class="ele-a46c4597-9e01-4191-8f9e-fc2396ae8aea"> 
       
    </hm-uview-text>
    </view> 
            <view class="ele-wrapper ele-wrapper-imgList">
      <hm-loop ref="imgList" v-model:value="imgList.value" class="ele-imgList"> 
      <template #default="{item}">
              <view class="ele-wrapper ele-wrapper-2b090494-74e9-4208-93de-43455651c087">
      <loop-img :src="item.src" width="80px" height="80px" class="ele-2b090494-74e9-4208-93de-43455651c087"> 
       
    </loop-img>
    </view> 
          </template> 
    </hm-loop>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-roundField">
      <hm-uview-field ref="roundField" v-model:value="roundField.value" label="当前核销" placeholder="当前核销轮次" label-width="160" :label-align="'center'" icon="" right-icon="" :disabled="true" class="ele-roundField"> 
    </hm-uview-field>
    </view> 
            <view class="ele-wrapper ele-wrapper-timeField">
      <hm-uview-field ref="timeField" v-model:value="timeField.value" label="核销时间" placeholder="当前核销轮次核销时间范围" label-width="160" :label-align="'center'" icon="" right-icon="" :disabled="true" class="ele-timeField"> 
    </hm-uview-field>
    </view> 
            <view class="ele-wrapper ele-wrapper-writeOffModal">
      <hm-uview-modal ref="writeOffModal" v-model:visible="writeOffModal.visible" :title="writeOffModal.title" :show-confirm-btn="writeOffModal.showConfirmBtn" confirm-text="员工已确认" confirm-color="#2979FF" :show-close-icon="false" height="100px" @onConfirm="onWriteOffModalOnConfirm"> 
            <view class="ele-wrapper ele-wrapper-37812c82-78a2-4dfe-b077-d34a6cc52c59">
      <hm-uview-bg-card width="100%" height="100%" :text-align="'center'" padding="0" box-shadow-color="#00000000" class="ele-37812c82-78a2-4dfe-b077-d34a6cc52c59"> 
            <view class="ele-wrapper ele-wrapper-writeOffText">
      <hm-uview-text ref="writeOffText" :text="writeOffText.text" :font-size="writeOffText.fontSize" :color="writeOffText.color" :padding="writeOffText.padding" class="ele-writeOffText"> 
       
    </hm-uview-text>
    </view> 
    </hm-uview-bg-card>
    </view> 
    </hm-uview-modal>
    </view> 
            <view class="ele-wrapper ele-wrapper-loseModal">
      <hm-uview-modal ref="loseModal" v-model:visible="loseModal.visible" title="核销失败！" :show-confirm-btn="false" confirm-color="#2979FF" :show-close-icon="false" height="100px"> 
            <view class="ele-wrapper ele-wrapper-6ff52555-3ffe-4b39-be25-816910b258c2">
      <hm-uview-bg-card width="100%" height="100%" :text-align="'center'" padding="0" box-shadow-color="#00000000" class="ele-6ff52555-3ffe-4b39-be25-816910b258c2"> 
            <view class="ele-wrapper ele-wrapper-c405710c-2544-4899-be45-7d87c1305304">
      <hm-uview-text text="当前门店与报名登记门店范围不一致，不可进行核销，请移步到对应范围的门店进行核销！" font-size="14px" color="#6C6C6C" padding="0" class="ele-c405710c-2544-4899-be45-7d87c1305304"> 
       
    </hm-uview-text>
    </view> 
    </hm-uview-bg-card>
    </view> 
    </hm-uview-modal>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-buttonwanCard">
      <hm-uview-bg-card ref="buttonwanCard" :width="buttonwanCard.width" :height="buttonwanCard.height" :border-radius="buttonwanCard.borderRadius" :box-shadow-v-shadow="buttonwanCard.boxShadowVShadow" :box-shadow-blur="buttonwanCard.boxShadowBlur" :background-color="buttonwanCard.backgroundColor" :hidden="buttonwanCard.hidden" class="ele-buttonwanCard"> 
            <view class="ele-wrapper ele-wrapper-buttonwan">
      <hm-uview-button ref="buttonwan" :shape="buttonwan.shape" :text="buttonwan.text" @click="onButtonwanClick" class="ele-buttonwan"> 
       
    </hm-uview-button>
    </view> 
    </hm-uview-bg-card>
    </view> 
    </hm-uview-bg-card>
    </view>
    </view>
  </view>
</template>

<script>
import { h } from 'vue';
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import LoopImg from "/@/components/dkn-h-5/loop-img/index.vue";
import HmUviewModal from "/@/components/built-in/uniapp-uview-vue3/HmUviewModal.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";


export default {
  name: "NewVerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmLoop,
    HmUviewField,
    HmUviewText,
    LoopImg,
    HmUviewModal,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
  "loopList": {
    "value": [
      {
        "label": "姓名/昵称",
        "value": ""
      },
      {
        "label": "手机号码",
        "value": ""
      },
      {
        "label": "领奖门店",
        "value": ""
      },
      {
        "label": "核销门店",
        "value": ""
      }
    ]
  },
  "registrationOrdersData": {},
  "storeList": {},
  "writeOffModal": {
    "title": "请寻找工作人员进行核销",
    "showConfirmBtn": true,
    "visible": false
  },
  "writeOffText": {
    "text": "请寻找店铺工作人员确认，核销后不可再次领奖，请勿私自核销 。感谢参与，祝您生活愉快！",
    "fontSize": "14px",
    "color": "#6C6C6C",
    "padding": "0"
  },
  "buttonwanCard": {
    "hidden": false,
    "width": "100%",
    "height": "100%",
    "borderRadius": "",
    "boxShadowVShadow": "",
    "boxShadowBlur": "",
    "backgroundColor": "#FAFAFA"
  },
  "acNameField": {
    "value": ""
  },
  "roundField": {
    "value": ""
  },
  "imgList": {
    "value": []
  },
  "0ded82e1-3f32-400b-915d-b361c39f83db": {
    "value": "item.value"
  },
  "timeField": {
    "value": ""
  },
  "loseModal": {
    "visible": false
  },
  "buttonwan": {
    "shape": "circle",
    "text": "确认核销"
  }
};
  },
  watch: {
  },
    created(e) {
      this.onCreated(e);
    },
    mounted(e) {
      this.onMounted(e);
    },
    onLoad(e) {
      this.onOnLoad(e);
    },
  methods:{
    onCreated() {

  this.buttonwanCard.hidden
  this.acNameField.value
  this.writeOffModal.title
  this.writeOffText.text
  this.writeOffModal.showConfirmBtn



  this.getTime = () => {
    // 创建一个新的 Date 对象来获取当前时间
    let currentTime = new Date();
    // 自定义时间格式
    let year = currentTime.getFullYear();
    let month = String(currentTime.getMonth() + 1).padStart(2, '0'); // 月份需要加1，然后补零至两位
    let day = String(currentTime.getDate()).padStart(2, '0'); // 日期补零至两位
    let hours = String(currentTime.getHours()).padStart(2, '0'); // 小时补零至两位
    let minutes = String(currentTime.getMinutes()).padStart(2, '0'); // 分钟补零至两位
    let seconds = String(currentTime.getSeconds()).padStart(2, '0'); // 秒数补零至两位
    // 创建一个包含格式化时间的数据对象
    let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTime
  }
	//处理图片
  this.getImg = function(url) {
    if (!url || url.substring(0, 4) === 'http') {
      return url
    }
    return `/api/sys/common/static/${url}`;
  }
  
  //计算当前第几轮
  this.getCurrentRound = function(roundDates, currentTime) {
    // 将时间段字符串按逗号分割成数组
    let currentRound = -1;
    roundDates.forEach((round, index) => {
      let startEnd = round.split("至");
      let startDate = new Date(startEnd[0].trim());
      let endDate = new Date(startEnd[1].trim());
      if (currentTime >= startDate && currentTime <= endDate) {
        currentRound = index; // 返回轮次编号（从1开始）
      }
    });
    return currentRound;
  }
},
    onMounted() {
  console.log("获取数据---", this.activityId, this.storeId);
  //查询订单信息
  this.$getAction("/api/dkn/viewRegistrationOrders/list", {
    pageNo: 1,
    pageSize: 1,
    userId: this.userId,
    activityId: this.activityId,
  }).then(res => {
    console.log("res111--", res)
    if (res.code != 200 || res.result.records.length <= 0) {
      uni.showToast({
        title: "请重新查看活动信息",
        icon: "error",
        duration: 1000
      });
      setTimeout(() => {
        uni.navigateTo({
          url: "/pages/haomo/1753965929131151361/page?activityId=" + this.activityId + "&channelId=" + this.channelId
        })
      }, 1500);
      return
    }
    //保存订单信息
    this.registrationOrdersData = res.result.records[0];
    //姓名
    this.loopList.value[0].value = this.registrationOrdersData.name;
    //手机号
    this.loopList.value[1].value = this.registrationOrdersData.phone;
    this.loopList.value[2].value = this.registrationOrdersData.originalPickUpName;
    //活动名称
    this.acNameField.value = this.registrationOrdersData.acName;

    if (this.registrationOrdersData.paymentStatus != 0) {
      this.buttonwanCard.hidden = true;
    }
    let roundDates = this.registrationOrdersData.writeTimeGroups.split(",");
    let currentTime = new Date();
    let currentRound = this.getCurrentRound(roundDates, currentTime);
    this.roundField.value = "第"+(currentRound+1)+"轮核销"
    console.log("resqewqw--", currentRound, roundDates[currentRound])
  });
  //查询扫码的门店信息
  this.$getAction("/api/dkn/store/list", {
    pageNo: 1,
    pageSize: 1,
    id: this.storeId
  }).then(res => {
    console.log("res--", res)
    if (res.code != 200 || res.result.records.length <= 0) {
      uni.showToast({
        title: "请重新扫码",
        icon: "error",
        duration: 1000
      });
      setTimeout(() => {
        uni.navigateTo({
          url: "/pages/haomo/1752649989210771458/page?activityId=" + this.activityId + "&channelId=" + this.channelId
        })
      }, 1500);
      return
    }
    let item = res.result.records[0];
    //领奖门店
    this.loopList.value[3].value = item.name ?? "";
  })

  //查询奖品图片
  //查询扫码的门店信息
  this.$getAction("/api/dkn/activityImg/list", {
    pageNo: 1,
    pageSize: -1,
    activityId: this.activityId,
    type: 1,
    column: "sortNo",
    order: "asc"
  }).then(res => {
    console.log("res--", res)
    if (res.code != 200 || res.result.records.length <= 0) return
    this.imgList.value = res.result.records.map(item => {
      return {
        ...item,
        src: this.getImg(item.path)

      }
    })
  })

  //查询活动是否配置门店
  this.$getAction("/api/dkn/viewActivityStore/list", {
    pageNo: 1,
    pageSize: -1,
    activityId: this.activityId
  }).then(res => {
    console.log("viewActivityStore=res--", res)
    if (res.code != 200 || res.result.records.length <= 0) return
    //配置门店list
    this.storeList = res.result.records;

  })













},
    onOnLoad(options) {
  if (options.channelId) {
    this.channelId = options.channelId
  }
  if (!options.activityId || !options.storeId) {
    uni.showToast({
      title: "数据获取失败",
      icon: "error",
      duration: 2000
    });
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/haomo/1750714119029264386/page"
      })
    }, 2500);
    return
  }
  this.activityId = options.activityId;
  this.storeId = options.storeId;

  // 从本地缓存中获取userInfo
  let userInfoString = localStorage.getItem('userInfo');
  let userInfo = JSON.parse(userInfoString);
  this.userId = userInfo.data.id || "";
  if (!this.userId) {
    uni.showToast({
      title: "数据获取失败",
      icon: "error",
      duration: 1000
    });
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/haomo/1750714119029264386/page?activityId=" + this.activityId
      })
    }, 1500);
    return
  }
},

    onWriteOffModalOnConfirm () {

  this.$postAction("/api/dkn/orderPickUp/add", {
    orderId: this.registrationOrdersData.id,
    activityId: this.activityId,
    storeId: this.storeId,
    pickUpStatus: 0,
    pickUpTime: this.getTime(),
  }).then(res => {
    console.log("res--", res)
    if (!res.success) {
      uni.showToast({
        title: "核销失败",
        icon: "error",
        duration: 1000
      });
      return
    } else {
      uni.showToast({
        title: "核销成功",
        icon: "success",
        duration: 1000
      });
    }
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/haomo/1753965929131151361/page?activityId=" + this.activityId + "&channelId=" + this.channelId
      })
    }, 1500);
  })
},
    onButtonwanClick () {
  //活动配置了门店
  if (this.storeList && this.storeList.length > 0) {
    if (!this.storeList.some(obj => obj.id === this.storeId)) {
      this.writeOffModal.title = "核销失败！";
      this.writeOffText.text = "当前门店与报名登记门店范围不一致，不可进行核销，请移步到对应范围的门店进行核销！";
      this.writeOffModal.showConfirmBtn = false;
    } else {
      if (this.registrationOrdersData.storeId != this.storeId) {
        this.writeOffModal.title = "请寻找工作人员进行核销？";
        this.writeOffText.text = "【当前门店与报名领奖登记门店不一致】请寻找店铺工作人员确认，核销后订单将失效，请勿私自核销!";
      }
    }
  } else {
    //核销门店不一致
    if (this.registrationOrdersData.storeId != this.storeId) {
      this.writeOffModal.title = "请寻找工作人员进行核销？";
      this.writeOffText.text = "【当前门店与报名领奖登记门店不一致】请寻找店铺工作人员确认，核销后订单将失效，请勿私自核销!";
    }
  }

  this.writeOffModal.visible = true;

}
  }
};
</script>

<style lang="less" scoped>
.page {
  
}

.ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7 {
  width:100%;
height:100vh;
}

.ele-wrapper-loopList {
  width:100%;
background-color:#ffffff;
}

.ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db {
  width:100%;
/deep/.u-field{
height: 56px;
    display: flex;
    align-items: center;
}
/deep/.u-label-text{
  color: #999999;
}
}

.ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c {
  width:100%;
}

.ele-wrapper-acNameField {
  width:100%;
/deep/.u-field{
height: 56px;
    display: flex;
    align-items: center;
}
/deep/.u-label-text{
  color: #999999;
}
background-color:#fff;
}

.ele-wrapper-prizeImageBox {
  width:100%;
.ele-prizeImageBox{
  margin-top: 10px;
display: flex;
}
background-color:#fff;
}

.ele-wrapper-a46c4597-9e01-4191-8f9e-fc2396ae8aea {
  width:83px;
text-align: right !important;
}

.ele-wrapper-imgList {
  flex: 1;
margin-left:12px;
/deep/.uni-scroll-view-content{
display: flex;
    flex-wrap: wrap;
}
}

.ele-wrapper-2b090494-74e9-4208-93de-43455651c087 {
  margin-left:6rpx
}

.ele-wrapper-roundField {
  width:100%;
/deep/.u-field{
height: 56px;
    display: flex;
    align-items: center;
}
/deep/.u-label-text{
  color: #999999;
}
background-color:#fff;
margin-top:4px;
}

.ele-wrapper-timeField {
  width:100%;
/deep/.u-field{
height: 56px;
    display: flex;
    align-items: center;
}
/deep/.u-label-text{
  color: #999999;
}
background-color:#fff;
}

.ele-wrapper-37812c82-78a2-4dfe-b077-d34a6cc52c59 {
  width:100%;
height:100%;
margin-top:10px;
}

.ele-wrapper-writeOffText {
  margin:10px;
}

.ele-wrapper-6ff52555-3ffe-4b39-be25-816910b258c2 {
  width:100%;
height:100%;
margin-top:10px;
}

.ele-wrapper-c405710c-2544-4899-be45-7d87c1305304 {
  margin:10px;
}

.ele-wrapper-buttonwanCard {
  width:100%;
position: fixed;
bottom: 40px;
left: 0px;
}

.ele-wrapper-buttonwan {
  width:100%;
margin-top:30px;
/deep/.u-btn{
  background: linear-gradient(179.94deg, #FF9FC7 0%, #F32878 100%);
  color:#ffffff;
  height: 50px;
}
}

</style>
