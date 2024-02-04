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
              box-shadow-v-shadow=""
              box-shadow-blur=""
            >
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
import HmLoop from "/@/components/built-in/uniapp-haomo/HmLoop.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";

export default {
  name: "NewVerificationConfirmation",
  components: {
    HmUviewBgCard,
    HmLoop,
    HmUviewField,
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
}

.ele-wrapper-3d5cca18-be80-4c03-83e5-d43ea90a2db3 {
  width: 100%;
}

.ele-wrapper-0ded82e1-3f32-400b-915d-b361c39f83db {
  width: 100%;
}
</style>
