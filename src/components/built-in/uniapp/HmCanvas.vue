<template>
  <view class="demo">
    <canvas
      type="2d"
      :style="{
        width: canvasInfo.width + 'px',
        height: canvasInfo.height + 'px',
      }"
      canvas-id="myCanvas"
    />
  </view>
</template>
<script>
export default {
  name: "HmCanvas",
  props: {
    /**
     * 绘制元素列表
     */
    elementList: {
      type: Array,
      default: function () {
        return [
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/top-img.png", //顶部小图
            width: "100%",
            height: 51,
            x: 0,
            y: 0,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/weinituijian.png",
            width: 128,
            height: 20,
            x: 26,
            y: 9,
          },
          {
            type: "image",
            shape: "circle",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/Wechat.png",
            width: 29,
            height: 29,
            x: 14,
            y: 5,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/2.png",
            width: "100%",
            height: 380,
            x: 0,
            y: 56,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/bottom-img.png", //底部大图
            width: "100%",
            height: 156,
            x: 0,
            y: 288,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/logo-bao.png", //报
            width: 24,
            height: 24,
            x: 90,
            y: 348,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/headset.png", //耳机
            width: 18,
            height: 18,
            x: 100,
            y: 410,
          },
          {
            type: "image",
            url:
              "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/huatai/6.png",
            width: 24,
            height: 24,
            x: 244,
            y: 392,
          },
          {
            type: "text",
            content: "本期简介：梅西一传一射，阿根廷挺进世界杯",
            fontSize: 12,
            color: "#ffffff",
            x: 16,
            y: 54,
          },
          {
            type: "text",
            content: "老友在线报",
            fontSize: 17,
            color: "#e77b77",
            x: 120,
            y: 366,
          },
          {
            type: "text",
            content: "2022年12月16日【第260期】",
            fontSize: 14,
            color: "#424250",
            fontWeight: "bold",
            x: 52,
            y: 390,
          },
          {
            type: "text",
            content: "2.32万播放",
            fontSize: 14,
            textAlign: "center",
            color: "#747485",
            x: 123,
            y: 424,
          },
          {
            type: "text",
            content: "长按一起听",
            fontSize: 10,
            color: "#1e1e33",
            x: 232,
            y: 432,
          },
          {
            type: "rect",
            bgColor: "#e77b77",
            width: "100%",
            height: 22,
            x: 0,
            y: 39,
          },
        ];
      },
    },
    /**
     * 画布信息
     */
    canvasInfo: {
      type: Object,
      default: function () {
        return {
          width: 296,
          height: 446,
          bgColor: "#fff",
        };
      },
    },
  },
  data() {
    return {
      cShow: false,
      SystemInfo: {}, // 设备信息
    };
  },
  watch: {
    show(val) {
      this.cShow = val;
      this.draw();
    },
  },
  mounted() {
    this.draw();
  },
  methods: {
    // 画图
    async draw() {
      const { canvas, width, height } = await this.getCanvas();
      if (!canvas) {
        console.warn("组件仅适用于微信小程序");
        return;
      }
      // 渲染上下文
      const ctx = canvas.getContext("2d");

      // 初始化画布大小
      const dpr = wx.getWindowInfo().pixelRatio;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      // 清空画布
      ctx.clearRect(0, 0, width, height);

      // 背景色填充
      if (this.canvasInfo.bgColor) {
        ctx.fillStyle = this.canvasInfo.bgColor;
        ctx.fillRect(0, 0, width, height);
      }

      // 元素绘制
      for (const item of this.elementList) {
        if (item.type === "image" && item.url) {
          await this.drawImage(canvas, ctx, item, width, height);
        }
        if (item.type === "rect") {
          this.drawRect(canvas, ctx, item, width, height);
        }
        if (item.type === "text" && item.content) {
          this.drawText(canvas, ctx, item, width, height);
        }
      }
    },

    // 绘制图片需要同步执行
    async drawImgPromise(image) {
      return new Promise((resolve) => {
        image.onload = () => {
          resolve();
        };
      });
    },

    // 获取图片信息
    getImageInfo(image) {
      return new Promise((req, rej) => {
        uni.getImageInfo({
          src: image,
          success: function (res) {
            req(res);
          },
        });
      });
    },

    // 获取设备信息
    getSystemInfo() {
      return new Promise((req, rej) => {
        uni.getSystemInfo({
          success: function (res) {
            console.log("getSystemInfo: ", res);
            req(res);
          },
        });
      });
    },

    // 保存图片到相册
    async saveImage() {
      const tempUrl = await this.getCanvasTempUrl();
      wx.saveImageToPhotosAlbum({
        filePath: tempUrl,
        success(res) {
          uni.showToast({
            icon: "success",
            mask: true,
            title: "保存到相册了",
          });
        },
        fail(res) {
          console.log(res.errMsg);
        },
      });
    },

    // 获取canvas的url
    getCanvasTempUrl() {
      return new Promise(async (resolve) => {
        const { canvas } = await this.getCanvas();
        wx.canvasToTempFilePath({
          canvasId: "myCanvas",
          canvas: canvas,
          success: (res) => {
            console.log("res.tempFilePath: ", res.tempFilePath);
            resolve(res.tempFilePath);
          },
        });
      });
    },

    // 获取canvas对象及实例
    getCanvas() {
      return new Promise((resolve) => {
        wx.createSelectorQuery()
          .in(this)
          .select("#myCanvas") // 在 WXML 中填入的 id
          .fields({ node: true, size: true })
          .exec((res) => {
            // Canvas 对象
            if (res[0] == null || !res[0].hasOwnProperty("node")) {
              console.warn("组件仅适用于微信小程序");
              return;
            }
            resolve({
              canvas: res[0].node,
              width: res[0].width,
              height: res[0].height,
              res: res,
            });
          });
      });
    },

    // ========================== 绘制元素 ==========================
    // 图像
    async drawImage(canvas, ctx, item, width, height) {
      item.width === "100%" ? (item.width = width) : "";
      item.height === "100%" ? (item.height = height) : "";
      item.x === "center" ? (item.x = width / 2 - item.width / 2) : "";

      const image = canvas.createImage();
      image.src = item.url;
      console.log("item: ", item);
      await this.drawImgPromise(image);
      // 绘制圆形
      if (item.shape === "circle") {
        ctx.save();
        let radius = item.width / 2;
        ctx.arc(item.x + radius, item.y + radius, radius, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(image, item.x, item.y, item.width, item.height);
        ctx.restore();
      } else {
        ctx.drawImage(image, item.x, item.y, item.width, item.height);
      }
    },
    // 矩形
    drawRect(canvas, ctx, item, width, height) {
      item.width === "100%" ? (item.width = width) : "";
      item.height === "100%" ? (item.height = height) : "";
      item.x === "center" ? (item.x = width / 2 - item.width / 2) : "";

      ctx.fillStyle = item.bgColor || "#333333"; // 默认白色
      ctx.fillRect(item.x, item.y, item.width, item.height);
    },
    // 文字
    drawText(canvas, ctx, item, width, height) {
      item.fontSize ? (ctx.font = `${item.fontSize}px sans-serif`) : "";
      ctx.fillStyle = item.color || "#333333";

      item.x === "center"
        ? (item.x = (width - ctx.measureText(item.content).width) * 0.5)
        : "";
      ctx.fillText(item.content, item.x, item.y); // 绘制文字
    },
  },
};
</script>
