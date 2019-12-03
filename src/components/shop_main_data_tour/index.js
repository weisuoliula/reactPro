import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Shop_data } from './style'
@connect(mapStateToProps, mapDispatchToProps)
class ShopData_tour extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        let { tour_goodList } = this.props;
        //console.log(tour_goodList)
        //console.log(p)
        return (
            <Fragment>
                <Shop_data>
                    { 
                        tour_goodList.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="l">
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
        this.props.handleAsyncgood_tours()
    }
}

export default ShopData_tour