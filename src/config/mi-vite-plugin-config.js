module.exports = {
  pageConfig: {
    easycom: {
      autoscan: true,
      custom: {
        "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
        "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      },
    },
    pages: [
      { path: "pages/index/index", style: { navigationBarTitleText: "首页" } }, // 首页配置, 必要
    ],
    subPackages: [],
    globalStyle: {
      navigationStyle: "default",
      navigationBarTextStyle: "black",
      navigationBarTitleText: "uni-app",
      navigationBarBackgroundColor: "#F8F8F8",
      backgroundColor: "#F8F8F8",
      rpxCalcMaxDeviceWidth: "750",
      rpxCalcBaseDeviceWidth: "375",
      rpxCalcIncludeWidth: "375",
      dynamicRpx: true,
      usingComponents: {
        // 引入全局echarts组件
        "ec-charts": "/wxcomponents/ec-canvas/ec-canvas",
      },
    },
  },
};
