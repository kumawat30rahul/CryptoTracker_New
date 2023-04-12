import { combineReducers } from "redux";
import reducer from "../app/reducer";

const rootReducer = combineReducers({
    coin: reducer,
})

export default rootReducer