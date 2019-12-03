import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import movie from './reducers/movie';

const reducers = combineReducers({//合并
    movie
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store