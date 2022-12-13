<template>
  <view class="HmIndexList">
    <u-index-list :scrollTop="scrollTop">
      <view v-for="(item, index) in cList" :key="index">
        <u-index-anchor :index="item.title" />
        <view
          class="list-cell"
          v-for="(dataItem, dataIndex) in item.data"
          :key="dataIndex"
        >
          <!-- 
          @prop item - 数组条目数据
        -->
          <slot :item="dataItem">
            <view class="dataItemCard" @click="itemClick(dataItem, dataIndex)">
              <u-avatar
                class="dataItemCard_avatar"
                v-if="dataItem.src || dataItem.text"
                :src="dataItem.src"
                :text="dataItem.text"
                bg-color="cyan"
              ></u-avatar>
              <view class="dataItemCard_text">
                <text decode class="dataItemCard_text_name">{{ dataItem.name }}</text>
                <text decode class="dataItemCard_text_subName">{{ dataItem.subName }}</text>
              </view>
            </view>
          </slot>
        </view>
      </view>
    </u-index-list>
  </view>
</template>
<script>
export default {
  name:"HmIndexList",
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            title: "A",
            data: [
              {
                title: "123",
                src: "https://img2.baidu.com/it/u=2969169350,1551254405&fm=253&fmt=auto&app=120&f=PNG?w=1280&h=800",
                text: "",
                name: "饥饿的小松鼠",
                subName:"haomo"
              },
              {
                title: "321",
                src: "",
                text: "松",
                name: "饥饿的松鼠",
                subName:""
              },
            ],
          },
          {
            title: "B",
            data: [],
          },
          {
            title: "C",
            data: [],
          },
          {
            title: "D",
            data: [],
          },
          {
            title: "E",
            data: [],
          },
          {
            title: "F",
            data: [],
          },
          {
            title: "G",
            data: [],
          },
        ];
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
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.list;
  },
  data() {
    return {
      cList: [],
    };
  },
  methods: {
    bindClick(e) {
      console.log(e);
    },
    itemClick(item, index) {
      this.$emit("itemClick", item, index);
    },
  },
};
</script>
<style lang="less" scoped>
.HmIndexList{
  width:100%;
  .flex-col{
    display: flex;
    flex-direction: column;
  }
  .flex-row{
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
    &_avatar {
    }
    &_text {
      padding:0px 24rpx;
      padding-right:0rpx;
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