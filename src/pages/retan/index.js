import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)
class Retan extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        this.props.handleAsyncbannertwo()
    }
    render() {
        let { hot_note_list } = this.props
        console.log(this.props)
        return (
            <Fragment>
                 {
                    hot_note_list.map((item, index) => (
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

export default Retan