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
                <Link to="/useInput">- useInput</Link>
            </li>
            <li>
                <Link to="/useTabs">- useTabs</Link>
            </li>
            <li>
                <Link to="/useTitle">- useTitle</Link>
            </li>
            <li>
                <Link to="/useClick">- useClick</Link>
            </li>
            <li>
                <Link to="/useConfirm">- useConfirm</Link>
            </li>
            <li>
                <Link to="/usePreventLeave">- usePreventLeave</Link>
            </li>
        </Navigation>
    </Page>
);
