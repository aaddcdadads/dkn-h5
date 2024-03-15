function() {
    let self = this
    //大图片
    self.logoImg.src = "https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg"
    //倒计时
    self.closeTime.day = ""
    self.closeTime.hour = ""
    self.closeTime.minute = ""
  self.closeTime.second = ""
  self.closeTime.backgroundColor=""
  
    //名称
    self.nameTexts.text = ""
  
    //活动列表
    self.activityList.item = ""
    //活动图片
    self.activityImgList.funcList = []
    self.listCompanent.funcList = []
    //颜色
    //背景色
    self.colourCard.backgroundColor = "#F6D7E6"
    //卡片背景色
    self.activityBg.backgroundColor = "#FEEFF7"
    self.activityList.backgroundColor = '#F6D7E6'
    self.activityImgList.backgroundColor = '#FEEFF7'
    self.listCompanent.backgroundColor = '#FEEFF7'
    //文字颜色
    self.activityList.textColor = '#D8477B'
    self.activityImgList.textColor = '#D8477B'
    self.listCompanent.textColor = '#D8477B'
    //富文本
    self.activityRulesText.data = {
      html: ""
    }
  
    self.phoneText.text = ""
    //数据对象
    self.activityItem = {}
    self.activityExtItem = {}
    self.activityImgItem = {}
    self.activityProjectItem = {}
    self.outsideBg.hidden = false
    self.addOrderCard.hidden = false
    self.notActivity.hidden = true
    self.imgCard.hidden = false
  self.imgText.text = "活动奖品"
  self.orderId=""
    self.getActivity = async function(id) {
      let params = {
        id
      }
      if (!id) {
        params.code = self.code
      }
      let url = "/api/dkn/activity/queryByAll"
      const res = await self.$getAction(url, params)
      if (!res.success || !res.result) {
        self.outsideBg.hidden = true
        self.addOrderCard.hidden = true
        self.notActivity.hidden = false
        return
      }
      self.activityItem = res.result
      self.activityId = self.activityItem.id
      self.activityExtItem = self.activityItem.activityExts[0]
      self.activityImgItem = self.activityItem.activityImgs
      self.activityProjectItem = self.activityItem.activityProjects
      self.setData();
    }
    self.setData = function() {
      self.colourCard.backgroundColor = self.activityItem.bgColour
      self.activityBg.backgroundColor = self.activityItem.colour
      self.activityList.backgroundColor = self.activityItem.colour
      self.activityList.textColor = self.activityItem.textColour
      self.activityImgList.backgroundColor = self.activityItem.colour
      self.activityImgList.textColor = self.activityItem.textColour
      self.listCompanent.backgroundColor = self.activityItem.colour
      self.listCompanent.textColor = self.activityItem.textColour
      self.closeTime.backgroundColor=self.activityItem.textColour
      self.nameTexts.text = self.activityItem.name
      let number = self.activityItem.orders
      if (self.activityItem.unrealStatus === 0) {
        number = self.activityItem.unrealCount + number
      }
      let projectList = self.activityProjectItem.map(e => {
        let expense = e.free == 1 ? e.expense : 0
        return {
          name: `${e.name}:￥${expense}/人`
        }
      })
      projectList = projectList.sort((a, b) => a.sortNo - b.sortNo)
      self.activityList.item = {
        "time": `${self.getDateToFormat(self.activityItem.startTime)}-${self.getDateToFormat(self.activityItem.endTime)}`,
        "closeTime": self.activityItem.closeTime,
        "activityType": self.activityExtItem ? self.activityExtItem.activityType : "",
        "requirements": self.activityExtItem ? self.activityExtItem.requirements : "",
        "projectList": projectList,
        "number": number,
        "address":self.activityItem.address
      }
      const time = self.getTimeDifference(new Date(), new Date(self.activityItem.closeTime))
      console.log('time', time)
      setTimeout(() => {
        self.closeTime.day = time.days;
        self.closeTime.hour = time.hours;
        self.closeTime.minute = time.minutes;
        self.closeTime.second = time.seconds;
        self.$refs.closeTime.countDown()
      }, 1000)
      self.setImg()
      self.setTextArea()
    }
    self.setTextArea = function() {
      self.activityRulesText.data = {
        html: self.activityExtItem.activityRules
      }
      self.phoneText.text = self.activityExtItem.customerService
    }
    self.getDateToFormat = function(date) {
      const dateTime = new Date(date)
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth() + 1;
      const day = dateTime.getDate();
      return `${year}-${month}-${day}`;
    }
    self.setImg = function() {
      let imgOne = []
      let imgTwo = []
      self.activityImgItem.forEach(e => {
        if (e.type === 0) {
          imgOne.push(e)
        } else if (e.type === 1) {
          imgTwo.push(e)
        }
      });
      imgTwo = imgTwo.sort((a, b) => a.sortNo - b.sortNo)
      self.activityImgList.funcList = imgTwo.map(x => {
        return {
          bgUrl: self.getImg(x.path),
          height1: "auto",
          scoretext: x.name,
          display: "block",
          textbottom: x.name
        }
      })
      if (self.activityImgList.funcList.length === 0) {
        self.imgCard.hidden = true
        self.imgText.text = ""
      }
      imgOne = imgOne.sort((a, b) => a.sortNo - b.sortNo)
      if (imgOne.length > 0) {
        self.logoImg.src = self.getImg(imgOne[0].path)
      }
      imgOne.splice(0, 1)
      self.listCompanent.funcList = imgOne.map(x => {
        return {
          bgUrl: self.getImg(x.path),
          height1: "auto",
          // scoretext: x.name,
          display: "block",
          // textbottom: x.name
        }
      })
    }
    self.getImg = function(url) {
      if (url.substring(0, 4) === 'http') {
        return url
      }
      return `/api/sys/common/static/${url}`;
    }
    self.getTimeDifference = function(startDate, endDate) {
      // 计算时间差，单位为毫秒
      const timeDiff = endDate.getTime() - startDate.getTime();
      // 计算天数
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      // 计算小时数
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // 计算分钟数
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      // 计算秒数
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      return {
        days,
        hours,
        minutes,
        seconds
      };
    }
  
    //页面事件
    //校验手机号
    self.checkPhone = function() {
      let mobile = self.phoneBox.value
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
    //获取验证码
    self.getPhoneCode = async function() {
      if (!self.checkPhone()) {
        setTimeout(() => {
          self.$refs.viewInput.reset();
        })
        return
      }
      let url = '/api/sys/sms'
      let params = {
        mobile: self.phoneBox.value
      }
      const res = await self.$postAction(url, params)
      uni.showToast({
        title: res.message,
        duration: 2000,
      });
    }
    //登录验证
    self.login = async function() {
      if (!self.phoneBox.value) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "手机号不能为空",
          duration: 2000,
        });
        return
      }
      if (!self.viewInput.value) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "验证码不能为空",
          duration: 2000,
        });
        return
      }
      let url = '/api/sys/phoneLogin'
      let params = {
        mobile: self.phoneBox.value,
        captcha: self.viewInput.value
      }
      const res = await self.$postAction(url, params)
      if (!res.success) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: res.message,
          duration: 2000,
        });
        return
      }
      self.viewPopup.show = false;
      uni.showToast({
        icon: "success",
        position: "top",
        title: res.message,
        duration: 2000,
      });
      uni.setStorageSync("token", res.result.token)
      uni.setStorageSync("userInfo", res.result.userInfo)
      uni.$u.route(
        `/pages/haomo/1753965929131151361/page?activityId=${self.activityId}&activityName=${self.activityItem.name}`
      );
    }
    self.checkOrder = async function() {
      if (!self.phoneBox.value) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "手机号不能为空",
          duration: 2000,
        });
        return
      }
      if (!self.viewInput.value) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: "验证码不能为空",
          duration: 2000,
        });
        return
      }
      let url = '/api/sys/phoneLogin'
      let params = {
        mobile: self.phoneBox.value,
        captcha: self.viewInput.value,
      }
      const res = await self.$postAction(url, params)
      if (!res.success) {
        uni.showToast({
          icon: "error",
          position: "top",
          title: res.message,
          duration: 2000,
        });
        return
      }
      self.viewPopup.show = false;
      uni.showToast({
        icon: "success",
        position: "top",
        title: res.message,
        duration: 2000,
      });
      uni.setStorageSync("token", res.result.token)
      uni.setStorageSync("userInfo", res.result.userInfo)
      url = '/api/dkn/registrationOrders/getOne'
      const resp = await self.$getAction(url, {
        phone: self.phoneBox.value,
        activityId: self.activityId
      })
      if (!resp.success || !resp.result || resp.result.paymentStatus === 2) {
        let item = new Date()
        let closeTimes = new Date(self.activityItem.closeTime)
        if (item.getTime() > closeTimes.getTime()) {
          self.error("活动已结束")
          return
        }
        uni.showToast({
          icon: "error",
          position: "top",
          title: "您尚未报名请前往报名活动",
          duration: 2000,
        });
        uni.$u.route(
          `/pages/haomo/1750444738487521281/page?activityId=${self.activityId}&activityName=${self.activityItem.name}&channel=${self.channel}`
        );
        return
  
      }
      self.orderId=resp.result.id
      uni.$u.route(
        `/pages/haomo/1753965929131151361/page?orderId=${self.orderId}`
      );
  
    }
    self.error = function(text) {
      uni.showToast({
        icon: "error",
        position: "top",
        title: text,
        duration: 2000,
      });
    }
    self.getData = function() {
      self.code = self.$route.query.code
      self.activityId = self.$route.query.activityId
      if (self.$route.query.i) {
        self.activityId = self.$route.query.i
      }
      self.channel = self.$route.query.channel
      if (!self.activityId && !self.code) {
        return
      }
      self.getActivity(self.activityId)
    }
    self.getData()
  }