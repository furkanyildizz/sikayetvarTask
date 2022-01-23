const initialState = {
    mockData: [],
    mockDataById: [],
    userData:[]
    

}
const mockDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case "mymockdata":
            return { ...state, mockData: action.alldata };
        case "mymockdatabyid":
            return { ...state, mockDataById: action.alldata };
        case "getuserid":
            return { ...state, userData: action.alldata };
        default:
            return state;
    }
}
export default mockDataReducers;