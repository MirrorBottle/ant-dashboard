import React from 'react'
import {AdminHeaderPropsType} from "../../Models"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"
import {
    PageHeader
} from 'antd';
export default function AdminHeader(props: AdminHeaderPropsType) {
    return (
        <PageHeader
            backIcon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="site-layout-background"
            onBack={props.toggleCollapsed}
            title={props.currentRouteText}
        />
    )
}
