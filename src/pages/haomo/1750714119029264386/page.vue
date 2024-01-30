<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-outsideBg">
        <hm-uview-bg-card
          ref="outsideBg"
          padding="0"
          box-shadow-color="#00000000"
          border-radius="0"
          background-color="#FFE8EC"
          width="100%"
          height=""
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
                  label-color="#FFFFFF"
                  color="#FFFFFF"
                  size="20px"
                  name="question-circle"
                  label="规则"
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
          <view
            class="ele-wrapper ele-wrapper-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2"
          >
            <hm-uview-bg-card
              width="100%"
              height=""
              border-radius="0"
              padding="0"
              box-shadow-color="#00000000"
              class="ele-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2"
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
                          :padding="nameText.padding"
                          :font-size="nameText.fontSize"
                          :text="nameText.text"
                          class="ele-nameText"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-4f853c6d-0b81-4d35-8ce5-ac7316260eae"
                      >
                        <uni-countdown
                          background-color="#00000000"
                          color="#FFFFFF"
                          :font-size="11"
                          splitor-color="#666666"
                          :day="19"
                          :hour="15"
                          :minute="13"
                          :second="17"
                          class="ele-4f853c6d-0b81-4d35-8ce5-ac7316260eae"
                        >
                        </uni-countdown>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-6d62d75a-e400-40e6-a49e-015bd0115567"
                      >
                        <hm-uview-text
                          padding="0"
                          color="#666666"
                          font-size="14px"
                          text="报名倒计时"
                          class="ele-6d62d75a-e400-40e6-a49e-015bd0115567"
                        >
                        </hm-uview-text>
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
                          width="100%"
                          height=""
                          border-radius="0"
                          padding="0"
                          box-shadow-v-shadow="0"
                          box-shadow-blur="0"
                          box-shadow-color="#00000000"
                          background-color="#FFFFFF1F"
                          class="ele-951ec1d4-209a-48cc-a908-c78236487f39"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-4f1cb12e-36cb-4378-b823-05b5d45354ab"
                          >
                            <hm-uview-image
                              width="100%"
                              height="100%"
                              border-redius="50%"
                              class="ele-4f1cb12e-36cb-4378-b823-05b5d45354ab"
                            >
                            </hm-uview-image>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-ad039bb7-8f55-4ab8-98a8-54d1f73db365"
                          >
                            <hm-uview-text
                              text="Keep ·HelloKitty系列"
                              font-size="12px"
                              color="#FFFFFF"
                              padding="0"
                              class="ele-ad039bb7-8f55-4ab8-98a8-54d1f73db365"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-f1b5f026-f12a-46a9-b78f-dea0efd75a30"
                          >
                            <hm-uview-icon
                              name="arrow-right"
                              color="#FFFFFF99"
                              size="12px"
                              label=""
                              label-color="#FFFFFF"
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
                          width="100%"
                          height=""
                          border-radius="12"
                          padding="0"
                          box-shadow-color="#00000000"
                          background-color="#F797BD00"
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
                  <view
                    class="ele-wrapper ele-wrapper-76b3694d-443e-4d62-8c58-80e0356f7fa4"
                  >
                    <hm-uview-text
                      text="活动奖品"
                      font-size="16px"
                      color="#000000"
                      bg-color="#FFFFFF00"
                      padding="0"
                      class="ele-76b3694d-443e-4d62-8c58-80e0356f7fa4"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-5799ec0b-0d4b-4bc5-9774-6a2ba9417af5"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="12"
                      padding="0"
                      background-color="#F797BD00"
                      class="ele-5799ec0b-0d4b-4bc5-9774-6a2ba9417af5"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-67658805-d92e-4e1f-8067-6a180eca6391"
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
                          class="ele-67658805-d92e-4e1f-8067-6a180eca6391"
                        >
                          <view class="ele-wrapper ele-wrapper-activityImgList">
                            <prize-list-component
                              ref="activityImgList"
                              :func-list="activityImgList.funcList"
                              :style="activityImgList.style"
                              :background-color="
                                activityImgList.backgroundColor
                              "
                              class="ele-activityImgList"
                            >
                            </prize-list-component>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-dacbdcbf-5aa6-416f-a334-d9098c8ccfda"
                  >
                    <hm-uview-text
                      color="#000000"
                      font-size="16px"
                      text="活动详情"
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
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-9bb5842b-b006-40fa-a5a0-9c71da20a550"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="12"
                      padding="12"
                      background-color="#F797BD"
                      class="ele-9bb5842b-b006-40fa-a5a0-9c71da20a550"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-5ffca98b-a826-46e6-a408-cf1165d243d2"
                      >
                        <hm-cell-list
                          :is-border="false"
                          width="100%"
                          :list="[
                            {
                              date: '+ 加入',
                              image:
                                'https://img2.baidu.com/it/u=3886895525,3764775842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                              descrip: '65484成员',
                              id: '1',
                              title: 'Keep 三丽鸥家族',
                            },
                          ]"
                          bg-color="#FFFFFF00"
                          height="60"
                          class="ele-5ffca98b-a826-46e6-a408-cf1165d243d2"
                        >
                        </hm-cell-list>
                      </view>
                    </hm-uview-bg-card>
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
                    class="ele-wrapper ele-wrapper-63de2731-6d75-42cd-bd28-d99b529b8759"
                  >
                    <hm-uview-parse
                      :data="{
                        html:
                          '<h1 style=&quot;text-align: center;&quot;>新闻</h1><h2 style=&quot;text-align: center;&quot;>作者：胡小根</h2><p>这是正文。</p><p> 这是结尾。</p>',
                      }"
                      :show-height="0"
                    >
                    </hm-uview-parse>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-534e6687-3b1f-438f-936b-40c32eed0534"
                  >
                    <hm-rich-text
                      :nodes="[
                        {
                          children: [
                            { text: '玩法介绍', type: 'text' },
                            { text: '第一步 报名', type: 'text' },
                            {
                              text:
                                '点击页面下方的「马上报名」，选择自己要挑战的公里数。',
                              type: 'text',
                            },
                            {
                              text:
                                '-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。',
                              type: 'text',
                            },
                            { text: '第二步 比赛', type: 'text' },
                            {
                              text:
                                '在比赛时间内，打开 Keep，一次性跑完您挑战的公里数即可。',
                              type: 'text',
                            },
                            { text: '-- 户外/跑步机皆可。', type: 'text' },
                            {
                              text:
                                '奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；',
                              type: 'text',
                            },
                          ],
                          name: 'div',
                          attrs: {
                            style:
                              'line-height: 40px; color: #000000; text-align:left;',
                            class: 'div-class',
                          },
                        },
                      ]"
                      class="ele-534e6687-3b1f-438f-936b-40c32eed0534"
                    >
                    </hm-rich-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-82757320-2908-4ea4-a4a6-d6a672339dab"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="玩法介绍"
                      class="ele-82757320-2908-4ea4-a4a6-d6a672339dab"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-f8b609db-e332-45a3-8489-fba690b76d97"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="第一步 报名"
                      class="ele-f8b609db-e332-45a3-8489-fba690b76d97"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-92d692d3-6c86-4408-8023-fbff541eef72"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="点击页面下方的「马上报名」，选择自己要挑战的公里数。"
                      :text-align="'left'"
                      class="ele-92d692d3-6c86-4408-8023-fbff541eef72"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-1bc765de-b93e-4b9b-9419-38462cabd3e8"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。"
                      :text-align="'left'"
                      class="ele-1bc765de-b93e-4b9b-9419-38462cabd3e8"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-6a8da34f-c177-4734-9296-60012cc53022"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="第二步 比赛"
                      :text-align="'left'"
                      class="ele-6a8da34f-c177-4734-9296-60012cc53022"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-7d3df9ae-0d2a-4b45-b228-d0b656c92814"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text=""
                      :text-align="'left'"
                      class="ele-7d3df9ae-0d2a-4b45-b228-d0b656c92814"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-a4e33194-afbc-45e7-bcc8-ddbcf26c79ec"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="-- 户外/跑步机皆可。"
                      :text-align="'left'"
                      class="ele-a4e33194-afbc-45e7-bcc8-ddbcf26c79ec"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-31fd4b60-ff13-4aae-8696-7a49451ada65"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="第三步 完赛"
                      class="ele-31fd4b60-ff13-4aae-8696-7a49451ada65"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-53f33209-47f4-4d7b-950c-d746bca5fc54"
                  >
                    <hm-uview-text
                      font-size="12px"
                      text="奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；"
                      class="ele-53f33209-47f4-4d7b-950c-d746bca5fc54"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-30657b3a-defb-4229-91e7-6326e04c3af2"
                  >
                    <hm-uview-text
                      color="#E60000"
                      font-size="12px"
                      text="请注意！！若未完赛，则奖牌将无法发出，但配件/周边仍可以在活动结束后发货；（30 个工作日从完赛后第一个工作日开始计算）"
                      :text-align="'left'"
                      class="ele-30657b3a-defb-4229-91e7-6326e04c3af2"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-popup>
              </view>
              <view class="ele-wrapper ele-wrapper-viewPopup">
                <hm-uview-popup
                  ref="viewPopup"
                  v-model:show="viewPopup.show"
                  width="80%"
                  height="220px"
                  border-radius="8px"
                  :closeable="false"
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
      <view
        class="ele-wrapper ele-wrapper-2136b833-7f0e-4a8a-a081-36d9e275f611"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          border-radius="0"
          padding="12"
          box-shadow-color="#00000000"
          class="ele-2136b833-7f0e-4a8a-a081-36d9e275f611"
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
import HmCellList from "/@/components/built-in/uniapp/HmCellList.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import HmUviewParse from "/@/components/built-in/uniapp-uview-vue3/HmUviewParse.vue";
import HmRichText from "/@/components/built-in/uniapp/HmRichText.vue";
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
    HmCellList,
    HmUviewPopup,
    HmUviewParse,
    HmRichText,
    InformationInputBox,
    HmUviewButton,
    HmUviewRadio,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      logoImg: {
        src:
          "https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg",
        width: "100%",
        height: "500px",
      },
      regularPopup: {
        show: true,
      },
      viewPopup: {
        show: false,
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
      closeTime: {},
      nameText: {
        text: "迪卡侬春节活动",
        padding: "0",
        fontSize: "16px",
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
        backgroundColor: "#feeff7",
        textColor: "#d8477b",
      },
      activityImgList: {
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
        textColor: null,
        style: [
          {
            margin: "0 10px",
            width: "100%",
          },
        ],
      },
      colourCard: {
        backgroundColor: "#F6D7E6",
        width: "100%",
        height: "",
        borderRadius: "0",
        padding: "12",
        boxShadowColor: "#00000000",
      },
      activityBg: {
        backgroundColor: "#FEEFF7",
        width: "100%",
        height: "",
        borderRadius: "",
        padding: "0",
      },
      activityItem: {},
      activityProjectItem: {},
      activityExtItem: {},
      activityImgItem: {},
      phoneBox: {
        value: "",
      },
      viewInput: {
        value: "",
      },
      canelButton: {
        text: "取消",
        type: "info",
      },
      sureButton: {
        text: "确认",
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

      //颜色
      //背景色
      self.colourCard.backgroundColor = "#F6D7E6";
      //卡片背景色
      self.activityBg.backgroundColor = "#FEEFF7";
      self.activityList.backgroundColor = "#F6D7E6";
      self.activityImgList.backgroundColor = "#FEEFF7";
      //文字颜色
      self.activityList.textColor = "#D8477B";
      self.activityImgList.textColor = "#D8477B";
      //数据对象
      self.activityItem = {};
      self.activityExtItem = {};
      self.activityImgItem = {};
      self.activityProjectItem = {};
      self.getActivity = async function (id) {
        let url = "/api/dkn/activity/queryByAll";
        const res = await self.$getAction(url, { id });
        if (!res.success || !res.result) {
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
        // self.activityImgList.backgroundColor = self.activityItem.colour
        // self.activityImgList.textColor = self.activityItem.textColour
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
        imgOne = imgTwo.sort((a, b) => a.sortNo - b.sortNo);
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
    },

    onEle0Abf487751Bc431D8F1A3C043Bc451FeClick() {
      this.regularPopup.show = true;
    },
    onCanelButtonClick() {
      this.viewPopup.show = false;
    },
    onSureButtonClick() {
      this.viewPopup.show = false;
    },
    onElee174C2E6A7994Ccf8Fa92A81Dc515A6FClick() {
      console.log(this.isProtocol.value);
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
  padding-bottom: 120rpx;
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
}

.ele-wrapper-logoImg {
  width: 100%;
}

.ele-wrapper-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2 {
  width: 100%;
}

.ele-wrapper-colourCard {
  width: 100%;
  position: absolute;
  margin-top: -48rpx;
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
}

.ele-wrapper-4f853c6d-0b81-4d35-8ce5-ac7316260eae {
  /deep/.uni-countdown__splitor {
    color: #666666;
    font-size: 12px !important;
  }
  /deep/.uni-countdown__number {
    background: #d8477b !important;
  }
  float: right;
}

.ele-wrapper-6d62d75a-e400-40e6-a49e-015bd0115567 {
  float: right;
  margin-right: 4rpx;
}

.ele-wrapper-activityBg {
  width: 100%;
  /deep/.ele-activityBg {
    border-radius: 12px;
  }
  border-radius: 12px;
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
}

.ele-wrapper-76b3694d-443e-4d62-8c58-80e0356f7fa4 {
  float: left;
  margin-top: 24rpx;
  font-weight: bolder;
  margin-bottom: 12rpx;
}

.ele-wrapper-5799ec0b-0d4b-4bc5-9774-6a2ba9417af5 {
  width: 100%;
}

.ele-wrapper-67658805-d92e-4e1f-8067-6a180eca6391 {
  width: 100%;
}

.ele-wrapper-activityImgList {
  background-color: #feeff7;
  padding-top: 12px;
  border-radius: 8px;
}

.ele-wrapper-dacbdcbf-5aa6-416f-a334-d9098c8ccfda {
  float: left;
  margin-top: 12px;
  font-weight: bolder;
  margin-bottom: 12rpx;
}

.ele-wrapper-0d696b7e-8100-4e0a-a949-9e8788ae1cec {
  width: 100%;
}

.ele-wrapper-9bb5842b-b006-40fa-a5a0-9c71da20a550 {
  width: 100%;
  margin-top: 24rpx;
  display: none;
}

.ele-wrapper-5ffca98b-a826-46e6-a408-cf1165d243d2 {
  width: 100%;
  /deep/.left_title {
    color: #fff;
  }
  /deep/.left_descrip {
    color: hsla(0, 0%, 100%, 0.6) !important;
  }
  /deep/.left_date {
    color: #fff !important;
    border-radius: 1.435897435897436rem;
    font-size: 12px;
    padding: 4px 12px;
    border: 1px solid hsla(0, 0%, 100%, 0.6);
  }
  /deep/.right_bg {
    padding-top: 24px;
  }
}

.ele-wrapper-regularPopup {
  /deep/.uni-scroll-view-content {
    margin-left: 4%;
    width: 92% !important;
  }
}

.ele-wrapper-dc91ed40-34d2-458d-a7fb-c67671b736c2 {
  width: 100%;
  text-align: center;
  margin-top: 24px;
}

.ele-wrapper-534e6687-3b1f-438f-936b-40c32eed0534 {
  width: 100%;
}

.ele-wrapper-82757320-2908-4ea4-a4a6-d6a672339dab {
  width: 100%;
}

.ele-wrapper-f8b609db-e332-45a3-8489-fba690b76d97 {
  width: 100%;
}

.ele-wrapper-92d692d3-6c86-4408-8023-fbff541eef72 {
  width: 100%;
}

.ele-wrapper-1bc765de-b93e-4b9b-9419-38462cabd3e8 {
  width: 100%;
}

.ele-wrapper-6a8da34f-c177-4734-9296-60012cc53022 {
  width: 100%;
}

.ele-wrapper-7d3df9ae-0d2a-4b45-b228-d0b656c92814 {
  width: 100%;
}

.ele-wrapper-a4e33194-afbc-45e7-bcc8-ddbcf26c79ec {
  width: 100%;
}

.ele-wrapper-31fd4b60-ff13-4aae-8696-7a49451ada65 {
  width: 100%;
}

.ele-wrapper-53f33209-47f4-4d7b-950c-d746bca5fc54 {
  width: 100%;
}

.ele-wrapper-30657b3a-defb-4229-91e7-6326e04c3af2 {
  width: 100%;
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
  margin-top: 64rpx;
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

.ele-wrapper-2136b833-7f0e-4a8a-a081-36d9e275f611 {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
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
</style>
