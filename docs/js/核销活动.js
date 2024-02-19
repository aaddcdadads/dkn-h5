function() {
  let self = this
  self.storeId = self.$route.query.storeId
  let userInfoString = localStorage.getItem('userInfo');
  let userInfo = JSON.parse(userInfoString);
  self.userId = userInfo.data.id || "";
  self.activityList.list = []
  self.activity = ""
  self.getActivity = async function(userId) {
    let url = "/api/dkn/activity/userList"
    const res = await self.$getAction(url, {
      userId: self.userId
    })
    if (!res.success || !res.result) {
      return
    }
    self.activityList.list = res.result.map(e => {
      return {
        ...e,
        "name": e.name,
        "disabled": false
      }
    })
  }
  self.getActivity()

  self.gotoActivity = function() {
    if (!self.activity) {
      uni.showToast({
        icon: "error",
        position: "top",
        title: "请选择活动",
        duration: 2000,
      });
      return
    }
    let id = ""
    self.activityList.list.forEach(e => {
      if (e.name === self.activity) {
        id = e.id
      }
    })
    console.log('index', id)
    if (!id) {
      uni.showToast({
        icon: "error",
        position: "top",
        title: "获取活动信息失败",
        duration: 2000,
      });
      return;
    }
    uni.$u.route(
      `/pages/haomo/1753965929131151361/page?activityId=${id}&storeId=${self.storeId}&type=1`
    );
  }
}