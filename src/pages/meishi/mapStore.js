import {bannerAsyncAction} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    ms_new_list:state.movie.ms_new_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbanner(){
        dispatch(bannerAsyncAction())
    }
})