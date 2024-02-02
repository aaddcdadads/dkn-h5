<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-aaa">
        <hm-index-list
          ref="aaa"
          :list="aaa.list"
          :scroll-top="aaa.scrollTop"
          class="ele-aaa">
        </hm-index-list>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmIndexList from "/@/components/built-in/uniapp-haomo/HmIndexList.vue";

export default {
  components: {
    HmIndexList,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      aaa: {
        list: [
          {
            title: "A",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
              {
                title: "321",
                src: "",
                text: "松",
                name: "饥饿的松鼠",
                subName: "",
              },
            ],
          },
          {
            title: "B",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
          {
            title: "C",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
          {
            title: "D",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
          {
            title: "E",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
          {
            title: "F",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
          {
            title: "G",
            data: [
              {
                title: "123",
                src:
                  "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName: "haomo",
              },
            ],
          },
        ],
        scrollTop: 0,
      },
    };
  },
  watch: {},
  onPageScroll(e) {
    this.onOnPageScroll(e);
  },
  methods: {
    onOnPageScroll(e) {
      this.aaa.scrollTop = e.scrollTop;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-aaa {
  width: 100%;
}
</style>
