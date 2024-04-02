function() {
  let self = this
  self.activityId = self.$route.query.activityId
  self.activityName = self.$route.query.activityName
  self.channel = self.$route.query.channel || null
  self.eventCard.list = []
  self.storeList.list = []
  self.payButton.text = `立即报名`
  self.money = 0
  self.activityText.text = ""
  self.countdown.text = ""
  self.prices.text = ""
  self.orderId = ""
  self.alipayChannel = ""
  self.placeholder.list = []
  self.orderParticipantsList = []
  self.getActivityProject = async function () {
    let url = '/api/dkn/activityProject/list'
    let params = {
      activityId: self.activityId,
      column: "sortNo",
      order: "asc"
    }
    const res = await self.$getAction(url, params)
    if (!res.success || res.result.records.length === 0) {
      return
    }
    let list = []
    res.result.records.forEach((e, index) => {
      let checked = false
      if (index == 0) {
        checked = true
      }
      let par = {
        ...e,
        checked,
        image: self.getImg(e.imgPath),
        name: e.name,
        description: e.synopsis,
        price: e.free === 0 ? 0 : e.expense,
        number: 1
      }
      list.push(par)
    })
    self.eventCard.list = list
    self.money = list[0].price
    self.payButton.text = `总费用：¥${self.money} 立即报名`;
  }
  self.getStoreList = async function () {
    let url = '/api/dkn/store/listOrder'
    const res = await self.$getAction(url, {
      status: 0,
      activityId: self.activityId
    })
    if (!res.success || res.result.length === 0) {
      return
    }
    let store = res.result.map(x => {
      return {
        city: x.key,
        shop: x.store
      }
    })
    self.storeList.list = [{
      anchor: "b",
      store
    }]
  }
  self.getImg = function (url) {
    if (url.substring(0, 4) === 'http') {
      return url
    }
    return `/api/sys/common/static/${url}`;
  }
  self.getAlipayChannel = async function () {
    let url = `/api/sys/dict/getDictText/alipay_channel/${self.channel}`
    const res = await self.$getAction(url)
    self.alipayChannel = res.result
  }
  self.getData = function () {
    self.getActivityProject()
    self.getStoreList()
    self.getAlipayChannel()
  }
  self.getData()


  self.checked = function () {
    setTimeout(() => {
      let money = 0;
      self.eventCard.list.forEach((e) => {
        if (e.checked && e.free !== 0) {
          let expense = e.expense * e.number;
          money += expense;
        }
      });
      money = parseFloat(money).toFixed(2)
      console.log("money", money);
      self.payButton.text = `总费用：¥${money} 立即报名`;
      self.money = money;
      self.getParticipants();
    })
  }
  self.checkOrder = async function () {
    if (!self.checkParticipants()) {
      return
    }
    if (!self.nameInput.value) {
      self.error("姓名/昵称不能为空")
      return
    }
    if (!self.checkPhone()) {
      return
    }
    if (!self.smscodeIpnut.value) {
      self.error("验证码不能为空")
      return
    }
    if (!self.storeInput.value) {
      self.error("领奖门店不能为空")
      return
    }

    const orderProjects = self.getOrderProjects();

    if (orderProjects.length == 0) {
      self.error("请至少选择一个活动项目")
      return
    }
    self.addOrder();
  }
  self.addOrder = async function () {
    let url = '/api/dkn/registrationOrders/addOrder'
    const orderProjects = self.getProjects()
    let channel = ""
    if (self.channel && self.channel != 'undefined') {
      channel = self.channel
    }
    let params = {
      activityId: self.activityId,
      storeId: self.storeItem.id,
      paymentStatus: 1,
      phone: self.phoneInput.value,
      name: self.nameInput.value,
      smscode: self.smscodeIpnut.value,
      money: self.money,
      orderProjects,
      channel
    }
    const res = await self.$postAction(url, params)
    if (!res.success) {
      self.orderId = res.result.orderId
      if (res.message === '当前活动已经报名！') {
        if (res.result.paymentStatus === 1) {
          self.error('当前活动已经报名未支付')
          // self.$pay(self.orderId, "1");
          // return;
          // if (self.isWeChat()) {
          //   self.$pay(self.orderId, "0")
          //   return
          // }
          if (self.alipayChannel) {
            self.$pay(self.orderId, "1")
            return
          }
          self.payPopup.show = true;
          self.activityText.text = self.activityName
          self.countdown.text = ""
          self.prices.text = `¥ ${res.result.money}`
        } else {
          self.error(res.message)
          self.login()
          return
        }
      } else {
        self.error(res.message)
      }
      return
    }
    self.orderId = res.message
    if (!parseFloat(self.money) > 0) {
      uni.showToast({
        icon: "success",
        position: "top",
        title: "报名成功",
        duration: 2000,
      });
      self.login()
      return
    }
    // self.$pay(self.orderId, "1")
    // return

    // //微信浏览器打开直接跳微信支付
    // if (self.isWeChat()) {
    //   self.$pay(self.orderId, "0")
    //   return
    // }
    if (self.alipayChannel) {
      self.$pay(self.orderId, "1")
      return
    }

    self.payPopup.show = true;
    self.activityText.text = self.activityName
    self.countdown.text = ""
    self.prices.text = `¥ ${self.money}`
  }
  self.isWeChat = function () {
    // 判断是否在微信浏览器中
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf('micromessenger') !== -1;
  }
  //登录验证
  self.login = async function () {
    let url = '/api/sys/phoneLogin'
    let params = {
      mobile: self.phoneInput.value,
      captcha: self.smscodeIpnut.value
    }
    const res = await self.$postAction(url, params)
    if (!res.success) {
      return
    }
    uni.setStorageSync("token", res.result.token)
    uni.setStorageSync("userInfo", res.result.userInfo)
    uni.$u.route(
      `/pages/haomo/1753965929131151361/page?orderId=${self.orderId}`
    );
  }
  self.getOrderProjects = function () {
    let list = []
    self.eventCard.list.forEach((e) => {
      if (e.checked && e.number) {
        list.push(e)
      }
    });
    list = list.map(x => {
      return {
        ...x,
        activityProjectId: x.id,
        num: x.number
      }
    })
    return list;
  }
  self.error = function (text) {
    uni.showToast({
      icon: "error",
      position: "top",
      title: text,
      duration: 2000,
    });
  }
  //获取验证码
  self.getPhoneCode = async function () {
    if (!self.checkPhone()) {
      setTimeout(() => {
        self.$refs.smscodeIpnut.reset();
      })
      return
    }

    let url = '/api/sys/sms'
    let params = {
      mobile: self.phoneInput.value
    }
    const res = await self.$postAction(url, params)
    uni.showToast({
      title: res.message,
      duration: 2000,
    });
  }
  //校验手机号
  self.checkPhone = function () {
    let mobile = self.phoneInput.value
    if (!mobile) {
      uni.showToast({
        icon: "error",
        position: "top",
        title: "手机号不能为空",
        duration: 2000,
      });
      return false;
    }
    const phoneRegex = /^1[3456789]\d{9}$/;
    const status = phoneRegex.test(mobile);
    if (!status) {
      uni.showToast({
        icon: "error",
        position: "top",
        title: "手机号格式不正确",
        duration: 2000,
      });
    }
    return status
  }

  //支付
  self.orderPayment = function () {
    if (!self.orderId) {
      return
    }
    let channel = '0';
    if (self.weixinRadio.value === '1') {
      channel = '1';
    }
    self.$pay(self.orderId, channel)
  }

  //参与人
  self.getDict = async function () {
    let url = "/api/dkn/viewActivityDictItem/list";
    let params = {
      activityId: self.activityId,
      type: 1
    }
    const res = await self.$getAction(url, params)
    self.participantsList = res.result.records
  }
  self.getDict()
  self.getParticipants = function () {
    const item = self.getOrderProjects();
    let list = [];
    const cList = self.placeholder.list
    item.forEach((e) => {
      let index = e.num * e.orderNumber;
      for (let i = 0; i < index; i++) {
        let title = `${e.name}-参与人${i + 1}`
        const fi = cList.findIndex(f => f.id === e.id && f.title === title)
        let l = self.participantsList.map((s) => {
          let value = ""
          if (fi != -1) {
            const fis = cList[fi].funcList.findIndex(fs => fs.id === s.id)
            if (fis != -1) {
              value = cList[fi].funcList[fis].value
            }
          }
          return {
            ...s,
            value,
            disabled: false,
            placeholder: `* 请填写${s.itemText}`,
          };
        });
        let par = {
          ...e,
          title,
          funcList: l,
        };
        if (l.length > 0) {
          list.push(par);
        }
      }
    });
    self.placeholder.list = list;
    self.placeholderCard.hidden = list.length == 0 ? true : false
  };
  setTimeout(() => {
    self.getParticipants()
  })

  self.checkParticipants = function () {
    const items = self.$refs.placeholder?.cList || [];
    let list = []
    let status = true
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item.funcList.length > 0) {
        for (let j = 0; j < item.funcList.length; j++) {
          try {
            const f = item.funcList[j]
            if (!f.value) {
              //throw new Error()
            }
            let par = {
              uid: item.id,
              cid: i,
              key: f.itemValue,
              value: f.value
            }
            list.push(par)
          } catch {
            list = []
            status = false
            self.error(`${item.title}：${item.funcList[j].itemText} 不能为空`)
          }
        }
      }
    }
    self.orderParticipantsList = list
    return status
  }
  self.getProjects = function () {
    const orderProjects = self.getOrderProjects();
    return orderProjects.map(e => {
      let p = []
      self.orderParticipantsList.forEach(s => {
        if (s.uid === e.id) {
          p.push(s)
        }
      })

      let participants = []
      p.forEach(ss => {
        let par = {
          cid: ss.cid
        }
        const i = participants.findIndex(a => a.cid === ss.cid)
        if (i != -1) {
          participants[i][ss.key] = ss.value
          return
        }
        par[ss.key] = ss.value
        participants.push(par)
      })
      participants.forEach(sss => {
        delete sss.cid
      })
      return {
        ...e,
        participants: JSON.stringify(participants)
      }
    })
  }
}