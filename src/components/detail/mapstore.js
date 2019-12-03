import {detailAsyncAction} from "actions/goodlist/actionCreate"
export const mapStateToProps=(state)=>({
    detailList:state.shop.detailList
})
export const mapDispatchToProps=(dispatch)=>({
    handleDetail(id){
        dispatch(detailAsyncAction(id))
    }
})