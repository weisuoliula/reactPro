import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)
class Pianyi extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        this.props.handleAsyncbannerthree()
    }
    render() {
        let { qpy_list } = this.props
        return (
            <Fragment>
                {
                    qpy_list.map((item, index) => (
                        <div className="titleChildren" key={index}>
                            <li>
                                <a href="#">
                                    <div className="titleChildrenLeft">
                                        <img src={item.picture} />
                                    </div>
                                    <div className="titleChildrenRight">
                                        <p>{item.title}</p>
                                        <p>
                                            <span>{item.title_2}</span>
                                            <span>
                                                <i className="iconfont">&#xe616;</i>
                                                {item.hot}
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

export default Pianyi