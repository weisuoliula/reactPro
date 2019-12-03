import React from 'react'
import { Steptiao } from "./styled"
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)

class Index extends React.Component {
    constructor() {
        super()
        this.state = {

        }

    }
    componentDidMount() {
        this.props.handleAsyncbannerlvyou()
    }
    render() {
        let { lxrj_list } = this.props
        const Step = Steps.Step;
        const customIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
                <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
                    <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
                    <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
                </g>
            </svg>
        )
        
        return (
            <Steptiao>
                <WingBlank size="lg">
                    <WhiteSpace />
                    <Steps current={5}>
                        <Step title="04周三2018.07" icon={customIcon()} />
                        <Step title="26周二2018.06" icon={customIcon()} />
                        <Step title="18周一2018.05" status="error" icon={customIcon()} />
                        <Step title="11周二2018.04" icon={customIcon()} />
                        <Step title="20周二2018.03" icon={customIcon()} />
                    </Steps>
                </WingBlank>
                {/* 旅游 */}
                <div className="Steptiao_right">
                    {
                        lxrj_list.map((item, index) => (
                         
                            <a href="#" key={index}>
                                <span>
                                    <p>{item.title}</p>
                                     <p>{item.h_i} {item.city_name}/{item.nation_name}</p>
                                </span>
                                <span>
                                    <img src={"https://wap.tripyum.com/"+item.picture}/>
                                </span>
                            </a>
                       
                        ))
                    }
                 
                 </div>
            </Steptiao>
        )
    }
}

export default Index