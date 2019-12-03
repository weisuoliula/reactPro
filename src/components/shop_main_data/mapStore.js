import {goodAsyncAction,goodAsyncAction1} from "actions/goodlist/actionCreate"
export const mapStateToProps=(state)=>({
    goodList:state.shop.goodList,
    p:state.shop.p
})
export const mapDispatchToProps=(dispatch)=>({
    handleAsyncgood(){
        dispatch(goodAsyncAction(1,1))
    },
    handleload(){
        //console.log(111111111)
        
         dispatch(goodAsyncAction1(1,this.props.p+1))
         if(this.props.p==4){
            //console.log(this.refs.load)
            this.time=setInterval(()=>{
                this.refs.load.innerHTML="沒有更多数据"
            },500)
            
        }
         //console.log(this.props.p)
    }

})