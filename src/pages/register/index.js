import React, { Fragment, Component } from "react";
import { HeadContainer, Register_main } from "./style"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Register extends Component {
    constructor() {
        super()
    }
    render() {
        //let {res}=this.props;
        //console.log(res)
        return (
            <Fragment>
                <HeadContainer>
                    <img src="http://localhost:3000/img/logo.png" alt="" />
                    <a href="/login">登录</a>
                </HeadContainer>
                <Register_main>
                    <div>
                        <span></span>
                        <input type="text" placeholder="手机号" className="input_name" ref="name" />
                    </div>
                    <div>
                        <span></span>
                        <input type="password" placeholder="密码" className="input_password" ref="pwd" />
                    </div>
                    {/* <div onClick={this.props.handleRegister.bind(this)}>验证</div> */}
               <div onClick={this.props.denglu.bind(this)}>注册</div> 
               </Register_main>
            </Fragment>
        )
    }
   
}
export default Register