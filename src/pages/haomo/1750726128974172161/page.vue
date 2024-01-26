<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a"
        >
          <view class="ele-wrapper ele-wrapper-titlePrice">
            <hm-uview-bg-card
              ref="titlePrice"
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-titlePrice"
            >
              <view
                class="ele-wrapper ele-wrapper-d5bbc53a-e10d-447f-ad1c-d820e1888444"
              >
                <hm-uview-text
                  text="¥ 499.00"
                  color="#F56C6C"
                  class="ele-d5bbc53a-e10d-447f-ad1c-d820e1888444"
                >
                </hm-uview-text>
              </view>
              <view
                class="ele-wrapper ele-wrapper-9e72204c-af42-497a-9f74-447633df49ca"
              >
                <hm-uview-icon
                  name="clock"
                  color="#999999"
                  size="14px"
                  label="剩下时间 23:59:59"
                  label-size="12px"
                  label-color="#999999"
                  class="ele-9e72204c-af42-497a-9f74-447633df49ca"
                >
                </hm-uview-icon>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-weixin">
            <hm-uview-bg-card
              ref="weixin"
              width="100%"
              height="100%"
              border-radius=""
              :border-style="'solid'"
              border-width="1px"
              border-color="#F2F2F2"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-weixin"
            >
              <view class="ele-wrapper ele-wrapper-weixinpay">
                <hm-uview-bg-card
                  ref="weixinpay"
                  width="100%"
                  height="100%"
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-weixinpay"
                >
                  <view
                    class="ele-wrapper ele-wrapper-79c85c41-77a4-4d5d-8011-bcb1450dd53e"
                  >
                    <hm-uview-image
                      src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/weixin%20(2).png"
                      width="40px"
                      height="40px"
                    >
                    </hm-uview-image>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-50df9d0c-f26f-48c6-bd8f-be142b30a434"
                  >
                    <hm-uview-text
                      text="微信支付"
                      font-size="16px"
                      class="ele-50df9d0c-f26f-48c6-bd8f-be142b30a434"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-37b1cd04-5fee-4df3-943a-43f69feeaf26"
              >
                <hm-uview-radio
                  value="false"
                  title=""
                  :list="[{ name: '', disabled: false }]"
                  active-color="#F56C6C"
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
              :border-style="'solid'"
              border-width="1px"
              border-color="#F2F2F2"
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-zhifubao"
            >
              <view class="ele-wrapper ele-wrapper-zhifubaopay">
                <hm-uview-bg-card
                  ref="zhifubaopay"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-zhifubaopay"
                >
                  <view
                    class="ele-wrapper ele-wrapper-a2688ccd-ff91-4fa6-a3fc-00dab047ad02"
                  >
                    <hm-uview-image
                      src="https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/zhifu.png"
                      width="40px"
                      height="40px"
                    >
                    </hm-uview-image>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-c66fc368-41ad-4820-98ec-9bb74cb74ea3"
                  >
                    <hm-uview-text
                      text="支付宝"
                      font-size="16px"
                      class="ele-c66fc368-41ad-4820-98ec-9bb74cb74ea3"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-8deedb81-a36f-4a24-978b-cae6f360c014"
              >
                <hm-uview-radio
                  value=""
                  title=""
                  :list="[{ name: '', disabled: false }]"
                  active-color="#F56C6C"
                >
                </hm-uview-radio>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-d699006e-fe43-4b8f-9729-1cd0bc37bd9f"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-d699006e-fe43-4b8f-9729-1cd0bc37bd9f"
            >
              <view
                class="ele-wrapper ele-wrapper-1aaf7284-2fc1-4da2-9265-e885207e059f"
              >
                <hm-uview-button
                  :type="'error'"
                  text="确认支付"
                  class="ele-1aaf7284-2fc1-4da2-9265-e885207e059f"
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
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import HmUviewRadio from "/@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "PaymentOrder",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmUviewIcon,
    HmUviewImage,
    HmUviewRadio,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "37b1cd04-5fee-4df3-943a-43f69feeaf26": {
        value: "false",
        list: [
          {
            name: "",
            disabled: false,
          },
        ],
      },
      "8deedb81-a36f-4a24-978b-cae6f360c014": {
        value: "",
        list: [
          {
            name: "",
            disabled: false,
          },
        ],
      },
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-cee9d9cc-cb1e-4b02-9600-85fa5cd8957a {
  width: 100%;
  height: 100vh;
}

.ele-wrapper-titlePrice {
  width: 100%;
  .ele-titlePrice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.ele-wrapper-d5bbc53a-e10d-447f-ad1c-d820e1888444 {
  font-family: "Montserrat Bold", "Montserrat", sans-serif;
  font-weight: 700;
  color: #f56c6c;
}

.ele-wrapper-9e72204c-af42-497a-9f74-447633df49ca {
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  color: #999999;
}

.ele-wrapper-weixin {
  width: 100%;
  height: 80px;
  margin-top: 300px;
  .ele-weixin {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-weixinpay {
  .hm-bg-card {
    display: flex;
  }
}

.ele-wrapper-50df9d0c-f26f-48c6-bd8f-be142b30a434 {
  margin-left: 15px;
}

.ele-wrapper-zhifubao {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  .ele-zhifubao {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-zhifubaopay {
  .hm-bg-card {
    display: flex;
  }
}

.ele-wrapper-c66fc368-41ad-4820-98ec-9bb74cb74ea3 {
  margin-left: 15px;
}

.ele-wrapper-d699006e-fe43-4b8f-9729-1cd0bc37bd9f {
  width: 100%;
  margin-top: 30px;
}

.ele-wrapper-1aaf7284-2fc1-4da2-9265-e885207e059f {
  width: 100%;
}
</style>
