import {
    LOGIN_ROUTE, MAIN_ROUTE, DAY_ROUTE
} from "./utils/consts";
import Main from "./page/Main";
import Day from "./page/Day";
import Auth from "./page/Auth";

export const authRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: DAY_ROUTE  + '/:id',
        Component: Day
    }
]
export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: DAY_ROUTE + '/:id',
        Component: Day
    }
]