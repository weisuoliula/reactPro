import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import shop from "./reducers/shop";
const reducers=combineReducers({
    shop
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store;