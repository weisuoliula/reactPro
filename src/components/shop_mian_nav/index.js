import React, { Fragment, Component } from "react";
import { Tabs, Badge } from 'antd-mobile';
import { Nav_box } from "./style"
import ShopData from "../shop_main_data"
import ShopData_tour from "../shop_main_data_tour"

class ShopMain_nav extends Component {
    constructor() {
        super()
        this.state = {
            tabs: [
                { title: <Badge >旅行神器</Badge> },
                { title: <Badge>旅行书</Badge> },
                { title: <Badge >金币直兑</Badge> },
            ],
        }
    }
    render() {
        let { tabs } = this.state
        return (
            <Fragment>
                <Nav_box >
                    <div>
                        <Tabs tabs={tabs}
                            initialPage={0}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                            
                        >

                            <div style={{  alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <ShopData />
                            </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <ShopData_tour/>
                            </div>
                        <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                           金币直兑
                            </div>
                        </Tabs>
                    </div>

                </Nav_box>
            </Fragment>
        )
    }
}

export default ShopMain_nav;