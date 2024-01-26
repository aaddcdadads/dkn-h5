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
                  class="ele-0abf4877-51bc-431d-8f1a-3c043bc451fe"
                >
                </hm-uview-icon>
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
                class="ele-wrapper ele-wrapper-7a2f13f4-3ba2-456e-a67a-c507181b2442"
              >
                <hm-video-list
                  :num="1"
                  class="ele-7a2f13f4-3ba2-456e-a67a-c507181b2442"
                >
                </hm-video-list>
              </view>
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
                        </hm-uview-bg-card>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
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
import HmUviewIcon from "/@/components/built-in/uniapp-uview-vue3/HmUviewIcon.vue";
import HmVideoList from "/@/components/built-in/uniapp/HmVideoList.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";

export default {
  name: "AddlistSuggestions",
  components: {
    HmUviewBgCard,
    HmUviewIcon,
    HmVideoList,
    HmUviewText,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {};
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-outsideBg {
  width: 100%;
}

.ele-wrapper-topBg {
  width: 100%;
}

.ele-wrapper-0abf4877-51bc-431d-8f1a-3c043bc451fe {
  border-radius: 608rpx;
  float: right;
  width: 160rpx;
  text-align: center;
  padding-top: 8rpx;
  margin-right: 24rpx;
  background: rgba(0, 0, 0, 0.16);
}

.ele-wrapper-2bcd93f6-265c-4f8d-83ec-744c2f6d40e2 {
  width: 100%;
}

.ele-wrapper-7a2f13f4-3ba2-456e-a67a-c507181b2442 {
  width: 100%;
  height: 500px;
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
</style>
