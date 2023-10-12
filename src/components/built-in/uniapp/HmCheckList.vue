<template>
  <view class="check-list">
    <view class="check-list__title">
      <view class="check-list__title-text">{{`${title}（已选中${selected.length}个）`}}</view>
      <view class="check-list__title-check-all" @click="checkAll(isCheckAll ? false : true)">{{isCheckAll ? '取消全选' : '全选'}}</view>
    </view>
    <view 
      class="check-list__item"
      v-for="item in cData" 
      :key="item.key"
    >
      <view class="check-list__item-name">{{item.name}}</view>
      <view 
        class="check-list__item-checked" 
        :style="{backgroundColor: item.checked ? '#1CB9C2' : '#EEEEEE'}"
        @click="check(item)"
      >
        <u-icon v-if="item.checked" class="check-list__item-checked-icon" name="checkbox-mark"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
import {
  getAction,
} from "/@/request/http";

/**
 * 多选数组
 */
export default {
  name: "HmCheckList",
  props: {
    /**
     * 数据
     */
    data: {
      type: Array,
      default: function () {
        return [
          {
            key: 1,
            name: "John Brown1",
            checked: true
          },
          {
            key: 2,
            name: "John Brown1",
            checked: false
          },
          {
            key: 3,
            name: "John Brown1",
            checked: false
          },
        ];
      },
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "区域清单"
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
				return {
          key: "key",
					name: "name",
					checked: "checked",
				};
			},
    },
  },
  data() {
    return {
      cData: [],
    }
  },
  watch: {
    data: {
      handler: function (value, oldValue) {
        this.cData = JSONfn.parse(JSONfn.stringify(value));
      },
      deep: true
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          // 修复相等的情况下也调用watch的bug
          return;
        }
        this.getData(null, value);
      },
      deep: true
    },
  },
  computed: {
    selected(){
      return this.cData.filter(item => item.checked).map(item => item.key);
    },
    isCheckAll(){
      return this.selected.length == this.cData.length;
    }
  },
  mounted() {
    this.cData = this.data;
    this.getData();
  },
  methods: {
    getData(url, params) {
      let self = this;
      self._getData(url, params);
    },
    _getData(url, params) {
      let self = this;
      url = url || this.url;
      params = params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});

      if(!url) return;

      getAction(url, params).then((resp) => {
        console.log(`get list data: `, resp);
        self.cData = [];
        let data = [];

        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.data) {
          data = resp.data;
        };

        self.cData = self.dataMap ? 
          self.handleDataMapping(data, self.dataMap) : data;

      });
    },
    /**
     * 处理数据映射
     */
    handleDataMapping(data, dataMap){
      return data.map(item => {
        let obj = {}
        dataMap.forEach((value, key) => {
          obj[key] = item[value] || ''
        });
        return obj
      })
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    check(item){
      item.checked = !item.checked
      this.$emit('change', this.selected)
    },
    checkAll(flag){
      this.cData.forEach(item => {
        item.checked = flag
      })
      this.$emit('change', this.selected)
    }
  },
};
</script>

<style scoped lang="less">
.check-list{
  background: #FFFFFF;
  border-radius: 8px;
  padding: 2px 12px;

  /** font */
  font-family: PingFangSC-Regular;

  &__title{
    height: 37px;
    line-height: 37px;
    display: flex;
    justify-content: space-between;
    
    /** font */
    font-size: 12px;
    letter-spacing: 0;

    &-text{
      color: #999999;
    }

    &-check-all{
      color: #1CB9C2;
    }
  }

  &__item{
    display: flex;
    height: 48px;
    line-height: 48px;
    padding-right: 5px;

    /** font */
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;

    justify-content: space-between;
    border-bottom: 1px solid #F5F5F5;

    &:last-child{
      border-bottom: unset;
    }

    &-checked{
      background: red;
      margin: 13px 0;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      line-height: 22px;

      &-icon{
        width: 16px;
        height: 16px;
        color: #FFFFFF;
        margin: 0px 3px;
      }
    }
  }

}
</style>