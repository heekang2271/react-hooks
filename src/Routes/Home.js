/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
import Page from "../Components/Page";
import styled from "styled-components";

const Navigation = styled.ul`
    font-size: 17px;

    & > li:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export default () => (
    <Page title="Navigation">
        <Navigation>
            <li>
                <Link to="/useInput">- UseInput</Link>
            </li>
            <li>
                <Link to="/useTabs">- UseTabs</Link>
            </li>
        </Navigation>
    </Page>
);
