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
            value: '',
        }

    }
    onChange = (value) => {
        this.setState({ value });
        this.props.handleonChange(value)
    };
    clear = () => {
        this.setState({ value: '' });
    };
  
    render() {
        let {data} = this.props
        return (
            <SousuoHeader>
                <SearchBar
                    style={{position:"relative",zIndex:"1",opacity:"",background:"#96b921"}}
                    value={this.state.value}
                    placeholder="输入内容"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                />
                <div className="xuanran" >
                {
                    data?data.map((item,index)=>(
                        <div key={index}> 
                        <li >
                            <span>【{item.class}】</span>
                            <p>{item.title_1}</p>
                        </li>
                        <li>{item.title_2}</li>
                        <li>{item.write_time}</li>
                        </div>
                        )):""
                }
                  </div>
                  <div className="history">
                      <p>搜索历史</p>
                  </div>
            </SousuoHeader>
        )
    }
}
export default Sousuo