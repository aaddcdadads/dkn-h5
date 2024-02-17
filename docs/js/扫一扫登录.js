function() {
    let self = this
    self.storeId = self.$route.query.storeId
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
      if (!res.success || res.message === '手机验证码错误') {
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
        `/pages/haomo/1751899680905629697/page?storeId=${self.storeId}`
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
  }