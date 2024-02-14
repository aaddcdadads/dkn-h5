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
              <view class="ele-wrapper ele-wrapper-viewPopup">
                <hm-uview-popup
                  ref="viewPopup"
                  v-model:show="viewPopup.show"
                  width="300px"
                  height="220px"
                  border-radius="8px"
                  :closeable="false"
                  class="ele-viewPopup"
                >
                  <view
                    class="ele-wrapper ele-wrapper-ea66b462-b5ce-4b41-8870-bb482768fef8"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-radius="0"
                      :text-align="'center'"
                      padding="0"
                      box-shadow-color="#00000000"
                      background-color="#FFE8EC00"
                      class="ele-ea66b462-b5ce-4b41-8870-bb482768fef8"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-ff8c8f6d-abf3-4690-89dd-cab3e0f9c77f"
                      >
                        <hm-uview-text
                          text=" 用户登录"
                          font-size="16px"
                          class="ele-ff8c8f6d-abf3-4690-89dd-cab3e0f9c77f"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-phoneBox">
                        <information-input-box
                          ref="phoneBox"
                          v-model:value="phoneBox.value"
                          :left-src="phoneBox.leftSrc"
                          right-src=""
                          :show-code="false"
                          placeholder=" 请填写报名手机号码"
                          class="ele-phoneBox"
                        >
                        </information-input-box>
                      </view>
                      <view class="ele-wrapper ele-wrapper-viewInput">
                        <information-input-box
                          ref="viewInput"
                          v-model:value="viewInput.value"
                          :left-src="viewInput.leftSrc"
                          placeholder=" 请填写手机验证码"
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
                      width="100%"
                      height=""
                      border-radius="0"
                      :text-align="'center'"
                      padding="0"
                      box-shadow-color="#00000000"
                      background-color="#FFE8EC00"
                      class="ele-c43ff619-898c-4446-a22f-6dc191e8ac6e"
                    >
                      <view class="ele-wrapper ele-wrapper-canelButton">
                        <hm-uview-button
                          ref="canelButton"
                          :type="canelButton.type"
                          :text="canelButton.text"
                          @click="onCanelButtonClick"
                          class="ele-canelButton"
                        >
                        </hm-uview-button>
                      </view>
                      <view class="ele-wrapper ele-wrapper-sureButton">
                        <hm-uview-button
                          ref="sureButton"
                          :type="sureButton.type"
                          :text="sureButton.text"
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
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "ScanTheLoginPage1",
  components: {
    HmUviewBgCard,
    HmUviewPopup,
    HmUviewText,
    InformationInputBox,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      viewPopup: {
        show: true,
      },
      phoneBox: {
        value: "",
        leftSrc: [],
      },
      viewInput: {
        value: "",
        leftSrc: [],
      },
      canelButton: {
        type: "info",
        text: "取消",
      },
      sureButton: {
        type: "info",
        text: "确认",
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
          `/pages/haomo/1751899680905629697/page?storeId=${self.storeId}`
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

    onViewInputOnCode() {
      this.getPhoneCode();
    },
    onCanelButtonClick() {
      this.viewPopup.show = false;
    },
    onSureButtonClick() {
      let self = this;
      self.login();
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

.ele-wrapper-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2 {
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
  /deep/.image_box1 {
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
  /deep/.ele-phoneBox {
    height: 72rpx;
  }
  margin-top: 24rpx;
}

.ele-wrapper-viewInput {
  width: 80%;
  height: 72rpx;
  /deep/.image_box1 {
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
</style>
