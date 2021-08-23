/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
    position: fixed;
    height: 60px;
    width: 100%;
    box-shadow: 0 0 10px -7px #000;
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 23px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
`;

export default () => (
    <Header>
        <div className="inner">
            <Logo>
                <Link to="/">React Hooks</Link>
            </Logo>
        </div>
    </Header>
);
