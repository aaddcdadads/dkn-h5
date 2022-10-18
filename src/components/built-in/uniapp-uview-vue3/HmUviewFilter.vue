<template>
  <u-row class="filter__single-popup-top-mask" v-if="singleFilterShow" @click="singleFilterShow = false">
  </u-row>
  <u-row class="search">
    <u-col span="10" class="search__input-div">
      <u-input
        class="search__input"
        placeholder="请输入内容"
        border="surround"
        shape="circle"
        v-model="keyValue"
        @change="change"
      ></u-input>
    </u-col>
    <u-col span="2" class="search__text-div" >
      <view @click="search">
        搜索
      </view>
    </u-col>
  </u-row>
  <u-row class="sort">
    <view class="sort__div" 
      :style="{ width: sortDivWidth + '%' }" 
      v-for="(sort, index) in cSortOption" 
      :key="index"
      @click="sortSelect(sort)"
    >
      <view class="sort__text" :style="{ fontWeight: sort.isSelect ? '600' : 'normal' }">{{sort.name}}</view>
      <view class="sort__icon">
        <u-row><u-icon v-if="!sort.isSelect || order == 'asc'" class="sort__icon-up" name="arrow-up-fill"></u-icon></u-row>
        <u-row><u-icon v-if="!sort.isSelect || order == 'desc'" class="sort__icon-down" name="arrow-down-fill"></u-icon></u-row>
      </view>
      <view v-if="sort.isSelect" class="sort__select-div"></view>
    </view>
  </u-row>
  <u-row class="filter">
    <scroll-view class="filter__scroll-div" :scroll-x="true">
      <view 
        :class="['filter__text-div', {'filter__text-div_select': filter.isSelect}, {'filter__text-div_hasValue': filter.value && !filter.isSelect}]" 
        :style="{display: filter.show ? '' : 'none'}"
        v-for="(filter, index) in cFilterOption" 
        :key="index" 
        @click="filterSelect(filter)"
      >
        {{ filter.name }}
      </view>
    </scroll-view>
    <view class="filter__button" @click="filterShow = true">
      <view class="filter__button-text">筛选</view>
      <view class="filter__button-icon-div"><u-icon class="filter__button-icon" name="list"></u-icon></view>
    </view>
    <u-popup 
      class="filter__popup"
      v-model="filterShow" 
      mode="right" 
      width="85%" 
    >
      <view class="filter__popup-form">
        <view class="filter__popup-form-div" v-for="(filter, index) in cFilterOption" :key="index">
          <view class="filter__popup-form-label">{{filter.name}}</view>
          <view class="filter__popup-form-value">
            <u-input v-model="filter.value" v-if="filter.type == 'Input'" type="text" :border="true"></u-input>
          </view>
        </view>
      </view>
      <!-- <view class="filter__popup-btn-group-fixed"> -->
        <view class="filter__popup-btn-group">
          <u-button 
            size="medium" 
            shape="circle" 
            class="filter__popup-btn"
            @click="filterReset"
          >重置</u-button>
          <u-button 
            size="medium" 
            shape="circle" 
            type="error" 
            class="filter__popup-btn"
            @click="filterConfirm"
          >确定</u-button>
        </view>
      <!-- </view> -->
		</u-popup>
    <u-popup 
      class="filter__single-popup"
      v-model="singleFilterShow" 
      mode="top" 
      :custom-style="{top: '100px'}" 
      duration="0"
      :mask-custom-style="{height: maskHeight, top: '100px'}"
      @close="clearFilterSelect"
    >
      <u-row class="filter__single-popup-form-div">
        <u-input v-model="currentCloneFilter.value" v-if="currentCloneFilter.type == 'Input'" type="text" :border="true"></u-input>
      </u-row>
      <u-row class="filter__single-popup-btn-group">
        <u-button 
          size="medium" 
          shape="circle" 
          class="filter__single-popup-btn"
          @click="singleFilterReset"
        >重置</u-button>
        <u-button 
          size="medium" 
          shape="circle" 
          type="error" 
          class="filter__single-popup-btn"
          @click="singleFilterConfirm"
        >确定</u-button>
      </u-row>
		</u-popup>
  </u-row>
</template>

<script>
import {
  getFilterValue,
} from "./filter/util"

export default {
  name: "HmUviewFilter",
  props: {
    sortOption: {
      type: Object,
      default: function(){
        return [{
          name: 'test1',
          code: 'test1'
        },{
          name: 'test2',
          code: 'test2'
        },{
          name: 'test3',
          code: 'test3'
        }]
      }
    },
    filterOption: {
      type: Object,
      default: function(){
        return [{
          name: 'test1',
          code: 'test1',
          type: 'Input',
          show: true,
        },{
          name: 'test2',
          code: 'test2',
          type: 'Input',
          show: true
        },{
          name: 'test3',
          code: 'test3',
          type: 'Input',
          show: true
        },{
          name: 'test4',
          code: 'test4',
          type: 'Input',
          show: true
        },{
          name: 'test5',
          code: 'test5',
          type: 'Input',
          show: true
        },{
          name: 'test6',
          code: 'test6',
          type: 'Input',
          show: true
        },{
          name: 'test7',
          code: 'test7',
          type: 'Input',
          show: true
        },{
          name: 'test8',
          code: 'test8',
          type: 'Input',
          show: true
        },{
          name: 'test9',
          code: 'test9',
          type: 'Input',
          show: true
        }]
      }
    },
    keyColumn: {
      type: String,
      default: "key"
    }
  },
  watch: {
    
  },
  computed: {
    sortDivWidth(){
      return this.cSortOption.length > 0 ? 100 / this.cSortOption.length : 0;
    },
    maskHeight(){
      return `${window.innerHeight - 100}px`;
    },
  },
  mounted() {
    this.cSortOption = this.sortOption
    this.cFilterOption = this.filterOption
  },
  data() {
    return {
      cSortOption: [],
      cFilterOption: [],
      filterShow: false,
      singleFilterShow: false,
      currentFilter: null,
      currentCloneFilter: null,
      order: 'asc',
      keyValue: ''
    };
  },
  methods: {
    sortSelect(item){
      let self = this;
      if(item.isSelect){
        self.order = self.order == 'asc' ? 'desc' : 'asc'
        return
      }
      self.order = 'asc'
      self.cSortOption.forEach(sort => {
        if(sort.code == item.code){
          sort.isSelect = true
        }else{
          sort.isSelect = false
        }
      })
    },
    filterSelect(item){
      let self = this;
      self.singleFilterShow = true;
      self.cFilterOption.forEach(filter => {
        if(filter.code == item.code){
          filter.isSelect = true
          self.currentFilter = filter
          self.currentCloneFilter = Object.assign({}, filter)
        }else{
          filter.isSelect = false
        }
      })
    },
    clearFilterSelect(){
      this.cFilterOption.forEach(filter => {
        filter.isSelect = false
      })
    },
    singleFilterReset(){
      this.currentCloneFilter.value = undefined
    },
    singleFilterConfirm(){
      this.singleFilterShow = false
      Object.assign(this.currentFilter, this.currentCloneFilter)
    },
    filterReset(){
      this.cFilterOption.forEach(filter => {
        filter.value = undefined
      })
    },
    filterConfirm(){
      this.filterShow = false
    },
    search(){
      this.$emit("search", {
        filter: this.getFilterValues(),
        sort: this.getSortValues()
      })
    },
    getFilterValues(){
      let obj = {}
      this.cFilterOption.forEach(item => {
        if (newValues[key] != undefined) {
          getFilterValue(item, obj)
        }
      })
      if(this.keyValue){
        obj[this.keyColumn] = `*${this.keyValue}*`
      }
      return obj
    },
    getSortValues(){
      let obj = {}
      return obj
    }
  },
};
</script>

<style lang="less">
.search {
  &__input {
    border-color: #F63515 !important;
    border-radius: 18px;
    /deep/ .u-input__input{
      min-height: 30px !important;
    }
  }
  &__text-div {
    text-align: center;
  }
}

.sort {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  &__div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    margin-left: 5px;
    &-up {
      font-size: 5px;
    }
    &-down {
      font-size: 5px;
    }
  }
  &__select-div {
    position: relative;
    top: 5px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    border-bottom-right-radius: 100%;
  }
}

.filter {
  &__scroll-div {
    display: inline-block;
    white-space: nowrap;
    width: calc(100% - 60px);
  }
  &__text-div {
    display: inline-block;
    margin: 10px 7px;
    padding: 2px 10px;
    background-color: #F1F2F3;
    border: 1px solid transparent;
    border-radius: 18px;
    &_select {
      height: 33px;
      margin-bottom: 0px;
      border-radius: 18px 18px 0px 0px;
    }
    &_hasValue {
      border: 1px solid #F63515;
      color: #F63515;
      background-color: #FDE9E9;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    font-weight: 600;
    width: 60px;
    align-items: center;
    &-text {
     
    }
    &-icon-div {
      margin-left: 3px;
    }
    &-icon {
      
    }
  }
  &__popup {
    &-form {
      height: calc(100% - 55px);
      overflow-y: auto;
      padding-bottom: 30px;
      &-div {
        padding: 10px;
      }
      &-label{
        font-size: 16px;
        font-weight: 600;
      }
      &-value {
        margin-top: 10px;
      }
    }
    &-btn {
      width: 30%;
    }
    &-btn-group {
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 0;
    }
  }
  &__single-popup {
    /deep/ .uni-scroll-view-content {
      background-color: #F1F2F3;
      padding: 10px;
      width: unset;
    }
    &-form-div {
      
    }
    &-btn {
      width: 30%;
    }
    &-btn-group {
      margin-top: 10px;
    }
  }
  &__single-popup-top-mask {
    z-index: 10073;
    height: 100px;
    width: 100%;
    position: fixed;
    top:0;
  }
}
</style>
