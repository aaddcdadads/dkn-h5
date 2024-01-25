<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-74dd38a1-29ac-449c-8d4a-de88e51664a3"
      >
        <hm-uview-bg-card
          width="100%"
          height=""
          class="ele-74dd38a1-29ac-449c-8d4a-de88e51664a3"
        >
          <view
            class="ele-wrapper ele-wrapper-d59aca61-5ef8-4719-80a4-011cceb5d777"
          >
            <hm-uview-field
              value=""
              class="ele-d59aca61-5ef8-4719-80a4-011cceb5d777"
            >
            </hm-uview-field>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewField from "/@/components/built-in/uniapp-uview-vue3/HmUviewField.vue";

export default {
  name: "TestPages",
  components: {
    HmUviewBgCard,
    HmUviewField,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "d59aca61-5ef8-4719-80a4-011cceb5d777": {
        value: "",
      },
      agreement: {},
    };
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      this.agreement.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-74dd38a1-29ac-449c-8d4a-de88e51664a3 {
  width: 100%;
}

.ele-wrapper-d59aca61-5ef8-4719-80a4-011cceb5d777 {
  width: 100%;
}
</style>
