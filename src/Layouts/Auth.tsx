import React, { Component } from 'react'
import {
    Layout
} from 'antd';
import { Route, Switch, RouteComponentProps, Redirect } from "react-router-dom";
import Routes from "../Routes";
import AdminHeader from "../Components/Header/AdminHeader"
import AdminFooter from "../Components/Footer/AdminFooter"
import Sidebar from "../Components/Sidebar/Sidebar"
import { RouteType } from '../Models';
const { Content } = Layout;

export default class AuthLayout extends Component<RouteComponentProps> {
    getRoutes = (layoutRoutes: RouteType[]): null | any => {
        return layoutRoutes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={() => <prop.component/>}
                        key={key}
                    />
                );
            }
            return null;
        });
    };
    render() {
        return (
            <Layout id="auth-layout">
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Switch>{this.getRoutes(Routes)}</Switch>
                </Content>
            </Layout>
        )
    }
}
