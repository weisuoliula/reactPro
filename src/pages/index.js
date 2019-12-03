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



export const Indexshop = Loadable({
    loader:_=>import("./indexshop"),
    loading:Loading
})



export const Detail = Loadable({
    loader:_=>import("./detail"),
    loading:Loading
})



/* export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
}) */