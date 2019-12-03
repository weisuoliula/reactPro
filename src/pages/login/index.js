import React, { Fragment, Component } from "react";
import {Login_head,Login_main} from "./style"
// import './index.css'
class Login extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <Login_head>
                    <img src="http://localhost:3000/img/login_logo.png" alt="" />
                    <div>注册</div>
                </Login_head>
                <Login_main>
                    <div>
                        <label>用户名</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>密码</label>
                        <input type="password" />
                    </div>
                    <button>登录</button>
                </Login_main>
            </Fragment>
        )
    }
}
export default Login;