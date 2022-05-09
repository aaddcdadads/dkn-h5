<template>
  <view>
    <!-- <hm-uview-cell :list="list1"></hm-uview-cell> -->
    <hm-uview-collapse
      :list="list1"
      :accordion="false"
      :arrow="true"
      arrowColor="red"
      
    >
        <template >

        </template>
    </hm-uview-collapse>
  </view>
</template>

<script>
import HmUviewCollapse from "@/components/built-in/uniapp-uview-vue3/HmUviewCollapse.vue";

export default {
  components: { HmUviewCollapse },
  data() {
    return {
      list1: [
        {
            head: "单位基本信息",
            open: true,
            disabled: false
          },
          {
            head: "探测回路类型",
            open: false,
          },
          {
            head: "配电箱11",
            open: false,
            activeStyle:{
                
            }
          }
      ],
      list2: [
        {
          key: 1,
          title: "左侧标题list2",
          icon: "setting-fill",
          required: true,
          label: "标题下方的描述信息list2",
          value: "右侧内容list2",
        },
        {
          key: 2,
          title: "左侧标题list2",
          icon: "setting-fill",
          required: false,
          label: "",
          value: "右侧内容list2",
        },
      ],
    };
  },
  methods: {
    onClick(index) {
      console.log("index", index);
    },
  },
};
</script>

<style lang="less"></style>
