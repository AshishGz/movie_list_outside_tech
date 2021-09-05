import { ComponentType, FC } from "react";
export interface RouteItem {
    key: String
    title: String
    path:String
    component?: FC<{}>

}
