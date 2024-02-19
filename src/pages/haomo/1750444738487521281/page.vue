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
      payButton: {
        text: "¥ 29.9 立即报名",
        shape: "circle",
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
      nameInput: {
        value: "",
      },
      smscodeIpnut: {
        value: "",
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/anquan1.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/anquan(2).png",
        ],
      },
      storeItem: {},
      phoneInput: {
        value: "",
        leftSrc: [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji.png",
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/shouji(2).png",
        ],
      },
      payPopup: {
        show: false,
      },
    };
  },
  watch: {},
  async mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      let self = this;
      self.activityId = self.$route.query.activityId;
      self.activityName = self.$route.query.activityName;
      self.channel = self.$route.query.channel;
      self.eventCard.list = [];
      self.storeList.list = [];
      self.payButton.text = `立即报名`;
      self.money = 0;
      self.activityText.text = "";
      self.countdown.text = "";
      self.prices.text = "";
      self.orderId = "";
      self.getActivityProject = async function () {
        let url = "/api/dkn/activityProject/list";
        let params = {
          activityId: self.activityId,
          column: "sortNo",
          order: "asc",
        };
        const res = await self.$getAction(url, params);
        if (!res.success || res.result.records.length === 0) {
          return;
        }
        let list = [];
        res.result.records.forEach((e, index) => {
          let checked = false;
          if (index == 0) {
            checked = true;
          }
          let par = {
            ...e,
            checked,
            image: self.getImg(e.imgPath),
            name: e.name,
            description: e.synopsis,
            price: e.free === 0 ? 0 : e.expense,
            number: 1,
          };
          list.push(par);
        });
        self.eventCard.list = list;
        self.money = list[0].price;
        self.payButton.text = `总费用：¥${self.money} 立即报名`;
      };
      self.getStoreList = async function () {
        let url = "/api/dkn/store/listOrder";
        const res = await self.$getAction(url, {
          status: 0,
        });
        if (!res.success || res.result.length === 0) {
          return;
        }
        let store = res.result.map((x) => {
          return {
            city: x.key,
            shop: x.store,
          };
        });
        self.storeList.list = [
          {
            anchor: "b",
            store,
          },
        ];
      };
      self.getImg = function (url) {
        if (url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
      self.getData = function () {
        self.getActivityProject();
        self.getStoreList();
      };
      self.getData();

      self.checked = function () {
        setTimeout(() => {
          let money = 0;
          self.eventCard.list.forEach((e) => {
            if (e.checked && e.free !== 0) {
              let expense = e.expense * e.number;
              money += expense;
            }
          });
          money = parseFloat(money).toFixed(2);
          console.log("money", money);
          self.payButton.text = `总费用：¥${money} 立即报名`;
          self.money = money;
        });
      };
      self.checkOrder = async function () {
        if (!self.nameInput.value) {
          self.error("姓名/昵称不能为空");
          return;
        }
        if (!self.checkPhone()) {
          return;
        }
        if (!self.smscodeIpnut.value) {
          self.error("验证码不能为空");
          return;
        }
        if (!self.storeInput.value) {
          self.error("领奖门店不能为空");
          return;
        }

        const orderProjects = self.getOrderProjects();

        if (orderProjects.length == 0) {
          self.error("请至少选择一个活动项目");
          return;
        }
        self.addOrder();
      };
      self.addOrder = async function () {
        let url = "/api/dkn/registrationOrders/addOrder";
        const orderProjects = self.getOrderProjects();
        let params = {
          activityId: self.activityId,
          storeId: self.storeItem.id,
          paymentStatus: 1,
          phone: self.phoneInput.value,
          name: self.nameInput.value,
          smscode: self.smscodeIpnut.value,
          money: self.money,
          orderProjects,
          channel: self.channel,
        };
        const res = await self.$postAction(url, params);
        if (!res.success) {
          self.orderId = res.result.orderId;
          if (res.message === "当前活动已经报名！") {
            if (res.result.paymentStatus === 1) {
              self.error("当前活动已经报名未支付");
              self.$pay(self.orderId, "1");
              return;
              if (self.isWeChat()) {
                self.$pay(self.orderId, "0");
                return;
              }
              self.payPopup.show = true;
              self.activityText.text = self.activityName;
              self.countdown.text = "";
              self.prices.text = `¥ ${res.result.money}`;
            } else {
              self.error(res.message);
              self.login();
              return;
            }
          } else {
            self.error(res.message);
          }
          return;
        }
        self.orderId = res.message;
        if (!parseFloat(self.money) > 0) {
          uni.showToast({
            icon: "success",
            position: "top",
            title: "报名成功",
            duration: 2000,
          });
          self.login();
          return;
        }
        self.$pay(self.orderId, "1");
        return;

        //微信浏览器打开直接跳微信支付
        if (self.isWeChat()) {
          self.$pay(self.orderId, "0");
          return;
        }
        self.payPopup.show = true;
        self.activityText.text = self.activityName;
        self.countdown.text = "";
        self.prices.text = `¥ ${self.money}`;
      };
      self.isWeChat = function () {
        // 判断是否在微信浏览器中
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf("micromessenger") !== -1;
      };
      //登录验证
      self.login = async function () {
        let url = "/api/sys/phoneLogin";
        let params = {
          mobile: self.phoneInput.value,
          captcha: self.smscodeIpnut.value,
        };
        const res = await self.$postAction(url, params);
        if (!res.success) {
          return;
        }
        uni.setStorageSync("token", res.result.token);
        uni.setStorageSync("userInfo", res.result.userInfo);
        uni.$u.route(
          `/pages/haomo/1753965929131151361/page?orderId=${self.orderId}`
        );
      };
      self.getOrderProjects = function () {
        let list = [];
        self.eventCard.list.forEach((e) => {
          if (e.checked && e.number) {
            list.push(e);
          }
        });
        list = list.map((x) => {
          return {
            activityProjectId: x.id,
            num: x.number,
          };
        });
        return list;
      };
      self.error = function (text) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: text,
          duration: 2000,
        });
      };
      //获取验证码
      self.getPhoneCode = async function () {
        if (!self.checkPhone()) {
          setTimeout(() => {
            self.$refs.smscodeIpnut.reset();
          });
          return;
        }

        let url = "/api/sys/sms";
        let params = {
          mobile: self.phoneInput.value,
        };
        const res = await self.$postAction(url, params);
        uni.showToast({
          title: res.message,
          duration: 2000,
        });
      };
      //校验手机号
      self.checkPhone = function () {
        let mobile = self.phoneInput.value;
        if (!mobile) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "手机号不能为空",
            duration: 2000,
          });
          return false;
        }
        const phoneRegex = /^1[3456789]\d{9}$/;
        const status = phoneRegex.test(mobile);
        if (!status) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "手机号格式不正确",
            duration: 2000,
          });
        }
        return status;
      };

      //支付
      self.orderPayment = function () {
        if (!self.orderId) {
          return;
        }
        let channel = "0";
        if (self.weixinRadio.value === "1") {
          channel = "1";
        }
        self.$pay(self.orderId, channel);
      };
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
