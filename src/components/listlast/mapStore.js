import {bannerAsyncActionlvyou} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    lxrj_list:state.movie.lxrj_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbannerlvyou(){
        dispatch(bannerAsyncActionlvyou())
    }
})