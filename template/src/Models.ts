/*
    You can create type or interface for your component inside this file
*/

export interface RouteType {
    path: string;
    name: string;
    icon: string | any;
    component: any;
    layout: string;
    subMenu?: RouteType[];
    isSidemenu: boolean;
};

// Sidebar Props
export interface SidebarPropsType {
    collapsed: boolean;
    routes: RouteType[];
}
// Admin Header Props
export interface AdminHeaderPropsType extends SidebarPropsType {
    toggleCollapsed: () => void;
    currentRouteText: string;
}