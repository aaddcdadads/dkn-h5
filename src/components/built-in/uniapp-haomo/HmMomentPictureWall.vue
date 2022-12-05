<template>
  <view class="container">
    <!-- 个人信息 -->
    <view class="author-message">
      <view>
        <img :src="avatorUrl" />
      </view>
      <view>
        <view>{{ author }}</view>
        <view>{{ releaseTime }}</view>
      </view>
    </view>
    <!-- 标签 -->
    <view class="tag-view">
      <view v-for="tag in tagList">#{{ tag }}</view>
    </view>
    <!-- 图片列表 -->
    <view class="img-list">
      <view v-for="(url, index) in data.imgUrlList" :key="index">
        <img :src="url" />
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
          imgUrlList: [
            'https://img.zcool.cn/community/0131475bdbc1d0a80121ab5d0d4628.jpg@1280w_1l_2o_100sh.jpg',
            'https://ts1.cn.mm.bing.net/th/id/R-C.e897507069836614b9d0742ed4ef2294?rik=mGs0XJwW4yP6LA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50043%2f6133.jpg_wh1200.jpg&ehk=CyZOoaSeL6Z%2fPUJk4xp%2bH99z9lRexe58BYJSG1u8sSA%3d&risl=&pid=ImgRaw&r=0',
            'https://img.zcool.cn/community/015ac65b6269afa801215c8f90cc6c.jpg@1280w_1l_2o_100sh.jpg',
            'https://img.zcool.cn/community/0197265dc4e7e7a801209e1f625868.jpg@1280w_1l_2o_100sh.jpg',
            'https://ts1.cn.mm.bing.net/th/id/R-C.b06c1313a1d7c5fe33d7521ae0b7ff4f?rik=9nXVPi1IRA3ENw&riu=http%3a%2f%2fpic.tdy.picdns.com%2f2693%2fshow%2f201704%2f20%2f134840hHxxT.jpg&ehk=hppTa1YXJ9E%2fzqMpVKOcCjPeewn71txSYXtgiF5cfWI%3d&risl=&pid=ImgRaw&r=0',
            'https://ts1.cn.mm.bing.net/th/id/R-C.46dbf62a3c28835291ff7209ab57e066?rik=zgytFn0oxeejwA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50096%2f2460.jpg_wh1200.jpg&ehk=Pdur9BJwfPFKhYzXnIHfBQ%2bqvlcPXwIsgDNjkOXPimE%3d&risl=&pid=ImgRaw&r=0',
          ],
          isShowClassBrand: true,
         
        }
      },
    },
      /**
     * 头像地址
     */
     avatorUrl: {
      type: String,
      default: "https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    },
     /**
     * 发布者昵称
     */
     author: {
      type: String,
      default: "范老师",
    },
    /**
     * 发布时间
     */
     releaseTime: {
      type: String,
      default: "2022-11-24 17:00:07",
    },
    /**
     * 发布标签
     */
     tagList: {
      type: Array,
      default: function () {
        return ['早读日常','早读日常'];
      }
     
     }
    }
}
</script>

<style lang="scss" scoped>
.container {
  .author-message {
    display: flex;
    border-bottom: 2rpx solid #f2f5f7;
    > view:first-child {
      margin: 38rpx 24rpx 32rpx 48rpx;
      display: flex;
      justify-content: center;
      width: 76rpx;
      height: 76rpx;
      > img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        flex: 1;
        object-fit: cover;
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
      width: 144rpx;
      height: 144rpx;
      > img {
        width: 100%;
        height: 100%;
        flex: 1;
        object-fit: cover;
      }
    }
  }

}
</style>
