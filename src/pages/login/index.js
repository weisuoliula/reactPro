import React, { Fragment, Component } from "react";
import {Login_head,Login_main} from "./style"
import {mapStateToprops,mapDispatchToProps} from "./mapstore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToprops,mapDispatchToProps)
class Login extends Component {
    constructor() {
        super()
        this.state={
            username:"",
            password:""
        }
    }
    render() {
        return (
            <Fragment>
                <Login_head>
                    <img src="http://localhost:3000/img/login_logo.png" alt="" />
                    <div onClick={this.hantletoggledenglu.bind(this)}>注册</div>
                </Login_head>
                <Login_main>
                    <div>
                        <label>用户名</label>
                        <input type="text" onChange={this.handleusername.bind(this)}/>
                    </div>
                    <div>
                        <label>密码</label>
                        <input type="password" onChange={this.handlepwd.bind(this)}/>
                    </div>
                    <button onClick={this.props.handleLogin.bind(this)}>登录</button>
                </Login_main>
            </Fragment>
        )
    }
    handleusername(e){
        let usernameval=e.target.value
        this.setState({
            username:usernameval
        })
    }
    handlepwd(e){
        let pwdval=e.target.value
        this.setState({
            password:pwdval
        })
    }
    hantletoggledenglu(){
        this.props.history.push("/register")
    }
}
export default Login;