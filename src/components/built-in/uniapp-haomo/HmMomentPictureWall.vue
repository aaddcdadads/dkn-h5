<template>
  <view class="container">
    <!-- 个人信息 -->
    <view class="author-message">
      <view>
        <img :src="data.avatorUrl" />
      </view>
      <view>
        <view>{{ data.author }}</view>
        <view>{{ data.releaseTime }}</view>
      </view>
    </view>
    <!-- 标签 -->
    <view class="tag-view">
      <view v-for="tag in data.tagList">#{{ tag }}</view>
    </view>
    <!-- 图片列表 -->
    <view class="img-list">
      <view v-for="(url, index) in data.imgUrlList" :key="index">
        <img :src="url" />
      </view>
    </view>
    <view class="bottom-menu">
      <view>
        <view>是否展示班牌</view>
        <view>
          <view v-if="data.isShowClassBrand">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F03%2F19%2F599d9f35b71a6_610.jpg&refer=http%3A%2F%2Fbpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672674444&t=d52c948e619bc859a6f72d98ef12547f"
            />
          </view>
          <view v-if="!data.isShowClassBrand">不显示</view>
        </view>
      </view>
      <view>
        <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F03%2F19%2F599d9f35b71a6_610.jpg&refer=http%3A%2F%2Fbpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672674444&t=d52c948e619bc859a6f72d98ef12547f"
            />
      </view>
    </view>
  </view>
</template>

<script>


export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          avatorUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
          author: '范老师',
          releaseTime: '2022-11-24 17:00:07',
          tagList: ['早读日常'],
          imgUrlList: [
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-27%2F5b3345789ca2c.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672673466&t=5e77370355822fe3e96abd658d730f44',
          ],
          isShowClassBrand: true,
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .author-message {
    
    display: flex;
    border-bottom: 2rpx solid #F2F5F7;
    > view:first-child {
      padding: 38rpx 24rpx 32rpx 48rpx;

      display: flex;
      justify-content: center;
      align-items: center;
      > img {
 
        border-radius: 50%;
        width: 76rpx;
        height: 76rpx;
      }
    }
    > view:last-child {
      padding-top: 32rpx;
      padding-bottom: 28rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      > view:first-child {
        font-family: PingFangSC-Medium;
        font-size: 32rpx;
        color: #212121;
        font-weight: 500;
        line-height: 44rpx;
      }
      > view:last-child {
        margin-top: 8rpx;
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #8b8b94;

        font-weight: 400;
      }
    }
  }
  .tag-view {
    
    padding-top: 32rpx;
    display: flex;
    padding-left: 148rpx;
    > view {
  
      font-family: PingFangSC-Medium;
      font-size: 28rpx;
      color: #464957;
      text-align: center;
      font-weight: 500;
    }
  }
  .img-list {
    padding-left: 148rpx;
    display: flex;
    padding-top: 20rpx;
    flex-wrap: wrap;
    > view {
      margin-bottom: 8rpx;
      margin-right: 8rpx;
      > img {
        width: 144rpx;
        height: 144rpx;
      }
    }
  }
  .bottom-menu {
   
    padding-left: 144rpx;

    margin-top: 44rpx;
    margin-bottom: 44rpx;
    display: flex;

    justify-content: space-between;
    > view:first-child {

      display: flex;
      
      font-size: 28rpx;
      > view:first-child {
        font-family: PingFangSC-Regular;
        font-size: rpx;
        color: #464957;
        letter-spacing: 0;
        text-align: center;

        font-weight: 400;
      }
      > view:last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        > view {
          display: flex;
          padding-left: 16rpx;
          font-size: 0;
          > img {
            width: 32rpx;
            height: 32rpx;
          }
        }
      }
    }
    >view:last-child{
      display: flex;
  margin-right:16rpx;
      >img{
        display: flex;
        height:48rpx;
        width: 48rpx;
      }
    }
  }
}
</style>
