import {bannerAsyncActionhuodong,bannerAsyncActionqiuda} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    hd_new_list:state.movie.hd_new_list,
    qd_list:state.movie.qd_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbannehuodong(){
        dispatch(bannerAsyncActionhuodong())
    },
    handleAsyncbanneqiuda(){
        dispatch(bannerAsyncActionqiuda())
    }
})