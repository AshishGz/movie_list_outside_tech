import {RouteItem} from "../interfaces/routeItems";
import HomePage from "../pages/home";
import MovieDetails from "../pages/movieDetail";

export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        path: "/",
        component: HomePage,
    }, {
        key: "router-detail",
        title: "Detail Page",
        path: "/movie",
        component: MovieDetails,
    },
]
