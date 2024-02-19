<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          padding=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          background-color="#FAFAFA"
          class="ele-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
        >
          <view class="ele-wrapper ele-wrapper-messageTitle">
            <hm-uview-bg-card
              ref="messageTitle"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-messageTitle"
            >
              <view class="ele-wrapper ele-wrapper-messageText">
                <hm-uview-bg-card
                  ref="messageText"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  background-color="#FFFFFF00"
                  class="ele-messageText"
                >
                  <view class="ele-wrapper ele-wrapper-pickUpStatusText">
                    <hm-uview-text
                      ref="pickUpStatusText"
                      :text="pickUpStatusText.text"
                      :font-size="pickUpStatusText.fontSize"
                      :color="pickUpStatusText.color"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-acNameText">
                    <hm-uview-text
                      ref="acNameText"
                      :text="acNameText.text"
                      :font-size="acNameText.fontSize"
                      :color="acNameText.color"
                      :padding="acNameText.padding"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-pickUpTime">
                    <hm-uview-text
                      ref="pickUpTime"
                      :text="pickUpTime.text"
                      :font-size="pickUpTime.fontSize"
                      :color="pickUpTime.color"
                      :padding="pickUpTime.padding"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-messageCode">
                <hm-uview-bg-card
                  ref="messageCode"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  background-color="#FFFFFF00"
                >
                  <view
                    class="ele-wrapper ele-wrapper-3b0b65a9-03ab-4be8-89f2-1ace4afa48fd"
                  >
                    <hm-uview-image
                      src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/ScanCode.png"
                      width="40px"
                      height="40px"
                    >
                    </hm-uview-image>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              padding="15"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-2da4517d-7fb0-4bdc-825d-f295b2c74751"
            >
              <view class="ele-wrapper ele-wrapper-imgList">
                <event-registration-information-card
                  ref="imgList"
                  :list="imgList.list"
                  class="ele-imgList"
                >
                </event-registration-information-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              padding=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#FAFAFA"
              class="ele-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"
            >
              <view class="ele-wrapper ele-wrapper-loopList">
                <hm-loop
                  ref="loopList"
                  v-model:value="loopList.value"
                  class="ele-loopList"
                >
                  <template #default="{ item }">
                    <view
                      class="ele-wrapper ele-wrapper-21c5606d-d727-4143-a4ce-026bb85006c1"
                    >
                      <hm-uview-field
                        :value="item.value"
                        :label="item.label"
                        :placeholder="item.placeholder"
                        label-width="160"
                        :label-align="'center'"
                        maxlength="740"
                        icon=""
                        right-icon=""
                        :disabled="true"
                        class="ele-21c5606d-d727-4143-a4ce-026bb85006c1"
                      >
                      </hm-uview-field>
                    </view>
                  </template>
                </hm-loop>
              </view>
              <view class="ele-wrapper ele-wrapper-orderCard">
                <hm-uview-bg-card
                  ref="orderCard"
                  width="100%"
                  height="100%"
                  padding=""
                  box-shadow-color="#00000000"
                  class="ele-orderCard"
                >
                  <view class="ele-wrapper ele-wrapper-orderCode">
                    <hm-uview-field
                      ref="orderCode"
                      v-model:value="orderCode.value"
                      label="订单编号"
                      placeholder=""
                      label-width="160"
                      :label-align="'center'"
                      icon=""
                      right-icon=""
                      :border-bottom="false"
                      :disabled="true"
                      class="ele-orderCode"
                    >
                    </hm-uview-field>
                  </view>
                  <view class="ele-wrapper ele-wrapper-orderCodeBut">
                    <hm-uview-button
                      ref="orderCodeBut"
                      :size="orderCodeBut.size"
                      :text="orderCodeBut.text"
                      @click="onOrderCodeButClick"
                      class="ele-orderCodeBut"
                    >
                    </hm-uview-button>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-writeOffBtn">
            <hm-uview-bg-card
              ref="writeOffBtn"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#FAFAFA"
              class="ele-writeOffBtn"
            >
              <view
                class="ele-wrapper ele-wrapper-47b84e95-87e0-4feb-8373-dfa45ddaae2e"
              >
                <hm-uview-text
                  text="返回活动详情页"
                  font-size="15px"
                  color="#D8477B"
                  @onClick="onEle47B84E9587E04Feb8373Dfa45Ddaae2EOnClick"
                >
                </hm-uview-text>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-buttonwanCard">
            <hm-uview-bg-card
              ref="buttonwanCard"
              :width="buttonwanCard.width"
              :height="buttonwanCard.height"
              :border-radius="buttonwanCard.borderRadius"
              :box-shadow-v-shadow="buttonwanCard.boxShadowVShadow"
              :box-shadow-blur="buttonwanCard.boxShadowBlur"
              :background-color="buttonwanCard.backgroundColor"
              :hidden="buttonwanCard.hidden"
              class="ele-buttonwanCard"
            >
              <view class="ele-wrapper ele-wrapper-buttonwan">
                <hm-uview-button
                  ref="buttonwan"
                  :disabled="buttonwan.disabled"
                  :shape="buttonwan.shape"
                  :text="buttonwan.text"
                  @click="onButtonwanClick"
                  class="ele-buttonwan"
                >
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
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import EventRegistrationInformationCard from "/@/components/dkn-h-5/event-registration-information-card/index.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "NewActivityRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewImage,
    EventRegistrationInformationCard,
    HmLoop,
    HmUviewField,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      buttonwanCard: {
        width: "100%",
        height: "100%",
        borderRadius: "",
        boxShadowVShadow: "",
        boxShadowBlur: "",
        backgroundColor: "#FAFAFA",
        hidden: false,
      },
      orderCode: {
        value: "",
      },
      pickUpStatusText: {
        text: "待核销/已核销",
        fontSize: "17px",
        color: "#FFFFFF",
      },
      acNameText: {
        text: "活动名称",
        fontSize: "17px",
        color: "#FFFFFF",
        padding: "3",
      },
      pickUpTime: {
        text: "",
        fontSize: "12px",
        color: "#FFFFFF",
        padding: "2",
      },
      buttonwan: {
        disabled: false,
        shape: "circle",
        text: "核销",
      },
      loopList: {
        value: [
          {
            label: "姓名/昵称",
            placeholder: "",
            value: "",
          },
          {
            label: "手机号码",
            placeholder: "",
            value: "",
          },
          {
            label: "领奖门店",
            placeholder:
              "但是分开大煞风景撒看到冯绍峰的看法啊是剪短发短发都是发疯",
            value: "",
          },
          {
            label: "报名时间",
            placeholder: "",
            value: "",
          },
        ],
      },
      orderCdoe: {},
      registrationProjectField: {},
      userNameField: {},
      phoneField: {},
      storeNameField: {},
      registrationTimeField: {},
      activityNameField: {},
      verificationDeadlineField: {},
      writeStatusField: {},
      imgList: {
        list: [],
      },
      "21c5606d-d727-4143-a4ce-026bb85006c1": {
        value: "item.value",
      },
      orderCodeBut: {
        size: "mini",
        text: "复制",
      },
    };
  },
  watch: {},
  created(e) {
    this.onCreated(e);
  },
  mounted(e) {
    this.onMounted(e);
  },
  onLoad(e) {
    this.onOnLoad(e);
  },
  methods: {
    onCreated() {
      this.orderCode.value;
      this.pickUpStatusText.text;
      this.acNameText.text;
      this.pickUpTime.text;
      this.buttonwan.disabled;
      this.buttonwanCard.hidden;
      this.getImg = function (url) {
        if (url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
    },
    onMounted() {
      console.log("mounted");

      function isCurrentTimeInRange(startTime, endTime) {
        const currentTime = new Date();
        return (
          currentTime >= new Date(startTime) && currentTime <= new Date(endTime)
        );
      }
      let params = {};
      if (this.orderId) {
        params = {
          id: this.orderId,
          pageNo: 1,
          pageSize: 1,
        };
      } else {
        params = {
          pageNo: 1,
          pageSize: 1,
          userId: this.userId,
          activityId: this.activityId,
        };
      }
      this.$getAction("/api/dkn/viewRegistrationOrders/list", params).then(
        (res) => {
          console.log("res--viewRegistrationOrders", res);
          if (res.code != 200 || res.result.records.length <= 0) {
            uni.showToast({
              title: "请先活动报名",
              icon: "error",
              duration: 2000,
            });
            setTimeout(() => {
              uni.navigateTo({
                url:
                  "/pages/haomo/1750714119029264386/page?activityId=" +
                  this.activityId +
                  "&channelId=" +
                  this.channelId,
              });
            }, 1500);
            return;
          }
          let item = res.result.records[0];
          //保存订单id
          this.orderCode.value = item.code;
          this.activityId = item.activityId;
          //姓名
          this.loopList.value[0].value = item.name;
          //手机号
          this.loopList.value[1].value = item.phone;
          //领奖门店
          this.loopList.value[2].value = item.address;
          //报名时间
          this.loopList.value[3].value = item.createTime;
          this.pickUpStatusText.text = item.pickUpStatusText;
          this.acNameText.text = item.acName;
          let timeText =
            item.pickUpStartTime.split(" ")[0] +
            " - " +
            item.pickUpEndTime.split(" ")[0];
          this.pickUpTime.text = "请在" + timeText + "之内完成核销";

          /*this.orderCdoe.text = `订单编号：${item.code}`
    this.registrationProjectField.value = item.acName ?? "";
    this.userNameField.value = item.name ?? "";
    this.phoneField.value = item.phone ?? "";
    this.storeNameField.value = item.originalPickUpName ?? "";
    this.registrationTimeField.value = item.paymentTime ?? "";
    this.activityNameField.value = item.acName ?? "";
    this.verificationDeadlineField.value = item.pickUpStartTime.split(' ')[0] + " - " + item.pickUpEndTime.split(' ')[0];
    this.writeStatusField.value = item.pickUpStatusText ?? "";*/
          //如果已核销或者已经过了截止时间
          if (
            item.pickUpStatus == 0 ||
            !isCurrentTimeInRange(
              item.pickUpStartTime.split(" ")[0] + " 00:00:00",
              item.pickUpEndTime.split(" ")[0] + " 23:59:59"
            )
          ) {
            this.buttonwanCard.hidden = true;
          }

          //根据订单id查询项目
          this.$getAction("/api/dkn/viewOrderActivityProject/list", {
            pageNo: 1,
            pageSize: -1,
            orderId: item.id,
          }).then((orderProjectRes) => {
            if (orderProjectRes.code != 200 || res.result.records.length <= 0) {
              return;
            }
            //this.loopList.value = orderProjectRes.result.records

            this.imgList.list = orderProjectRes.result.records.map((item) => {
              return {
                ...item,
                checked: true,
                image: this.getImg(item.imgPath),
                description: item.synopsis,
                price: item.expense,
                number: item.num,
              };
            });
          });
        }
      );
    },
    onOnLoad(options) {
      console.log("onLoad");
      if (options.channelId) {
        this.channelId = options.channelId;
      }
      if (options.type) {
        this.type = options.type;
      }
      if (options.storeId) {
        this.storeId = options.storeId;
      }
      if (options.orderId) {
        this.orderId = options.orderId;
        return;
      }

      //活动id
      if (!options.activityId) {
        uni.showToast({
          title: "数据获取失败",
          icon: "error",
          duration: 1000,
        });
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/haomo/1750714119029264386/page",
          });
        }, 1500);
        return;
      }
      this.activityId = options.activityId;

      // 从本地缓存中获取userInfo
      let userInfoString = localStorage.getItem("userInfo");
      let userInfo = JSON.parse(userInfoString);
      this.userId = userInfo.data.id || "";
      if (!this.userId) {
        uni.showToast({
          title: "数据获取失败",
          icon: "error",
          duration: 1000,
        });
        setTimeout(() => {
          uni.navigateTo({
            url:
              "/pages/haomo/1750714119029264386/page?activityId=" +
              this.activityId +
              "&channelId=" +
              this.channelId,
          });
        }, 1500);
        return;
      }
    },

    onOrderCodeButClick() {
      uni.setClipboardData({
        data: this.orderCode.value,
        success: function () {
          console.log(this.orderCode.value);
        },
      });
    },
    onEle47B84E9587E04Feb8373Dfa45Ddaae2EOnClick() {
      let url =
        "/pages/haomo/1750714119029264386/page?activityId=" +
        this.activityId +
        "&type=1";
      if (this.channelId) {
        url = url + "&channelId=" + this.channelId;
      }
      uni.navigateTo({
        url: url,
      });
    },
    onButtonwanClick() {
      if (this.type) {
        uni.navigateTo({
          url:
            "/pages/haomo/1754031921416900610/page?activityId=" +
            this.activityId +
            "&channelId=" +
            this.channelId +
            "&storeId=" +
            this.storeId,
        });
        return;
      }
      uni.navigateTo({
        url:
          "/pages/haomo/1752649989210771458/page?activityId=" +
          this.activityId +
          "&channelId=" +
          this.channelId,
      });

      /*uni.navigateTo({
    url: "/pages/haomo/1754031921416900610/page?activityId=" +
      this.activityId +
      "&storeId=0f79951222fd4a8a8b815177b29f013a" +
      "&channelId=" +
      this.channelId,
  });*/
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46 {
  width: 100%;
  height: 100vh;
}

.ele-wrapper-messageTitle {
  width: 100%;
  height: 121px;
  .ele-messageTitle {
    background: radial-gradient(
      50% 94.19%,
      #ffffff -150%,
      #e1a4b9 7.58%,
      #c6537b 100%
    ) !important;
  }
  .ele-messageTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.ele-wrapper-messageText {
  .hm-bg-card {
    display: flex;
    flex-direction: column;
  }
}

.ele-wrapper-2da4517d-7fb0-4bdc-825d-f295b2c74751 {
  width: 100%;
}

.ele-wrapper-imgList {
  width: 100%;
}

.ele-wrapper-25fbac4b-fb00-45c5-9cf7-ed73dec88f58 {
  width: 100%;
}

.ele-wrapper-loopList {
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
}

.ele-wrapper-21c5606d-d727-4143-a4ce-026bb85006c1 {
  width: 100%;
}

.ele-wrapper-orderCard {
  width: 100%;
  margin-top: 10px;
}

.ele-wrapper-orderCode {
  width: 82%;

  background-color: #ffffff;
}

.ele-wrapper-orderCodeBut {
  width: 18%;
}

.ele-wrapper-writeOffBtn {
  width: 100%;
  .ele-writeOffBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin-top: 30px;
}

.ele-wrapper-buttonwanCard {
  width: 100%;
  .ele-writeOffBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin-top: 30px;
}

.ele-wrapper-buttonwan {
  width: 100%;
  /deep/.u-btn {
    color: #ffffff;
    height: 50px;
    background: linear-gradient(179.94deg, #ff9fc7 0%, #f32878 100%);
  }
}
</style>
