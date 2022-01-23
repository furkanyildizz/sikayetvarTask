import { combineReducers } from "redux";
import mockDataReducers from "./MockData/reducer";

const rootReducer = combineReducers({
    mockDataReducers
});

export default rootReducer