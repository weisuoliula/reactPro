import React, { Fragment, Component } from "react";
// import "./index.css"
import { Shop_main } from "./style"
import ShopMain_nav from "../shop_mian_nav"
// import ShopData from "../shop_main_data"
class ShopMain extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <Shop_main>
                    <div className="mainbox">
                        <div>
                            <div className="banner">
                                <img src="http://localhost:3000/img/shop_banner.jpg" alt="" />
                            </div>
                        </div>

                        <ShopMain_nav />
                        {/* <ShopData /> */}
                    </div>
                </Shop_main>


            </Fragment>
        )
    }
}
export default ShopMain;