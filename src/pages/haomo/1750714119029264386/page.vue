<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-outsideBg">
        <hm-uview-bg-card
          ref="outsideBg"
          :width="outsideBg.width"
          :height="outsideBg.height"
          :border-radius="outsideBg.borderRadius"
          :padding="outsideBg.padding"
          :box-shadow-color="outsideBg.boxShadowColor"
          :background-color="outsideBg.backgroundColor"
          :hidden="outsideBg.hidden"
          class="ele-outsideBg"
        >
          <view class="ele-wrapper ele-wrapper-topBg">
            <hm-uview-bg-card
              ref="topBg"
              padding="12"
              box-shadow-blur="0"
              box-shadow-v-shadow="0"
              box-shadow-color="#00000000"
              border-radius="0"
              background-color="#FFFFFF00"
              width="100%"
              height=""
              class="ele-topBg"
            >
              <view
                class="ele-wrapper ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe"
              >
                <hm-uview-icon
                  name="question-circle"
                  color="#FFFFFF"
                  size="20px"
                  label="规则"
                  label-color="#FFFFFF"
                  @click="onEle0Abf487751Bc431D8F1A3C043Bc451FeClick"
                  class="ele-0abf4877-51bc-431d-8f1a-3c043bc451fe"
                >
                </hm-uview-icon>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-3de94d32-48f2-495a-b447-4ba9360a1ceb"
          >
            <hm-uview-bg-card
              padding="12"
              box-shadow-blur="0"
              box-shadow-v-shadow="0"
              box-shadow-color="#00000000"
              border-radius="0"
              background-color="#FFFFFF00"
              width="100%"
              height=""
              class="ele-3de94d32-48f2-495a-b447-4ba9360a1ceb"
            >
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-imageBg">
            <hm-uview-bg-card
              ref="imageBg"
              padding="0"
              box-shadow-v-shadow="0"
              box-shadow-color="#00000000"
              border-radius="0"
              background-color="#FFFFFF00"
              width="100%"
              height=""
              class="ele-imageBg"
            >
              <view class="ele-wrapper ele-wrapper-logoImg">
                <hm-uview-image
                  ref="logoImg"
                  :src="logoImg.src"
                  :width="logoImg.width"
                  :height="logoImg.height"
                  class="ele-logoImg"
                >
                </hm-uview-image>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-containerBg">
            <hm-uview-bg-card
              ref="containerBg"
              width="100%"
              height=""
              border-radius="0"
              padding="0"
              box-shadow-color="#00000000"
              class="ele-containerBg"
            >
              <view class="ele-wrapper ele-wrapper-colourCard">
                <hm-uview-bg-card
                  ref="colourCard"
                  :width="colourCard.width"
                  :height="colourCard.height"
                  :border-radius="colourCard.borderRadius"
                  :padding="colourCard.padding"
                  :box-shadow-color="colourCard.boxShadowColor"
                  :background-color="colourCard.backgroundColor"
                  class="ele-colourCard"
                >
                  <view
                    class="ele-wrapper ele-wrapper-d54b5914-a084-4a9e-9204-991bcc25ecf5"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="0"
                      padding="0"
                      box-shadow-v-shadow="0"
                      box-shadow-blur="0"
                      box-shadow-color="#00000000"
                      background-color="#FFFFFF00"
                      class="ele-d54b5914-a084-4a9e-9204-991bcc25ecf5"
                    >
                      <view class="ele-wrapper ele-wrapper-nameText">
                        <hm-uview-text
                          ref="nameText"
                          :text="nameText.text"
                          :font-size="nameText.fontSize"
                          :padding="nameText.padding"
                          class="ele-nameText"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-80a0f605-13bf-4742-904d-a7c8cdce9da1"
                      >
                        <hm-uview-text
                          text="迪卡侬线上骑行活动"
                          font-size="16px"
                          color="#FFFFFF"
                          padding="0"
                          class="ele-80a0f605-13bf-4742-904d-a7c8cdce9da1"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-07beb51b-0feb-440f-9824-a723c709c3ce"
                      >
                        <hm-uview-text
                          text="报名倒计时"
                          font-size="14px"
                          color="#FFFFFF"
                          padding="0"
                          class="ele-07beb51b-0feb-440f-9824-a723c709c3ce"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-closeTime">
                        <uni-countdown
                          ref="closeTime"
                          :background-color="closeTime.backgroundColor"
                          :color="closeTime.color"
                          :font-size="closeTime.fontSize"
                          :splitor-color="closeTime.splitorColor"
                          :day="closeTime.day"
                          :hour="closeTime.hour"
                          :minute="closeTime.minute"
                          :second="closeTime.second"
                          class="ele-closeTime"
                        >
                        </uni-countdown>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-activityBg">
                    <hm-uview-bg-card
                      ref="activityBg"
                      :width="activityBg.width"
                      :height="activityBg.height"
                      :border-radius="activityBg.borderRadius"
                      :padding="activityBg.padding"
                      :background-color="activityBg.backgroundColor"
                      class="ele-activityBg"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-951ec1d4-209a-48cc-a908-c78236487f39"
                      >
                        <hm-uview-bg-card
                          padding="0"
                          box-shadow-blur="0"
                          box-shadow-v-shadow="0"
                          box-shadow-color="#00000000"
                          border-radius="0"
                          background-color="#FFFFFF1F"
                          width="100%"
                          height=""
                          class="ele-951ec1d4-209a-48cc-a908-c78236487f39"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-4f1cb12e-36cb-4378-b823-05b5d45354ab"
                          >
                            <hm-uview-image
                              width="100%"
                              border-redius="50%"
                              height="100%"
                              class="ele-4f1cb12e-36cb-4378-b823-05b5d45354ab"
                            >
                            </hm-uview-image>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-ad039bb7-8f55-4ab8-98a8-54d1f73db365"
                          >
                            <hm-uview-text
                              padding="0"
                              color="#FFFFFF"
                              font-size="12px"
                              text="Keep ·HelloKitty系列"
                              class="ele-ad039bb7-8f55-4ab8-98a8-54d1f73db365"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-f1b5f026-f12a-46a9-b78f-dea0efd75a30"
                          >
                            <hm-uview-icon
                              label-color="#FFFFFF"
                              color="#FFFFFF99"
                              size="12px"
                              name="arrow-right"
                              label=""
                              class="ele-f1b5f026-f12a-46a9-b78f-dea0efd75a30"
                            >
                            </hm-uview-icon>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-db5afb3e-f8de-4171-94e9-286964bcb67c"
                      >
                        <hm-uview-bg-card
                          padding="0"
                          box-shadow-color="#00000000"
                          border-radius="12"
                          background-color="#F797BD00"
                          width="100%"
                          height=""
                          class="ele-db5afb3e-f8de-4171-94e9-286964bcb67c"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-f0bdc2b0-8112-4546-8c75-84df79598453"
                          >
                            <hm-uview-text
                              padding="6"
                              color="#FFFFFF99"
                              font-size="10px"
                              text="线上马拉松"
                              class="ele-f0bdc2b0-8112-4546-8c75-84df79598453"
                            >
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view class="ele-wrapper ele-wrapper-activityList">
                        <activity-list
                          ref="activityList"
                          :item="activityList.item"
                          :background-color="activityList.backgroundColor"
                          :text-color="activityList.textColor"
                          class="ele-activityList"
                        >
                        </activity-list>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-imgText">
                    <hm-uview-text
                      ref="imgText"
                      :text="imgText.text"
                      :font-size="imgText.fontSize"
                      :color="imgText.color"
                      :bg-color="imgText.bgColor"
                      :padding="imgText.padding"
                      class="ele-imgText"
                    >
                    </hm-uview-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-imgCard">
                    <hm-uview-bg-card
                      ref="imgCard"
                      :width="imgCard.width"
                      :height="imgCard.height"
                      :border-radius="imgCard.borderRadius"
                      :padding="imgCard.padding"
                      :background-color="imgCard.backgroundColor"
                      :hidden="imgCard.hidden"
                      class="ele-imgCard"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-67658805-d92e-4e1f-8067-6a180eca6391"
                      >
                        <hm-uview-bg-card
                          padding="0"
                          box-shadow-blur="0"
                          box-shadow-v-shadow="0"
                          box-shadow-color="#00000000"
                          border-radius="0"
                          background-color="#FFFFFF00"
                          width="100%"
                          height=""
                          class="ele-67658805-d92e-4e1f-8067-6a180eca6391"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-activityImgList1"
                          >
                            <prize-list-component
                              ref="activityImgList1"
                              :func-list="activityImgList1.funcList"
                              :style="activityImgList1.style"
                              class="ele-activityImgList1"
                            >
                            </prize-list-component>
                          </view>
                          <view class="ele-wrapper ele-wrapper-activityImgList">
                            <scroll-list
                              ref="activityImgList"
                              :func-list="activityImgList.funcList"
                              :background-color="
                                activityImgList.backgroundColor
                              "
                              :text-color="activityImgList.textColor"
                            >
                            </scroll-list>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-dacbdcbf-5aa6-416f-a334-d9098c8ccfda"
                  >
                    <hm-uview-text
                      text="活动详情"
                      font-size="16px"
                      color="#FFFFFF"
                      bg-color="#FFFFFF00"
                      class="ele-dacbdcbf-5aa6-416f-a334-d9098c8ccfda"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-0d696b7e-8100-4e0a-a949-9e8788ae1cec"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height="400"
                      border-radius="12"
                      padding="0"
                      box-shadow-v-shadow="0"
                      box-shadow-blur="0"
                      box-shadow-color="#00000000"
                      background-color="#F797BD00"
                      class="ele-0d696b7e-8100-4e0a-a949-9e8788ae1cec"
                    >
                      <view class="ele-wrapper ele-wrapper-listCompanent">
                        <prize-list-component
                          ref="listCompanent"
                          :func-list="listCompanent.funcList"
                          :style="listCompanent.style"
                          :background-color="listCompanent.backgroundColor"
                          :text-color="listCompanent.textColor"
                          class="ele-listCompanent"
                        >
                        </prize-list-component>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-09caddfa-4979-48b3-81fd-a043baa3c683"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'center'"
                      padding="0"
                      box-shadow-v-shadow="0"
                      box-shadow-blur="0"
                      box-shadow-color="#00000000"
                      background-color="#FFFFFF00"
                      class="ele-09caddfa-4979-48b3-81fd-a043baa3c683"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-228650bd-8f5f-4f58-b322-de6b1040aba7"
                      >
                        <hm-uview-icon
                          name="server-fill"
                          color="#E06994"
                          size="20px"
                          label="活动咨询"
                          label-color="#E06994"
                          @click="onEle228650Bd8F5F4F58B322De6B1040Aba7Click"
                          class="ele-228650bd-8f5f-4f58-b322-de6b1040aba7"
                        >
                        </hm-uview-icon>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-a40489b1-523c-497a-8587-70b09de8a231"
                      >
                        <hm-uview-icon name="share"> </hm-uview-icon>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-phoneBg">
                <hm-uview-bg-card
                  ref="phoneBg"
                  width="100%"
                  height=""
                  border-radius="0"
                  padding="0"
                  box-shadow-v-shadow="0"
                  box-shadow-blur="0"
                  box-shadow-color="#00000000"
                  background-color="#FFFFFF"
                  class="ele-phoneBg"
                >
                  <view
                    class="ele-wrapper ele-wrapper-f16cae12-ff6f-4d64-ac60-014a613da044"
                  >
                    <hm-uview-icon
                      name="phone"
                      color="#FFFFFF"
                      size="20px"
                      label="活动咨询"
                      label-color="#FFFFFF"
                      @click="onElef16Cae12Ff6F4D64Ac60014A613Da044Click"
                      class="ele-f16cae12-ff6f-4d64-ac60-014a613da044"
                    >
                    </hm-uview-icon>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view class="ele-wrapper ele-wrapper-regularPopup">
                <hm-uview-popup
                  ref="regularPopup"
                  v-model:show="regularPopup.show"
                  :mode="'bottom'"
                  width="100%"
                  height="50%"
                  :close-icon-pos="'top-left'"
                  class="ele-regularPopup"
                >
                  <view
                    class="ele-wrapper ele-wrapper-dc91ed40-34d2-458d-a7fb-c67671b736c2"
                  >
                    <hm-uview-text
                      font-size="16px"
                      text="活动规则"
                      class="ele-dc91ed40-34d2-458d-a7fb-c67671b736c2"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-720c2355-c756-4d18-9400-34ab42449b92"
                  >
                    <hm-rich-text
                      :nodes="[
                        {
                          children: [
                            {
                              text:
                                '第一步 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;报名点击页面下方的「马上报名」，选择自己要挑战的公里数。-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。第二步 比赛在比赛时间内，打开 Keep，一次性跑完您挑战的公里数即可。-- 户外/跑步机皆可。奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；请注意！！若未完赛，则奖牌将无法发出，但配件/周边仍可以在活动结束后发货；（30 个工作日从完赛后第一个工作日开始计算）',
                              type: 'text',
                            },
                          ],
                          name: 'div',
                          attrs: {
                            style:
                              'line-height: 40px; color: #000; text-align:left;',
                            class: 'div-class',
                          },
                        },
                      ]"
                      class="ele-720c2355-c756-4d18-9400-34ab42449b92"
                    >
                    </hm-rich-text>
                  </view>
                  <view class="ele-wrapper ele-wrapper-activityRulesText">
                    <hm-uview-parse
                      ref="activityRulesText"
                      :data="activityRulesText.data"
                      :show-height="activityRulesText.showHeight"
                    >
                    </hm-uview-parse>
                  </view>
                </hm-uview-popup>
              </view>
              <view class="ele-wrapper ele-wrapper-viewPopup">
                <hm-uview-popup
                  ref="viewPopup"
                  v-model:show="viewPopup.show"
                  width="300px"
                  height="220px"
                  border-radius="8px"
                  :closeable="false"
                  @open="onViewPopupOpen"
                  class="ele-viewPopup"
                >
                  <view
                    class="ele-wrapper ele-wrapper-ea66b462-b5ce-4b41-8870-bb482768fef8"
                  >
                    <hm-uview-bg-card
                      padding="0"
                      box-shadow-color="#00000000"
                      border-radius="0"
                      background-color="#FFE8EC00"
                      width="100%"
                      height=""
                      :text-align="'center'"
                      class="ele-ea66b462-b5ce-4b41-8870-bb482768fef8"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-ff8c8f6d-abf3-4690-89dd-cab3e0f9c77f"
                      >
                        <hm-uview-text
                          font-size="16px"
                          text="用户登录查看报名信息"
                          class="ele-ff8c8f6d-abf3-4690-89dd-cab3e0f9c77f"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-phoneBox">
                        <information-input-box
                          ref="phoneBox"
                          right-src=""
                          :show-code="false"
                          placeholder=" 请填写报名手机号码"
                          v-model:value="phoneBox.value"
                          class="ele-phoneBox"
                        >
                        </information-input-box>
                      </view>
                      <view class="ele-wrapper ele-wrapper-viewInput">
                        <information-input-box
                          ref="viewInput"
                          placeholder=" 请填写手机验证码"
                          v-model:value="viewInput.value"
                          @onCode="onViewInputOnCode"
                          class="ele-viewInput"
                        >
                        </information-input-box>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-c43ff619-898c-4446-a22f-6dc191e8ac6e"
                  >
                    <hm-uview-bg-card
                      padding="0"
                      box-shadow-color="#00000000"
                      border-radius="0"
                      background-color="#FFE8EC00"
                      width="100%"
                      height=""
                      :text-align="'center'"
                      class="ele-c43ff619-898c-4446-a22f-6dc191e8ac6e"
                    >
                      <view class="ele-wrapper ele-wrapper-canel1Button">
                        <hm-uview-button
                          ref="canel1Button"
                          :text="canel1Button.text"
                          :type="canel1Button.type"
                          @click="onCanel1ButtonClick"
                          class="ele-canel1Button"
                        >
                        </hm-uview-button>
                      </view>
                      <view class="ele-wrapper ele-wrapper-sure1Button">
                        <hm-uview-button
                          ref="sure1Button"
                          :text="sure1Button.text"
                          :type="sure1Button.type"
                          @click="onSure1ButtonClick"
                          class="ele-sure1Button"
                        >
                        </hm-uview-button>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-popup>
              </view>
              <view class="ele-wrapper ele-wrapper-phonePopup">
                <hm-uview-popup
                  ref="phonePopup"
                  v-model:show="phonePopup.show"
                  width="80%"
                  height="164px"
                  border-radius="8px"
                  :closeable="false"
                  class="ele-phonePopup"
                >
                  <view
                    class="ele-wrapper ele-wrapper-22dc02bc-b7b8-4d6b-83d6-6ee319d12809"
                  >
                    <hm-uview-bg-card
                      padding="0"
                      box-shadow-color="#00000000"
                      border-radius="0"
                      background-color="#FFE8EC00"
                      width="100%"
                      height=""
                      :text-align="'center'"
                      class="ele-22dc02bc-b7b8-4d6b-83d6-6ee319d12809"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-6102459c-f347-4922-ad1d-8cd25812aa57"
                      >
                        <hm-uview-text font-size="16px" text="活动咨询电话">
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-phoneText">
                        <hm-uview-text
                          ref="phoneText"
                          :text="phoneText.text"
                          class="ele-phoneText"
                        >
                        </hm-uview-text>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-6bf03fb4-83a2-441f-866a-b1bed62d2f12"
                  >
                    <hm-uview-bg-card
                      padding="0"
                      box-shadow-color="#00000000"
                      border-radius="0"
                      background-color="#FFE8EC00"
                      width="100%"
                      height=""
                      :text-align="'center'"
                      class="ele-6bf03fb4-83a2-441f-866a-b1bed62d2f12"
                    >
                      <view class="ele-wrapper ele-wrapper-canelButton">
                        <hm-uview-button
                          ref="canelButton"
                          :text="canelButton.text"
                          :type="canelButton.type"
                          @click="onCanelButtonClick"
                          class="ele-canelButton"
                        >
                        </hm-uview-button>
                      </view>
                      <view class="ele-wrapper ele-wrapper-sureButton">
                        <hm-uview-button
                          ref="sureButton"
                          :text="sureButton.text"
                          :type="sureButton.type"
                          @click="onSureButtonClick"
                          class="ele-sureButton"
                        >
                        </hm-uview-button>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-popup>
              </view>
            </hm-uview-bg-card>
          </view>
        </hm-uview-bg-card>
      </view>
      <view class="ele-wrapper ele-wrapper-addOrderCard">
        <hm-uview-bg-card
          ref="addOrderCard"
          :width="addOrderCard.width"
          :height="addOrderCard.height"
          :border-radius="addOrderCard.borderRadius"
          :padding="addOrderCard.padding"
          :box-shadow-color="addOrderCard.boxShadowColor"
          :hidden="addOrderCard.hidden"
          class="ele-addOrderCard"
        >
          <view class="ele-wrapper ele-wrapper-isProtocol">
            <hm-uview-radio
              ref="isProtocol"
              v-model:value="isProtocol.value"
              title=""
              :list="isProtocol.list"
              class="ele-isProtocol"
            >
            </hm-uview-radio>
          </view>
          <view
            class="ele-wrapper ele-wrapper-7a55d0c9-95ac-4729-befd-31f60ecf4707"
          >
            <hm-uview-text
              text="《活动报名用户协议及承诺书》"
              font-size="14px"
              color="#D6769C"
              :text-align="'left'"
              padding="0"
              @onClick="onEle7A55D0C995Ac4729Befd31F60Ecf4707OnClick"
              class="ele-7a55d0c9-95ac-4729-befd-31f60ecf4707"
            >
            </hm-uview-text>
          </view>
          <view
            class="ele-wrapper ele-wrapper-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f"
          >
            <hm-uview-button
              :type="'success'"
              text="马上报名"
              @click="onElee174C2E6A7994Ccf8Fa92A81Dc515A6FClick"
              class="ele-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f"
            >
            </hm-uview-button>
          </view>
          <view
            class="ele-wrapper ele-wrapper-4d8eb71c-1539-4984-8ba0-e2dd0e6ceeb9"
          >
            <hm-uview-text
              text="已报名，查看我的报名信息"
              font-size="14px"
              color="#D6769C"
              @onClick="onEle4D8Eb71C153949848Ba0E2Dd0E6Ceeb9OnClick"
              class="ele-4d8eb71c-1539-4984-8ba0-e2dd0e6ceeb9"
            >
            </hm-uview-text>
          </view>
        </hm-uview-bg-card>
      </view>
      <view class="ele-wrapper ele-wrapper-notActivity">
        <hm-uview-bg-card
          ref="notActivity"
          :width="notActivity.width"
          :height="notActivity.height"
          :border-radius="notActivity.borderRadius"
          :text-align="notActivity.textAlign"
          :padding="notActivity.padding"
          :box-shadow-color="notActivity.boxShadowColor"
          :background-color="notActivity.backgroundColor"
          :hidden="notActivity.hidden"
          class="ele-notActivity"
        >
          <view
            class="ele-wrapper ele-wrapper-65e518bc-9c0c-4a0a-9379-8bee452aa38f"
          >
            <hm-uview-text text="当前活动已结束"> </hm-uview-text>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import ActivityList from "/@/components/dkn-h-5/activity-list/index.vue";
import PrizeListComponent from "/@/components/dkn-h-5/prize-list-component/index.vue";
import ScrollList from "/@/components/dkn-h-5/scroll-list/index.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import HmRichText from "/@/components/built-in/uniapp/HmRichText.vue";
import HmUviewParse from "/@/components/built-in/uniapp-uview-vue3/HmUviewParse.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";
import HmUviewRadio from "/@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";

export default {
  name: "ActivityRegistrationPage",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
    HmUviewImage,
    HmUviewText,
    ActivityList,
    PrizeListComponent,
    ScrollList,
    HmUviewPopup,
    HmRichText,
    HmUviewParse,
    InformationInputBox,
    HmUviewButton,
    HmUviewRadio,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      outsideBg: {
        width: "100%",
        height: "100%",
        borderRadius: "0",
        padding: "0",
        boxShadowColor: "#00000000",
        backgroundColor: "#FFE8EC",
        hidden: false,
      },
      regularPopup: {
        show: false,
      },
      phonePopup: {
        show: false,
      },
      viewPopup: {
        show: false,
      },
      phoneText: {
        text: "400-888-88888",
      },
      isProtocol: {
        value: "",
        list: [
          {
            name: "我已阅读并同意",
            disabled: false,
          },
        ],
      },
      activityItem: {},
      logoImg: {
        src:
          "https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg",
        width: "100%",
        height: "500px",
      },
      closeTime: {
        day: 19,
        hour: 15,
        minute: 13,
        second: 17,
        backgroundColor: "#00000000",
        color: "#FFFFFF",
        fontSize: 11,
        splitorColor: "#FFFFFF",
      },
      nameText: {
        text: "迪卡侬春节活动",
        fontSize: "16px",
        padding: "0",
      },
      activityList: {
        item: {
          projectList: [
            {
              name: "活动1",
            },
            {
              name: "活动2",
            },
          ],
          number: "12331",
          requirements: "1.314km/5.20km/9.99km",
          closeTime: "2023.11.01",
          time: "2023.11.01-2024.02.15",
          activityType: "跑步",
        },
        backgroundColor: "#FEEFF700",
        textColor: "#d8477b",
      },
      activityImgList: {
        funcList: [
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "block",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
          {
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
            height1: "auto",
            scoretext: "奖品",
            display: "none",
            textbottom: "奖品",
          },
        ],
        backgroundColor: "#feeff7",
        textColor: "#000000",
      },
      listCompanent: {
        funcList: [
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
        ],
        backgroundColor: "#feeff7",
        textColor: "#000000",
        style: [
          {
            margin: "0 0",
            width: "100%",
          },
        ],
      },
      colourCard: {
        backgroundColor: "#F6D7E6",
        width: "100%",
        height: "",
        borderRadius: "0",
        padding: "",
        boxShadowColor: "#00000000",
      },
      activityBg: {
        backgroundColor: "#FEEFF7",
        width: "100%",
        height: "",
        borderRadius: "",
        padding: "0",
      },
      activityRulesText: {
        data: {
          html:
            '<p style="text-align: left;">第一步 报名</p><p style="text-align: left;">点击页面下方的「马上报名」，选择自己要挑战的公里数。</p><p>-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。</p><p> 第二步 比赛</p><p>在比赛时间内，打开 Keep，一次性跑完您挑战的公里数即可。</p><p>-- 户外/跑步机皆可。</p><p>奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；</p><p  style="color: red;">请注意！！若未完赛，则奖牌将无法发出，但配件/周边仍可以在活动结束后发货；（30 个工作日从完赛后第一个工作日开始计算）</p>',
        },
        showHeight: 0,
      },
      addOrderCard: {
        hidden: false,
        width: "100%",
        height: "",
        borderRadius: "0",
        padding: "12",
        boxShadowColor: "#00000000",
      },
      notActivity: {
        hidden: false,
        width: "100%",
        height: "100%",
        borderRadius: "0",
        textAlign: "center",
        padding: "0",
        boxShadowColor: "#00000000",
        backgroundColor: "#FFFFFF",
      },
      imgCard: {
        hidden: false,
        width: "100%",
        height: "",
        borderRadius: "12",
        padding: "",
        backgroundColor: "#F797BD00",
      },
      imgText: {
        text: "活动奖品",
        fontSize: "16px",
        color: "#FFFFFF",
        bgColor: "#FFFFFF00",
        padding: "0",
      },
      activityProjectItem: {},
      activityExtItem: {},
      activityImgItem: {},
      phoneBox: {
        value: "",
      },
      viewInput: {
        value: "",
      },
      activityImgList1: {
        funcList: [
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
          {
            height1: "auto",
            display: "block",
            scoretext: "奖品",
            textbottom: "奖品",
            bgUrl:
              "https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95",
          },
        ],
        style: [
          {
            margin: "0 10px",
            width: "100%",
          },
        ],
      },
      canel1Button: {
        text: "取消",
        type: "info",
      },
      sure1Button: {
        text: "登录",
        type: "info",
      },
      canelButton: {
        text: "取消",
        type: "info",
      },
      sureButton: {
        text: "拨打",
        type: "info",
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
      //大图片
      self.logoImg.src =
        "https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg";
      //倒计时
      self.closeTime.day = "";
      self.closeTime.hour = "";
      self.closeTime.minute = "";
      self.closeTime.second = "";

      //名称
      self.nameText.text = "";

      //活动列表
      self.activityList.item = "";
      //活动图片
      self.activityImgList.funcList = [];
      self.listCompanent.funcList = [];
      //颜色
      //背景色
      self.colourCard.backgroundColor = "#F6D7E6";
      //卡片背景色
      self.activityBg.backgroundColor = "#FEEFF7";
      self.activityList.backgroundColor = "#F6D7E6";
      self.activityImgList.backgroundColor = "#FEEFF7";
      self.listCompanent.backgroundColor = "#FEEFF7";
      //文字颜色
      self.activityList.textColor = "#D8477B";
      self.activityImgList.textColor = "#D8477B";
      self.listCompanent.textColor = "#D8477B";
      //富文本
      self.activityRulesText.data = { html: "" };

      self.phoneText.text = "";
      //数据对象
      self.activityItem = {};
      self.activityExtItem = {};
      self.activityImgItem = {};
      self.activityProjectItem = {};
      self.outsideBg.hidden = false;
      self.addOrderCard.hidden = false;
      self.notActivity.hidden = true;
      self.imgCard.hidden = false;
      self.imgText.text = "活动奖品";
      self.getActivity = async function (id) {
        let url = "/api/dkn/activity/queryByAll";
        const res = await self.$getAction(url, { id });
        if (!res.success || !res.result) {
          self.outsideBg.hidden = true;
          self.addOrderCard.hidden = true;
          self.notActivity.hidden = false;
          return;
        }
        self.activityItem = res.result;
        self.activityExtItem = self.activityItem.activityExts[0];
        self.activityImgItem = self.activityItem.activityImgs;
        self.activityProjectItem = self.activityItem.activityProjects;
        self.setData();
      };
      self.setData = function () {
        self.colourCard.backgroundColor = self.activityItem.bgColour;
        self.activityBg.backgroundColor = self.activityItem.colour;
        self.activityList.backgroundColor = self.activityItem.colour;
        self.activityList.textColor = self.activityItem.textColour;
        self.activityImgList.backgroundColor = self.activityItem.colour;
        self.activityImgList.textColor = self.activityItem.textColour;
        self.listCompanent.backgroundColor = self.activityItem.colour;
        self.listCompanent.textColor = self.activityItem.textColour;
        self.nameText.text = self.activityItem.name;
        let number = self.activityItem.orders;
        if (self.activityItem.unrealStatus === 0) {
          number = self.activityItem.unrealCount + number;
        }
        let projectList = self.activityProjectItem.map((e) => {
          let expense = e.free == 1 ? e.expense : 0;
          return {
            name: `${e.name}:￥${expense}/人`,
          };
        });
        projectList = projectList.sort((a, b) => a.sortNo - b.sortNo);
        self.activityList.item = {
          time: `${self.getDateToFormat(
            self.activityItem.startTime
          )}-${self.getDateToFormat(self.activityItem.endTime)}`,
          closeTime: self.activityItem.closeTime,
          activityType: self.activityExtItem
            ? self.activityExtItem.activityType
            : "",
          requirements: self.activityExtItem
            ? self.activityExtItem.requirements
            : "",
          projectList: projectList,
          number: number,
        };
        const time = self.getTimeDifference(
          new Date(),
          new Date(self.activityItem.closeTime)
        );
        self.closeTime.day = time.days;
        self.closeTime.hour = time.hour;
        self.closeTime.minute = time.minute;
        self.closeTime.second = time.second;
        self.setImg();
        self.setTextArea();
      };
      self.setTextArea = function () {
        self.activityRulesText.data = {
          html: self.activityExtItem.activityRules,
        };
        self.phoneText.text = self.activityExtItem.customerService;
      };
      self.getDateToFormat = function (date) {
        const dateTime = new Date(date);
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth() + 1;
        const day = dateTime.getDate();
        return `${year}-${month}-${day}`;
      };
      self.setImg = function () {
        let imgOne = [];
        let imgTwo = [];
        self.activityImgItem.forEach((e) => {
          if (e.type === 0) {
            imgOne.push(e);
          } else if (e.type === 1) {
            imgTwo.push(e);
          }
        });
        imgTwo = imgTwo.sort((a, b) => a.sortNo - b.sortNo);
        self.activityImgList.funcList = imgTwo.map((x) => {
          return {
            bgUrl: self.getImg(x.path),
            height1: "auto",
            scoretext: x.name,
            display: "block",
            textbottom: x.name,
          };
        });
        if (self.activityImgList.funcList.length === 0) {
          self.imgCard.hidden = true;
          self.imgText.text = "";
        }
        imgOne = imgOne.sort((a, b) => a.sortNo - b.sortNo);
        if (imgOne.length > 0) {
          self.logoImg.src = self.getImg(imgOne[0].path);
        }
        imgOne.splice(0, 1);
        self.listCompanent.funcList = imgOne.map((x) => {
          return {
            bgUrl: self.getImg(x.path),
            height1: "auto",
            // scoretext: x.name,
            display: "block",
            // textbottom: x.name
          };
        });
      };
      self.getImg = function (url) {
        if (url.substring(0, 4) === "http") {
          return url;
        }
        return `/api/sys/common/static/${url}`;
      };
      self.getTimeDifference = function (startDate, endDate) {
        // 计算时间差，单位为毫秒
        const timeDiff = endDate.getTime() - startDate.getTime();
        // 计算天数
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        // 计算小时数
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        // 计算分钟数
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        // 计算秒数
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        return {
          days,
          hours,
          minutes,
          seconds,
        };
      };
      self.getData = function () {
        self.activityId = self.$route.query.activityId;
        if (!self.activityId) {
          return;
        }
        self.getActivity(self.activityId);
      };
      self.getData();
      //页面事件
      //校验手机号
      self.checkPhone = function () {
        let mobile = self.phoneBox.value;
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
      //获取验证码
      self.getPhoneCode = async function () {
        if (!self.checkPhone()) {
          setTimeout(() => {
            self.$refs.viewInput.reset();
          });
          return;
        }
        let url = "/api/sys/sms";
        let params = {
          mobile: self.phoneBox.value,
        };
        const res = await self.$postAction(url, params);
        uni.showToast({
          title: res.message,
          duration: 2000,
        });
      };
      //登录验证
      self.login = async function () {
        if (!self.phoneBox.value) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "手机号不能为空",
            duration: 2000,
          });
          return;
        }
        if (!self.viewInput.value) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "验证码不能为空",
            duration: 2000,
          });
          return;
        }
        let url = "/api/sys/phoneLogin";
        let params = {
          mobile: self.phoneBox.value,
          captcha: self.viewInput.value,
        };
        const res = await self.$postAction(url, params);
        if (!res.success) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: res.message,
            duration: 2000,
          });
          return;
        }
        self.viewPopup.show = false;
        uni.showToast({
          icon: "success",
          position: "top",
          title: res.message,
          duration: 2000,
        });
        uni.setStorageSync("token", res.result.token);
        uni.setStorageSync("userInfo", res.result.userInfo);
        uni.$u.route(
          `/pages/haomo/1750443401116913665/page?activityId=${self.activityId}&activityName=${self.activityItem.name}`
        );
      };
      self.checkOrder = async function () {
        if (!self.phoneBox.value) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "手机号不能为空",
            duration: 2000,
          });
          return;
        }
        if (!self.viewInput.value) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "验证码不能为空",
            duration: 2000,
          });
          return;
        }
        let url = "/api/sys/phoneLogin";
        let params = {
          mobile: self.phoneBox.value,
          captcha: self.viewInput.value,
        };
        const res = await self.$postAction(url, params);
        if (!res.success) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: res.message,
            duration: 2000,
          });
          return;
        }
        self.viewPopup.show = false;
        uni.showToast({
          icon: "success",
          position: "top",
          title: res.message,
          duration: 2000,
        });
        uni.setStorageSync("token", res.result.token);
        uni.setStorageSync("userInfo", res.result.userInfo);
        url = "/api/dkn/registrationOrders/getOne";
        const resp = await self.$getAction(url, {
          phone: self.phoneBox.value,
          activityId: self.activityId,
        });
        if (!resp.success || !resp.result) {
          let item = new Date();
          let closeTime = new Date(self.activityItem.closeTime);
          if (item.getTime() > closeTime.getTime()) {
            self.error("活动已结束");
            return;
          }
          uni.showToast({
            icon: "error",
            position: "top",
            title: "您尚未报名请前往报名活动",
            duration: 2000,
          });
          uni.$u.route(
            `/pages/haomo/1750444738487521281/page?activityId=${self.activityId}&activityName=${self.activityItem.name}`
          );
          return;
        }
        uni.$u.route(
          `/pages/haomo/1750443401116913665/page?activityId=${self.activityId}&activityName=${self.activityItem.name}`
        );
      };
      self.error = function (text) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: text,
          duration: 2000,
        });
      };
    },

    onEle0Abf487751Bc431D8F1A3C043Bc451FeClick() {
      this.regularPopup.show = true;
    },
    onEle228650Bd8F5F4F58B322De6B1040Aba7Click() {
      this.phonePopup.show = true;
    },
    onElef16Cae12Ff6F4D64Ac60014A613Da044Click() {
      this.phonePopup.show = true;
    },
    onViewPopupOpen() {
      console.log(1);
    },
    onViewInputOnCode() {
      this.getPhoneCode();
    },
    onCanel1ButtonClick() {
      this.viewPopup.show = false;
    },
    onSure1ButtonClick() {
      this.checkOrder();
    },
    onCanelButtonClick() {
      this.phonePopup.show = false;
    },
    onSureButtonClick() {
      window.location.href = `tel:${this.phoneText.text}`;
    },
    onEle7A55D0C995Ac4729Befd31F60Ecf4707OnClick() {
      uni.$u.route(
        `/pages/haomo/1752601339138936834/page?activityId=${this.activityId}`
      );
    },
    onElee174C2E6A7994Ccf8Fa92A81Dc515A6FClick() {
      console.log(this.isProtocol.value);
      let closeTime = new Date(this.activityItem.closeTime).getTime();
      let newDate = new Date().getTime();
      if (closeTime < newDate) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "报名活动已截止无法参与报名",
          duration: 2000,
        });
        return;
      }
      if (!this.isProtocol.value) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "请选勾选已阅读并同意活动协议书",
          duration: 2000,
        });
        return;
      }
      uni.$u.route(
        `/pages/haomo/1750444738487521281/page?activityId=${this.activityId}&activityName=${this.activityItem.name}`
      );
    },
    onEle4D8Eb71C153949848Ba0E2Dd0E6Ceeb9OnClick() {
      this.viewPopup.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-outsideBg {
  width: 100%;
  position: relative;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  width: 100%;
}

.ele-wrapper-topBg {
  width: 100%;
  position: fixed;
  top: 24px;
  z-index: 1000;
}

.ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe {
  border-radius: 608rpx;
  float: right;
  text-align: center;
  padding-top: 8rpx;
  margin-right: 24rpx;
  background: rgba(0, 0, 0, 0.16);
  padding: 8px 12px;
}

.ele-wrapper-3de94d32-48f2-495a-b447-4ba9360a1ceb {
  width: 100%;
  position: fixed;
  top: 24px;
  top: 24px;
  z-index: 1000;
}

.ele-wrapper-imageBg {
  width: 100%;
  position: absolute;
  top: 0;
}

.ele-wrapper-logoImg {
  width: 100%;
}

.ele-wrapper-containerBg {
  width: 100%;
  margin-top: 960rpx;
  z-index: 1000;
  /deep/.ele-containerBg {
    background: transparent;
  }

  position: absolute;
}

.ele-wrapper-colourCard {
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  /deep/.hm-bg-card {
    border-radius: 20px 20px 0px 0px;
  }
}

.ele-wrapper-d54b5914-a084-4a9e-9204-991bcc25ecf5 {
  width: 100%;
  margin-bottom: 12rpx;
}

.ele-wrapper-nameText {
  font-weight: bolder;
  display: none;
  width: 100%;
  margin-top: 40rpx;
}

.ele-wrapper-80a0f605-13bf-4742-904d-a7c8cdce9da1 {
  font-weight: bolder;
  width: 100%;
  margin-top: 40rpx;
  padding-left: 24rpx;
  margin-bottom: 12rpx;
}

.ele-wrapper-07beb51b-0feb-440f-9824-a723c709c3ce {
  margin-right: 4rpx;
  margin-left: 24rpx;
  margin-bottom: 8rpx;
}

.ele-wrapper-closeTime {
  /deep/.uni-countdown__splitor {
    font-size: 24rpx !important;
    margin-top: -12rpx !important;
  }
  /deep/.uni-countdown__number {
    background: rgba(218, 74, 128, 0.5) !important;
    margin-top: -12rpx;
  }

  margin-bottom: 8rpx;
}

.ele-wrapper-activityBg {
  width: calc(100% - 48rpx);
  /deep/.ele-activityBg {
    border-radius: 24rpx;
  }
  border-radius: 24rpx;
  margin: 0 24rpx;
}

.ele-wrapper-951ec1d4-209a-48cc-a908-c78236487f39 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12015px;
  margin-top: 8rpx;
  display: none;
}

.ele-wrapper-4f1cb12e-36cb-4378-b823-05b5d45354ab {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  float: left;
  /deep/.u-image__image {
    border-radius: 50% !important;
  }
  margin: 8px 8px;
}

.ele-wrapper-ad039bb7-8f55-4ab8-98a8-54d1f73db365 {
  float: left;
  margin: 8px 0;
}

.ele-wrapper-f1b5f026-f12a-46a9-b78f-dea0efd75a30 {
  float: left;
  margin: 8px 8px 8px 4px;
}

.ele-wrapper-db5afb3e-f8de-4171-94e9-286964bcb67c {
  width: 100%;
  border-bottom: 0.012820512820513rem solid hsla(0, 0%, 100%, 0.15);
  display: none;
}

.ele-wrapper-f0bdc2b0-8112-4546-8c75-84df79598453 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  margin-bottom: 40rpx;
}

.ele-wrapper-activityList {
  margin: 12px 0;
  width: 100%;
  /deep/.ele-wrapper-activityList .ele-activityList {
    background-color: #feeff700 !important;
  }
  /deep/.container {
    background-color: #feeff700 !important;
  }
  /deep/.ele-activityList {
    background: #feeff700 !important;
  }
}

.ele-wrapper-imgText {
  float: left;
  margin-top: 24rpx;
  margin-left: 24rpx;
  font-weight: bolder;
  margin-bottom: 12rpx;
}

.ele-wrapper-imgCard {
  width: 100%;
  padding: 0 24rpx;
}

.ele-wrapper-67658805-d92e-4e1f-8067-6a180eca6391 {
  width: 100%;
  over-flow: scroll;
}

.ele-wrapper-activityImgList1 {
  background-color: #feeff7;

  border-radius: 8px;
  display: none;
}

.ele-wrapper-dacbdcbf-5aa6-416f-a334-d9098c8ccfda {
  float: left;
  margin-top: 24rpx;
  font-weight: bolder;
  margin-left: 24rpx;
  margin-bottom: 12rpx;
}

.ele-wrapper-0d696b7e-8100-4e0a-a949-9e8788ae1cec {
  width: 100%;
}

.ele-wrapper-listCompanent {
  border-radius: 8px;
  width: 100%;
  /deep/.ele-listCompanent {
    display: block !important;
  }
  /deep/.view {
    padding: 0 !important;
  }
}

.ele-wrapper-09caddfa-4979-48b3-81fd-a043baa3c683 {
  margin-bottom: 24rpx;
  width: 100%;
}

.ele-wrapper-228650bd-8f5f-4f58-b322-de6b1040aba7 {
  text-align: center;
  padding: 10rpx 14px;
}

.ele-wrapper-phoneBg {
  width: 100%;
  display: none;
}

.ele-wrapper-f16cae12-ff6f-4d64-ac60-014a613da044 {
  border-radius: 608rpx;
  float: right;
  text-align: center;
  background: rgba(0, 0, 0, 0.16);
  padding: 10rpx 14px;
  margin: 24rpx 24rpx 0 24rpx;
}

.ele-wrapper-regularPopup {
  /deep/.uni-scroll-view-content {
    margin-left: 4%;
    width: 92% !important;
  }
  z-index: 1000;
  position: relative;
}

.ele-wrapper-dc91ed40-34d2-458d-a7fb-c67671b736c2 {
  width: 100%;
  text-align: center;
  margin-top: 12rpx;
}

.ele-wrapper-720c2355-c756-4d18-9400-34ab42449b92 {
  display: none;
}

.ele-wrapper-viewPopup {
  padding: 24rpx 24rpx;
  /deep/.u-mode-center-box {
    border-radius: 8px;
  }
}

.ele-wrapper-ea66b462-b5ce-4b41-8870-bb482768fef8 {
  width: 100%;
  margin-top: 24rpx;
}

.ele-wrapper-ff8c8f6d-abf3-4690-89dd-cab3e0f9c77f {
  width: 100%;
  text-align: center;
  font-weight: bolder;
}

.ele-wrapper-phoneBox {
  width: 80%;
  height: 72rpx;
  /deep/.image_box {
    display: none;
  }
  /deep/.input-placeholder {
    font-size: 12px !important;
    color: #d6d6d6 !important;
    margin-left: 4px !important;
    text-align: left;
  }
  /deep/.gcolor {
    font-size: 12px !important;
  }
  /deep/.color {
    font-size: 12px !important;
  }
  /deep/.input {
    border: 1px solid;
    border-color: #f8f8f8 !important;
  }
  /deep/.ele-phoneBox {
    height: 72rpx;
  }
  /deep/.uni-input-input {
    text-align: left !important;
    margin-left: 4px !important;
  }
  margin-top: 24rpx;
}

.ele-wrapper-viewInput {
  width: 80%;
  height: 72rpx;
  /deep/.image_box {
    display: none;
  }
  /deep/.input-placeholder {
    font-size: 12px !important;
    color: #d6d6d6 !important;
    margin-left: 4px !important;
    text-align: left;
  }
  /deep/.uni-input-input {
    text-align: left !important;
    margin-left: 4px !important;
  }
  /deep/.gcolor {
    font-size: 12px !important;
  }
  /deep/.color {
    font-size: 12px !important;
  }
  /deep/.input {
    border: 1px solid;
    border-color: #f8f8f8 !important;
  }
  /deep/.ele-viewInput {
    height: 72rpx;
  }
  margin-top: 24rpx;
}

.ele-wrapper-c43ff619-898c-4446-a22f-6dc191e8ac6e {
  width: 100%;
  margin-top: 48rpx;
}

.ele-wrapper-canel1Button {
  width: 50%;
  /deep/.ele-canel1Button {
    background: transparent !important;
    color: #409eff !important;
    overflow: visible !important;
    border-radius: 0px !important;
    border-top: 1px solid #f8f8f8 !important;
  }
}

.ele-wrapper-sure1Button {
  width: 50%;
  /deep/.ele-sureButton {
    background: transparent !important;
    color: #409eff !important;
    overflow: visible !important;
    border-radius: 0px !important;
    border-top: 1px solid #f8f8f8 !important;
    border-left: 1px solid #f8f8f8 !important;
  }
}

.ele-wrapper-phonePopup {
  padding: 24rpx 24rpx;
  /deep/.u-mode-center-box {
    border-radius: 8px;
  }
}

.ele-wrapper-22dc02bc-b7b8-4d6b-83d6-6ee319d12809 {
  width: 100%;
  margin-top: 24rpx;
}

.ele-wrapper-phoneText {
  width: 100%;
  margin-top: 24rpx;
}

.ele-wrapper-6bf03fb4-83a2-441f-866a-b1bed62d2f12 {
  width: 100%;
  margin-top: 52rpx;
}

.ele-wrapper-canelButton {
  width: 50%;
  /deep/.ele-canelButton {
    background: transparent !important;
    color: #409eff !important;
    overflow: visible !important;
    border-radius: 0px !important;
    border-top: 1px solid #f8f8f8 !important;
  }
}

.ele-wrapper-sureButton {
  width: 50%;
  /deep/.ele-sureButton {
    background: transparent !important;
    color: #409eff !important;
    overflow: visible !important;
    border-radius: 0px !important;
    border-top: 1px solid #f8f8f8 !important;
    border-left: 1px solid #f8f8f8 !important;
  }
}

.ele-wrapper-addOrderCard {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 100;
}

.ele-wrapper-isProtocol {
  float: left;
  /deep/.u-radio__icon-wrap--circle {
    width: 14px !important;
    height: 14px !important;
  }
  /deep/.u-radio__label {
    font-size: 14px !important;
  }
  margin-left: 24rpx;
}

.ele-wrapper-7a55d0c9-95ac-4729-befd-31f60ecf4707 {
  margin-left: -12px;
  height: 48rpx;
  line-height: 48rpx;
}

.ele-wrapper-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f {
  height: 80rpx;
  margin-left: 60rpx;
  width: calc(100% - 120rpx);
  /deep/.u-size-default {
    height: 80rpx !important;
  }
  /deep/.u-btn--success {
    border-radius: 80px;
    background-color: #e18eb3 !important;
    border-color: #e18eb3 !important;
  }
}

.ele-wrapper-4d8eb71c-1539-4984-8ba0-e2dd0e6ceeb9 {
  width: 100%;
  text-align: center;
}

.ele-wrapper-notActivity {
  width: 100%;
  position: relative;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  width: 100%;
  margin-top: 20%;
}
</style>
