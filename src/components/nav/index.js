import React, { Fragment } from 'react';
import { Navs } from './styled';
import { Carousel, WingBlank } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ['https://pic.tripyum.com/2019-11-08_5dc4fd9bb95e5.jpg', 'https://pic.tripyum.com/2019-11-22_5dd77eafd9beb.jpg', 'https://pic.tripyum.com/2019-11-15_5dce38c17f50c.jpg', 'https://pic.tripyum.com/2019-11-01_5dbbb6641f03e.jpg', 'https://pic.tripyum.com/2019-01-25_5c4abeabc7a85.jpg'],
            imgHeight: 176,
        }
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://pic.tripyum.com/2019-11-08_5dc4fd9bb95e5.jpg', 'https://pic.tripyum.com/2019-11-22_5dd77eafd9beb.jpg', 'https://pic.tripyum.com/2019-11-15_5dce38c17f50c.jpg', 'https://pic.tripyum.com/2019-11-01_5dbbb6641f03e.jpg', 'https://pic.tripyum.com/2019-01-25_5c4abeabc7a85.jpg'],
            });
        }, 100);
    }
    render() {
        return (
            <Fragment>
                <WingBlank style={{margin:"0",touchAction:'none'}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${val}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Navs>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe6e6;</span>
                            <i>目的地</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon icon-nav-restaurant">&#xe8d5;</span>
                            <i>餐厅</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe65b;</span>
                            <i>美食</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe611;</span>
                            <i>活动</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe614;</span>
                            <i>路线</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe647;</span>
                            <i>服务</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe66b;</span>
                            <i>玩乐</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe64a;</span>
                            <i>小铺</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon icon-nav-restaurant">&#xe6b0;</span>
                            <i>社区</i>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink to="/shop">
                            <span className="iconfont icon-nav-destination">&#xe6d9;</span>
                            <i>日记</i>
                        </NavLink>
                    </div>
                </Navs>
            </Fragment>
        )
    }
}
export default Nav