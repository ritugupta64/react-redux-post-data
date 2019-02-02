import { combineReducers } from "redux";
import postReducer from "./postreducer";

const rootReducer = combineReducers({
    posts:postReducer
})

export default rootReducer;