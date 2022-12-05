<template>
  <div class="container">
    <!-- 个人信息 -->
    <div class="author-message">
      <div>
        <img :src="data.avatorUrl" />
      </div>
      <div>
        <div>{{ data.author }}</div>
        <div>{{ data.releaseTime }}</div>
      </div>
    </div>
    <!-- 标签 -->
    <div class="tag-div">
      <div v-for="tag in data.tagList">#{{ tag }}</div>
    </div>
    <!-- 图片列表 -->
    <div class="img-list">
      <div v-for="(url, index) in data.imgUrlList" :key="index">
        <img :src="url" />
      </div>
    </div>
    <div class="bottom-menu">
      <div>
        <div>是否展示班牌</div>
        <div>
          <div v-if="data.isShowClassBrand">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F03%2F19%2F599d9f35b71a6_610.jpg&refer=http%3A%2F%2Fbpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672674444&t=d52c948e619bc859a6f72d98ef12547f"
            />
          </div>
          <div v-if="!data.isShowClassBrand">不显示</div>
        </div>
      </div>
      <div>
        <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F03%2F19%2F599d9f35b71a6_610.jpg&refer=http%3A%2F%2Fbpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672674444&t=d52c948e619bc859a6f72d98ef12547f"
            />
      </div>
    </div>
  </div>
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
    border-bottom: 1rpx solid #e2e2e2;
    > div:first-child {
      padding: 19rpx 0rpx 19rpx 24rpx;
      width: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
 
        border-radius: 50%;
        width: 38rpx;
        height: 38rpx;
      }
    }
    > div:last-child {
      padding-top: 16rpx;
      padding-bottom: 14rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      > div:first-child {
        font-family: PingFangSC-Medium;
        font-size: 16rpx;
        color: #212121;
        font-weight: 500;
        line-height: 22rpx;
      }
      > div:last-child {
        margin-top: 4rpx;
        font-family: PingFangSC-Regular;
        font-size: 12rpx;
        color: #8b8b94;

        font-weight: 400;
      }
    }
  }
  .tag-div {
    
    padding-top: 16rpx;
    display: flex;
    padding-left: 74rpx;
    > div {
      font-family: PingFangSC-Medium;
      font-size: 14rpx;
      color: #464957;
      text-align: center;
      font-weight: 500;
    }
  }
  .img-list {
    border:1px solid red;
  
    padding-left: 74rpx;
    display: flex;
    padding-top: 10rpx;
    flex-wrap: wrap;
    > div {
      margin-bottom: 4rpx;
      margin-right: 4rpx;
      > img {
        width: 72rpx;
        height: 72rpx;
      }
    }
  }
  .bottom-menu {
   
    padding-left: 74rpx;

    margin-top: 22rpx;
    margin-bottom: 22rpx;
    display: flex;

    justify-content: space-between;
    > div:first-child {

      display: flex;
      
      font-size: 14rpx;
      > div:first-child {
        font-family: PingFangSC-Regular;
        font-size: 14rpx;
        color: #464957;
        letter-spacing: 0;
        text-align: center;

        font-weight: 400;
      }
      > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
          display: flex;
          padding-left: 8rpx;
          font-size: 0;
          > img {
            width: 16rpx;
            height: 16rpx;
          }
        }
      }
    }
    >div:last-child{
      display: flex;
  margin-right:16rpx;
      >img{
        display: flex;
        height:24rpx;
        width: 24rpx;
      }
    }
  }
}
</style>
