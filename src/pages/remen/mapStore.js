import {bannerAsyncActionremen} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    ct_hot_list:state.movie.ct_hot_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbannerremen(){
        dispatch(bannerAsyncActionremen())
    }
})