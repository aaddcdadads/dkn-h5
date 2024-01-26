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
              <view
                class="ele-wrapper ele-wrapper-f91b4645-a50f-4879-857d-46279f610ca8"
              >
                <hm-uview-image
                  src="https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg"
                  width="100%"
                  height="500px"
                  class="ele-f91b4645-a50f-4879-857d-46279f610ca8"
                >
                </hm-uview-image>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-videoBg">
            <hm-uview-bg-card
              ref="videoBg"
              width="100%"
              height=""
              border-radius="0"
              padding="0"
              box-shadow-v-shadow="0"
              box-shadow-blur="0"
              box-shadow-color="#00000000"
              background-color="#FFFFFF00"
              :hidden="true"
              class="ele-videoBg"
            >
              <view
                class="ele-wrapper ele-wrapper-438459e7-727d-4437-a364-b6eb07613382"
              >
                <video class="ele-438459e7-727d-4437-a364-b6eb07613382"></video>
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
                  background-color="#FFE8EC"
                  class="ele-2966337e-38af-4573-a9c7-464b04d48566"
                >
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
                              font-size="11px"
                              color="#FFFFFF"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-0b526546-fffe-44d9-8fc9-6ed8ddc24c72"
                          >
                            <uni-countdown
                              background-color="#00000000"
                              color="#FFFFFF"
                              :font-size="11"
                              splitor-color="#FFFFFF"
                              :day="19"
                              :hour="15"
                              :minute="13"
                              :second="17"
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
                              color="#FFFFFF"
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
                        class="ele-wrapper ele-wrapper-68028b41-e565-41ca-94f3-03281e4d4c4f"
                      >
                        <hm-uview-text
                          text="派对甜心｜HelloKitty生日主题线上跑"
                          color="#FFFFFF"
                          :text-align="'left'"
                          class="ele-68028b41-e565-41ca-94f3-03281e4d4c4f"
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
                              color="#FFFFFF"
                              padding="6"
                              class="ele-f0bdc2b0-8112-4546-8c75-84df79598453"
                            >
                            </hm-uview-text>
                          </view>
                        </hm-uview-bg-card>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-785b238a-f724-409d-9297-30f00dff9cca"
                      >
                        <hm-uview-cell-list
                          :list="[
                            {
                              key: 1,
                              title:
                                '活动时间 2023.11.01 00:00-2024.02.15 23:59',
                              icon: 'calendar',
                              required: false,
                              borderTop: false,
                              borderBottom: false,
                              label: '',
                              value: '',
                            },
                            {
                              key: 2,
                              title: '1.314km/5.20km/9.99km',
                              icon: 'setting-fill',
                              required: false,
                              borderTop: false,
                              borderBottom: false,
                              label: '',
                              value: '',
                            },
                            {
                              key: 3,
                              title: '如何玩转',
                              icon: 'question-circle',
                              required: false,
                              borderTop: false,
                              borderBottom: false,
                              label: '',
                              value: '',
                            },
                            {
                              key: 4,
                              title: '已报名4646人',
                              icon: 'staff',
                              required: false,
                              borderTop: false,
                              borderBottom: false,
                              label: '',
                              value: '',
                            },
                          ]"
                          :arrow="true"
                          :icon-style="{ color: '#fff' }"
                          :title-style="{ color: '#fff' }"
                          class="ele-785b238a-f724-409d-9297-30f00dff9cca"
                        >
                        </hm-uview-cell-list>
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
                              font-size="12px"
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
                              font-size="8px"
                              color="#FFFFFF99"
                              class="ele-b5776b9e-5bb1-40f5-8854-f2b4dc696a41"
                            >
                            </hm-uview-text>
                          </view>
                          <view
                            class="ele-wrapper ele-wrapper-a2b2b5e9-de26-4cb6-bfdf-60722738d013"
                          >
                            <prize-list-component
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
import HmUviewCellList from "/@/components/built-in/uniapp-uview-vue3/HmUviewCellList.vue";
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
    HmUviewCellList,
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

.ele-wrapper-f91b4645-a50f-4879-857d-46279f610ca8 {
  width: 100%;
}

.ele-wrapper-videoBg {
  width: 100%;
}

.ele-wrapper-438459e7-727d-4437-a364-b6eb07613382 {
  width: 100%;
  /deep/.hm-block {
    > video {
      width: 100%;
    }
  }
  /deep/.ele-438459e7-727d-4437-a364-b6eb07613382 {
    width: 100% !important;
    height: 500px !important;
  }
}

.ele-wrapper-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2 {
  width: 100%;
}

.ele-wrapper-2966337e-38af-4573-a9c7-464b04d48566 {
  width: 100%;
}

.ele-wrapper-c2db3fcd-05d0-472b-8e18-163c243cc425 {
  width: 100%;
}

.ele-wrapper-6ba2b397-6caf-44b2-8d16-4ad0c0eba375 {
  width: 100%;
}

.ele-wrapper-951ec1d4-209a-48cc-a908-c78236487f39 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12015px;
}

.ele-wrapper-4f1cb12e-36cb-4378-b823-05b5d45354ab {
  width: 16px;
  height: 16px;
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
  margin: 6px 8px 8px 4px;
}

.ele-wrapper-68028b41-e565-41ca-94f3-03281e4d4c4f {
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
  margin-bottom: 24px;
}

.ele-wrapper-785b238a-f724-409d-9297-30f00dff9cca {
  width: 100%;
  /deep/.u-cell-item-box {
    background: transparent !important;
  }
  /deep/.u-iconfont {
    color: #fff !important;
  }
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
  width: 100%;
}
</style>
