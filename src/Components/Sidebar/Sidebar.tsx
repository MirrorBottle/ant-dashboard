import React from 'react'
import {SidebarPropsType} from "../../Models"
import {
    Layout,
    Image,
    Menu,
} from "antd"
import {Link} from "react-router-dom";

import Logo from "../../assets/antd.png"; 
const {Sider} = Layout;
const { SubMenu } = Menu;


export default function Sidebar(props: SidebarPropsType) {
    const createLinks = () => {
        return props.routes.map((prop, key) => {
            if (prop.subMenu) {
                return (
                    <SubMenu key={key} icon={<prop.icon/>} title={prop.name}>
                        {prop.subMenu.map((route, routeKey) => (
                            <Menu.Item key={`${key}${routeKey}`} icon={<route.icon />}>
                                <Link to={route.layout + route.path}>
                                    {route.name}
                                </Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                )
            } 
            if (prop.isSidemenu) {
                return (
                    <Menu.Item key={key} icon={<prop.icon />}>
                        <Link to={prop.layout + prop.path}>
                            {prop.name}
                        </Link>
                    </Menu.Item>
                )
            }
            return null;
        });
    }
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
            breakpoint="sm"
            collapsedWidth="0"
            collapsible
            collapsed={props.collapsed}
            trigger={null}
            theme="light"
        >
            <Image
                className={props.collapsed ? "ml2 my2" : "ml3 pl2 my2"}
                width={props.collapsed ? 50 : 100}
                src={Logo}
            />
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
            >
                {createLinks()}
            </Menu>
        </Sider>
    )
}
