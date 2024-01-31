<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-outsideBg">
        <hm-uview-bg-card
          ref="outsideBg"
          width="100%"
          height=""
          border-radius="0"
          padding="24"
          box-shadow-color="#00000000"
          background-color="#FFFFFF"
          class="ele-outsideBg"
        >
          <view class="ele-wrapper ele-wrapper-protocolText">
            <hm-uview-parse
              ref="protocolText"
              :data="protocolText.data"
              :show-height="protocolText.showHeight"
            >
            </hm-uview-parse>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewParse from "/@/components/built-in/uniapp-uview-vue3/HmUviewParse.vue";

export default {
  name: "ActivityRegistrationUserAgreementAndCommitmentLetterPage",
  components: {
    HmUviewBgCard,
    HmUviewParse,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      protocolText: {
        data: {
          html:
            '<p>欢迎参加本次活动，请您在参与之前仔细阅读并确认以下用户协议及承诺书内容：</p><p style="margin-top: 8px;">一、个人信息保护</p><p>1. 您同意在参与活动过程中，提供真实、准确、完整的个人信息，并保证其合法性。</p><p>2. 我们承诺对您的个人信息进行保密处理，不会未经您的同意泄露、传播或用于其他商业目的。</p><p style="margin-top: 8px;">二、活动参与规则</p><p>. 活动仅限于年满18周岁及以上的合法居民参与。</p><p>2. 每位用户仅限参与一次，多次参与将被视为无效</p><p>3. 如发现作弊行为，主办方有权取消参与者的资格并追究法律责任。</p> <p style="margin-top: 8px;">三、奖品及领取</p><p>1. 奖品将根据抽奖结果发放，主办方有权根据实际情况对奖品进行调整。</p><p>2. 中奖者需提供真实有效的联系方式及地址信息，以便主办方发送奖品。</p><p>3. 奖品领取过程中产生的相关费用将由中奖者自行承担。</p><p style="margin-top: 8px;">四、免责声明</p><p>1.活动过程中由于不可抗力因素导致活动无法进行的，主办方不承担责任。</p><p>2. 您参与活动所导致的任何风险和后果将由您自行承担，主办方不承担任何责任。</p><p>请您确认并同意以上用户协议及承诺书内容，表示您愿意遵守相关规定并参与本次活动。如有任何疑问或问题，请及时联系我们</p><p style="margin-top: 8px;">感谢您的配合与支持，祝您活动顺利！</p>',
        },
        showHeight: 0,
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

.ele-wrapper-outsideBg {
  width: 100%;
}
</style>
