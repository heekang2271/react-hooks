/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../Routes/Home";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
