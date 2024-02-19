<template>
    <test :shareList="list"></test>
</template>
<script>
import Test from "@/pages/test/test.vue"
export default {
    name:"Testtest",
    components:{
        Test
    },
    data(){
        return{
            list:[
                {
                   id: "1",
							sharetype: "仙女棒",
							sharer: "张三",
							sharestate: 1,
							state: "已退回",
							sharetime: '2020-11-31 12:30',
							endtime: '2025-12-31 12:30' 
                }
            ]
        }
            
            
        
    }
}
</script>