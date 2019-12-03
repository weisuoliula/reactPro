import React from 'react';
import {Sliders} from './styled'
import observer from "../../observer";
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
class Slider extends React.Component{
    constructor(){
        super()
        this.state={
            isShow:""
            
        }
        observer.$on("handleSend",(params)=>{
            this.setState({
                isShow:params
            })
        })
    }
    render(){
        let {isShow} = this.state
        return(
               <Sliders style={{display:isShow==true?"block":"none"}} >
                   <ul>
                 
                   <NavLink to="/login">登陆</NavLink>
                   <NavLink to="/register">注册</NavLink>
                   <a>呀觅社区</a>
                   <a>目的地导览</a>
                   <a>餐厅/菜单</a>
                   <a>全球美食</a>
                   <a>活动/攻略</a>
                   <a>路线参考</a>
                   <a>呀觅优品-旅行神器</a>
                   <a>美食团购</a>
                   <a>玩乐/票券</a>
                   <a>接送机/用车</a>
                   </ul>
               </Sliders>
        )
    
    }
      
}

export default Slider