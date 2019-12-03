import {
    Login,
    Register,
    Indexshop,
    Detail
} from "pages"
/* export const TabBarRoute = [

];

export const NoTabBarRoute = [
   
]; */
export const Route=[
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
export const RouteConfig = Route