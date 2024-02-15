import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** getCode 开始 *********************/
/**
 * 获取二维码请求
 */
const getCodeRequest = (logic.getCodeRequest = async function () {
  let res = await self.$getAction(`/api/dkn/activity/list`, {
    id: self.$route.query.activityId,
  });
  self.getCodeRequestData = res;
});

/**
 * 逻辑流 getCode 入口函数
 */
const getCode = (logic.getCode = async (pageVm, eventData) => {
  console.log(`getCode: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.getCodeData = eventData;

  await getCodeRequest();
  if (self.getCodeRequestData.success) {
  } else {
  }
  let records = self.getCodeRequestData.result.records;
  self.code.name = records[0].qrCode;
});

/********************** end getCode 开始 *********************/

/********************** sharingPageInitialization 开始 *********************/

/**
 * 逻辑流 sharingPageInitialization 入口函数
 */
const sharingPageInitialization = (logic.sharingPageInitialization = async (
  pageVm,
  eventData
) => {
  console.log(`sharingPageInitialization: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.sharingPageInitializationData = eventData;

  await getCode(self);
  await getBackgroundImage(self);
});

/********************** end sharingPageInitialization 开始 *********************/

/********************** getBackgroundImage 开始 *********************/
/**
 * 获取背景图请求
 */
const getBackgroundImageRequest = (logic.getBackgroundImageRequest = async function () {
  let res = await self.$getAction(`/api/dkn/activityImg/list`, {
    activityId: self.$route.query.activityId,
    type: 2,
  });
  self.getBackgroundImageRequestData = res;
});

/**
 * 逻辑流 getBackgroundImage 入口函数
 */
const getBackgroundImage = (logic.getBackgroundImage = async (
  pageVm,
  eventData
) => {
  console.log(`getBackgroundImage: `, pageVm, eventData);
  self = Object.assign(pageVm, logic);
  self.getBackgroundImageData = eventData;

  await getBackgroundImageRequest();
  if (self.getBackgroundImageRequestData.success) {
  } else {
  }
  let records = self.getBackgroundImageRequestData.result.records;
  if (records[0]) {
    self.sharingImage.backgroundImage =
      "/api/sys/common/static/" + records[0].path;
  }
  self.getQrCode = async function () {
    let url = `http://dkn-h5.dev.haomo-tech.com?activityId=${self.$route.query.activityId}&channel=${self.$route.query.channel}`;
    setTimeout(() => {
      const container = document.querySelector(".ele-wrapper-code");
      console.log("container", container);
      new self.$QrCode(container, {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });
    });
  };
  self.getQrCode;
});

/********************** end getBackgroundImage 开始 *********************/

export {
  getCodeRequest,
  getCode,
  sharingPageInitialization,
  getBackgroundImageRequest,
  getBackgroundImage,
};
