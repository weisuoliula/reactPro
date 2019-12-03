import React from 'react';
import { SousuoHeader } from './styled';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)
class Sousuo extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '美食',
        }

    }
   componentDidMount(){
       console.log(this.state.value)
    this.props.handleonChange(this.state.value)
   }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
  
    render() {
        return (
            <SousuoHeader>
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                />
            </SousuoHeader>
        )
    }
}
export default Sousuo