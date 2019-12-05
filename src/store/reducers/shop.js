import {handleActions} from "redux-actions"
import {goodAsyncType,loadAsyncType,good_tourAsyncType,load_tourAsyncType,detailType,registerType} from "../../actions/goodlist/actionType"
const defaultState={
    goodList:[],
    p:1,
    tour_goodList:[],
    p_tour:1,
    detailList:[],
    res:''
}
export default handleActions({
    [goodAsyncType]:(state,action)=>{
        let goodData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        goodData.goodList=action.payload.data.data;
        return goodData
    },
    [loadAsyncType]:(state,action)=>{
        let goodData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        goodData.goodList=goodData.goodList.concat(action.payload.data.data);
        goodData.p=action.payload.q
        return goodData
    },
    [good_tourAsyncType]:(state,action)=>{
        let good_tourData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        good_tourData.tour_goodList=action.payload.data.data;
        return good_tourData
    },
    [load_tourAsyncType]:(state,action)=>{
        let good_tourData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        good_tourData.tour_goodList=good_tourData.tour_goodList.concat(action.payload.data.data);
        good_tourData.p_tour=action.payload.q
        return good_tourData
    },
    [detailType]:(state,action)=>{
        let detailData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        detailData.detailList=action.payload.data;
        return detailData
    },
    /* [registerType]:(state,action)=>{
        let registerData=JSON.parse(JSON.stringify(state));
        //console.log(action)
        registerData.res=action.payload.data.status;
       //console.log(registerData.res)
        return registerData
    } */
},defaultState)