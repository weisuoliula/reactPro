import {handleActions} from "redux-actions"
import {loginType} from "../../actions/goodlist/actionType"
const defaultState={
    userinfo:{}
}

export default handleActions({
    [loginType]:(state,action)=>{
        let userstate=Object.assign({},state);
        userstate.userinfo=action.payload
        return userstate;
    }
},defaultState);