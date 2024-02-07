<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-b06d64c4-f458-43af-b486-f9fa892d1fa2"
      >
        <hm-uview-bg-card
          width="100%"
          height="100%"
          border-radius="0"
          padding="0"
          box-shadow-v-shadow="0"
          box-shadow-blur="0"
          class="ele-b06d64c4-f458-43af-b486-f9fa892d1fa2"
        >
          <view class="ele-wrapper ele-wrapper-indexList">
            <hm-index-list
              ref="indexList"
              :list="indexList.list"
              :url="indexList.url"
              :get-data-map="indexList.getDataMap"
              :scroll-top="indexList.scrollTop"
              class="ele-indexList"
            >
            </hm-index-list>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmIndexList from "/@/components/built-in/uniapp-haomo/HmIndexList.vue";

export default {
  name: "Test",
  components: {
    HmUviewBgCard,
    HmIndexList,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      indexList: {
        list: [],
        url: "/api/dkn/store/listOrder",
        getDataMap: {
          name: "key",
        },
        scrollTop: 0,
      },
    };
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      let url = "/api/dkn/store/listOrder";
      let self = this;
      self.$getAction(url, {}).then((res) => {
        console.log("res", res.result);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  /deep/ .page-wrapper {
    width: 100%;
    height: 100%;
  }
}

.ele-wrapper-b06d64c4-f458-43af-b486-f9fa892d1fa2 {
  width: 100%;
  height: 100%;
}

.ele-wrapper-indexList {
  width: 100%;
}
</style>
