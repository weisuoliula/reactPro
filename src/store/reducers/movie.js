import {handleActions} from "redux-actions";
import {bannerAsyncType,
    bannerAsyncTypetwo,
    bannerAsyncTypethree,
    bannerAsyncTypegengxin,
    bannerAsyncTyperemen,
    bannerAsyncTypehuodong,
    bannerAsyncTypelvyou,
    bannerAsyncTypeqiuda,
    AsyncTypesousuo
} from 'actions/movie/actionsTypes'
const defaultState = {
    ms_new_list:[],
    hot_note_list:[],
    qpy_list:[],
    ct_zx_list:[],
    ct_hot_list:[],
    hd_new_list:[],
    lxrj_list:[],
    qd_list:[],
    data:[]
}

export default handleActions({
    [bannerAsyncType]:(state,action)=>{
        let weekState=JSON.parse(JSON.stringify(state))
        weekState.ms_new_list=action.payload.data.data.ms_new_list
        return weekState
    },
    [bannerAsyncTypetwo]:(state,action)=>{
        let weekStatetwo=JSON.parse(JSON.stringify(state))
        weekStatetwo.hot_note_list=action.payload.data.data.hot_note_list
        return weekStatetwo
    },
    [bannerAsyncTypethree]:(state,action)=>{
        let weekStatethree=JSON.parse(JSON.stringify(state))
        weekStatethree.qpy_list=action.payload.data.data.qpy_list
        return weekStatethree
    },
    [bannerAsyncTypegengxin]:(state,action)=>{
        let weekStategengxin=JSON.parse(JSON.stringify(state))
        weekStategengxin.ct_zx_list=action.payload.data.data.ct_zx_list
        
        return weekStategengxin
    },
    [bannerAsyncTyperemen]:(state,action)=>{
        let weekStateremen=JSON.parse(JSON.stringify(state))
        weekStateremen.ct_hot_list=action.payload.data.data.ct_hot_list
        
        return weekStateremen
    },
    [bannerAsyncTypehuodong]:(state,action)=>{
        let weekStatehuodong=JSON.parse(JSON.stringify(state))
        weekStatehuodong.hd_new_list=action.payload.data.data.hd_new_list
        
        return weekStatehuodong
    },
    [bannerAsyncTypelvyou]:(state,action)=>{
        let weekStatelvyou=JSON.parse(JSON.stringify(state))
        weekStatelvyou.lxrj_list=action.payload.data.data.lxrj_list
        
        return weekStatelvyou
    },
    [bannerAsyncTypeqiuda]:(state,action)=>{
        let weekStateqiuda=JSON.parse(JSON.stringify(state))
        weekStateqiuda.qd_list=action.payload.data.data.qd_list
        
        return weekStateqiuda
    },

    [AsyncTypesousuo]:(state,action)=>{
        let weekStateqiuda=JSON.parse(JSON.stringify(state))
        weekStateqiuda.data=action.payload.data.data
        
        return weekStateqiuda
    },

},defaultState)