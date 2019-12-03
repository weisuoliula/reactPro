import React from 'react';
import { Headers } from './styled';
import observer from "../../observer";
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import {withRouter} from "react-router-dom";
@withRouter
class Header extends React.Component {
    constructor() {
        super();
        this.state={
            isShow:false
        }
    }
    render() {
      
        return (
            <Headers>
                <div className="header_left">
                    <div className="showSideBar">
                        <span className="iconfont iconheader" onClick={this.handleToggle.bind(this)}>&#xe625;</span>
                    </div>

                    <a href="#" onClick={this.handleClick.bind(this)}>
                        <img src="http://localhost:3000/img/1.jpg" />
                    </a>
                </div>
                <NavLink to="/sousuo" className="header_sou">
                    <span className="iconfont iconsou">&#xe718;</span>
                </NavLink>
            </Headers>
        )
    }
    handleClick(){
        this.props.history.goBack()
    }
    handleToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
        observer.$emit("handleSend",!this.state.isShow)
    }
    
}
export default Header