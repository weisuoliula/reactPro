import {
    Login,
    Register,
    Indexshop,
    Detail,
    Movie,
    Sousuo,
} from "pages"

/**
 * 带头部的路由
 */
export const HeaderRoute=[
    {
        path:"/movie",
        component:Movie,
        meta:{
           
        },
        icon:"",
        text:"首页",
    }
];
/**
 * 带搜索的路由
 */
export const SousuoRoute=[
    {
        path:"/sousuo",
        component:Sousuo,
        meta:{
            flag:false,
        },
        icon:"",
        text:"搜索"
    },
    {
        path:"/shop",
        component:Indexshop,
        meta:{
            /* flag:true */
        }
    },
    {
        path:"/login",
        component:Login,
        meta:{
            /* flag:true */
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            /* flag:true */
        }
    },
    {
        path:"/detail/:id",
        component:Detail,
        meta:{
            /* flag:true */
        }
    }
]





/* export const RouteConfig = TabBarRoute.concat(NoTabBarRoute) */
export const RouteConfig = HeaderRoute.concat(SousuoRoute)





