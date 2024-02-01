function() {
    let self = this
    self.activityId = self.$route.query.activityId
    self.protocolText.data = { html: "" }
    self.getProtocolText = async function () {
        let url = '/api/dkn/activityExt/getOne'
        let params = { activityId: self.activityId }
        const res = await self.$getAction(url, params)
        if (!res.success || !res.result) {
            return
        }
        self.protocolText.data = { html: res.result.protocol } 
    }
    self.getProtocolText()
  }