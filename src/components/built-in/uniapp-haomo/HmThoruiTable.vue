<template>
  <scroll-view :scroll-y="true" :scroll-x="true">
    <view class="container">
      <!-- <view class="tui-page__hd">
      <view class="tui-page__title">Complex table</view>
      <view class="tui-page__desc">复杂表格</view>
      </view>-->
      <tui-table>
        <tui-tr>
          <tui-td
            :span="24"
            height="50px"
            alignItems="center"
            bold
            :size="34"
            color="#07c160"
          >王小虎 老师 2020/11 月工资表</tui-td>
        </tui-tr>
        <tui-tr>
          <tui-td :span="6">基础工资</tui-td>
          <tui-td :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr>
              <tui-td :span="8">基本工资</tui-td>
              <tui-td :span="16" alignItems="right">2200</tui-td>
            </tui-tr>
            <tui-tr>
              <tui-td :span="8">绩效工资</tui-td>
              <tui-td :span="16" alignItems="right">1200</tui-td>
            </tui-tr>
            <tui-tr borderWidth="0">
              <tui-td :span="8">基本工作量</tui-td>
              <tui-td :span="16" :borderRight="false" ellipsis padding="0">
                <tui-tr>
                  <tui-td :span="12">课时工资</tui-td>
                  <tui-td :span="12" alignItems="right">800</tui-td>
                </tui-tr>
                <tui-tr borderWidth="0">
                  <tui-td :span="12">超课时工资</tui-td>
                  <tui-td :span="12" alignItems="right">200</tui-td>
                </tui-tr>
              </tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>

        <tui-tr>
          <tui-td :span="6">加班工资</tui-td>
          <tui-td :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr>
              <tui-td :span="8">工作日加班</tui-td>
              <tui-td :span="16" alignItems="right">1000</tui-td>
            </tui-tr>
            <tui-tr borderWidth="0">
              <tui-td :span="8">周末加班</tui-td>
              <tui-td :span="16" alignItems="right">600</tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>

        <tui-tr>
          <tui-td :span="6">岗位工资</tui-td>
          <tui-td :span="18" alignItems="right">6000</tui-td>
        </tui-tr>
        <tui-tr>
          <tui-td :span="6" bold>合计</tui-td>
          <tui-td :span="18" alignItems="right" bold>￥15000</tui-td>
        </tui-tr>
      </tui-table>
      <!-- <view class="tui-section__title">表格二/去掉上边框</view> -->
      <tui-table :borderTop="false" bordercolor="#666">
        <tui-tr bordercolor="#666">
          <tui-td :span="6" bordercolor="#666">风险类型</tui-td>
          <tui-td bordercolor="#666" :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr bordercolor="#666">
              <tui-td bordercolor="#666" :span="24" alignItems="center" height="40px">XXX风险等级管理体系</tui-td>
            </tui-tr>
            <tui-tr borderWidth="0">
              <tui-td bordercolor="#666" alignItems="center" :span="5">AA</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="4">A</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">B</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">C</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">D</tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>
        <tui-tr bordercolor="#666">
          <tui-td :span="6" bold bordercolor="#666">保守型</tui-td>
          <tui-td :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr borderWidth="0">
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="4">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">不合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">不合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">不合适</tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>
        <tui-tr bordercolor="#666">
          <tui-td :span="6" bold bordercolor="#666">稳健型</tui-td>
          <tui-td :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr borderWidth="0">
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="4">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">不合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">不合适</tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>
        <tui-tr bordercolor="#666">
          <tui-td :span="6" bold bordercolor="#666">积极型</tui-td>
          <tui-td :borderRight="false" :span="18" ellipsis padding="0">
            <tui-tr borderWidth="0">
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="4">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
              <tui-td bordercolor="#666" alignItems="center" :span="5">合适</tui-td>
            </tui-tr>
          </tui-td>
        </tui-tr>
      </tui-table>
    </view>
  </scroll-view>
</template>

<script>
import tuiTable from "@/components/built-in/thorui-uni/tui-table/tui-table.vue";
import tuiTr from "@/components/built-in/thorui-uni/tui-tr/tui-tr.vue";
import tuiTd from "@/components/built-in/thorui-uni/tui-td/tui-td.vue";
export default {
  components: {
    tuiTable,
    tuiTr,
    tuiTd
  },
  data() {
    return {
      table1: {
        th: [
          {
            id: 1,
            title: "基础工资",
            key: [
              {
                id: "1.1",
                title: "基本工资",
                key: "jiben"
              },
              {
                id: "1.2",
                title: "绩效工资",
                key: "jixiao"
              },
              {
                id: "1.3",
                title: "基本工作量",
                key: [
                  {
                    id: "1.3.1",
                    title: "课时工资",
                    key: "classTime"
                  },
                  {
                    id: "1.3.2",
                    title: "超课时工资",
                    key: "moreClassTime"
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: "加班工资",
            key: [
              { id: 2.1, title: "工作日加班", key: "week" },
              { id: 2.2, title: "周末加班", key: "weenkend" }
            ]
          },
          {
            id: 3,
            title: "岗位工资",
            key: "work"
          },
          {
            id: 4,
            title: "合计",
            key: "total"
          }
        ],
        td: {
          jiben: "2000",
          jixiao: "1200",
          classTime: "800",
          moreClassTime: "200",
          week: "1000",
          weenkend: "600",
          work: "6000",
          total: "¥ 15000"
        }
      },
      table2: {
        th: [
          {
            id: 1,
            title: "风险类型",
            key: "type"
          },
          {
            id: 2,
            title: "XXX风险等级管理体系",
            key: [
              {
                id: "2.1",
                title: "AA",
                key: "AA"
              },
              {
                id: "2.5",
                title: "D",
                key: "D"
              }
            ]
          }
        ],
        td: [
          {
            id: 1,
            type: "保守型",
            AA: "合适",
            D: "不合适"
          },
          {
            id: 1,
            type: "稳健型",
            AA: "合适",
            D: "不合适"
          },
          {
            id: 1,
            type: "积极型",
            AA: "合适",
            D: "合适"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style>
.container {
  padding-bottom: 120rpx;
}
</style>
