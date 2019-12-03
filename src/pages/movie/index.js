import React, { Fragment } from 'react';
import Header from '../../common/header';
import Main from '../../components/main'
class Movie extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main/>
            </Fragment>
        )
    }
}
export default Movie