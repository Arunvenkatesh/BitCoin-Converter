import currencyReducer from "./currencyReducer"


import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const appReducer = combineReducers({

    currencyReducer,
    routing: routerReducer
});
const rootReducer = (state, action) => {

    return appReducer(state, action);
};
export default rootReducer;