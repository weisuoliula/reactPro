import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import movie from './reducers/movie';
import shop from "./reducers/shop";
import user from "./reducers/user"
const reducers=combineReducers({
    shop, 
    movie,
    user
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store

