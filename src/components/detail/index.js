import React, { Fragment, Component } from 'react'
import { Detail_main } from "./style"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class DetaiCon extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        let { detailList } = this.props;
        //console.log(detailList)
       // console.log(detailList)
        return (
            <Fragment>
                {
                    detailList?
                        <Detail_main>
                            <div key="index">
                                <img src={detailList.picture} alt="" />
                                <div className="desc">
                                    <p> {detailList.title_1} </p>
                                    <div>
                                        <p>
                                            <span>{detailList.price_2}金币</span>
                                            <span>+</span>
                                            <span>￥ {detailList.price_1} </span>
                                        </p>
                                        <i className="iconfont iconfenxiang-1"></i>
                                    </div>
                                </div>
                                <div className="size">
                                    <p>规格数量选择</p>
                                    <i className="iconfont iconiconfonti"></i>
                                </div>
                            </div>
                        </Detail_main>
                        : ""
                }


            </Fragment>
        )
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        //console.log(id)
        this.props.handleDetail(id);
    }
}

export default DetaiCon
