import {
    registerAsyncAction
} from "actions/goodlist/actionCreate"
export const mapStateToProps=(state)=>({
    
})
export const mapDispatchToProps = (dispatch) => ({
    handleRegister() {
        //console.log(this.refs.name.value,this.refs.pwd.value)
        if (this.refs.name.value == "" || this.refs.pwd.value == "") {
            alert("账号密码不能为空");
        } else {
            dispatch(registerAsyncAction(this.refs.name.value,this.refs.pwd.value))
        }
    }


    //console.log(this.props.p)


})