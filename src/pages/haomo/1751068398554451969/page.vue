<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          padding=""
          class="ele-c57e9abe-e655-4515-acc3-575489ca1e33"
        >
          <view
            class="ele-wrapper ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              :text-align="'center'"
              padding=""
              box-shadow-h-shadow=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-color="#F0F0F000"
              background-color="#F0F0F0"
              class="ele-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
            >
              <view
                class="ele-wrapper ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
              >
                <hm-uview-bg-card
                  padding=""
                  box-shadow-blur=""
                  box-shadow-v-shadow=""
                  border-radius=""
                  width="100%"
                  height="100%"
                  :text-align="'center'"
                  class="ele-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
                >
                  <view
                    class="ele-wrapper ele-wrapper-3594e500-632d-42e8-b3b9-d485a0f784a5"
                  >
                    <hm-uview-bg-card
                      padding=""
                      box-shadow-blur=""
                      border-color="#B0B0B0"
                      box-shadow-v-shadow=""
                      width="100%"
                      border-width="1"
                      height=""
                      :text-align="'right'"
                      class="ele-3594e500-632d-42e8-b3b9-d485a0f784a5"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-c1321652-9bb5-410d-a15c-df20fe88d984"
                      >
                        <hm-uview-text
                          padding="0"
                          font-size="13px"
                          text="姓名/昵称:"
                          class="ele-c1321652-9bb5-410d-a15c-df20fe88d984"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-inputMane">
                        <hm-uview-field
                          ref="inputMane"
                          icon=""
                          label=""
                          label-width="0"
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          placeholder="报名项目名称 x 数量"
                          v-model:value="inputMane.value"
                          class="ele-inputMane"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9"
                  >
                    <hm-uview-bg-card
                      padding=""
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      width="100%"
                      height=""
                      :text-align="'right'"
                      class="ele-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-f2027eca-bb01-45c1-99a4-55ff0de5ada0"
                      >
                        <hm-uview-text
                          padding="0"
                          font-size="13px"
                          text="手机号码:"
                          class="ele-f2027eca-bb01-45c1-99a4-55ff0de5ada0"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-inputPhoneNumber">
                        <hm-uview-field
                          ref="inputPhoneNumber"
                          icon=""
                          label=""
                          label-width="0"
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          placeholder="报名手机号码"
                          v-model:value="inputPhoneNumber.value"
                          class="ele-inputPhoneNumber"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0"
                  >
                    <hm-uview-bg-card
                      padding=""
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      width="100%"
                      height=""
                      :text-align="'right'"
                      class="ele-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-fb3d49e3-aa6d-4761-8222-bc41e4395857"
                      >
                        <hm-uview-text
                          padding="0"
                          font-size="13px"
                          text="领奖门店:"
                          class="ele-fb3d49e3-aa6d-4761-8222-bc41e4395857"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-inputClaimStore">
                        <hm-uview-field
                          ref="inputClaimStore"
                          icon=""
                          label=""
                          label-width="0"
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          placeholder="区域/门店名称"
                          v-model:value="inputClaimStore.value"
                          class="ele-inputClaimStore"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-41f7b43e-8542-4a04-ac12-f8bdeac98d58"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  :text-align="'center'"
                  padding=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-41f7b43e-8542-4a04-ac12-f8bdeac98d58"
                >
                  <view
                    class="ele-wrapper ele-wrapper-920b3665-1af5-40df-908e-748003d3af93"
                  >
                    <hm-uview-bg-card
                      padding=""
                      box-shadow-blur=""
                      box-shadow-v-shadow=""
                      width="100%"
                      height=""
                      :text-align="'right'"
                      class="ele-920b3665-1af5-40df-908e-748003d3af93"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-2ecc38bd-15e4-4ee4-9c5f-50b3b6d0846c"
                      >
                        <hm-uview-text
                          text="活动名称:"
                          font-size="13px"
                          padding="0"
                          class="ele-2ecc38bd-15e4-4ee4-9c5f-50b3b6d0846c"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-inputActivityName">
                        <hm-uview-field
                          ref="inputActivityName"
                          icon=""
                          label=""
                          label-width="0"
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          placeholder="活动名称"
                          v-model:value="inputActivityName.value"
                          class="ele-inputActivityName"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-6c9ec785-f135-40cb-9d49-e774f8bd851e"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height="100%"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-6c9ec785-f135-40cb-9d49-e774f8bd851e"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-26f8e5b0-a98e-4879-9f6f-3f8f3819a511"
                      >
                        <hm-uview-text
                          text="活动奖品:"
                          font-size="13px"
                          padding="0"
                          class="ele-26f8e5b0-a98e-4879-9f6f-3f8f3819a511"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-57f09a13-8f55-4241-a6cc-270dd43ca1ba"
                      >
                        <hm-uview-image
                          class="ele-57f09a13-8f55-4241-a6cc-270dd43ca1ba"
                        >
                        </hm-uview-image>
                      </view>
                      <view class="ele-wrapper ele-wrapper-prizeListComponent">
                        <prize-list-component
                          ref="prizeListComponent"
                          :func-list="prizeListComponent.funcList"
                          :background-color="prizeListComponent.backgroundColor"
                          class="ele-prizeListComponent"
                        >
                        </prize-list-component>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-writeOffModal">
                    <hm-uview-modal
                      ref="writeOffModal"
                      v-model:visible="writeOffModal.visible"
                      :title="writeOffModal.title"
                      height="100px"
                      @onConfirm="onWriteOffModalOnConfirm"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-fae45550-c6de-4f42-bab5-dcdccb9fdedf"
                      >
                        <hm-uview-bg-card
                          width="100%"
                          height="100%"
                          :text-align="'center'"
                          box-shadow-color="#00000000"
                          class="ele-fae45550-c6de-4f42-bab5-dcdccb9fdedf"
                        >
                          <view class="ele-wrapper ele-wrapper-writeOffText">
                            <hm-uview-text
                              ref="writeOffText"
                              :text="writeOffText.text"
                              :font-size="writeOffText.fontSize"
                            >
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                    </hm-uview-modal>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-buttonwan">
                <hm-uview-button
                  ref="buttonwan"
                  :disabled="buttonwan.disabled"
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
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import PrizeListComponent from "/@/components/dkn-h-5/prize-list-component/index.vue";
import HmUviewModal from "/@/components/built-in/uniapp-uview-vue3/HmUviewModal.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "VerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewField,
    HmUviewImage,
    PrizeListComponent,
    HmUviewModal,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      buttonwan: {
        text: "确认核销",
        disabled: false,
      },
      registrationOrdersData: {},
      inputClaimStore: {
        value: "",
      },
      writeOffModal: {
        visible: false,
        title: "核销",
      },
      writeOffText: {
        text: "确认核销？",
        fontSize: "16px",
      },
      inputMane: {
        value: "",
      },
      inputPhoneNumber: {
        value: "",
      },
      inputActivityName: {
        value: "",
      },
      prizeListComponent: {
        funcList: [],
        backgroundColor: "#FFFFFF",
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
      this.inputMane.value;
      this.inputPhoneNumber.value;
      this.inputClaimStore.value;
      this.inputActivityName.value;
      this.writeOffModal.visible;
      this.writeOffText.text;
      this.writeOffModal.title;
      this.buttonwan.disabled;

      this.getTime = () => {
        // 创建一个新的 Date 对象来获取当前时间
        let currentTime = new Date();
        // 自定义时间格式
        let year = currentTime.getFullYear();
        let month = String(currentTime.getMonth() + 1).padStart(2, "0"); // 月份需要加1，然后补零至两位
        let day = String(currentTime.getDate()).padStart(2, "0"); // 日期补零至两位
        let hours = String(currentTime.getHours()).padStart(2, "0"); // 小时补零至两位
        let minutes = String(currentTime.getMinutes()).padStart(2, "0"); // 分钟补零至两位
        let seconds = String(currentTime.getSeconds()).padStart(2, "0"); // 秒数补零至两位
        // 创建一个包含格式化时间的数据对象
        let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedTime;
      };
    },
    onMounted() {
      console.log("获取数据---", this.activityId, this.storeId);
      //查询订单信息
      this.$getAction("/api/dkn/viewRegistrationOrders/list", {
        pageNo: 1,
        pageSize: 1,
        userId: this.userId,
        activityId: this.activityId,
      }).then((res) => {
        console.log("res--", res);
        if (res.code != 200 || res.result.records.length <= 0) {
          uni.showToast({
            title: "请重新查看活动信息",
            icon: "error",
            duration: 1000,
          });
          setTimeout(() => {
            uni.navigateTo({
              url:
                "/pages/haomo/1750443401116913665/page?activityId=" +
                this.activityId,
            });
          }, 1500);
          return;
        }
        //保存订单信息
        this.registrationOrdersData = res.result.records[0];

        this.inputMane.value = this.registrationOrdersData.name ?? "";
        this.inputPhoneNumber.value = this.registrationOrdersData.phone ?? "";
        this.inputActivityName.value = this.registrationOrdersData.acName ?? "";
        if (this.registrationOrdersData.paymentStatus != 0) {
          this.buttonwan.disabled = true;
        }
      });
      //查询扫码的门店信息
      this.$getAction("/api/dkn/store/list", {
        pageNo: 1,
        pageSize: 1,
        id: this.storeId,
      }).then((res) => {
        console.log("res--", res);
        if (res.code != 200 || res.result.records.length <= 0) {
          uni.showToast({
            title: "请重新扫码",
            icon: "error",
            duration: 1000,
          });
          setTimeout(() => {
            uni.navigateTo({
              url:
                "/pages/haomo/1752649989210771458/page?activityId=" +
                this.activityId,
            });
          }, 1500);
          return;
        }
        let item = res.result.records[0];
        this.inputClaimStore.value = item.name ?? "";
      });
      this.getImg = function (url) {
        if (url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
      //查询奖品图片
      //查询扫码的门店信息
      this.$getAction("/api/dkn/activityImg/list", {
        pageNo: 1,
        pageSize: -1,
        activityId: this.activityId,
        type: 1,
        column: "sortNo",
        order: "asc",
      }).then((res) => {
        console.log("res--", res);
        if (res.code != 200 || res.result.records.length <= 0) return;
        this.prizeListComponent.funcList = res.result.records.map((item) => {
          return {
            ...item,
            bgUrl: this.getImg(item.path),
            textbottom: item.name,
          };
        });
      });
    },
    onOnLoad(options) {
      if (!options.activityId || !options.storeId) {
        uni.showToast({
          title: "数据获取失败",
          icon: "error",
          duration: 2000,
        });
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/haomo/1750714119029264386/page",
          });
        }, 2500);
        return;
      }
      this.activityId = options.activityId;
      this.storeId = options.storeId;

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
              this.activityId,
          });
        }, 1500);
        return;
      }
    },

    onWriteOffModalOnConfirm() {
      this.$postAction("/api/dkn/orderPickUp/add", {
        orderId: this.registrationOrdersData.id,
        activityId: this.activityId,
        storeId: this.storeId,
        pickUpStatus: 0,
        pickUpTime: this.getTime(),
      }).then((res) => {
        console.log("res--", res);
        if (!res.success) {
          uni.showToast({
            title: "核销失败",
            icon: "error",
            duration: 1000,
          });
          return;
        } else {
          uni.showToast({
            title: "核销成功",
            icon: "success",
            duration: 1000,
          });
        }
        setTimeout(() => {
          uni.navigateTo({
            url:
              "/pages/haomo/1750443401116913665/page?activityId=" +
              this.activityId,
          });
        }, 1500);
      });
    },
    onButtonwanClick() {
      if (
        this.registrationOrdersData.originalPickUpName !=
        this.inputClaimStore.value
      ) {
        this.writeOffModal.title = "强制核销";
        this.writeOffText.text =
          "当前门店与报名登记门店不一致，需要强制核销？核销后不可再次领取奖品！";
      }
      this.writeOffModal.visible = true;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33 {
  width: 100%;
  height: 100vh;
}

.ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2 {
  width: 100%;
}

.ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5 {
  width: 100%;
}

.ele-wrapper-3594e500-632d-42e8-b3b9-d485a0f784a5 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: calc(39px + env(safe-area-inset-top));
  /deep/.hm-bg-card {
    margin-top: 15px;
  }
}

.ele-wrapper-c1321652-9bb5-410d-a15c-df20fe88d984 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-inputMane {
  width: 65%;
  margin-right: 10%;
  height: 45px;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-inputMane {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.ele-wrapper-f2027eca-bb01-45c1-99a4-55ff0de5ada0 {
  padding: 13px 7px;
  vertical-align: top;
  margin-left: 10px;
}

.ele-wrapper-inputPhoneNumber {
  width: 65%;
  margin-right: 10%;
  height: 45px;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-inputPhoneNumber {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.ele-wrapper-fb3d49e3-aa6d-4761-8222-bc41e4395857 {
  padding: 13px 7px;
  vertical-align: top;
  margin-left: 10px;
}

.ele-wrapper-inputClaimStore {
  width: 65%;
  margin-right: 10%;
  height: 45px;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-inputClaimStore {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-41f7b43e-8542-4a04-ac12-f8bdeac98d58 {
  width: 100%;
}

.ele-wrapper-920b3665-1af5-40df-908e-748003d3af93 {
  width: 100%;
  display: flex;
  align-items: center;
  /deep/.hm-bg-card {
    margin: 10px 0px 10px 0px;
  }
}

.ele-wrapper-2ecc38bd-15e4-4ee4-9c5f-50b3b6d0846c {
  padding: 13px 7px;
  vertical-align: top;
  margin-left: 10px;
}

.ele-wrapper-inputActivityName {
  width: 65%;
  margin-right: 10%;
  height: 45px;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-inputActivityName {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-6c9ec785-f135-40cb-9d49-e774f8bd851e {
  width: 100%;
  display: flex;
  align-items: center;
  /deep/.hm-bg-card {
    margin-bottom: 10px;
  }
}

.ele-wrapper-26f8e5b0-a98e-4879-9f6f-3f8f3819a511 {
  padding: 13px 7px;
  vertical-align: top;
  margin-left: 33px;
}

.ele-wrapper-57f09a13-8f55-4241-a6cc-270dd43ca1ba {
  margin-left: 2px;
  display: none;
}

.ele-wrapper-prizeListComponent {
  width: 90%;
  margin-left: 5%;
}

.ele-wrapper-fae45550-c6de-4f42-bab5-dcdccb9fdedf {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}

.ele-wrapper-buttonwan {
  width: 80%;
  margin-top: 30%;
  height: 50px;
  /deep/.ele-Buttonwan {
    font-weight: 400;
    background-color: rgb(89, 213, 165);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    height: 40px;
    border: 0px;
    font-size: 16px;
  }
}
</style>
