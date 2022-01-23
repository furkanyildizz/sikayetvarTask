import { MockDataService } from "../../apis/MockDataService"

const getAllMockData=()=>dispatch=>{
    MockDataService.getMockData().then(res=>{
        dispatch(
            {
                type:"mymockdata",
                alldata:res.data
            }
        )
    })
}

const getAllMockDataById=(id)=>dispatch=>{
    MockDataService.getMockDataById(id).then(res=>{
        dispatch(
            {
                type:"mymockdatabyid",
                alldata:res.data
            }
        )
    })
}

const getUserById=(id)=>dispatch=>{
    MockDataService.getUserById(id).then(res=>{
        dispatch(
            {
                type:"getuserid",
                alldata:res.data
            }
        )
    })
}

export {getAllMockData,getAllMockDataById,getUserById}