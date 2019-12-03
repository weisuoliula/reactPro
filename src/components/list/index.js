import React from 'react';
import { Lists } from './styled';
import Index from '../listlast/index';
import { HashRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import Meishi from 'pages/meishi';
import Pianyi from 'pages/pianyi';
import Retan from 'pages/retan';
import Remen from 'pages/remen';
import Gengxin from 'pages/gengxin';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToprops, mapDispatchToProps } from './mapStore'
@connect(mapStateToprops, mapDispatchToProps)


class List extends React.Component {
    constructor() {
        super()

    }
    componentDidMount() {
        this.props.handleAsyncbannehuodong()
        this.props.handleAsyncbanneqiuda()
    }

    render() {
        let { hd_new_list, qd_list } = this.props
        const tabs = [
            { title: <Badge >最近更新</Badge> },
            { title: <Badge >热门</Badge> },

        ];

        return (
            <Lists>
                {/* 帖子 */}

                <div className="list_one">
                    <HashRouter>
                        <div className="title">
                            <NavLink to="/movie/meishi">美食新帖
                                <span className="line"></span>
                            </NavLink>
                            <NavLink to="/movie/retan">论坛热帖
                            <span className="line"></span>
                            </NavLink>
                            <NavLink to="/movie/pianyi">抢便宜
                            <span className="line"></span>
                            </NavLink>
                        </div>
                        <Route path="/movie" render={() => {
                            return (
                                <Switch>
                                    <Redirect from="/movie" to="/movie/meishi" exact />
                                    <Route path="/movie/meishi" component={Meishi} />
                                    <Route path="/movie/retan" component={Retan} />
                                    <Route path="/movie/pianyi" component={Pianyi} />
                                </Switch>
                            )
                        }}></Route>
                    </HashRouter>
                    <a href="#">更多 ></a>
                </div>
                <div className="column-banner">
                    <img src="http://localhost:3000/img/home-banner_activity.2bf78.jpg" />
                </div>
                {/* 活动 */}
                <div className="list_two">
                    {
                        hd_new_list.map((item, index) => (
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
                    <a href="#">更多 ></a>
                </div>
                <div className="column-banner">
                    <img src="http://localhost:3000/img/home-banner_rest.30bcb.jpg" />
                </div>
                {/* 餐厅 */}
                <div className="list_three">
                    <Tabs tabs={tabs} 
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', flexDirection: "column" }}>
                            <Gengxin />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', flexDirection: "column" }}>
                            <Remen />
                        </div>
                    </Tabs>
                    <WhiteSpace />

                    <a href="#">更多 ></a>
                </div>
                <div className="column-banner">
                    <img src="http://localhost:3000/img/home-banner_diary.26815.jpg" />
                </div>
                {/* 日记 */}
                <div className="list_fore">
                    <p>
                        <span>旅行日记</span>
                        <a href="#">更多 ></a>
                    </p>
                    <Index />
                </div>
                {/* 求答 */}
                <div className="list_five">
                    <p>
                        <span>求答</span>
                        <a href="#">更多 ></a>
                    </p>
                    <ul >
                        {
                            qd_list.map((item, index) => (
                                <li key={index}>
                                    <i className="type_title">{item.type_title}</i>
                                    <a href="#" >{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* 官方结尾 */}
                <div className="list_six">
                    <div className="list_footer">
                        <p>
                            <img src="http://localhost:3000/img/wexin-code.e0d51.png" />
                            <span>官方微信号：呀觅旅行</span>
                        </p>
                        <p>
                            <span>关于我们</span>
                            <span>用户协议</span>
                            <span>融资相关</span>
                            <span>联系我们</span>
                        </p>
                    </div>
                    <div className="list_footer_two">
                        <span>呀觅旅行网 吃货看世界</span>
                        <span>沪 ICP 备 17014293 号</span>
                    </div>
                </div>
            </Lists>
        )
    }
}
export default List