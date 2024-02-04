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
  let res = await self.$getAction(`/api/resgn/acvitity/list`, {
    // id: self.$route.query.activityId
    id: "0ed5d98c96c65067dd7bc1f4ddb8573c",
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
  console.log("e", result);
});

/********************** end sharingPageInitialization 开始 *********************/

export { sharingPageRequest, sharingPageInitialization };
