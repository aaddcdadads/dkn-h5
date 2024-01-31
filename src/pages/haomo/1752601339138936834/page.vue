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
            class="ele-wrapper ele-wrapper-2e31925f-d6b7-417f-ade1-06f6c61ed275"
          >
            <hm-uview-parse
              :data="{
                html:
                  '<p style=&quot;text-align: left;&quot;>第一步 报名</p><p style=&quot;text-align: left;&quot;>点击页面下方的「马上报名」，选择自己要挑战的公里数。</h2><p>-- 选择公里数对应的奖牌套餐，提交订单支付并填写收件信息即可在完赛后获得奖牌/奖牌配件/周边。</p><p> 第二步 比赛</p><p>在比赛时间内，打开 Keep，一次性跑完您挑战的公里数即可。</p><p>-- 户外/跑步机皆可。</p><p>奖牌及奖牌配件/周边将在完赛后 30 个工作日内发货；</p><p  style=&quot;color: red;&quot;>请注意！！若未完赛，则奖牌将无法发出，但配件/周边仍可以在活动结束后发货；（30 个工作日从完赛后第一个工作日开始计算）</p>',
              }"
              :show-height="0"
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
</style>
