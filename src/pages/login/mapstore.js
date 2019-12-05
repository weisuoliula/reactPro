import{loginAsyncAction} from "actions/goodlist/actionCreate"
export const mapStateToprops=(state)=>({
    
})

export const mapDispatchToProps=(dispatch)=>({
   async handleLogin(){
         //console.log(this.state)
         if (this.state.username == "" || this.state.password == "") {
            alert("账号密码不能为空");
        } else {
           let data=await dispatch(loginAsyncAction(this.state.username,this.state.password))
            //console.log(data)
            if(data==1){
                //console.log(this.props)
                this.props.history.push("/movie")
            }
        }
    }
})