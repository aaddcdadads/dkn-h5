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
              height="400px"
              :mask-close-able="false"
              border-radius="8px"
              :closeable="false"
              class="ele-8e5b00d7-8606-49be-8e41-bd21c1e35237"
            >
              <view class="ele-wrapper ele-wrapper-outsideBg">
                <hm-uview-bg-card
                  ref="outsideBg"
                  width="100%"
                  height=""
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
                  <view class="ele-wrapper ele-wrapper-checkList">
                    <hm-check-list
                      ref="checkList"
                      :data="checkList.data"
                      class="ele-checkList"
                    >
                    </hm-check-list>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-5ceb1472-5f57-4275-9fb8-0975865d8443"
                  >
                    <hm-uview-bg-card> </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-ba846aea-fdb1-41b9-828d-bfa69c395b94"
                  >
                    <hm-uview-button
                      :type="'primary'"
                      text="确定"
                      class="ele-ba846aea-fdb1-41b9-828d-bfa69c395b94"
                    >
                    </hm-uview-button>
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
import HmCheckList from "/@/components/built-in/uniapp/HmCheckList.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "ActivetyView",
  components: {
    HmUviewBgCard,
    HmUviewPopup,
    HmUviewText,
    HmCheckList,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "8e5b00d7-8606-49be-8e41-bd21c1e35237": {
        show: true,
      },
      checkList: {
        data: [
          {
            key: 1,
            name: "活动名称",
            checked: false,
          },
          {
            key: 2,
            name: "活动名称",
            checked: false,
          },
          {
            key: 3,
            name: "活动名称",
            checked: false,
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

.ele-wrapper-checkList {
  /deep/.check-list__item-checked {
    border-radius: 0 !important;
    width: 20px !important;
    height: 20px !important;
  }
  /deep/.check-list__title {
    display: none !important;
  }
  width: 100%;
  /deep/.check-list__item-name {
    font-size: 28rpx !important;
  }
  /deep/.check-list__item-checked-icon {
    width: 14px !important;
    height: 14px !important;
    color: #ffffff !important;
    margin: 0px 2px !important;
  }
  border-bottom: 1px solid #f5f5f5;
}

.ele-wrapper-ba846aea-fdb1-41b9-828d-bfa69c395b94 {
  width: calc(100% - 24px);
  margin-left: 24rpx;
}
</style>
