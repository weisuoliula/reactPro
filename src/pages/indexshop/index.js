import React,{Fragment,Component} from "react"
// import './index.css'
import {Shop_header} from "./style"
import ShopMain from "../../components/shop_main"
class Shop extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <Fragment>
                <Shop_header/>
                <ShopMain/>
            </Fragment>
        )
    }
}
export default Shop;