/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";

import home from "../Routes/home";
import useInput from "../Routes/useInput";
import useTabs from "../Routes/useTabs";
import useTitle from "../Routes/useTitle";
import useClick from "../Routes/useClick";
import useConfirm from "../Routes/useConfirm";
import usePreventLeave from "../Routes/usePreventLeave";
import useBeforeLeave from "../Routes/useBeforeLeave";

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={home} />
            <Route path="/useInput" exact component={useInput} />
            <Route path="/useTabs" exact component={useTabs} />
            <Route path="/useTitle" exact component={useTitle} />
            <Route path="/useClick" exact component={useClick} />
            <Route path="/useConfirm" exact component={useConfirm} />
            <Route path="/usePreventLeave" exact component={usePreventLeave} />
            <Route path="/useBeforeLeave" exact component={useBeforeLeave} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
