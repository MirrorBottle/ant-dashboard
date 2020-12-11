/*
    Routes belongs in this file. use 'isSidemenu' if you want the route to show in sidebar.
    Use @ant-design/icons for the icon in sidebar.
    You can change the code in Sidebar.tsx
*/


import {
    AppstoreOutlined,
    SlidersOutlined,
    MinusOutlined,
    TableOutlined,
    FileOutlined,
    BlockOutlined,
    GithubOutlined,
} from "@ant-design/icons"
// type for route
import {RouteType} from "./Models"
// About
import About from "./Views/About";
// Dashboard
import Dashboard from "./Views/Dashboard";
// CRUD
import Users from "./Views/Users/Users";
// Pages
import BlankPage from "./Views/Pages/BlankPage";
import Page404 from "./Views/Pages/Page404";
import Page403 from "./Views/Pages/Page403";
import Page500 from "./Views/Pages/Page500";
import Login from "./Views/Pages/Login"
// Utilities
import Alert from "./Views/Utilities/Alert";
// Table
import Table from "./Views/Table/Table";
const Routes: RouteType[] = [
    // Default 404 Not Found Page
    
    {
        path: "/error/404",
        name: "Dashboard",
        icon: AppstoreOutlined,
        component: Page404,
        layout: "/admin",
        isSidemenu: false,
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: AppstoreOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/utilities",
        name: "Utilities",
        icon: SlidersOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
        subMenu: [
            {
                path: "/utlities/alert",
                name: "Alert",
                icon: MinusOutlined,
                component: Alert,
                layout: "/admin",
                isSidemenu: true,
            }
        ]
    },
    {
        path: "/table",
        name: "Table",
        icon: TableOutlined,
        component: Table,
        layout: "/admin",
        isSidemenu: true,

    },
    {
        path: "/pages",
        name: "Pages",
        icon: FileOutlined,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
        subMenu: [
            {
                path: "/pages/blank",
                name: "Blank Page",
                icon: MinusOutlined,
                component: BlankPage,
                layout: "/admin",
                isSidemenu: true,
            },
            {
                path: "/login",
                name: "Login",
                icon: MinusOutlined,
                component: Login,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                path: "/register",
                name: "Register",
                icon: MinusOutlined,
                component: BlankPage,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                path: "/pages/404",
                name: "404",
                icon: MinusOutlined,
                component: Page404,
                layout: "/admin",
                isSidemenu: true,
            },
            {
                path: "/pages/500",
                name: "500",
                icon: MinusOutlined,
                component: Page500,
                layout: "/admin",
                isSidemenu: true,
            },
            {
                path: "/pages/403",
                name: "403",
                icon: MinusOutlined,
                component: Page403,
                layout: "/admin",
                isSidemenu: true,
            }
        ]
    },
    {
        path: "/crud",
        name: "CRUD",
        icon: BlockOutlined,
        component: Users,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/about",
        name: "About",
        icon: GithubOutlined,
        component: About,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/login",
        name: "Login",
        icon: MinusOutlined,
        component: Login,
        layout: "/auth",
        isSidemenu: false,
    },
]

export default Routes;