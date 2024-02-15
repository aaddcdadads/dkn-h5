<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="0" box-shadow-v-shadow="" box-shadow-blur="" background-color="#FAFAFA" class="ele-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"> 
            <view class="ele-wrapper ele-wrapper-loopList">
      <hm-loop ref="loopList" v-model:value="loopList.value" class="ele-loopList"> 
      <template #default="{item}">
              <view class="ele-wrapper ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db">
      <hm-uview-field value="" :label="item.label" placeholder="" label-width="160" :label-align="'center'" icon="" right-icon="" :disabled="true" class="ele-0ded82e1-3f32-400b-915d-b361c39f83db"> 
    </hm-uview-field>
    </view> 
          </template> 
    </hm-loop>
    </view> 
            <view class="ele-wrapper ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c">
      <hm-uview-bg-card width="100%" height="100%" border-radius="" padding="" box-shadow-v-shadow="" box-shadow-blur="" class="ele-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c"> 
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
            <view class="ele-wrapper ele-wrapper-315c9068-5a40-4c3b-9b6d-3841b926c816">
      <hm-loop :value='[{"src":"https://img.yzcdn.cn/vant/cat.jpeg"}]' class="ele-315c9068-5a40-4c3b-9b6d-3841b926c816"> 
      <template #default="{item}">
              <view class="ele-wrapper ele-wrapper-2b090494-74e9-4208-93de-43455651c087">
      <loop-img :src="item.src" width="80px" height="80px"> 
       
    </loop-img>
    </view> 
          </template> 
    </hm-loop>
    </view> 
    </hm-uview-bg-card>
    </view> 
            <view class="ele-wrapper ele-wrapper-writeOffModal">
      <hm-uview-modal ref="writeOffModal" v-model:visible="writeOffModal.visible" :title="writeOffModal.title" confirm-color="#2979FF" :show-close-icon="false" height="80px" @onConfirm="onWriteOffModalOnConfirm"> 
            <view class="ele-wrapper ele-wrapper-ac98e48c-05a4-4736-bcc2-9a8d99ceb35a">
      <hm-uview-text text="当前门店与报名登记门店不一致，需要强制核销？核销后不可再次领取奖品！" font-size="14px" color="#6C6C6C" class="ele-ac98e48c-05a4-4736-bcc2-9a8d99ceb35a"> 
       
    </hm-uview-text>
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
      }
    ]
  },
  "registrationOrdersData": {},
  "inputClaimStore": {},
  "writeOffModal": {
    "title": "核销",
    "visible": false
  },
  "writeOffText": {},
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
  "registrationOrdersDatathis": {},
  "prizeListComponent": {},
  "0ded82e1-3f32-400b-915d-b361c39f83db": {
    "value": ""
  },
  "315c9068-5a40-4c3b-9b6d-3841b926c816": {
    "value": [
      {
        "src": "https://img.yzcdn.cn/vant/cat.jpeg"
      }
    ]
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

  this.getImg = function(url) {
    if (url.substring(0, 4) === 'http') {
      return url
    }
    return `/api/sys/common/static/${url}`;
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
    this.loopList.value[0].value = this.registrationOrdersData.realname;
    //手机号
    this.loopList.value[1].value = this.registrationOrdersDatathis.registrationOrdersData.phone;
    //活动名称
    this.loopList.value[2].value = this.registrationOrdersData.acName;

    if (this.registrationOrdersData.paymentStatus != 0) {
      this.buttonwanCard.hidden = true;
    }
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
    this.acNameField.value = item.name ?? "";
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
    this.prizeListComponent.funcList = res.result.records.map(item => {
      return {
        ...item,
        src: this.getImg(item.path),
        textbottom: item.name
      }
    })

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
        url: "/pages/haomo/1750443401116913665/page?activityId=" + this.activityId + "&channelId=" + this.channelId
      })
    }, 1500);
  })
},
    onButtonwanClick () {

  if (this.registrationOrdersData.originalPickUpName != this.inputClaimStore.value) {
    this.writeOffModal.title = "强制核销";
    this.writeOffText.text = "当前门店与报名登记门店不一致，需要强制核销？核销后不可再次领取奖品！";
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
}

.ele-wrapper-prizeImageBox {
  width:100%;
.ele-prizeImageBox{
  margin-top: 10px;
display: flex;
}
}

.ele-wrapper-a46c4597-9e01-4191-8f9e-fc2396ae8aea {
  width:83px;
text-align: right !important;
}

.ele-wrapper-315c9068-5a40-4c3b-9b6d-3841b926c816 {
  flex: 1;
margin-left:12px;
/deep/.uni-scroll-view-content{
display: flex;
    flex-wrap: wrap;
}
}

.ele-wrapper-ac98e48c-05a4-4736-bcc2-9a8d99ceb35a {
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
