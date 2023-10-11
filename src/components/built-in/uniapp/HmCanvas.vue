<template>
  <view class="demo">
    <canvas
      type="2d"
      :style="{
        width: canvasInfo.width + 'px',
        height: canvasInfo.height + 'px',
      }"
      id="myCanvas"
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
      default: () => [],
    },
    /**
     */
    canvasInfo: {
      type: Object,
      default: () => {},
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
