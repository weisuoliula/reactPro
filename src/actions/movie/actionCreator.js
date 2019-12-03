import {bannerAsyncType,
    bannerAsyncTypetwo,
    bannerAsyncTypethree,
    bannerAsyncTypegengxin,
    bannerAsyncTyperemen,
    bannerAsyncTypehuodong,
    bannerAsyncTypelvyou,
    bannerAsyncTypeqiuda,
    AsyncTypesousuo
} from './actionsTypes';
import {createAction} from 'redux-actions';
import {banner,sousuo} from 'api/shouye'


export const bannerAsyncAction =()=>{
    let weekAction =createAction(bannerAsyncType,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActiontwo =()=>{
    let weekAction =createAction(bannerAsyncTypetwo,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActionthree =()=>{
    let weekAction =createAction(bannerAsyncTypethree,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActiongengxin =()=>{
    let weekAction =createAction(bannerAsyncTypegengxin,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActionremen =()=>{
    let weekAction =createAction(bannerAsyncTyperemen,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActionhuodong =()=>{
    let weekAction =createAction(bannerAsyncTypehuodong,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActionlvyou =()=>{
    let weekAction =createAction(bannerAsyncTypelvyou,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
export const bannerAsyncActionqiuda =()=>{
    let weekAction =createAction(bannerAsyncTypeqiuda,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await banner()
        dispatch(weekAction(data))
    }
}
/**
 * 搜索
 */
export const AsyncActionsousuo =()=>{
    let weekAction =createAction(AsyncTypesousuo,(data)=>({data:data}))
    return async(dispatch)=>{
        let data = await sousuo()
        dispatch(weekAction(data))
    }
}