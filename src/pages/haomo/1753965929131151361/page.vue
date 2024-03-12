<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
      >
        <hm-uview-bg-card
          padding=""
          box-shadow-blur=""
          box-shadow-v-shadow=""
          border-radius=""
          background-color="#FAFAFA"
          width="100%"
          height="100%"
          class="ele-aeb7bbd5-76d1-4b56-8fcf-4839bc19aa46"
        >
          <view class="ele-wrapper ele-wrapper-messageTitle">
            <hm-uview-bg-card
              ref="messageTitle"
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              width="100%"
              height="100%"
              class="ele-messageTitle"
            >
              <view class="ele-wrapper ele-wrapper-messageText">
                <hm-uview-bg-card
                  ref="messageText"
                  box-shadow-blur=""
                  box-shadow-v-shadow=""
                  border-radius=""
                  background-color="#FFFFFF00"
                  width="100%"
                  height="100%"
                  class="ele-messageText"
                >
                  <view class="ele-wrapper ele-wrapper-pickUpStatusText">
                    <hm-uview-text
                      ref="pickUpStatusText"
                      :color="pickUpStatusText.color"
                      :font-size="pickUpStatusText.fontSize"
                      :text="pickUpStatusText.text"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-acNameText">
                    <hm-uview-text
                      ref="acNameText"
                      :padding="acNameText.padding"
                      :color="acNameText.color"
                      :font-size="acNameText.fontSize"
                      :text="acNameText.text"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-pickUpTime">
                    <hm-uview-text
                      ref="pickUpTime"
                      :padding="pickUpTime.padding"
                      :color="pickUpTime.color"
                      :font-size="pickUpTime.fontSize"
                      :text="pickUpTime.text"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-messageCode">
                <hm-uview-bg-card
                  ref="messageCode"
                  box-shadow-blur=""
                  box-shadow-v-shadow=""
                  border-radius=""
                  background-color="#FFFFFF00"
                  width="100%"
                  height="100%"
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
              padding="15"
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              width="100%"
              height="100%"
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
              padding=""
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              background-color="#FAFAFA"
              width="100%"
              height="100%"
              class="ele-25fbac4b-fb00-45c5-9cf7-ed73dec88f58"
            >
              <view class="ele-wrapper ele-wrapper-loopList">
                <hm-loop
                  ref="loopList"
                  :get-data-map="loopList.getDataMap"
                  :refresh-config="loopList.refreshConfig"
                  v-model:value="loopList.value"
                  class="ele-loopList"
                >
                  <template #default="{ item }">
                    <view
                      class="ele-wrapper ele-wrapper-21c5606d-d727-4143-a4ce-026bb85006c1"
                    >
                      <hm-uview-field
                        :value="item.value"
                        :type="item.type"
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
              <view
                class="ele-wrapper ele-wrapper-175f2356-1c32-4ff9-ada5-4a2ca1772149"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  padding="0"
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-175f2356-1c32-4ff9-ada5-4a2ca1772149"
                >
                  <view
                    class="ele-wrapper ele-wrapper-personnelInformationList"
                  >
                    <hm-loop
                      ref="personnelInformationList"
                      v-model:value="personnelInformationList.value"
                      :get-data-map="personnelInformationList.getDataMap"
                      :refresh-config="personnelInformationList.refreshConfig"
                      class="ele-personnelInformationList"
                    >
                      <template #default="{ item }">
                        <view
                          class="ele-wrapper ele-wrapper-8ae6c1ae-5d0c-40f6-836c-616584055652"
                        >
                          <package-number-component
                            :func-list="item.list"
                            :title="item.name"
                            class="ele-8ae6c1ae-5d0c-40f6-836c-616584055652"
                          >
                          </package-number-component>
                        </view>
                      </template>
                    </hm-loop>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-a6cd4a45-fa66-4a6f-adbb-468a3084b102"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-a6cd4a45-fa66-4a6f-adbb-468a3084b102"
                >
                  <view
                    class="ele-wrapper ele-wrapper-56be6aaa-dd55-4898-a56f-d9e9f214001b"
                  >
                    <hm-uview-text
                      color="#303133"
                      font-size="14px"
                      text="奖品"
                      class="ele-56be6aaa-dd55-4898-a56f-d9e9f214001b"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-activityImgList">
                    <hm-loop
                      ref="activityImgList"
                      :get-data-map="activityImgList.getDataMap"
                      :refresh-config="activityImgList.refreshConfig"
                      v-model:value="activityImgList.value"
                      class="ele-activityImgList"
                    >
                      <template #default="{ item }">
                        <view
                          class="ele-wrapper ele-wrapper-f02e475f-dcaa-4baa-af0d-dec9fd130516"
                        >
                          <hm-uview-bg-card
                            padding="0"
                            box-shadow-color="#00000000"
                            width="80"
                            height=""
                            class="ele-f02e475f-dcaa-4baa-af0d-dec9fd130516"
                          >
                            <view
                              class="ele-wrapper ele-wrapper-41068093-4315-486b-9510-85a9b68ae7f7"
                            >
                              <hm-uview-image
                                width="80px"
                                border-redius="12px"
                                height="80px"
                                class="ele-41068093-4315-486b-9510-85a9b68ae7f7"
                              >
                              </hm-uview-image>
                            </view>
                            <view
                              class="ele-wrapper ele-wrapper-1a96e10e-6c33-42db-a254-9399b96eeaf6"
                            >
                              <hm-uview-text
                                font-size="14px"
                                class="ele-1a96e10e-6c33-42db-a254-9399b96eeaf6"
                              >
                              </hm-uview-text>
                            </view>
                          </hm-uview-bg-card>
                        </view>
                      </template>
                    </hm-loop>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-8d2821d9-d7dc-4815-b575-a23d170a81e3"
                  >
                    <hm-uview-bg-card
                      box-shadow-color="#00000000"
                      border-radius=""
                      width="100%"
                      height=""
                      class="ele-8d2821d9-d7dc-4815-b575-a23d170a81e3"
                    >
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-9e394a0e-dc6c-49b2-b6a4-cd9d8ed65001"
              >
                <hm-uview-bg-card
                  padding=""
                  box-shadow-color="#00000000"
                  width="100%"
                  height="100%"
                  class="ele-9e394a0e-dc6c-49b2-b6a4-cd9d8ed65001"
                >
                  <view
                    class="ele-wrapper ele-wrapper-d6fce4cb-04be-422f-92ad-0574acb7bb6e"
                  >
                    <hm-uview-field
                      :label-align="'center'"
                      maxlength="740"
                      icon=""
                      label="活动名称"
                      label-width="160"
                      right-icon=""
                      :disabled="true"
                      placeholder="活动名称"
                      value=""
                      class="ele-d6fce4cb-04be-422f-92ad-0574acb7bb6e"
                    >
                    </hm-uview-field>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-fd6a981c-8148-4be4-b176-9fd3de2528a2"
                  >
                    <hm-uview-field
                      :label-align="'center'"
                      maxlength="740"
                      icon=""
                      label="核销截止"
                      label-width="160"
                      right-icon=""
                      :disabled="true"
                      placeholder=""
                      value=""
                      class="ele-fd6a981c-8148-4be4-b176-9fd3de2528a2"
                    >
                    </hm-uview-field>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-7a7c7e9f-3619-4060-a495-72ad01e1b0ea"
                  >
                    <hm-uview-field
                      :label-align="'center'"
                      maxlength="740"
                      icon=""
                      label="核销状态"
                      label-width="160"
                      right-icon=""
                      :disabled="true"
                      placeholder="待核销/已核销"
                      value=""
                      class="ele-7a7c7e9f-3619-4060-a495-72ad01e1b0ea"
                    >
                    </hm-uview-field>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-orderCard">
                <hm-uview-bg-card
                  ref="orderCard"
                  padding=""
                  box-shadow-color="#00000000"
                  width="100%"
                  height="100%"
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
              box-shadow-blur=""
              box-shadow-v-shadow=""
              border-radius=""
              background-color="#FAFAFA"
              width="100%"
              height="100%"
              class="ele-writeOffBtn"
            >
              <view
                class="ele-wrapper ele-wrapper-47b84e95-87e0-4feb-8373-dfa45ddaae2e"
              >
                <hm-uview-text
                  color="#D8477B"
                  font-size="15px"
                  text="返回活动详情页"
                  @onClick="onEle47B84E9587E04Feb8373Dfa45Ddaae2EOnClick"
                >
                </hm-uview-text>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-buttonwanCard">
            <hm-uview-bg-card
              ref="buttonwanCard"
              :box-shadow-blur="buttonwanCard.boxShadowBlur"
              :hidden="buttonwanCard.hidden"
              :box-shadow-v-shadow="buttonwanCard.boxShadowVShadow"
              :border-radius="buttonwanCard.borderRadius"
              :background-color="buttonwanCard.backgroundColor"
              :width="buttonwanCard.width"
              :height="buttonwanCard.height"
              class="ele-buttonwanCard"
            >
              <view class="ele-wrapper ele-wrapper-buttonwan">
                <hm-uview-button
                  ref="buttonwan"
                  :shape="buttonwan.shape"
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
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import EventRegistrationInformationCard from "/@/components/dkn-h-5/event-registration-information-card/index.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import PackageNumberComponent from "/@/components/dkn-h-5/package-number-component/index.vue";
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
    PackageNumberComponent,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      buttonwanCard: {
        boxShadowBlur: "",
        boxShadowVShadow: "",
        borderRadius: "",
        backgroundColor: "#FAFAFA",
        width: "100%",
        height: "100%",
        hidden: false,
      },
      orderCode: {
        value: "",
      },
      pickUpStatusText: {
        text: "待核销/已核销",
        color: "#FFFFFF",
        fontSize: "17px",
      },
      acNameText: {
        text: "活动名称",
        padding: "3",
        color: "#FFFFFF",
        fontSize: "17px",
      },
      pickUpTime: {
        text: "",
        padding: "2",
        color: "#FFFFFF",
        fontSize: "12px",
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
            placeholder: "",
            type: "textarea",
            value: "",
          },
          {
            label: "领奖地址",
            placeholder: "",
            type: "textarea",
            value: "",
          },
          {
            label: "报名时间",
            placeholder: "",
            value: "",
          },
        ],
        getDataMap: {
          total: "",
          list: "",
        },
        refreshConfig: {
          contentrefresh: "正在加载...",
          show: false,
          contentnomore: "没有更多数据了",
          contentdown: "显示更多",
        },
      },
      imgList: {
        list: [],
      },
      personnelInformationList: {
        value: [
          {
            id: "1",
            name: "妞妞",
            list: [
              {
                id: "1",
                value: "参与人真实姓名+身份证号1",
                disabled: false,
              },
              {
                id: "2",
                value: "参与人真实姓名+身份证号2",
              },
            ],
          },
          {
            id: "1",
            name: "23123",
            list: [
              {
                id: "1",
                value: "参与人真实姓名+身份证号3",
              },
            ],
          },
        ],
        getDataMap: {
          total: "",
          list: "",
        },
        refreshConfig: {
          contentrefresh: "正在加载...",
          show: false,
          contentnomore: "没有更多数据了",
          contentdown: "显示更多",
        },
      },
      activityImgList: {
        value: [
          {
            id: "1",
          },
        ],
        getDataMap: {
          total: "",
          list: "",
        },
        refreshConfig: {
          contentrefresh: "正在加载...",
          show: false,
          contentnomore: "没有更多数据了",
          contentdown: "显示更多",
        },
      },
      "21c5606d-d727-4143-a4ce-026bb85006c1": {
        value: "item.value",
      },
      "d6fce4cb-04be-422f-92ad-0574acb7bb6e": {
        value: "",
      },
      "fd6a981c-8148-4be4-b176-9fd3de2528a2": {
        value: "",
      },
      "7a7c7e9f-3619-4060-a495-72ad01e1b0ea": {
        value: "",
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
        if (!url || url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
      //计算当前第几轮
      this.getCurrentRound = function (roundDates, currentTime) {
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
          this.loopList.value[2].value = item.originalPickUpName;
          //领奖门店
          this.loopList.value[3].value = item.address;
          //报名时间
          this.loopList.value[4].value = item.createTime;
          this.pickUpStatusText.text = item.pickUpStatusText;
          this.acNameText.text = item.acName;

          //获取当前第几轮信息
          //let dateString = "2024-03-01 15:07:04 至 2024-03-02 15:07:12,2024-03-03 15:07:31 至 2024-03-04 15:07:37,2024-03-05 15:07:53 至 2024-03-06 15:07:56";
          let roundDates = item.writeTimeGroups.split(",");
          let currentTime = new Date();
          let currentRound = this.getCurrentRound(roundDates, currentTime);
          if (currentRound !== -1) {
            console.log("当前时间位于第 " + currentRound + " 轮");
            let times = roundDates[currentRound].split("至");
            let timeText =
              times[0].trim().split(" ")[0] +
              " - " +
              times[1].trim().split(" ")[0];
            this.pickUpTime.text =
              "请在" + timeText + "之内完成第" + (currentRound + 1) + "轮核销";
            //查询当前轮有没有核销
            let writes = item.writeStatusGroups.splic(",");
            if (writes[currentRound] == "已核销") {
              this.buttonwanCard.hidden = true;
            }
          } else {
            let startTime = roundDates[0].split(" ")[0];
            let endTime = roundDates[roundDates.length - 1]
              .split("至")[1]
              .trim()
              .split(" ")[0];
            this.pickUpTime.text = `请在${startTime} - ${endTime}之内完成核销`;
            //不在核销时间段内禁用核销按钮
            this.buttonwanCard.hidden = true;
          }

          //如果已核销或者已经过了截止时间
          //if (item.pickUpStatus == 0 || !isCurrentTimeInRange(item.pickUpStartTime.split(' ')[0] + " 00:00:00", item.pickUpEndTime.split(' ')[0] + " 23:59:59")) {
          //this.buttonwanCard.hidden = true;
          //}

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

          let ar22r = [
            {
              id: "1",
              name: "妞妞",
              list: [
                {
                  id: "1",
                  value: "参与人真实姓名+身份证号1",
                  disabled: false,
                },
                {
                  id: "2",
                  value: "参与人真实姓名+身份证号2",
                },
              ],
            },
            {
              id: "1",
              name: "23123",
              list: [
                {
                  id: "1",
                  value: "参与人真实姓名+身份证号3",
                },
              ],
            },
          ];

          //查询参与人
          this.$getAction(
            "/api/dkn/viewRegistrationOrdersActivityProject/list",
            {
              pageNo: 1,
              pageSize: -1,
              id: item.id,
            }
          ).then((res) => {
            console.log("viewRegistrationOrdersActivityProject--", res);
            if (res.code != 200 || res.result.records.length <= 0) return;
            this.personnelInformationList.value = res.result.records.map(
              (item) => {
                return {
                  ...item,
                  src: this.getImg(item.path),
                };
              }
            );
          });
        }
      );

      //查询奖品图片
      this.$getAction("/api/dkn/activityImg/list", {
        pageNo: 1,
        pageSize: -1,
        activityId: this.activityId,
        type: 1,
        column: "sortNo",
        order: "asc",
      }).then((res) => {
        console.log("activityImg--", res);
        if (res.code != 200 || res.result.records.length <= 0) return;
        this.activityImgList.value = res.result.records.map((item) => {
          return {
            ...item,
            src: this.getImg(item.path),
          };
        });
      });
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
  /deep/.u-textarea-class {
    min-height: 0 !important;
  }
}

.ele-wrapper-175f2356-1c32-4ff9-ada5-4a2ca1772149 {
  width: 100%;
  .ele-prizeImageBox {
    margin-top: 10px;
    display: flex;
  }
  background-color: #fff;
}

.ele-wrapper-personnelInformationList {
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
}

.ele-wrapper-8ae6c1ae-5d0c-40f6-836c-616584055652 {
  width: 100%;
  /deep/.uni-input-input {
    font-size: 14px !important;
  }
  /deep/.input {
    height: 39px !important;
  }
}

.ele-wrapper-a6cd4a45-fa66-4a6f-adbb-468a3084b102 {
  width: 100%;
  .ele-prizeImageBox {
    margin-top: 10px;
    display: flex;
  }
  background-color: #fff;
}

.ele-wrapper-56be6aaa-dd55-4898-a56f-d9e9f214001b {
  width: 80px;
  text-align: right !important;
  float: left;
}

.ele-wrapper-activityImgList {
  flex: 1;
  margin-left: 24rpx;
  /deep/.uni-scroll-view-content {
    display: flex;
    flex-wrap: wrap;
  }
}

.ele-wrapper-f02e475f-dcaa-4baa-af0d-dec9fd130516 {
  margin-right: 12rpx;
}

.ele-wrapper-41068093-4315-486b-9510-85a9b68ae7f7 {
  width: 100%;
  border-radius: 12px;
}

.ele-wrapper-1a96e10e-6c33-42db-a254-9399b96eeaf6 {
  width: 100%;
  text-align: center;
}

.ele-wrapper-8d2821d9-d7dc-4815-b575-a23d170a81e3 {
  width: 100%;
}

.ele-wrapper-9e394a0e-dc6c-49b2-b6a4-cd9d8ed65001 {
  width: 100%;
  margin-top: 10px;
  display: none;
}

.ele-wrapper-d6fce4cb-04be-422f-92ad-0574acb7bb6e {
  width: 100%;
  /deep/.u-textarea-class {
    min-height: 0 !important;
  }
}

.ele-wrapper-fd6a981c-8148-4be4-b176-9fd3de2528a2 {
  width: 100%;
  /deep/.u-textarea-class {
    min-height: 0 !important;
  }
}

.ele-wrapper-7a7c7e9f-3619-4060-a495-72ad01e1b0ea {
  width: 100%;
  /deep/.u-textarea-class {
    min-height: 0 !important;
  }
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
