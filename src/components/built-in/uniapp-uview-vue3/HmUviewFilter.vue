<template>
  <view class="HmUviewFilter">
    <u-row
      class="filter__single-popup-top-mask"
      v-if="singleFilterShow"
      @click="singleFilterShow = false"
    ></u-row>
    <u-row class="search">
      <u-col span="12" class="search__input-div">
        <u-input
          class="search__input"
          :placeholder="placeholder"
          border="surround"
          shape="circle"
          v-model="keyValue"
          @change="change"
          @blur="search"
        ></u-input>
      </u-col>
      <!-- <u-col span="2" class="search__text-div">
      <view @click="search"> 搜索 </view>
      </u-col>-->
    </u-row>
    <u-row class="sort" v-if="false">
      <view
        class="sort__div"
        :style="{ width: sortDivWidth + '%' }"
        v-for="(sort, index) in cSortOption"
        :key="index"
        @click="sortSelect(sort)"
      >
        <view
          class="sort__text"
          :style="{ fontWeight: sort.isSelect ? '600' : 'normal' }"
          >{{ sort.name }}</view
        >
        <view class="sort__icon">
          <u-row>
            <u-icon
              v-if="!sort.isSelect || order == 'asc'"
              class="sort__icon-up"
              name="arrow-up-fill"
            ></u-icon>
          </u-row>
          <u-row>
            <u-icon
              v-if="!sort.isSelect || order == 'desc'"
              class="sort__icon-down"
              name="arrow-down-fill"
            ></u-icon>
          </u-row>
        </view>
        <view v-if="sort.isSelect" class="sort__select-div"></view>
      </view>
    </u-row>
    <view class="filter">
      <scroll-view class="filter__scroll-div center" :scroll-x="true">
        <view
          :class="[
            'filter__text-div',
            { 'filter__text-div_select': filter.isSelect },
            { 'filter__text-div_hasValue': filter.value && !filter.isSelect },
          ]"
          :style="{ display: filter.show ? 'inline-flex' : 'none' }"
          v-for="(filter, index) in cFilterOption"
          :key="index"
          @click="filterSelect(filter)"
        >
          <u-icon
            v-if="
              filter.code != currentCloneFilter.code || singleFilterShow != true
            "
            class="filter__icon-text"
            :label="filter.name"
            labelPos="left"
            size="22"
            name="arrow-down"
          ></u-icon>
          <u-icon
            v-if="
              filter.code == currentCloneFilter.code && singleFilterShow == true
            "
            class="filter__icon-text"
            :label="filter.name"
            labelPos="left"
            size="22"
            name="arrow-up"
          ></u-icon>
        </view>
      </scroll-view>
      <view
        class="filter__button"
        v-if="setJudge(filterOption)"
        @click="filterShow = true"
      >
        <view class="filter__button-text">筛选</view>
        <view class="filter__button-icon-div">
          <u-icon class="filter__button-icon" name="list"></u-icon>
        </view>
      </view>
      <view v-if="filterShow">
        <u-popup
          class="filter__popup"
          v-model="filterShow"
          mode="right"
          width="85%"
        >
          <scroll-view class="filter__popup-form" :scroll-y="true">
            <view
              class="filter__popup-form-div"
              v-for="(filter, index) in cFilterOption"
              :key="index"
            >
              <view class="filter__popup-form-label">{{ filter.name }}</view>
              <view class="filter__popup-form-value">
                <u-input
                  v-model="filter.value"
                  v-if="filter.type == 'Input'"
                  type="text"
                  :border="true"
                  v-bind="filter.props"
                ></u-input>
                <Select
                  v-model="filter.value"
                  v-model:show="filter.props.show"
                  v-if="filter.type == 'Select'"
                  v-bind="filter.props"
                  :autoSelect="false"
                  @optionsChange="(e) => (filter.props.options = e)"
                  @showChange="currentSelect = filter"
                ></Select>
                <Picker
                  v-model="filter.value"
                  v-model:show="filter.props.show"
                  v-if="
                    filter.type == 'DatePicker' || filter.type == 'TimePicker'
                  "
                  :autoSelect="false"
                  v-bind="filter.props"
                  @showChange="currentPicker = filter"
                ></Picker>
              </view>
            </view>
          </scroll-view>
          <!-- <view class="filter__popup-btn-group-fixed"> -->
          <view class="filter__popup-btn-group">
            <u-button
              size="medium"
              shape="circle"
              class="filter__popup-btn"
              @click="filterReset"
              >重置</u-button
            >
            <u-button
              size="medium"
              shape="circle"
              type="error"
              class="filter__popup-btn"
              @click="filterConfirm"
              >确定</u-button
            >
          </view>
          <!-- </view> -->
        </u-popup>
      </view>
      <view v-if="singleFilterShow">
        <u-popup
          class="filter__single-popup"
          v-model="singleFilterShow"
          mode="top"
          :custom-style="{ top: '192rpx' }"
          duration="0"
          :mask-custom-style="{ height: maskHeight, top: '192rpx' }"
          @close="clearFilterSelect"
        >
          <u-row class="filter__single-popup-form-div">
            <u-input
              v-model="currentCloneFilter.value"
              v-if="currentCloneFilter.type == 'Input'"
              type="text"
              :border="true"
              v-bind="currentCloneFilter.props"
            ></u-input>
            <Select
              v-model="currentCloneFilter.value"
              v-model:show="currentCloneFilter.props.show"
              v-if="currentCloneFilter.type == 'Select'"
              v-bind="currentCloneFilter.props"
              :autoSelect="false"
              @optionsChange="(e) => (currentCloneFilter.props.options = e)"
              @showChange="currentSelect = currentCloneFilter"
            ></Select>
            <Picker
              v-model="currentCloneFilter.value"
              v-model:show="currentCloneFilter.props.show"
              v-if="
                currentCloneFilter.type == 'DatePicker' ||
                currentCloneFilter.type == 'TimePicker'
              "
              :autoSelect="false"
              v-bind="currentCloneFilter.props"
              @showChange="currentPicker = currentCloneFilter"
            ></Picker>
          </u-row>
          <view class="filter__single-popup-btn-group">
            <u-button
              size="medium"
              shape="circle"
              class="filter__single-popup-btn"
              @click="singleFilterReset"
              >重置</u-button
            >
            <u-button
              size="medium"
              shape="circle"
              type="error"
              class="filter__single-popup-btn"
              @click="singleFilterConfirm"
              >确定</u-button
            >
          </view>
        </u-popup>
      </view>
    </view>
    <u-select
      v-model="currentSelect.props.show"
      v-bind="currentSelect.props"
      :list="currentSelect.props.options"
      @confirm="selectOnConfirm"
    ></u-select>
    <u-picker
      v-model="currentPicker.props.show"
      v-bind="currentPicker.props"
      @confirm="pickerOnConfirm"
    ></u-picker>
  </view>
</template>

<script>
import { getFilterValue } from "./filter/util";
import Select from "@/components/built-in/uniapp-uview-vue3/HmUviewFormilySelect.vue";
import Picker from "@/components/built-in/uniapp-uview-vue3/HmUviewFormilyPicker.vue";
import moment from "moment";
export default {
  name: "HmUviewFilter",
  components: {
    Select,
    Picker,
  },
  options: { styleIsolation: "shared" }, //解决/deep/不生效
  props: {
    /**
     * 排序配置
     */
    sortOption: {
      type: Object,
      default: function () {
        return [
          {
            name: "时间",
            code: "时间",
          },
          {
            name: "状态",
            code: "状态",
          },
          {
            name: "test3",
            code: "test3",
          },
        ];
      },
    },
    /**
     * 过滤配置
     */
    filterOption: {
      type: Object,
      default: function () {
        return [
          {
            name: "时间",
            code: "testTime",
            type: "TimePicker",
            props: {},
            show: true,
          },
          {
            name: "日期",
            code: "testDate",
            type: "DatePicker",
            props: {
              params: {
                //时间参数
                year: true,
                month: true,
                day: true,
                hour: false,
                minute: false,
                second: false,
                timestamp: true,
              },
              format: "YYYY-MM-DD",
            },
            show: true,
          },
          {
            name: "状态",
            code: "test2",
            type: "Select",
            props: {
              // url: "/api/design/framework/list",
              params: {
                pageSize: -1,
              },
              options: [
                {
                  label: "是",
                  value: 0,
                },
                {
                  label: "否",
                  value: 1,
                },
              ],
              dataMap: {
                label: "name",
                value: "id",
              },
            },
            show: false,
          },
          {
            name: "test3",
            code: "test3",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test4",
            code: "test4",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test5",
            code: "test5",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test6",
            code: "test6",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test7",
            code: "test7",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test8",
            code: "test8",
            type: "Input",
            props: {},
            show: true,
          },
          {
            name: "test9",
            code: "test9",
            type: "Input",
            props: {},
            show: true,
          },
        ];
      },
    },
    /**
     * 主过滤字段
     */
    keyColumn: {
      type: String,
      default: "key",
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入内容",
    },
  },
  watch: {},
  computed: {
    sortDivWidth() {
      return this.cSortOption.length > 0 ? 100 / this.cSortOption.length : 0;
    },
    maskHeight() {
      let height;
      // #ifdef H5
      height = window.innerHeight - 100;
      // #endif
      // #ifndef H5
      //console.log("除H5", wx.getSystemInfoSync().windowHeight);
      //console.log("H5,app,wx",uni.getWindowInfo().screenHeight);
      height = uni.getWindowInfo().screenHeight - 100;
      // #endif
      return height + "px";
    },
  },
  mounted() {
    this.cSortOption = this.sortOption;
    // 设置默认值
    this.cFilterOption = this.filterOption.map((item) => {
      item.props = item.props || {};
      if (item.type == "Select") {
      }
      if (item.type == "TimePicker" || item.type == "DatePicker") {
        item.props.format = item.props.format || "YYYY-MM-DD HH:mm:ss";
        item.props.params = item.props.params || {
          //时间参数
          year: true,
          month: true,
          day: true,
          hour: true,
          minute: true,
          second: true,
          timestamp: true,
          //地区参数
          province: true,
          city: true,
          area: true,
        };
      }
      return item;
    });
  },
  data() {
    return {
      cSortOption: [],
      cFilterOption: [],
      filterShow: false,
      singleFilterShow: false,
      currentPicker: { props: {} },
      currentSelect: { props: {} },
      currentFilter: { code: null },
      currentCloneFilter: { props: {} },
      order: "asc",
      keyValue: "",
      selectShow: false,
    };
  },
  methods: {
    //控制筛选文字及弹窗
    setJudge(e) {
      let arr = [];
      e.forEach(item => {
        if (item.show != false) {
          arr.push(item);
        }
      });
      return arr.length <= 3 ? false : true;
      // return true;
    },
    selectOnConfirm(e) {
      this.currentSelect.value = e[0].value.toString();
    },
    pickerOnConfirm(e) {
      console.log("test", this.currentPicker, e);
      this.currentPicker.value = moment(e.timestamp * 1000).format(
        this.currentPicker.props.format
      );
    },
    sortSelect(item) {
      let self = this;
      if (item.isSelect) {
        self.order = self.order == "asc" ? "desc" : "asc";
        return;
      }
      self.order = "asc";
      self.cSortOption.forEach((sort) => {
        if (sort.code == item.code) {
          sort.isSelect = true;
        } else {
          sort.isSelect = false;
        }
      });
    },
    filterSelect(item) {
      let self = this;
      if (self.singleFilterShow && item.code == self.currentFilter.code) {
        self.singleFilterShow = false;
      } else {
        self.singleFilterShow = true;
        self.cFilterOption.forEach((filter) => {
          if (filter.code == item.code) {
            filter.isSelect = true;
            self.currentFilter = filter;
            self.currentCloneFilter = Object.assign({}, filter);
          } else {
            filter.isSelect = false;
          }
        });
      }
    },
    clearFilterSelect() {
      this.cFilterOption.forEach((filter) => {
        filter.isSelect = false;
      });
    },
    singleFilterReset() {
      this.currentCloneFilter.value = undefined;
    },
    singleFilterConfirm() {
      this.singleFilterShow = false;
      Object.assign(this.currentFilter, this.currentCloneFilter);
      this.search();
    },
    filterReset() {
      this.cFilterOption.forEach((filter) => {
        filter.value = undefined;
      });
    },
    filterConfirm() {
      this.filterShow = false;
      this.search();
    },
    search() {
      this.$emit("search", {
        filter: this.getFilterValues(),
        sort: this.getSortValues(),
      });
    },
    getFilterValues() {
      let obj = {};
      this.cFilterOption.forEach((item) => {
        if (item.value != undefined) {
          getFilterValue(item, obj);
        }
      });
      if (this.keyValue) {
        obj[this.keyColumn] = `*${this.keyValue}*`;
      }
      return obj;
    },
    getSortValues() {
      let obj = {};
      return obj;
    },
    change(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style lang="less">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  // &__input-div {
  //   flex: 0 0 91.4% !important;
  //   padding: 0px !important;
  //   margin: 0 4.3% !important;
  // }
  &__input {
    /deep/ .u-input__input {
      // min-height: 30px !important;
      min-height: 40px !important;
    }
  }
  &__text-div {
    text-align: center;
  }
}
.HmUviewFilter /deep/ .u-input--border {
  border-radius: 16rpx;
  border: 4rpx solid #4b4c5a !important;
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
  margin-top: 16rpx;
  padding: 10rpx;
  width: 100%;
  height: 88rpx;
  display: flex;
  &__scroll-div {
    white-space: nowrap;
    width: calc(100% - 120rpx);
    // #ifdef MP-WEIXIN
    line-height: 68rpx;
    // #endif
    /deep/ .uni-scroll-view-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
  &__text-div {
    background: #f0f0f0;
    padding: 12rpx 24rpx;
    border-radius: 50px;
    margin-right: 24rpx;
    /deep/ .u-icon__label {
      white-space: nowrap;
      font-size: 28rpx;
      color: #404040;
      letter-spacing: 0;
      line-height: 48rpx;
      font-weight: 400;
    }
    &_select {
      // height: 33px;
      // margin-bottom: 0px;
      // border-radius: 18px 18px 0px 0px;
    }
    &_hasValue {
      border: 2rpx solid #f63515;
      color: #f63515;
      background-color: #fde9e9;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    font-weight: 600;
    width: 120rpx;
    align-items: center;
    flex-shrink: 0;
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
      &-label {
        font-size: 16px;
        font-weight: 600;
      }
      &-value {
        margin-top: 10px;
      }
    }
    &-btn {
      width: 30%;
      display: flex;
    }
    &-btn-group {
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 12rpx;
      left: 0rpx;
      justify-content: space-around;
      align-items: center;
    }
  }
  &__single-popup {
    z-index: 10073 !important; //设置比筛选层级-1
    /deep/ .uni-scroll-view-content {
      background-color: #f1f2f3;
      padding: 20rpx;
      width: unset;
    }
    // #ifdef MP-WEIXIN
    /deep/ .u-drawer__scroll-view {
      width: auto !important;
      padding: 10rpx 10rpx;
    }
    // #endif
    &-form-div {
    }
    &-btn {
      display: flex;
      width: 30%;
      // #ifdef MP-WEIXIN
      width: 50%;
      // #endif
    }
    &-btn-group {
      // #ifdef MP-WEIXIN
      margin-top: 0rpx;
      // #endif
      margin-top: 20rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  &__single-popup-top-mask {
    z-index: 10073;
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
  }
}
</style>
