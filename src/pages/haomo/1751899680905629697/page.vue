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
          <view class="ele-wrapper ele-wrapper-hmUviewPopup">
            <hm-uview-popup
              ref="hmUviewPopup"
              v-model:show="hmUviewPopup.show"
              :mode="'bottom'"
              height="420px"
              :mask-close-able="false"
              border-radius="8px"
              :closeable="false"
              class="ele-hmUviewPopup"
            >
              <view class="ele-wrapper ele-wrapper-outsideBg">
                <hm-uview-bg-card
                  ref="outsideBg"
                  width="100%"
                  height="100%"
                  border-radius="0"
                  padding="0"
                  box-shadow-color="#00000000"
                  class="ele-outsideBg"
                >
                  <view class="ele-wrapper ele-wrapper-titleBg">
                    <hm-uview-bg-card
                      ref="titleBg"
                      width="100%"
                      height="100%"
                      border-radius="0"
                      padding="12"
                      box-shadow-color="#00000000"
                      class="ele-titleBg"
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
                        >
                        </hm-uview-text>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-radioListBg">
                    <hm-uview-bg-card
                      ref="radioListBg"
                      width="100%"
                      height="100%"
                      border-radius="0"
                      padding="0"
                      box-shadow-v-shadow="0"
                      box-shadow-blur="0"
                      box-shadow-color="#00000000"
                      class="ele-radioListBg"
                    >
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
                    </hm-uview-bg-card>
                  </view>
                  <view class="ele-wrapper ele-wrapper-bottomBtnBg">
                    <hm-uview-bg-card
                      ref="bottomBtnBg"
                      width="100%"
                      height="100%"
                      border-radius="0"
                      padding="0"
                      box-shadow-color="#00000000"
                      class="ele-bottomBtnBg"
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
      hmUviewPopup: {
        show: true,
      },
      activityList: {
        list: [],
        value: "",
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
      let userInfoString = localStorage.getItem("userInfo");
      let userInfo = JSON.parse(userInfoString);
      self.userId = userInfo.data.id || "";
      self.activityList.list = [];
      self.activity = "";
      self.getActivity = async function (userId) {
        let url = "/api/dkn/activity/userList";
        const res = await self.$getAction(url, {
          userId: self.userId,
        });
        if (!res.success || !res.result) {
          return;
        }
        self.activityList.list = res.result.map((e) => {
          return {
            ...e,
            name: e.id,
            label: e.name,
            disabled: false,
          };
        });
      };
      self.getActivity();

      self.gotoActivity = function () {
        if (!self.activity) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "请选择活动",
            duration: 2000,
          });
          return;
        }
        let id = self.activity;
        console.log("index", id);
        if (!id) {
          uni.showToast({
            icon: "error",
            position: "top",
            title: "获取活动信息失败",
            duration: 2000,
          });
          return;
        }
        uni.$u.route(
          `/pages/haomo/1753965929131151361/page?activityId=${id}&storeId=${self.storeId}&type=1`
        );
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

.ele-wrapper-hmUviewPopup {
  /deep/.u-drawer-content-visible {
    border-radius: 8px 8px 0px 0px;
  }
  /deep/ .u-drawer__scroll-view {
    position: relative;
    .uni-scroll-view {
      position: static !important;
    }
  }
}

.ele-wrapper-outsideBg {
  width: 100%;
}

.ele-wrapper-titleBg {
  width: 100%;
  height: 58px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  .ele-titleBg {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.ele-wrapper-e5983f9a-4d28-4b8d-a5be-8026fae669f5 {
  font-weight: bolder;
}

.ele-wrapper-radioListBg {
  width: 100%;
  margin: 58px 0px 54px;
}

.ele-wrapper-activityList {
  width: 100%;
  height: 100%;
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
    flex-direction: column;
  }
  /deep/.u-radio__label {
    font-size: 14px !important;
  }
}

.ele-wrapper-bottomBtnBg {
  width: 100%;
  height: 54px;
  background: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  .ele-bottomBtnBg {
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-205a06f4-977c-4fe1-ac28-e46f34c84338 {
  width: calc(100% - 24px);
  margin-left: 24rpx;
}
</style>
