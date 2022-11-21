<template>
<!-- 开发改造 初稿 -->
  <view class="inbox" title="节点循环体">
    <view class="inbox__list flex-row" v-for="(item,index) in cList" :key="index">
      <view class="circle">
        <view :class="setLine(item,index,cList,1,0)?'circle_line':'circle_hideline'"></view>
        <view class="circle_box"></view>
        <view :class="setLine(item,index,cList,1,1)?'circle_line':'circle_hideline'"></view>
      </view>
      <view class="inbox__list_namebox flex-col">
        <view>{{item.name}}</view>
      </view>
      <view class="inbox__list_list flex-col" title="计划循环体">
        <view
          class="content__list flex-row"
          v-for="(itemContent,indexContent) in item.content"
          :key="indexContent">
          <view class="circle">
            <view class="circle_oline"></view>
          </view>
          <view class="content__list_state">进度:{{itemContent.state}}</view>
          <view class="circle">
            <view :class="setLine(itemContent,indexContent,item.content,2,0)?'circle_line':'circle_hideline'"></view>
            <view class="circle_box"></view>
            <view :class="setLine(itemContent,indexContent,item.content,2,1)?'circle_line':'circle_hideline'"></view>
          </view>
          <view class="content__list_box">
            <view class="flex-col">{{itemContent.planTime}}</view>
          </view>
          <view class="inbox__list_list-list flex-col" title="计划实施循环组">
            <view
              class="flex-row actuaPlan"
              v-for="(itemPlan,indexPlan) in itemContent.children"
              :key="indexPlan"
            >
              <view class="circle">
                <view class="circle_oline"></view>
              </view>
              <view class="actuaPlan__planbox flex-row">
                <view class="actuaPlan__planbox_plan">
                  <view>当月任务:{{itemPlan.plan}}</view>
                </view>
                <view class="circle">
                  <view
                    :class="setLine(itemPlan,indexPlan,itemContent.children,3,0)?'circle_line':'circle_hideline'"
                  ></view>
                  <view class="circle_box"></view>
                  <view
                    :class="setLine(itemPlan,indexPlan,itemContent.children,3,1)?'circle_line':'circle_hideline'"
                  ></view>
                </view>
                <view class="actuaPlan__actuabox_actua">
                  <view>任务完成情况:{{itemPlan.actua}}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view v-if="index != cList.length-1" class="inbox__list_null flex-row">
        <view class="circle">
          <view class="circle_oline"></view>
        </view>
        <view class="inbox__list_null_box"></view>
      </view>
    </view>
  </view>
</template>
<script>
import moment from "moment";
export default {
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            id: 1,
            name: "报批报建(项目计划01)",
            state: "1",
            content: [
              {
                state: 1,
                planTime: "text1.1",
                actuaTime: "",
                work: "内容内容",
                children: [
                  {
                    id: "1.1.1",
                    plan: "text1.1.1",
                    state: "1",
                    actua: "实施11"
                  },
                  {
                    id: "1.1.2",
                    plan: "text1.1.2",
                    state: "0",
                    actua: "实施12"
                  }
                ]
              },
              {
                state: 1,
                planTime: "text1.2",
                actuaTime: "20200812",
                work: "实施222222",
                children: []
              }
            ]
          },
          {
            name: "报批报建(项目计划02)",
            content: [
              {
                planTime: "text2.1",
                children: []
              },
              {
                planTime: "text2.2",
                children: []
              }
            ]
          }
        ];
      }
    }
  },
  watch: {
    list: {
      handler: function(value, oldValue) {
        this.cList = value;
      },
      deep: true
    }
  },
  mounted() {
    this.cList = this.list;
  },
  data() {
    return {
      cList: []
    };
  },
  methods: {
    getDate(e, t) {
      if (!e) {
        return e;
      }
      if (t == "0") {
        return moment(e * 1000).format("YYYY年M月D日");
      } else {
        return moment(e * 1000).format("YYYY-MM-DD");
      }
    },
    setLine(e, index, arr, depth, align,ind) {
      let len = this.cList.length - 1;
      if (depth == 1) {
        if (index == 0 && align == 0) return false;
        if (
          index == len &&
          align == 1 &&
          (e.content == undefined || e.content.length <= 0)
        )
          return false;
      }
      if (depth == 2) {
        if (
          index == arr.length - 1 &&
          align == 1 &&
          ind == len &&
          (e.children == undefined || e.children.length <= 0)
        )
          return false;
      }
      if (depth == 3) {
        if (index == 0 && align == 0) return false;
        if (index == arr.length - 1 && align == 1) return false;
      }
      return true;
    },
    // 控制竖线显示(item,index,数组，深度，上0下1,整体下标)
    getLine(e, index, arr, depth, align, ind, ind2) {
      let len = this.cList.length - 1;
      if (depth == 1) {
        if (index == 0 && align == 0) return false;
        if (
          index == len &&
          align == 1 &&
          (e.content == undefined || e.content.length <= 0)
        )
          return false;
      }
      if (depth == 2) {
        if (
          index == arr.length - 1 &&
          align == 1 &&
          ind == len &&
          (e.children == undefined || e.children.length <= 0)
        )
          return false;
      }
      if (depth == 3) {
        let len3 = this.cList[ind].content.length - 1;
        if (index == arr.length - 1 && align == 1 && ind == len && ind2 == len3)
          return false;
      }
      return true;
    }
  }
};
</script>
<style lang="less" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
// 节点循环
.inbox {
  width: 100%;
  padding-right: 46rpx;
  &__list {
    flex-wrap: wrap;
    &_namebox {
      width: calc(100% - 80rpx);
      padding: 24rpx 0rpx;
      font-size: 14px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #df1b29;
      line-height: 40rpx;
    }
    &_list {
      width: 100%;
      &-list {
        width: 100%;
      }
    }
    &_null {
      width: 100%;
      &_box {
        min-height: 200rpx;
      }
    }
  }
}
// 计划
.content__list {
  flex-wrap: wrap;
  &_state {
    width: calc(100% - 80rpx);
    margin-top: 44rpx;
    text-align: right;
  }
  &_box {
    width: calc(100% - 80rpx);
    padding: 24rpx;
    box-shadow: 8rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.05);
    border-radius: 20rpx;
    border: 2rpx solid #38b865;
  }
}
// 实施计划
.actuaPlan {
  width: 100%;
  &__planbox,
  &__actuabox {
    width: 100%;
    &_plan,
    &_actua {
      width: calc(50% - 38rpx);
      padding: 15px 0px;
    }
    &_plan {
      text-align: right;
    }
    &_actua {
      text-align: left;
    }
  }
}
//连接线
.circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 76rpx;
  flex-shrink: 0;
  &_box {
    width: 20rpx;
    height: 20rpx;
    background: cyan;
  }
  &_line,
  &_hideline,
  &_oline {
    width: 2rpx;
    height: calc(50% - 10rpx);
    background: #EAEAEA;
    display: flex;
    flex-shrink: 0;
  }
  &_oline {
    height: 100%;
  }
  &_hideline {
    visibility: hidden;
  }
}
</style>