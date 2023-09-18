<template>
  <view class="HmIndexList">
    <u-index-list :scrollTop="scrollTop">
      <view v-for="(item, index) in indexList" :key="index">
        <!-- 隐藏没有数据的锚点 -->
        <view v-show="totalList[item] !== undefined && totalList[item].length > 0">
          <u-index-anchor :index="item" />
          <view class="list-cell" v-for="(dataItem, dataIndex) in totalList[item]" :key="dataIndex">
            <!-- 
          @prop item - 数组条目数据
        -->
            <slot :item="dataItem">
              <view class="dataItemCard" @click="itemClick(dataItem, dataIndex)">
                <u-avatar class="dataItemCard_avatar" v-if="dataItem.src || dataItem.text" :src="dataItem.src"
                  :text="dataItem.text" bg-color="cyan"></u-avatar>
                <view class="dataItemCard_text">
                  <text decode class="dataItemCard_text_name">{{ dataItem.name }}</text>
                  <text decode class="dataItemCard_text_subName">{{ dataItem.subName }}</text>
                </view>
              </view>
            </slot>
          </view>
        </view>
      </view>
    </u-index-list>
  </view>
</template>
<script>
import { pinyin } from 'pinyin-pro';
import {
  getAction,
  postAction,
} from "/@/request/http";
export default {
  name: "HmIndexList",
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            title: "123",
            src: "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
            text: "",
            name: "饿的小松鼠",
            subName: "haomo"
          },
          {
            title: "321",
            src: "",
            text: "松",
            name: "饥饿的松鼠",
            subName: ""
          }, {
            title: "123",
            src: "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
            text: "",
            name: "饥饿的小松鼠",
            subName: "haomo"
          },
          {
            title: "321",
            src: "",
            text: "松",
            name: "饥饿的松鼠",
            subName: ""
          },
          {
            title: "321",
            src: "",
            text: "松",
            name: "A的松鼠",
            subName: ""
          }
        ];
      },
    },
    /**
     * 请求方法
     * @type Enum
     * @options ["get", "post"]
     */
    httpMethod: {
      type: String,
      default: "get"
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 远程数据映射
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          title: "title",
          src: "src",
          text: "text",
          name: "name",
          subName: "subName"
        };
      },
    },
    /**
     * 滚动顶部距离
     */
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    list: {
      handler: function (value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.mapData(this.list);
    this.getData();
  },
  data() {
    return {
      cList: [],
      totalList: {},
      // 储存所有有数据的字母
      indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z"],
    };
  },
  methods: {
    bindClick(e) {
      console.log(e);
    },
    itemClick(item, index) {
      this.$emit("itemClick", item, index);
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      // console.log("getData", url, params);
      let request = getAction;
      if (this.httpMethod && this.httpMethod.toLowerCase() == 'post') {
        request = postAction;
      }
      request(url, params).then((resp) => {
        // console.log("res", resp);
        //查询数据库的数组
        self.cList = [];
        let data = [];
        if (resp.data) {
          data = resp.data.list || resp.data;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        self.cList = self.mapData(data);
        // console.log("cList", self.cList);
      });
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.getDataMap || Object.keys(this.getDataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.getDataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.getDataMap[key]];
        });
        //获取中文首字母大写
        let Capital = pinyin(item.name, {
          pattern: 'first',
          toneType: 'none'
        }).charAt(0).toUpperCase();
        item.pinyinKey = Capital;
      });
      self.totalList = data.reduce((result, item) => {
        const key = item.pinyinKey;
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
        return result;
      }, {});
      return data;
    },
  },
};
</script>
<style lang="less" scoped>
.HmIndexList {
  width: 100%;

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .list-cell {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }

  .dataItemCard {
    padding: 12rpx 24rpx;
    display: flex;
    align-items: center;

    &_avatar {}

    &_text {
      padding: 0px 24rpx;
      padding-right: 0rpx;
      display: flex;
      flex-direction: column;

      &_name {
        color: #333;
      }

      &_subName {
        color: #666;
      }
    }
  }
}
</style>