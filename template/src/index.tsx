import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/index.scss"

import AdminLayout from "./Layouts/Admin";
import AuthLayout from "./Layouts/Auth";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

