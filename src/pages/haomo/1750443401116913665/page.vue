<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          padding=""
          class="ele-c57e9abe-e655-4515-acc3-575489ca1e33"
        >
          <view
            class="ele-wrapper ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
          >
            <hm-uview-bg-card
              width="100%"
              height="100%"
              border-radius=""
              :text-align="'center'"
              padding=""
              box-shadow-h-shadow=""
              box-shadow-v-shadow=""
              box-shadow-blur=""
              box-shadow-color="#F0F0F000"
              background-color="#F0F0F0"
              class="ele-a4540298-8d72-4b6c-a4e3-fab8f56c0be2"
            >
              <view
                class="ele-wrapper ele-wrapper-32e2869f-33e4-4a30-a8e3-3b0d31222093"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  :text-align="'right'"
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-32e2869f-33e4-4a30-a8e3-3b0d31222093"
                >
                  <view
                    class="ele-wrapper ele-wrapper-bf22f4a1-bf87-45db-bf48-3cb458614952"
                  >
                    <hm-uview-text
                      text="订单编号："
                      font-size="12px"
                      color="#303133"
                      padding="8"
                      class="ele-bf22f4a1-bf87-45db-bf48-3cb458614952"
                    >
                    </hm-uview-text>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
              >
                <hm-uview-bg-card
                  width="100%"
                  height="100%"
                  border-radius=""
                  :text-align="'right'"
                  padding=""
                  box-shadow-v-shadow=""
                  box-shadow-blur=""
                  class="ele-4884fdaf-fa9c-460e-95ad-de4f053bfbf5"
                >
                  <view
                    class="ele-wrapper ele-wrapper-3594e500-632d-42e8-b3b9-d485a0f784a5"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-width="1"
                      border-color="#B0B0B0"
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-3594e500-632d-42e8-b3b9-d485a0f784a5"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-716406f0-2fda-4cc8-9dc0-457fbd1bcec2"
                      >
                        <hm-uview-text
                          text="报名项目:"
                          font-size="13px"
                          padding="0"
                          class="ele-716406f0-2fda-4cc8-9dc0-457fbd1bcec2"
                        >
                        </hm-uview-text>
                      </view>
                      <view
                        class="ele-wrapper ele-wrapper-9756f966-bc8e-4002-afd1-bf38de80086e"
                      >
                        <hm-loop
                          :value="[1]"
                          class="ele-9756f966-bc8e-4002-afd1-bf38de80086e"
                        >
                          <template #default="{ item }">
                            <view class="ele-wrapper ele-wrapper-HmUviewField1">
                              <hm-uview-field
                                ref="HmUviewField1"
                                v-model:value="HmUviewField1.value"
                                label=""
                                placeholder="报名手机号码"
                                label-width="0"
                                icon=""
                                right-icon=""
                                :border-bottom="false"
                                :disabled="true"
                                class="ele-HmUviewField1"
                              >
                              </hm-uview-field>
                            </view>
                          </template>
                        </hm-loop>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-e7bdbfea-5564-4643-a5fe-7f5406777598"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      border-width="1"
                      border-color="#B0B0B0"
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-e7bdbfea-5564-4643-a5fe-7f5406777598"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-a6b059cb-691d-4093-bede-453d1eaf7370"
                      >
                        <hm-uview-text
                          text=" 姓名/昵称:"
                          font-size="13px"
                          padding="0"
                          class="ele-a6b059cb-691d-4093-bede-453d1eaf7370"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField2">
                        <hm-uview-field
                          ref="HmUviewField2"
                          v-model:value="HmUviewField2.value"
                          label=""
                          placeholder="姓名/昵称"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField2"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-df0e3be8-5694-4de1-89ab-efc9e61b2384"
                      >
                        <hm-uview-text
                          text=" 手机号码:"
                          font-size="13px"
                          padding="0"
                          class="ele-df0e3be8-5694-4de1-89ab-efc9e61b2384"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField3">
                        <hm-uview-field
                          ref="HmUviewField3"
                          v-model:value="HmUviewField3.value"
                          label=""
                          placeholder="报名手机号码"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField3"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-da0d9595-55d9-48cf-b00a-082df56d4a58"
                      >
                        <hm-uview-text
                          text="领奖门店:"
                          font-size="13px"
                          padding="0"
                          class="ele-da0d9595-55d9-48cf-b00a-082df56d4a58"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField4">
                        <hm-uview-field
                          ref="HmUviewField4"
                          v-model:value="HmUviewField4.value"
                          label=""
                          placeholder="区域/门店名称"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField4"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-ec8bdb37-8258-4daf-b83b-30ebc2a70f11"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-ec8bdb37-8258-4daf-b83b-30ebc2a70f11"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-1c6f3120-a3af-4da2-91cf-2a913f75e70f"
                      >
                        <hm-uview-text
                          text="报名时间:"
                          font-size="13px"
                          padding="0"
                          class="ele-1c6f3120-a3af-4da2-91cf-2a913f75e70f"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField5">
                        <hm-uview-field
                          ref="HmUviewField5"
                          v-model:value="HmUviewField5.value"
                          label=""
                          placeholder="2024.02.10 15:46:39"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField5"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-1e638196-949e-4db0-8c6d-ffb770b0ac8a"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-1e638196-949e-4db0-8c6d-ffb770b0ac8a"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-d300e2f4-3555-45fa-a67c-be25208705a0"
                      >
                        <hm-uview-text
                          text="活动名称:"
                          font-size="13px"
                          padding="0"
                          class="ele-d300e2f4-3555-45fa-a67c-be25208705a0"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField6">
                        <hm-uview-field
                          ref="HmUviewField6"
                          v-model:value="HmUviewField6.value"
                          label=""
                          placeholder="区域/门店名称"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField6"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-9047135a-0817-4297-9bc0-ba758bea8736"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-9047135a-0817-4297-9bc0-ba758bea8736"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-3ea4931b-f9be-449b-adfa-85aec01fa006"
                      >
                        <hm-uview-text
                          text="核销截止:"
                          font-size="13px"
                          padding="0"
                          class="ele-3ea4931b-f9be-449b-adfa-85aec01fa006"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField7">
                        <hm-uview-field
                          ref="HmUviewField7"
                          v-model:value="HmUviewField7.value"
                          label=""
                          placeholder="2024.02.18 23:59:59"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField7"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                  <view
                    class="ele-wrapper ele-wrapper-e4f5cc89-8551-4bdd-a6ee-b6edac67ce3c"
                  >
                    <hm-uview-bg-card
                      width="100%"
                      height=""
                      :text-align="'right'"
                      padding=""
                      box-shadow-v-shadow=""
                      box-shadow-blur=""
                      class="ele-e4f5cc89-8551-4bdd-a6ee-b6edac67ce3c"
                    >
                      <view
                        class="ele-wrapper ele-wrapper-fba91c42-55e1-404b-97e8-0d6ca8b53ff5"
                      >
                        <hm-uview-text
                          text="核销状态:"
                          font-size="13px"
                          padding="0"
                          class="ele-fba91c42-55e1-404b-97e8-0d6ca8b53ff5"
                        >
                        </hm-uview-text>
                      </view>
                      <view class="ele-wrapper ele-wrapper-HmUviewField8">
                        <hm-uview-field
                          ref="HmUviewField8"
                          v-model:value="HmUviewField8.value"
                          label=""
                          placeholder="待核销/已核销"
                          label-width="0"
                          icon=""
                          right-icon=""
                          :border-bottom="false"
                          :disabled="true"
                          class="ele-HmUviewField8"
                        >
                        </hm-uview-field>
                      </view>
                    </hm-uview-bg-card>
                  </view>
                </hm-uview-bg-card>
              </view>
              <view
                class="ele-wrapper ele-wrapper-ae2f68ea-d21d-4a62-8255-bc0fbe3dd451"
              >
                <hm-uview-text
                  text=" 返回活动详情页"
                  font-size="1em"
                  color="#409EFF"
                  :text-style="{}"
                  @onClick="onEleae2F68EaD21D4A628255Bc0Fbe3Dd451OnClick"
                  class="ele-ae2f68ea-d21d-4a62-8255-bc0fbe3dd451"
                >
                </hm-uview-text>
              </view>
              <view class="ele-wrapper ele-wrapper-Buttonwan">
                <hm-uview-button
                  ref="Buttonwan"
                  :text="Buttonwan.text"
                  :custom-style="Buttonwan.customStyle"
                  class="ele-Buttonwan"
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
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";

export default {
  name: "EventRegistrationInformation",
  components: {
    HmUviewBgCard,
    HmUviewText,
    HmLoop,
    HmUviewField,
    HmUviewButton,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      Buttonwan: {
        text: "核销",
        customStyle: {},
      },
      "9756f966-bc8e-4002-afd1-bf38de80086e": {
        value: [1],
      },
      HmUviewField1: {
        value: "",
      },
      HmUviewField2: {
        value: "",
      },
      HmUviewField3: {
        value: "",
      },
      HmUviewField4: {
        value: "",
      },
      HmUviewField5: {
        value: "",
      },
      HmUviewField6: {
        value: "",
      },
      HmUviewField7: {
        value: "",
      },
      HmUviewField8: {
        value: "",
      },
    };
  },
  watch: {},
  methods: {
    onEleae2F68EaD21D4A628255Bc0Fbe3Dd451OnClick() {
      uni.$u.route(
        "https://stage.block-design.cn/edit-page/?pageId=1750700281953259522"
      );
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  /deep/.hm-bg-card {
    margin-top: 15px !important;
  }
  display: flex;
  justify-content: space-between;
}

.ele-wrapper-c57e9abe-e655-4515-acc3-575489ca1e33 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-a4540298-8d72-4b6c-a4e3-fab8f56c0be2 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.ele-wrapper-32e2869f-33e4-4a30-a8e3-3b0d31222093 {
  width: 100%;
  margin-top: calc(39px + env(safe-area-inset-top));
}

.ele-wrapper-bf22f4a1-bf87-45db-bf48-3cb458614952 {
  margin-right: 75%;
}

.ele-wrapper-4884fdaf-fa9c-460e-95ad-de4f053bfbf5 {
  width: 100%;
}

.ele-wrapper-3594e500-632d-42e8-b3b9-d485a0f784a5 {
  width: 100%;
  display: flex;
  align-items: center;
  /deep/.hm-bg-card {
    margin-top: 15px !important;
  }
  display: flex;
  justify-content: space-between;
}

.ele-wrapper-716406f0-2fda-4cc8-9dc0-457fbd1bcec2 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-9756f966-bc8e-4002-afd1-bf38de80086e {
  width: 65%;
  margin-right: 10%;
}

.ele-wrapper-HmUviewField1 {
  width: 100%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField1 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-e7bdbfea-5564-4643-a5fe-7f5406777598 {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-a6b059cb-691d-4093-bede-453d1eaf7370 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField2 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField2 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-eab88e13-fecb-4ae5-b3c3-ac874b9d8cc9 {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-df0e3be8-5694-4de1-89ab-efc9e61b2384 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField3 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField3 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-15f1e19b-dbc6-4869-a68e-a5c9ae58fad0 {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-da0d9595-55d9-48cf-b00a-082df56d4a58 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField4 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField4 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-ec8bdb37-8258-4daf-b83b-30ebc2a70f11 {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-1c6f3120-a3af-4da2-91cf-2a913f75e70f {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField5 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField5 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-1e638196-949e-4db0-8c6d-ffb770b0ac8a {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-d300e2f4-3555-45fa-a67c-be25208705a0 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField6 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField6 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-9047135a-0817-4297-9bc0-ba758bea8736 {
  width: 100%;
  display: flex;
  align-items: center;
}

.ele-wrapper-3ea4931b-f9be-449b-adfa-85aec01fa006 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField7 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField7 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-e4f5cc89-8551-4bdd-a6ee-b6edac67ce3c {
  width: 100%;
  display: flex;
  align-items: center;
  /deep/.hm-bg-card {
    margin-bottom: 20px;
  }
}

.ele-wrapper-fba91c42-55e1-404b-97e8-0d6ca8b53ff5 {
  padding: 13px 7px;
  vertical-align: top;
}

.ele-wrapper-HmUviewField8 {
  width: 65%;
  height: 45px;
  margin-right: 10%;
  /deep/.u-border-bottom {
    display: flex;
    align-items: center;
    height: 45px;
  }
  /deep/.input-placeholder {
    font-size: 13px;
  }
  /deep/.ele-HmUviewField8 {
    background: rgb(240, 240, 240);
    border-radius: 5px;
    height: 45px;
    display: flex;
    align-items: center;
  }
}

.ele-wrapper-ae2f68ea-d21d-4a62-8255-bc0fbe3dd451 {
  width: 80%;
  margin-top: 20px;
}

.ele-wrapper-Buttonwan {
  width: 80%;
  margin-top: 10%;
  height: 50px;
  margin-bottom: 10px;
  /deep/.ele-Buttonwan {
    font-weight: 400;
    background-color: rgb(89, 213, 165);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    height: 40px;
    border: 0px;
  }
}
</style>
