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
  let records = self.sharingPageRequestData.result.records;
  self.code.name = records[0].qrCode;
  self.sharingImage.backgroundImage = records[0].url;
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
});

/********************** end sharingPageInitialization 开始 *********************/

export { getCodeRequest, getCode, sharingPageInitialization };
