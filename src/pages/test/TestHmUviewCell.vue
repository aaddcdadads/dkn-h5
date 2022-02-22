<template>
  <view>
    <!-- <hm-uview-cell :list="list1"></hm-uview-cell> -->
    <hm-uview-cell
      :list="list2"
      :arrow="false"
      arrowDirection="right"
      :borderBottom="false"
      :borderTop="true"
      bg-color="#ffefef"
      iconSize="20px"
      @itemClick="onClick"
    ></hm-uview-cell>
  </view>
</template>

<script>
import HmUviewCell from "@/components/built-in/uniapp-uview-vue3/HmUviewCell.vue";

export default {
  components: { HmUviewCell },
  data() {
    return {
      list1: [
        {
          key: 1,
          title: "左侧标题",
          icon: "setting-fill",
          required: true,
          label: "标题下方的描述信息",
          value: "右侧内容",
        },
        {
          key: 2,
          title: "左侧标题",
          icon: "setting-fill",
          required: false,
          label: "",
          value: "右侧内容",
        },
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
