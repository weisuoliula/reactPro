import React, { Component,Fragment } from 'react'
import {Detail_head} from "./style"
import {withRouter} from "react-router-dom";
@withRouter
class DetailHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
               <Detail_head>
                <header onClick={this.handleback.bind(this)}>呀觅小铺</header>
                </Detail_head>
            </Fragment>
        )
    }
    handleback(){
        this.props.history.push("/movie")
    }
}

export default DetailHeader