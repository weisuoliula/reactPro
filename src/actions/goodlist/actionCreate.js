import {goodAsyncType,loadAsyncType,good_tourAsyncType,load_tourAsyncType,detailType,registerType} from "./actionType";
import {createAction} from "redux-actions";
import {getGoodsListApi,detailApi,registerApi} from "api/recommend"
export const goodAsyncAction = (p_num,p) => {
    let goodAction = createAction(goodAsyncType, (data) => ({
        data: data
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num, p, 10);
        //console.log(data)
        dispatch(goodAction(data))
    }
}
export const goodAsyncAction1 = (p_num,p) => {
    //console.log(p)
    
    let goodAction1 = createAction(loadAsyncType, (data,p) => ({
        data: data,
        q:p
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num,p,10);
        //console.log(data)
        dispatch(goodAction1(data,p))
    }
}


export const good_tourAsyncAction=(p_num,p_tour)=>{
    let good_tourAction=createAction(good_tourAsyncType,(data)=>({
        data:data
    }))
    return async (dispatch)=>{
        let data=await getGoodsListApi(p_num,p_tour,10);
        //console.log(data)
        dispatch(good_tourAction(data))
    }
}
export const goodAsyncAction_tour = (p_num,p) => {
    //console.log(p)
    let goodAction1 = createAction(load_tourAsyncType, (data,p) => ({
        data: data,
        q:p
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num,p,10);
        //console.log(data)
        dispatch(goodAction1(data,p))
    }
}

//详情

export const detailAsyncAction=(id)=>{
    let detailAction=createAction(detailType,data=>data)
    return async (dispatch)=>{
        let data=await detailApi(id);
       // console.log(data)
        dispatch(detailAction(data))
    }
}

//注册
export const registerAsyncAction=(username,password)=>{
    console.log(this.props)
    let registerAction=createAction(registerType,data=>data)
    return async (dispatch)=>{
        let data=await registerApi(username,password);
        alert(data.data.info)
        //console.log(data.data.status)
        //if(data.data.status)
        
        //this.props.history.push("/login");
        //dispatch(detailAction(data))
    }
}
