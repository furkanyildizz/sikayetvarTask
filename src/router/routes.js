import { lazy } from "react"


const routes=[
    {
        path:"/post/:id",
        component:lazy(()=>import('../pages/PostDetail'))
    },
    {
        path:"/profile/:id",
        component:lazy(()=>import('../pages/ProfileDetail'))
    },
    {
        path:"/",
        component:lazy(()=>import('../pages/Home'))
    },
]

export {routes}