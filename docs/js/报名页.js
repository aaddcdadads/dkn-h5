function() {
    let self = this
    //大图片
    self.logoImg.src = "https://static1.keepcdn.com/teyvat-cms/2023/10/24/1698136514335c25agsam_750x1000.jpg"
    //倒计时
    self.closeTime.day = ""
    self.closeTime.hour = ""
    self.closeTime.minute = ""
    self.closeTime.second = ""
    //名称
    self.nameText.text = ""
    
    self.getActivity = async function (id) {
        let url = "/api/dkn/activity/queryById"
        const res = await self.$getAction(url, { id })
        if (!res.success ||  !res.result) {
            return
        }
        let item = res.result
        self.nameText.text = item.name
        
    }
}