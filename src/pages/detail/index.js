import React, { Fragment,Component } from 'react'
import DetaiCon from "../../components/detail/"
import DetailHeader from "../../common/components/detailHeader"
class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <DetailHeader/>
                <DetaiCon/>
            </Fragment>
        )
    }
}

export default Detail