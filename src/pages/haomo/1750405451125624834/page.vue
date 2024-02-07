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
          <view
            class="ele-wrapper ele-wrapper-b7585dbe-1163-4c41-ade4-cd5a0ad7d68e"
          >
            <hm-index-list
              :list="[
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '饿的小松鼠',
                  subName: 'haomo',
                },
                {
                  title: '321',
                  src: '',
                  text: '松',
                  name: '饥饿的松鼠',
                  subName: '',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '饥饿的小松鼠',
                  subName: 'haomo',
                },
                {
                  title: '321',
                  src: '',
                  text: '松',
                  name: '饥饿的松鼠',
                  subName: '',
                },
                {
                  title: '321',
                  src: '',
                  text: '松',
                  name: 'A的松鼠',
                  subName: '',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '的小松鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '小松鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '松鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: '松xiao鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: 'xiao鼠',
                  subName: 'haomo',
                },
                {
                  title: '123',
                  src:
                    'https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800',
                  text: '',
                  name: 'ao鼠',
                  subName: 'haomo',
                },
              ]"
              :scroll-top="0"
              class="ele-b7585dbe-1163-4c41-ade4-cd5a0ad7d68e"
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
    return {};
  },
  watch: {},
  methods: {},
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

.ele-wrapper-b7585dbe-1163-4c41-ade4-cd5a0ad7d68e {
  width: 100%;
}
</style>
