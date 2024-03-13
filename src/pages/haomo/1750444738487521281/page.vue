<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-formbgCard">
        <hm-uview-bg-card
          ref="formbgCard"
          width="100%"
          height="100%"
          border-radius=""
          padding="8"
          box-shadow-v-shadow=""
          box-shadow-blur=""
          background-color="#FAFAFA"
          class="ele-formbgCard"
        >
          <view
            class="ele-wrapper ele-wrapper-74c8c2c3-d387-4029-8b68-8275204c2ed5"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              padding="18"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#FFFFFF"
              class="ele-74c8c2c3-d387-4029-8b68-8275204c2ed5"
            >
              <view
                class="ele-wrapper ele-wrapper-a9b61974-4b4c-4f4b-bf36-c799e54a8505"
              >
                <hm-uview-text
                  text="选择奖品套餐"
                  font-size="16px"
                  class="ele-a9b61974-4b4c-4f4b-bf36-c799e54a8505"
                >
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-eventCard">
                <event-registration-card
                  ref="eventCard"
                  :list="eventCard.list"
                  @change="onEventCardChange"
                  @onClick="onEventCardOnClick"
                >
                </event-registration-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              padding="18"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-spread=""
              background-color="#FFFFFF"
              class="ele-7927eb64-d6cf-4dda-8938-a15bb62187d2"
            >
              <view
                class="ele-wrapper ele-wrapper-41e260d8-66e3-4a5a-8600-e82cd01f5d1c"
              >
                <hm-uview-text
                  text="填写资料信息"
                  font-size="16px"
                  class="ele-41e260d8-66e3-4a5a-8600-e82cd01f5d1c"
                >
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-nameInput">
                <information-input-box
                  ref="nameInput"
                  v-model:value="nameInput.value"
                  :show-code="false"
                  placeholder="* 姓名/昵称"
                  class="ele-nameInput"
                >
                </information-input-box>
              </view>
              <view class="ele-wrapper ele-wrapper-phoneInput">
                <information-input-box
                  ref="phoneInput"
                  v-model:value="phoneInput.value"
                  :left-src="phoneInput.leftSrc"
                  :show-code="false"
                  placeholder="* 请填写正确的手机号码"
                  class="ele-phoneInput"
                >
                </information-input-box>
              </view>
              <view class="ele-wrapper ele-wrapper-smscodeIpnut">
                <information-input-box
                  ref="smscodeIpnut"
                  v-model:value="smscodeIpnut.value"
                  :left-src="smscodeIpnut.leftSrc"
                  placeholder="* 请输入短信验证码"
                  @onCode="onSmscodeIpnutOnCode"
                  class="ele-smscodeIpnut"
                >
                </information-input-box>
              </view>
              <view class="ele-wrapper ele-wrapper-storeInput">
                <information-input-box
                  ref="storeInput"
                  v-model:value="storeInput.value"
                  :disabled="true"
                  :left-src="storeInput.leftSrc"
                  :show-code="false"
                  :show-icon="true"
                  placeholder="* 请选择领奖门店"
                  @onClick="onStoreInputOnClick"
                  class="ele-storeInput"
                >
                </information-input-box>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-c04e86cb-8d7d-4cf7-970b-f6c1a35dd6d2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              padding="18"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-spread=""
              background-color="#FFFFFF"
              class="ele-c04e86cb-8d7d-4cf7-970b-f6c1a35dd6d2"
            >
              <view
                class="ele-wrapper ele-wrapper-fc61ffbc-5000-4008-be66-490d31c2dc31"
              >
                <hm-uview-text
                  text="参与人员信息填写"
                  font-size="16px"
                  class="ele-fc61ffbc-5000-4008-be66-490d31c2dc31"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-2bb118e7-6403-448b-8985-fd3619976ad9"
              >
                <hm-loop
                  :value="[{ id: '1' }]"
                  class="ele-2bb118e7-6403-448b-8985-fd3619976ad9"
                >
                  <template #default="{ item }">
                    <view
                      class="ele-wrapper ele-wrapper-fc4f02c0-21ff-451d-8808-04e971cf8711"
                    >
                      <hm-uview-text text="套餐A-参与人1：" font-size="14px">
                      </hm-uview-text>
                    </view>
                    <view
                      class="ele-wrapper ele-wrapper-7b9f5bcb-d657-4fa1-a77b-6957db366ea5"
                    >
                      <registration-form-package-components
                        :func-list="[
                          {
                            value: '',
                            leftSrc1:
                              'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E7%94%A8%E6%88%B7%20(1).png',
                            leftSrc2:
                              'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E7%94%A8%E6%88%B7.png',
                            disabled: false,
                            placeholder: '* 请填写姓名/昵称',
                          },
                          {
                            value: '',
                            leftSrc1:
                              'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%9D%A2%E6%80%A7.png',
                            leftSrc2:
                              'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%9D%A2%E6%80%A7%20(1).png',
                            disabled: false,
                            placeholder: '* 请填写姓名/昵称',
                          },
                        ]"
                        class="ele-7b9f5bcb-d657-4fa1-a77b-6957db366ea5"
                      >
                      </registration-form-package-components>
                    </view>
                  </template>
                </hm-loop>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-shopPop">
            <hm-uview-popup
              ref="shopPop"
              v-model:show="shopPop.show"
              :mode="'bottom'"
              height="78%"
              :mask-close-able="false"
              @close="onShopPopClose"
              class="ele-shopPop"
            >
              <view
                class="ele-wrapper ele-wrapper-9fb51c90-145e-4b04-a74d-99794d96d8b3"
              >
                <hm-uview-text
                  text="选择门店"
                  font-size="16px"
                  class="ele-9fb51c90-145e-4b04-a74d-99794d96d8b3"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-69d470b9-0c45-46a6-92d6-89fc50270dd8"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-69d470b9-0c45-46a6-92d6-89fc50270dd8"
                >
                  <view class="ele-wrapper ele-wrapper-storeList">
                    <store-selection
                      ref="storeList"
                      :list="storeList.list"
                      @radioGroupChange="onStoreListRadioGroupChange"
                      class="ele-storeList"
                    >
                    </store-selection>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-popup>
          </view>
          <view class="ele-wrapper ele-wrapper-payPopup">
            <hm-uview-popup
              ref="payPopup"
              v-model:show="payPopup.show"
              :mode="'bottom'"
              height="50%"
              class="ele-payPopup"
            >
              <view class="ele-wrapper ele-wrapper-activityText">
                <hm-uview-text
                  ref="activityText"
                  :text="activityText.text"
                  :font-size="activityText.fontSize"
                  class="ele-activityText"
                >
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-countdown">
                <hm-uview-text
                  ref="countdown"
                  :text="countdown.text"
                  :font-size="countdown.fontSize"
                  :color="countdown.color"
                  class="ele-countdown"
                >
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-prices">
                <hm-uview-text
                  ref="prices"
                  :text="prices.text"
                  class="ele-prices"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-909ed36a-3bd1-4c08-8479-95660a498ada"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  padding="10"
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-909ed36a-3bd1-4c08-8479-95660a498ada"
                >
                  <view class="ele-wrapper ele-wrapper-weixin">
                    <hm-uview-bg-card
                      ref="weixin"
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-weixin"
                    >
                      <view class="ele-wrapper ele-wrapper-weixinbox">
                        <hm-uview-bg-card
                          ref="weixinbox"
                          width="100%"
                          height="100%"
                          border-radius=""
                          box-shadow-v-shadow=""
                          box-shadow-blur=""
                          class="ele-weixinbox"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-4ee8dfaa-e112-4f84-9bbf-49d007f38768"
                          >
                            <hm-uview-image
                              src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/weixin.png"
                              width="20px"
                              height="20px"
                            >
                            </hm-uview-image>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-62635a9e-6ebb-4a1d-ba42-c9d2cab1fb7a"
                          >
                            <hm-uview-text text="微信" font-size="14px">
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view class="ele-wrapper ele-wrapper-weixinRadio">
                        <hm-uview-radio
                          ref="weixinRadio"
                          v-model:value="weixinRadio.value"
                          title=""
                          :list="weixinRadio.list"
                          active-color="#22C386"
                          @radioChange="onWeixinRadioRadioChange"
                        >
                        </hm-uview-radio>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-zhifubao">
                    <hm-uview-bg-card
                      ref="zhifubao"
                      width="100%"
                      height="100%"
                      border-radius=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-zhifubao"
                    >
                      <view class="ele-wrapper ele-wrapper-zhifubaobox">
                        <hm-uview-bg-card
                          ref="zhifubaobox"
                          width="100%"
                          height="100%"
                          border-radius=""
                          box-shadow-v-shadow=""
                          box-shadow-blur=""
                          class="ele-zhifubaobox"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-5c082d10-4929-407e-a187-f7ffc38593fb"
                          >
                            <hm-uview-image
                              src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/zhifubao.png"
                              width="20px"
                              height="20px"
                            >
                            </hm-uview-image>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-b35bc98b-a78b-4d94-a7ca-3a39c30ec0ff"
                          >
                            <hm-uview-text text="支付宝" font-size="14px">
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view class="ele-wrapper ele-wrapper-zhifubaoRadio">
                        <hm-uview-radio
                          ref="zhifubaoRadio"
                          v-model:value="zhifubaoRadio.value"
                          title=""
                          :list="zhifubaoRadio.list"
                          active-color="#22C386"
                          @radioChange="onZhifubaoRadioRadioChange"
                        >
                        </hm-uview-radio>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-03acc36e-0a0f-48ac-961b-a2603c0a7798"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-03acc36e-0a0f-48ac-961b-a2603c0a7798"
                >
                  <view
                    class="ele-wrapper ele-wrapper-cc32d657-8fd9-4162-9086-b69b68cf0bdd"
                  >
                    <hm-uview-button
                      :type="'primary'"
                      :shape="'circle'"
                      text="确认支付"
                      @click="onElecc32D6578Fd941629086B69B68Cf0BddClick"
                      class="ele-cc32d657-8fd9-4162-9086-b69b68cf0bdd"
                    >
                    </hm-uview-button>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-popup>
          </view>
          <view class="ele-wrapper ele-wrapper-baoming">
            <hm-uview-bg-card
              ref="baoming"
              width="100%"
              height="100%"
              border-radius=""
              padding=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              background-color="#FAFAFA"
              class="ele-baoming"
            >
              <view class="ele-wrapper ele-wrapper-payButton">
                <hm-uview-button
                  ref="payButton"
                  :shape="payButton.shape"
                  :text="payButton.text"
                  @click="onPayButtonClick"
                  class="ele-payButton"
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
import EventRegistrationCard from "/@/components/dkn-h-5/event-registration-card/index.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import RegistrationFormPackageComponents from "/@/components/dkn-h-5/registration-form-package-components/index.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import StoreSelection from "/@/components/dkn-h-5/store-selection/index.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import HmUviewRadio from "/@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "RegistrationForm",
  components: {
    HmUviewBgCard,
    HmUviewText,
    EventRegistrationCard,
    InformationInputBox,
    HmLoop,
    RegistrationFormPackageComponents,
    HmUviewPopup,
    StoreSelection,
    HmUviewImage,
    HmUviewRadio,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      shopPop: {
        show: false,
      },
      storeInput: {
        value: "",
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendianfuwu.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/mendianfuwu(1).png",
        ],
      },
      zhifubaoRadio: {
        value: '""',
        list: [
          {
            name: "",
            disabled: false,
          },
        ],
      },
      weixinRadio: {
        value: "",
        list: [
          {
            name: "",
            disabled: false,
          },
        ],
      },
      orderCode: {},
      loopList: {},
      pickUpStatusText: {},
      acNameText: {},
      pickUpTime: {},
      orderCdoe: {},
      registrationProjectField: {},
      userNameField: {},
      phoneField: {},
      storeNameField: {},
      registrationTimeField: {},
      activityNameField: {},
      verificationDeadlineField: {},
      writeStatusField: {},
      buttonwanCard: {},
      imgList: {},
      activityImgList: {},
      payPopup: {
        show: false,
      },
      eventCard: {
        list: [
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称活动名称活动名称活动名称活动名称",
            description: "活动名称活动名称活动名称活动名称活动名称活动名称",
            price: "0.0",
            number: 0,
          },
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称活动名称活动名称活动名称活动名称",
            description: "活动名称活动名称活动名称活动名称活动名称活动名称",
            price: "0.0",
            number: 0,
          },
        ],
      },
      nameInput: {
        value: "",
      },
      phoneInput: {
        value: "",
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji(2).png",
        ],
      },
      smscodeIpnut: {
        value: "",
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/anquan1.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/anquan(2).png",
        ],
      },
      "2bb118e7-6403-448b-8985-fd3619976ad9": {
        value: [
          {
            id: "1",
          },
        ],
      },
      storeList: {
        list: [
          {
            anchor: "a",
            store: [
              {
                city: "安庆",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "b",
            store: [
              {
                city: "亳州",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                  },
                ],
              },
            ],
          },
          {
            anchor: "c",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "c",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "d",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "e",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "f",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号fffff",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            anchor: "g",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ],
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ],
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address:
                      "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address:
                      "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address:
                      "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号ggggg",
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      activityText: {
        text: "派对甜心奖牌趣味玩款5.2公里",
        fontSize: "18px",
      },
      countdown: {
        text: "剩下时间 23:59:59",
        fontSize: "14px",
        color: "#999999",
      },
      prices: {
        text: "¥ 59.00",
      },
      payButton: {
        shape: "circle",
        text: "¥ 29.9 立即报名",
      },
    };
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
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

    onEventCardChange(e) {
      this.checked();
    },
    onEventCardOnClick(e) {
      this.checked();
    },
    onSmscodeIpnutOnCode() {
      this.getPhoneCode();
    },
    onStoreInputOnClick() {
      this.shopPop.show = true;
    },
    onShopPopClose() {
      if (this.storeInput.value === "") {
        console.log("112");
        this.storeInput.value = "";
      }
    },
    onStoreListRadioGroupChange(e) {
      this.storeInput.value = e.name;
      this.storeItem = e;
      setTimeout(() => {
        this.shopPop.show = false;
      }, 200);
    },
    onWeixinRadioRadioChange(e) {
      this.zhifubaoRadio.value = "1";
    },
    onZhifubaoRadioRadioChange() {
      this.weixinRadio.value = "1";
    },
    onElecc32D6578Fd941629086B69B68Cf0BddClick() {
      this.orderPayment();
    },
    onPayButtonClick() {
      this.checkOrder();
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background-color: #fafafa;
  position: relative;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  min-height: 640px;
}

.ele-wrapper-formbgCard {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .ele-formbgCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 140px;
  }
  position: relative;
}

.ele-wrapper-74c8c2c3-d387-4029-8b68-8275204c2ed5 {
  width: 100%;
  .ele-wrapper-eventCard {
    width: 100%;
  }
  margin-top: 22px;
}

.ele-wrapper-a9b61974-4b4c-4f4b-bf36-c799e54a8505 {
  margin-bottom: 12px;
}

.ele-wrapper-7927eb64-d6cf-4dda-8938-a15bb62187d2 {
  width: 100%;
  margin-top: 18px;
}

.ele-wrapper-41e260d8-66e3-4a5a-8600-e82cd01f5d1c {
  margin-bottom: 13px;
}

.ele-wrapper-nameInput {
  width: 100%;
  margin-top: 5px;
}

.ele-wrapper-phoneInput {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-smscodeIpnut {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-storeInput {
  width: 100%;
  margin-top: 20px;
}

.ele-wrapper-c04e86cb-8d7d-4cf7-970b-f6c1a35dd6d2 {
  width: 100%;
  margin-top: 18px;
}

.ele-wrapper-fc61ffbc-5000-4008-be66-490d31c2dc31 {
  margin-bottom: 13px;
}

.ele-wrapper-2bb118e7-6403-448b-8985-fd3619976ad9 {
  width: 100%;
  .ele-prizeImageBox {
    margin-top: 10px;
    display: flex;
  }
  background-color: #fff;
}

.ele-wrapper-7b9f5bcb-d657-4fa1-a77b-6957db366ea5 {
  width: 100%;
}

.ele-wrapper-shopPop {
  /deep/.uni-scroll-view-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-9fb51c90-145e-4b04-a74d-99794d96d8b3 {
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  margin: 10px 0;
}

.ele-wrapper-69d470b9-0c45-46a6-92d6-89fc50270dd8 {
  width: 100%;
  height: calc(100% - 30px);
  overflow: hidden;
}

.ele-wrapper-storeList {
  width: 100%;
  /deep/ .anchorBox {
    display: none;
  }
}

.ele-wrapper-payPopup {
  /deep/.uni-scroll-view-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-activityText {
  font-family: sans-serif;
  font-weight: 600;
  margin-top: 8px;
}

.ele-wrapper-countdown {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  color: #999999;
  .ele-countdown {
    padding-bottom: 0 !important;
  }
}

.ele-wrapper-prices {
  font-weight: 600;
  font-family: sans-serif;
  .ele-prices {
    padding: 0 !important;
  }
}

.ele-wrapper-909ed36a-3bd1-4c08-8479-95660a498ada {
  width: 100%;
}

.ele-wrapper-weixin {
  width: 100%;
  border-bottom: 1px solid #f7f6f7;
  .ele-weixin {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-weixinbox {
  .hm-bg-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ele-wrapper-zhifubao {
  width: 100%;
  border-bottom: 1px solid #f7f6f7;
  .ele-zhifubao {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-zhifubaobox {
  .hm-bg-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ele-wrapper-03acc36e-0a0f-48ac-961b-a2603c0a7798 {
  width: 100%;
}

.ele-wrapper-cc32d657-8fd9-4162-9086-b69b68cf0bdd {
  width: 100%;
}

.ele-wrapper-baoming {
  width: 100%;
  position: absolute;
  bottom: 0;
  .ele-baoming {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px 60px;
  }
}

.ele-wrapper-payButton {
  width: 100%;
  /deep/.u-btn {
    font-family: "PingFangSC-Regular", "PingFang SC", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    background: linear-gradient(179.94deg, #ff9fc7 0%, #f32878 100%);
  }
}
</style>
