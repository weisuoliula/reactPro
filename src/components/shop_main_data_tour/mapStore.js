import {goodAsyncAction_tour,good_tourAsyncAction} from "actions/goodlist/actionCreate"
export const mapStateToProps=(state)=>({
    tour_goodList:state.shop.tour_goodList,
    p_tour:state.shop.p_tour
})
export const mapDispatchToProps=(dispatch)=>({
    handleload(){
        //console.log(this.props.p_tour)
         dispatch(goodAsyncAction_tour(2,this.props.p_tour+1))
         if(this.props.p_tour==8){
            //console.log(this.refs.load)
            setInterval(()=>{
                this.refs.load.innerHTML="沒有更多数据"
            },500)
            
        }
         //console.log(this.props.p)
    },
    handleAsyncgood_tours(){
        dispatch(good_tourAsyncAction(2,1))
    }

})