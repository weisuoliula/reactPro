import {
    registerAsyncAction
} from "actions/goodlist/actionCreate"
export const mapStateToProps = (state) => ({
    //res:state.shop.res
})
export const mapDispatchToProps = (dispatch) => ({
    async denglu() {
        //console.log(res)
        console.log(this.refs.name.value,this.refs.pwd.value)
        if (this.refs.name.value == "" || this.refs.pwd.value == "") {
            alert("账号密码不能为空");
        } else {
            let data = await dispatch(registerAsyncAction(this.refs.name.value, this.refs.pwd.value))
            //console.log(data)
            if (data.data.status == 1) {
                this.props.history.push("/login")
            }
        }
    }


})