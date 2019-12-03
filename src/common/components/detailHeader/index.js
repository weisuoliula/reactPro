import React, { Component,Fragment } from 'react'
import {Detail_head} from "./style"
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
                <header>呀觅小铺</header>
                </Detail_head>
            </Fragment>
        )
    }
}

export default DetailHeader