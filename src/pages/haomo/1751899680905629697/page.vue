<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-dbd7f3bd-da08-446b-beec-b1dc37f4621c"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          border-radius="0"
          padding="0"
          box-shadow-color="#00000000"
          class="ele-dbd7f3bd-da08-446b-beec-b1dc37f4621c"
        >
          <view
            class="ele-wrapper ele-wrapper-8e5b00d7-8606-49be-8e41-bd21c1e35237"
          >
            <hm-uview-popup
              :show="true"
              :mode="'bottom'"
              height="420px"
              :mask-close-able="false"
              border-radius="8px"
              :closeable="false"
              class="ele-8e5b00d7-8606-49be-8e41-bd21c1e35237"
            >
              <view class="ele-wrapper ele-wrapper-outsideBg">
                <hm-uview-bg-card
                  ref="outsideBg"
                  width="100%"
                  height="400px"
                  border-radius="0"
                  padding="0"
                  box-shadow-color="#00000000"
                  class="ele-outsideBg"
                >
                  <view
                    class="ele-wrapper ele-wrapper-a8421160-2261-4a40-ad96-c72052540372"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="0"
                      padding="12"
                      box-shadow-color="#00000000"
                      class="ele-a8421160-2261-4a40-ad96-c72052540372"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-e5983f9a-4d28-4b8d-a5be-8026fae669f5"
                      >
                        <hm-uview-text
                          text="选择您参与的活动"
                          font-size="16px"
                          class="ele-e5983f9a-4d28-4b8d-a5be-8026fae669f5"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-bf1a747a-2f34-4286-a58b-55db1afa6d9d"
                      >
                        <hm-uview-text
                          text="取消"
                          font-size="12px"
                          color="#409EFF"
                          class="ele-bf1a747a-2f34-4286-a58b-55db1afa6d9d"
                        >
                        </hm-uview-text>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-activityList">
                    <hm-uview-radio
                      ref="activityList"
                      v-model:value="activityList.value"
                      title=""
                      :list="activityList.list"
                      @radioChange="onActivityListRadioChange"
                      class="ele-activityList"
                    >
                    </hm-uview-radio>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-5ceb1472-5f57-4275-9fb8-0975865d8443"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="0"
                      padding="0"
                      box-shadow-color="#00000000"
                      class="ele-5ceb1472-5f57-4275-9fb8-0975865d8443"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-205a06f4-977c-4fe1-ac28-e46f34c84338"
                      >
                        <hm-uview-button
                          :type="'primary'"
                          :shape="'circle'"
                          text="确定"
                          @click="onEle205A06F4977C4Fe1Ac28E46F34C84338Click"
                          class="ele-205a06f4-977c-4fe1-ac28-e46f34c84338"
                        >
                        </hm-uview-button>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-popup>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import HmUviewRadio from "/@/components/built-in/uniapp-uview-vue3/HmUviewRadio.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "ActivetyView",
  components: {
    HmUviewBgCard,
    HmUviewPopup,
    HmUviewText,
    HmUviewRadio,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "8e5b00d7-8606-49be-8e41-bd21c1e35237": {
        show: true,
      },
      phoneBox: {},
      viewInput: {},
      viewPopup: {},
      activityList: {
        value: "",
        list: [],
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
      self.storeId = self.$route.query.storeId;
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
        if (!res.success || res.message === "手机验证码错误") {
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
          `/pages/haomo/1751899680905629697/page?storeId=${self.storeId}&type=1`
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

    onActivityListRadioChange(e) {
      console.log("e", e);
      this.activity = e;
    },
    onEle205A06F4977C4Fe1Ac28E46F34C84338Click() {
      this.gotoActivity();
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-dbd7f3bd-da08-446b-beec-b1dc37f4621c {
  width: 100%;
}

.ele-wrapper-8e5b00d7-8606-49be-8e41-bd21c1e35237 {
  /deep/.u-drawer-content-visible {
    border-radius: 8px 8px 0px 0px;
  }
}

.ele-wrapper-outsideBg {
  width: 100%;
  position: relative;
}

.ele-wrapper-a8421160-2261-4a40-ad96-c72052540372 {
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
}

.ele-wrapper-e5983f9a-4d28-4b8d-a5be-8026fae669f5 {
  float: left;
  font-weight: bolder;
}

.ele-wrapper-bf1a747a-2f34-4286-a58b-55db1afa6d9d {
  float: right;
}

.ele-wrapper-activityList {
  width: 100%;
  // /deep/.u-radio__icon-wrap--circle{
  //     right: 0;
  //     position: absolute;
  // }
  /deep/.u-radio {
    width: 100% !important;
    position: relative;
    padding-left: 24rpx;
    height: 72rpx;
    border-bottom: 1px solid #f5f5f5 !important;
  }
  /deep/.u-clearfix {
    width: 100% !important;
  }
  /deep/.u-radio__label {
    font-size: 14px !important;
  }
  height: 300px;
  overflow: scroll;
}

.ele-wrapper-5ceb1472-5f57-4275-9fb8-0975865d8443 {
  width: 100%;
}

.ele-wrapper-205a06f4-977c-4fe1-ac28-e46f34c84338 {
  width: calc(100% - 24px);
  margin-left: 24rpx;
}
</style>
