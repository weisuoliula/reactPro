import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import movie from './reducers/movie';
import shop from "./reducers/shop";
const reducers=combineReducers({
    shop, 
    movie
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store

