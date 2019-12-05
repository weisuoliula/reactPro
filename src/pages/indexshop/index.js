import React,{Fragment,Component} from "react"
// import './index.css'
import {Shop_header} from "./style"
import ShopMain from "../../components/shop_main"
import Header from "../../common/header"
class Shop extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <Fragment>
                <Header/>
                <ShopMain/>
            </Fragment>
        )
    }
}
export default Shop;