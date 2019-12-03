import {bannerAsyncActiontwo} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    hot_note_list:state.movie.hot_note_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncbannertwo(){
        dispatch(bannerAsyncActiontwo())
    }
})