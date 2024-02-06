import _ from "lodash";
import moment from "moment";

// self对象保存页面的this对象
let self = {};

// logic对象保存当前逻辑组对象，可以通过logic.func或者self.func来调用本逻辑组内的所有逻辑单元
let logic = {};

/********************** sharingPageInitialization 开始 *********************/
/**
 * 分享页请求
 */
const sharingPageRequest = (logic.sharingPageRequest = async function () {
  let res = await self.$getAction(`/api/dkn/activity/list`, {
    id: self.$route.query.activityId,
  });
  self.sharingPageRequestData = res;
});

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

  await sharingPageRequest();
  if (self.sharingPageRequestData.success) {
  } else {
  }
  let result = self.sharingPageRequestData.result;
  self.sharingImage.backgroundImage = result[0].url;
  self.code.name = result[0].qrCode;
});

/********************** end sharingPageInitialization 开始 *********************/

export { sharingPageRequest, sharingPageInitialization };
