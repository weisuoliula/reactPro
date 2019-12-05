import {
    goodAsyncType,
    loadAsyncType,
    good_tourAsyncType,
    load_tourAsyncType,
    detailType,
    registerType,
    loginType
} from "./actionType";
import {
    createAction
} from "redux-actions";
import {
    getGoodsListApi,
    detailApi,
    registerApi,
    loginApi
} from "../../api/recommend"
import {
    create
} from "domain";
export const goodAsyncAction = (p_num, p) => {
    let goodAction = createAction(goodAsyncType, (data) => ({
        data: data
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num, p, 10);
        //console.log(data)
        dispatch(goodAction(data))
    }
}
export const goodAsyncAction1 = (p_num, p) => {
    //console.log(p)

    let goodAction1 = createAction(loadAsyncType, (data, p) => ({
        data: data,
        q: p
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num, p, 10);
        //console.log(data)
        dispatch(goodAction1(data, p))
    }
}


export const good_tourAsyncAction = (p_num, p_tour) => {
    let good_tourAction = createAction(good_tourAsyncType, (data) => ({
        data: data
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num, p_tour, 10);
        //console.log(data)
        dispatch(good_tourAction(data))
    }
}
export const goodAsyncAction_tour = (p_num, p) => {
    //console.log(p)
    let goodAction1 = createAction(load_tourAsyncType, (data, p) => ({
        data: data,
        q: p
    }))
    return async (dispatch) => {
        let data = await getGoodsListApi(p_num, p, 10);
        //console.log(data)
        dispatch(goodAction1(data, p))
    }
}

//详情

export const detailAsyncAction = (id) => {
    let detailAction = createAction(detailType, data => data)
    return async (dispatch) => {
        let data = await detailApi(id);
        // console.log(data)
        dispatch(detailAction(data))
    }
}

//注册
export const registerAsyncAction = (username, password) => {
    let registerAction = createAction(registerType, data => data)
    return async (dispatch) => {
        let data = await registerApi(username, password);
        //console.log(data.data.status)
            //dispatch(registerAction(data))
            return data
    }
}

//登录
export const loginAsyncAction = (username, password) => {
    let loginAction = createAction(loginType, data => data)
    return async (dispatch) => {
        let data = await loginApi(username, password);
        //console.log(data)
        if (data.data.code == 1) {
            localStorage.setItem("userinfo", JSON.stringify({
                name: data.data.data.name,
                urlPic: data.data.data.urlPic
            }))
            dispatch(loginAction(data.data.data))
            return data.data.code;
        }else{
            alert(data.data.info)
        }

    }
}