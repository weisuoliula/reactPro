import {AsyncActionsousuo} from 'actions/movie/actionCreator'
export const mapStateToprops=(state)=>({
    data:state.movie.data
    
})

export const mapDispatchToProps=(dispatch)=>({
    handleonChange(value){
        dispatch(AsyncActionsousuo(value))
    }
})