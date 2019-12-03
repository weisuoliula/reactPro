import {bannerAsyncActiongengxin} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    ct_zx_list:state.movie.ct_zx_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncgengxin(){
        dispatch(bannerAsyncActiongengxin())
    }
})