/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";

import home from "../Routes/home";
import useInput from "../Routes/useInput";
import useTabs from "../Routes/useTabs";
import useTitle from "../Routes/useTitle";

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={home} />
            <Route path="/useInput" exact component={useInput} />
            <Route path="/useTabs" exact component={useTabs} />
            <Route path="/useTitle" exact component={useTitle} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
