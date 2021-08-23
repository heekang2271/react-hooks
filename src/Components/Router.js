/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";

import Home from "../Routes/Home";
import UseInput from "../Routes/UseInput";
import UseTabs from "../Routes/UseTabs";

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/useInput" exact component={UseInput} />
            <Route path="/useTabs" exact component={UseTabs} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
