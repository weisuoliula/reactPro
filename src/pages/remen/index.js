import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)
class Remen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        this.props.handleAsyncbannerremen()
    }
    render() {
        let { ct_hot_list } = this.props
        return (
            <Fragment>
              {
                    ct_hot_list.map((item, index) => (
                        <div className="titleChildren" key={index}>
                            <li>
                                <a href="#">
                                    <div className="titleChildrenLeft">
                                        <img src={item.picture} />
                                    </div>
                                    <div className="titleChildrenRight" style={{paddingLeft:"0.2rem"}}>
                                        <p>{item.title}</p>
                                        <p>
                                            <span>{item.title_2}</span>
                                            <span>
                                                <i className="iconfont">&#xe616;</i>
                                                {item.city_title}
                                        </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </div>
                    ))
                }
            </Fragment>
        )
    }
}

export default Remen