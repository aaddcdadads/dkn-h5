function() {
    let self = this
    self.activityId = self.$route.query.activityId
    self.activityName = self.$route.query.activityName
    self.eventCard.list = []
    self.storeList.list = []
    self.payButton.text = `立即报名`
    self.money = 0
    self.activityText.text = ""
    self.countdown.text = ""
    self.prices.text = ""
    self.getActivityProject = async function () {
        let url = '/api/dkn/activityProject/list'
        let params = { activityId: self.activityId, column: "sortNo", order: "asc" }
        const res = await self.$getAction(url, params)
        if (!res.success || res.result.records.length === 0) {
            return
        }
        self.eventCard.list = res.result.records.map(e => {
            return {
                ...e,
                checked: false,
                image: self.getImg(e.imgPath),
                name: e.name,
                description: e.synopsis,
                price: e.expense,
                number: 0
            }
        })
    }
    self.getStoreList = async function () {
        let url = '/api/dkn/store/listOrder'
        const res = await self.$getAction(url)
        if (!res.success || res.result.length === 0) {
            return
        }
        let store = res.result.map(x => {
            return {
                city: x.key,
                shop: x.store
            }
        })
        self.storeList.list = [{ anchor: "b", store }]
    }
    self.getImg = function (url) {
        if (url.substring(0, 4) === 'http') {
            return url
        }
        return `/api/sys/common/static/${url}`;
    }
    self.getData = function () {
        self.getActivityProject()
        self.getStoreList()
    }
    self.getData()


    self.checked = function () {
        setTimeout(() => {
            let money = 0;
            self.eventCard.list.forEach((e) => {
                if (e.checked) {
                    let expense = e.expense * e.number;
                    money += expense;
                }
            });
            console.log('money', money)
            self.payButton.text = `总费用：¥${money} 立即报名`;
            self.money = money;
        })
    }
    self.checkOrder = async function () {
        if (!self.nameInput.value) {
            self.error("姓名/昵称不能为空")
            return
        }
        if (!self.phoneInput.value) {
            self.error("手机号不能为空")
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
        let channel = 0
        if (self.weixinRadio.value === 1) {
            channel = 1
        }
        let url = '/api/dkn/registrationOrders/addOrder'
        const orderProjects = self.getOrderProjects();
        let params = {
            activityId: self.activityId,
            storeId: self.storeInput.value,
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
            uni.showToast({
                icon: "error",
                position: "top",
                title: res.message,
                duration: 2000,
            });
            return
        }
        uni.showToast({
            icon: "success",
            position: "top",
            title: "报名成功",
            duration: 2000,
        });
        self.payPopup.show = true;
        self.activityText.text = self.activityName
        self.countdown.text = ""
        self.prices.text = `¥ ${self.money}`
        self.orderId = res.message
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
        let channel = 0
        if (self.weixinRadio.value === 1) {
            channel = 1
        }
        self.$pay(self.orderId, channel)
    }
}