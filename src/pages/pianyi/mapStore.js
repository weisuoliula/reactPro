import {bannerAsyncActionthree} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    qpy_list:state.movie.qpy_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbannerthree(){
        dispatch(bannerAsyncActionthree())
    }
})