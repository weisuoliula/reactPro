import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Shop_data } from './style'
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class ShopData extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        //console.log(this.props.history)
        let { goodList } = this.props;
        
        //console.log(p)
        return (
            <Fragment>
                <Shop_data>
                    {
                        goodList.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="l" onClick={this.handleTodetail.bind(this,item)}>
                                    <img src={item.picture} alt="" />
                                    <div className="l_bottom">
                                        <p>{item.title}</p>
                                        <p>
                                            <span>{item.price_2}<i>金币</i></span>
                                            <span>+</span>
                                            <span>￥{item.price_1}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>))
                    }
                        <div className="load" ref="load" onClick={this.props.handleload.bind(this)}>点击加载更多</div>
                </Shop_data>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.handleAsyncgood()
    }
    handleTodetail(item){
        this.props.history.push("/detail/"+item.id)
    }
}

export default ShopData