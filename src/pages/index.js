import Loadable from "react-loadable";
import Loading from "common/loading"


export const Register = Loadable({
    loader:_=>import("./register"),
    loading:Loading
})


export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})

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



export const Indexshop = Loadable({
    loader:_=>import("./indexshop"),
    loading:Loading
})



export const Detail = Loadable({
    loader:_=>import("./detail"),
    loading:Loading
})



