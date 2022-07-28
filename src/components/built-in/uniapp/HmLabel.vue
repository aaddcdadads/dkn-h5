<template>
  <checkbox-group class="uni-list" @change="checkboxChange">
    <label
      class="uni-list-cell uni-list-cell-pd"
      v-for="item in checkboxItems"
      :key="item.name"
    >
      <view>
        <checkbox :value="item.name" :checked="item.checked"></checkbox>
      </view>
      <view>{{ item.value }}</view>
    </label>
  </checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      checkboxItems: [
        {
          name: "USA",
          value: "美国",
        },
        {
          name: "CHN",
          value: "中国",
          checked: "true",
        },
      ],
    };
  },
  components: {},
  name: "HmLabel",
  props: {},
  watch: {},
  mounted() {},
  methods: {
    /**
     * 点击选项触发
     */
    checkboxChange: function (e) {
      console.log(e);
      var checked = e.target.value;
      var changed = {};
      for (var i = 0; i < this.checkboxItems.length; i++) {
        if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
          changed["checkboxItems[" + i + "].checked"] = true;
        } else {
          changed["checkboxItems[" + i + "].checked"] = false;
        }
      }
    },
  },
};
</script>
<style lang="less">
</style>
