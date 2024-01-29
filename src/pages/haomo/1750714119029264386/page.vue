<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-outsideBg">
        <hm-uview-bg-card
          ref="outsideBg"
          width="100%"
          height=""
          border-radius="0"
          padding="0"
          box-shadow-color="#00000000"
          background-color="#FFE8EC"
          class="ele-outsideBg"
        >
          <view class="ele-wrapper ele-wrapper-topBg">
            <hm-uview-bg-card
              ref="topBg"
              width="100%"
              height=""
              border-radius="0"
              padding="12"
              box-shadow-v-shadow="0"
              box-shadow-blur="0"
              box-shadow-color="#00000000"
              background-color="#FFFFFF00"
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
              width="100%"
              height=""
              border-radius="0"
              padding="12"
              box-shadow-v-shadow="0"
              box-shadow-blur="0"
              box-shadow-color="#00000000"
              background-color="#FFFFFF00"
              class="ele-3de94d32-48f2-495a-b447-4ba9360a1ceb"
            >
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-imageBg">
            <hm-uview-bg-card
              ref="imageBg"
              width="100%"
              height=""
              border-radius="0"
              padding="0"
              box-shadow-v-shadow="0"
              box-shadow-color="#00000000"
              background-color="#FFFFFF00"
              class="ele-imageBg"
            >
              <view class="ele-wrapper ele-wrapper-logoImg">
                <hm-uview-image
                  ref="logoImg"
                  src="https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg"
                  width="100%"
                  height="500px"
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
              <view
                class="ele-wrapper ele-wrapper-2966337e-38af-4573-a9c7-464b04d48566"
              >
                <hm-uview-bg-card
                  width="100%"
                  height=""
                  border-radius="0"
                  padding="12"
                  box-shadow-color="#00000000"
                  background-color="#F6D7E6"
                  class="ele-2966337e-38af-4573-a9c7-464b04d48566"
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
                      <view
                        class="ele-wrapper ele-wrapper-89a1b8fd-c1ac-46be-b13d-592864374f64"
                      >
                        <hm-uview-text text="迪卡侬春节活动" font-size="14px">
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
                          text="报名倒计时"
                          font-size="12px"
                          color="#666666"
                          class="ele-6d62d75a-e400-40e6-a49e-015bd0115567"
                        >
                        </hm-uview-text>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-c2db3fcd-05d0-472b-8e18-163c243cc425"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="12"
                      padding="12"
                      background-color="#F797BD"
                      class="ele-c2db3fcd-05d0-472b-8e18-163c243cc425"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-6ba2b397-6caf-44b2-8d16-4ad0c0eba375"
                      >
                        <hm-uview-bg-card
                          width="100%"
                          height=""
                          border-radius="0"
                          :text-align="'right'"
                          padding="0"
                          box-shadow-v-shadow="0"
                          box-shadow-blur="0"
                          box-shadow-color="#00000000"
                          background-color="#FFFFFF00"
                          class="ele-6ba2b397-6caf-44b2-8d16-4ad0c0eba375"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-a45a5040-24f2-43f3-8f5a-6b9d497eb002"
                          >
                            <hm-uview-text
                              text="报名仅剩"
                              font-size="12px"
                              color="#FFFFFF99"
                            >
                            </hm-uview-text>
                          </view>
                          <view class="ele-wrapper ele-wrapper-closeTime">
                            <uni-countdown
                              ref="closeTime"
                              background-color="#00000000"
                              color="#FFFFFF"
                              :font-size="11"
                              splitor-color="#FFFFFF99"
                              :day="19"
                              :hour="15"
                              :minute="13"
                              :second="17"
                              class="ele-closeTime"
                            >
                            </uni-countdown>
                          </view>
                        </hm-uview-bg-card>
                      </view>
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
                      <view class="ele-wrapper ele-wrapper-nameText">
                        <hm-uview-text
                          ref="nameText"
                          :text="nameText.text"
                          :color="nameText.color"
                          :text-align="nameText.textAlign"
                          class="ele-nameText"
                        >
                        </hm-uview-text>
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
                              text="线上马拉松"
                              font-size="10px"
                              color="#FFFFFF99"
                              padding="6"
                              class="ele-f0bdc2b0-8112-4546-8c75-84df79598453"
                            >
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-9243b683-57b5-45b7-8c57-56a5ffd4a609"
                      >
                        <activity-list
                          class="ele-9243b683-57b5-45b7-8c57-56a5ffd4a609"
                        >
                        </activity-list>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-5799ec0b-0d4b-4bc5-9774-6a2ba9417af5"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="12"
                      padding="12"
                      background-color="#F797BD"
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
                          box-shadow-color="#00000000"
                          background-color="#FFFFFF00"
                          class="ele-67658805-d92e-4e1f-8067-6a180eca6391"
                        >
                          <view
                            class="ele-wrapper ele-wrapper-b5a81ba4-33af-478f-bd93-1199f013e523"
                          >
                            <hm-uview-text
                              text="完赛奖品"
                              font-size="16px"
                              color="#FFFFFF"
                              bg-color="#FFFFFF00"
                              class="ele-b5a81ba4-33af-478f-bd93-1199f013e523"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-b5776b9e-5bb1-40f5-8854-f2b4dc696a41"
                          >
                            <hm-uview-text
                              text="未完赛将无法获得奖品"
                              font-size="12px"
                              color="#FFFFFF99"
                              class="ele-b5776b9e-5bb1-40f5-8854-f2b4dc696a41"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-a2b2b5e9-de26-4cb6-bfdf-60722738d013"
                          >
                            <prize-list-component
                              :func-list="[
                                {
                                  bgUrl:
                                    'https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95',
                                  height1: 'auto',
                                  scoretext: '实体',
                                  display: 'block',
                                  textbottom: '奖品',
                                },
                                {
                                  bgUrl:
                                    'https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95',
                                  height1: 'auto',
                                  scoretext: '实体',
                                  display: 'block',
                                  textbottom: '奖品',
                                },
                                {
                                  bgUrl:
                                    'https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95',
                                  height1: 'auto',
                                  scoretext: '实体',
                                  display: 'block',
                                  textbottom: '奖品',
                                },
                                {
                                  bgUrl:
                                    'https://static2.keepcdn.com/2023/10/24/1698128990564_500x500.png?imageMogr2/thumbnail/200x/quality/95',
                                  height1: 'auto',
                                  scoretext: '实体',
                                  display: 'none',
                                  textbottom: '奖品',
                                },
                              ]"
                              class="ele-a2b2b5e9-de26-4cb6-bfdf-60722738d013"
                            >
                            </prize-list-component>
                          </view>
                        </hm-uview-bg-card>
                      </view>
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
                          width="100%"
                          height="60"
                          :is-border="false"
                          bg-color="#FFFFFF00"
                          :list="[
                            {
                              id: '1',
                              title: 'Keep 三丽鸥家族',
                              descrip: '65484成员',
                              date: '+ 加入',
                              image:
                                'https://img2.baidu.com/it/u=3886895525,3764775842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                            },
                          ]"
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
                      text="活动玩法"
                      font-size="16px"
                      class="ele-dc91ed40-34d2-458d-a7fb-c67671b736c2"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-82757320-2908-4ea4-a4a6-d6a672339dab"
                  >
                    <hm-uview-text
                      text="玩法介绍"
                      font-size="12px"
                      class="ele-82757320-2908-4ea4-a4a6-d6a672339dab"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-f8b609db-e332-45a3-8489-fba690b76d97"
                  >
                    <hm-uview-text
                      text="第一步 报名"
                      font-size="12px"
                      class="ele-f8b609db-e332-45a3-8489-fba690b76d97"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-92d692d3-6c86-4408-8023-fbff541eef72"
                  >
                    <hm-uview-text
                      text="点击页面下方的「马上报名」，选择自己要挑战的公里数。"
                      font-size="12px"
                      :text-align="'left'"
                      class="ele-92d692d3-6c86-4408-8023-fbff541eef72"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-1bc765de-b93e-4b9b-9419-38462cabd3e8"
                  >
                    <hm-uview-text
                      text="-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。"
                      font-size="12px"
                      :text-align="'left'"
                      class="ele-1bc765de-b93e-4b9b-9419-38462cabd3e8"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-6a8da34f-c177-4734-9296-60012cc53022"
                  >
                    <hm-uview-text
                      text="第二步 比赛"
                      font-size="12px"
                      :text-align="'left'"
                      class="ele-6a8da34f-c177-4734-9296-60012cc53022"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-7d3df9ae-0d2a-4b45-b228-d0b656c92814"
                  >
                    <hm-uview-text
                      text="在比赛时间内，打开 Keep，一次性跑完您挑战的公里数即可。"
                      font-size="12px"
                      :text-align="'left'"
                      class="ele-7d3df9ae-0d2a-4b45-b228-d0b656c92814"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-a4e33194-afbc-45e7-bcc8-ddbcf26c79ec"
                  >
                    <hm-uview-text
                      text="-- 户外/跑步机皆可。"
                      font-size="12px"
                      :text-align="'left'"
                      class="ele-a4e33194-afbc-45e7-bcc8-ddbcf26c79ec"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-31fd4b60-ff13-4aae-8696-7a49451ada65"
                  >
                    <hm-uview-text
                      text="第三步 完赛"
                      font-size="12px"
                      class="ele-31fd4b60-ff13-4aae-8696-7a49451ada65"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-53f33209-47f4-4d7b-950c-d746bca5fc54"
                  >
                    <hm-uview-text
                      text="奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；"
                      font-size="12px"
                      class="ele-53f33209-47f4-4d7b-950c-d746bca5fc54"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-30657b3a-defb-4229-91e7-6326e04c3af2"
                  >
                    <hm-uview-text
                      text="请注意！！若未完赛，则奖牌将无法发出，但配件/周边仍可以在活动结束后发货；（30 个工作日从完赛后第一个工作日开始计算）"
                      font-size="12px"
                      color="#E60000"
                      :text-align="'left'"
                      class="ele-30657b3a-defb-4229-91e7-6326e04c3af2"
                    >
                    </hm-uview-text>
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
          padding="0"
          box-shadow-color="#00000000"
          class="ele-2136b833-7f0e-4a8a-a081-36d9e275f611"
        >
          <view
            class="ele-wrapper ele-wrapper-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f"
          >
            <hm-uview-button
              :type="'success'"
              text="马上报名"
              class="ele-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f"
            >
            </hm-uview-button>
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
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

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
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      regularPopup: {
        show: false,
      },
      nameText: {
        text: "派对甜心｜HelloKitty生日主题线上跑",
        color: "#FFFFFF",
        textAlign: "left",
      },
    };
  },
  watch: {},
  methods: {
    onEle0Abf487751Bc431D8F1A3C043Bc451FeClick() {
      this.regularPopup.show = true;
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

.ele-wrapper-2966337e-38af-4573-a9c7-464b04d48566 {
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
}

.ele-wrapper-c2db3fcd-05d0-472b-8e18-163c243cc425 {
  width: 100%;
}

.ele-wrapper-6ba2b397-6caf-44b2-8d16-4ad0c0eba375 {
  width: 100%;
}

.ele-wrapper-closeTime {
  /deep/.uni-countdown__splitor {
    font-size: 12px !important;
  }
  /deep/.uni-countdown__number {
    background: hsla(0, 0%, 100%, 0.15) !important;
  }
}

.ele-wrapper-951ec1d4-209a-48cc-a908-c78236487f39 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12015px;
  margin-top: 8rpx;
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

.ele-wrapper-nameText {
  width: 100%;
  font-weight: 600;
  font-size: 0.512820512820513rem;
}

.ele-wrapper-db5afb3e-f8de-4171-94e9-286964bcb67c {
  width: 100%;
  border-bottom: 0.012820512820513rem solid hsla(0, 0%, 100%, 0.15);
}

.ele-wrapper-f0bdc2b0-8112-4546-8c75-84df79598453 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  margin-bottom: 40rpx;
}

.ele-wrapper-9243b683-57b5-45b7-8c57-56a5ffd4a609 {
  margin-top: 40rpx;
}

.ele-wrapper-5799ec0b-0d4b-4bc5-9774-6a2ba9417af5 {
  width: 100%;
  margin-top: 24rpx;
}

.ele-wrapper-67658805-d92e-4e1f-8067-6a180eca6391 {
  width: 100%;
}

.ele-wrapper-b5a81ba4-33af-478f-bd93-1199f013e523 {
  float: left;
}

.ele-wrapper-b5776b9e-5bb1-40f5-8854-f2b4dc696a41 {
  float: right;
}

.ele-wrapper-a2b2b5e9-de26-4cb6-bfdf-60722738d013 {
  width: 100%;
  position: relative;
  margin-top: 12rpx;
}

.ele-wrapper-9bb5842b-b006-40fa-a5a0-9c71da20a550 {
  width: 100%;
  margin-top: 24rpx;
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

.ele-wrapper-2136b833-7f0e-4a8a-a081-36d9e275f611 {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
}

.ele-wrapper-e174c2e6-a799-4ccf-8fa9-2a81dc515a6f {
  height: 120rpx;
  width: 100%;
  /deep/.u-size-default {
    height: 120rpx !important;
  }
  /deep/.u-btn--success {
    background-color: rgb(36, 199, 137) !important;
    border-color: rgb(36, 199, 137) !important;
  }
}
</style>
