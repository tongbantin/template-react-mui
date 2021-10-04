import React,{usesEffect}  from 'react'
import { Portal } from "./../module/portal";
import {RouteLayout,RouteLayout2} from "./../template/RouteLayout";
import * as api from "./../module/portal/api";
import { MergeArrayByKey } from "./../utils/common-function";
const route = [
    {
        path:'/'
        ,component :Portal 
    },
    {
        path:'/a'
        ,component :Portal 
    },
]
export const route2 = [

]


export const ProtectedRoutes = () => {
    //if(!CheckToken()){
//        history.replace('/Login')
//            let urlSaml = `${API_URL.Authen}/auth/Login?returnUrl=/`;
//            window.location.replace(urlSaml);
    //    return null;
    //}
    return (
        <>
            {route.map((el,idx)=>(
                    <RouteLayout key ={idx} exact path={el.path} component={el.component} />
            ))
            }
            {route2?.map((el,idx)=>(
                
                    <RouteLayout2 key={idx} exact path={el.path} component={el.component} ScreenName={el.ScreenName} helper={el.HELPER_NAME}/>
            ))
            }
        </>
    )
}
ProtectedRoutes.route = Object.values(route.concat(route2).map((el)=>el.path))
