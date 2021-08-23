/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
    text-underline-position: under;
`;

export default () => {
    const useClick = (onClick) => {
        const element = useRef();

        useEffect(() => {
            if (element.current) {
                element.current.addEventListener("click", onClick);
            }

            return () => {
                if (element.current) {
                    element.current.removeEventListener("click", onClick);
                }
            };
        }, []);

        return element;
    };

    const viewConsole = () => console.log("click!!");
    const title = useClick(viewConsole);
    return (
        <Page title="">
            <Title ref={title}>Click me and view console</Title>
        </Page>
    );
};
