<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius=""
          padding="10"
          box-shadow-v-shadow=""
          box-shadow-blur=""
          class="ele-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7"
        >
          <view
            class="ele-wrapper ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3"
          >
            <hm-loop
              :value="[
                { label: '姓名/昵称', placeholder: '姓名/昵称' },
                { label: '手机号码', placeholder: '17722729038' },
                { label: '领奖门店', placeholder: '迪卡侬深圳北站店' },
              ]"
              class="ele-3d5cca18-be80-4c03-83e5-d43ea90a2db3"
            >
              <template #default="{ item }">
                <view
                  class="ele-wrapper ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db"
                >
                  <hm-uview-field
                    value=""
                    :label="item.label"
                    :placeholder="item.placeholder"
                    label-width="160"
                    :label-align="'center'"
                    icon=""
                    right-icon=""
                    class="ele-0ded82e1-3f32-400b-915d-b361c39f83db"
                  >
                  </hm-uview-field>
                </view>
              </template>
            </hm-loop>
          </view>
          <view
            class="ele-wrapper ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              padding=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              class="ele-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c"
            >
              <view
                class="ele-wrapper ele-wrapper-8270ddf0-7ca3-412d-a1a2-6ede8337634c"
              >
                <hm-uview-field
                  value=""
                  label="活动名称"
                  placeholder="活动名称"
                  label-width="160"
                  :label-align="'center'"
                  icon=""
                  right-icon=""
                  class="ele-8270ddf0-7ca3-412d-a1a2-6ede8337634c"
                >
                </hm-uview-field>
              </view>
              <view class="ele-wrapper ele-wrapper-prizeImageBox">
                <hm-uview-bg-card
                  ref="prizeImageBox"
                  width="100%"
                  height="100%"
                  border-radius=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-prizeImageBox"
                >
                  <view
                    class="ele-wrapper ele-wrapper-a46c4597-9e01-4191-8f9e-fc2396ae8aea"
                  >
                    <hm-uview-text
                      text="活动奖品"
                      font-size="14px"
                      color="#999999"
                      class="ele-a46c4597-9e01-4191-8f9e-fc2396ae8aea"
                    >
                    </hm-uview-text>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-315c9068-5a40-4c3b-9b6d-3841b926c816"
                  >
                    <hm-loop
                      :value="[{ src: '' }, { src: '' }, { src: '' }]"
                      class="ele-315c9068-5a40-4c3b-9b6d-3841b926c816"
                    >
                      <template #default="{ item }">
                        <view
                          class="ele-wrapper ele-wrapper-fbf844c5-828e-4650-bab4-24aeaffae8ca"
                        >
                          <hm-uview-image
                            width="80px"
                            height="80px"
                            class="ele-fbf844c5-828e-4650-bab4-24aeaffae8ca"
                          >
                          </hm-uview-image>
                        </view>
                      </template>
                    </hm-loop>
                  </view>
                </hm-uview-bg-card>
              </view>
            </hm-uview-bg-card>
          </view>
          <view
            class="ele-wrapper ele-wrapper-fc0c5391-6bd0-4160-886a-72f353cfa0e3"
          >
            <hm-uview-button
              :shape="'circle'"
              text="确认核销"
              class="ele-fc0c5391-6bd0-4160-886a-72f353cfa0e3"
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
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";
import HmUviewImage from "/@/components/built-in/uniapp-uview-vue3/HmUviewImage.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "NewVerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmLoop,
    HmUviewField,
    HmUviewText,
    HmUviewImage,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "3d5cca18-be80-4c03-83e5-d43ea90a2db3": {
        value: [
          {
            label: "姓名/昵称",
            placeholder: "姓名/昵称",
          },
          {
            label: "手机号码",
            placeholder: "17722729038",
          },
          {
            label: "领奖门店",
            placeholder: "迪卡侬深圳北站店",
          },
        ],
      },
      "0ded82e1-3f32-400b-915d-b361c39f83db": {
        value: "",
      },
      "8270ddf0-7ca3-412d-a1a2-6ede8337634c": {
        value: "",
      },
      "315c9068-5a40-4c3b-9b6d-3841b926c816": {
        value: [
          {
            src: "",
          },
          {
            src: "",
          },
          {
            src: "",
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

.ele-wrapper-d2f3fb59-dd6f-46a0-9ab7-5a867871dbd7 {
  width: 100%;
  height: 100vh;
}

.ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3 {
  width: 100%;
}

.ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db {
  width: 100%;
}

.ele-wrapper-bd3f0318-13d0-4d2d-bfdd-2d31bb69e33c {
  width: 100%;
}

.ele-wrapper-8270ddf0-7ca3-412d-a1a2-6ede8337634c {
  width: 100%;
}

.ele-wrapper-prizeImageBox {
  width: 100%;
  .ele-prizeImageBox {
    display: flex;
  }
}

.ele-wrapper-a46c4597-9e01-4191-8f9e-fc2396ae8aea {
  width: 83px;
}

.ele-wrapper-315c9068-5a40-4c3b-9b6d-3841b926c816 {
  flex: 1;
  margin-left: 12px;
  /deep/.uni-scroll-view-content {
    display: flex;
    flex-wrap: wrap;
  }
}

.ele-wrapper-fbf844c5-828e-4650-bab4-24aeaffae8ca {
  margin-right: 8px;
}

.ele-wrapper-fc0c5391-6bd0-4160-886a-72f353cfa0e3 {
  width: 100%;
  /deep/.u-btn {
    background: linear-gradient(179.94deg, #ff9fc7 0%, #f32878 100%);
    color: #ffffff;
  }
}
</style>
