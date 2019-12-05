import React from 'react';
import { SousuoHeader } from './styled';
import { SearchBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToprops, mapDispatchToProps)

class Sousuo extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            Arr:[],
            
        }
      
    }
    onChange = (value) => {
        this.setState({ 
            value,
        });
        this.props.handleonChange(value)
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleGoback(){
        this.props.history.goBack()
    } 
    handleonClear(){
        this.state.Arr.push(this.state.value)
        // localStorage.setItem("arr",this.state.Arr)
    }
    handleClick(Arr){
        console.log("11")
        var a=[]
        
        this.setState({
            Arr:a
        })
    }
    render() {
        let {data} = this.props
        let {Arr}=this.state
        
        return (
            <SousuoHeader>
                <SearchBar
                    style={{position:"relative",zIndex:"1",opacity:"",background:"#96b921"}}
                    // value={this.state.value}
                    placeholder="输入内容"
                    onClear={this.handleonClear.bind(this) }
                    onCancel={this.handleGoback.bind(this)}
                    showCancelButton
                    onChange={this.onChange}
                />
                <div className="xuanran" >
                {   
                    data?data.map((item,index)=>(
                        <div key={index}> 
                        <li >
                            <span>【{item.class}】</span>
                            <p>{item.title_1}</p>
                        </li>
                        <li>{item.title_2}</li>
                        <li>{item.write_time}</li>
                        </div>
                        )):""
                }
                  </div>
                  <div className="history" style={{display:this.state.value?"none":"block"}}>
                      <p>搜索历史</p><span onClick={this.handleClick.bind(this,Arr)}
                      style={{position:"relative",margin:"0.1rem"}} className="iconfont iconshanchu">
                        
                      </span>
                         {
                             Arr.map((item,index)=>(
                             <p key={index}>
                                 {item}
                             </p>
                         ))
                         }
                  </div>
            </SousuoHeader>
        )
    }
}
export default Sousuo