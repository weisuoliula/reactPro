import {
    Movie,
    Sousuo,
} from 'pages'
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
    }
]

export const RouteConfig = HeaderRoute.concat(SousuoRoute)

// export const TabBarRoute = [
    
// ];

// export const NoTabBarRoute = [
   
// ];

// export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)