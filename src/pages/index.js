import Loadable from "react-loadable";
import Loading from "common/loading"

/**
 * 首页
 */
export const Movie = Loadable({
    loader:_=>import("./movie"),
    loading:Loading
})
/**
 * 搜索
 */
export const Sousuo = Loadable({
    loader:_=>import("./sousuo"),
    loading:Loading
})
/**
 * 美食
 */
export const Meishi = Loadable({
    loader:_=>import("./meishi"),
    loading:Loading
})
/**
 * 便宜
 */
export const Pianyi = Loadable({
    loader:_=>import("./pianyi"),
    loading:Loading
})
/**
 * 热谈
 */
export const Retan = Loadable({
    loader:_=>import("./retan"),
    loading:Loading
})











// export const Home = Loadable({
//     loader:_=>import("./home"),
//     loading:Loading
// })


// export const Find = Loadable({
//     loader:_=>import("./find"),
//     loading:Loading
// })



// export const Order = Loadable({
//     loader:_=>import("./order"),
//     loading:Loading
// })



// export const Mine = Loadable({
//     loader:_=>import("./mine"),
//     loading:Loading
// })



// export const Login = Loadable({
//     loader:_=>import("./login"),
//     loading:Loading
// })