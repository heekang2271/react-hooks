/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const TabBtnBox = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const TabBtn = styled.button`
    font-size: 16px;

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;

    margin-bottom: 20px;
`;

export default () => {
    const usePreventLeave = () => {
        const listener = (event) => {
            event.preventDefault();
            event.returnValue = "";
        };

        const enablePrevent = () =>
            window.addEventListener("beforeunload", listener);
        const disablePrevent = () =>
            window.removeEventListener("beforeunload", listener);

        return {
            enablePrevent,
            disablePrevent,
        };
    };

    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <Page title="usePreventLeave">
            <Title>Press button and exit window</Title>
            <TabBtnBox>
                <TabBtn onClick={enablePrevent}>Protect</TabBtn>
                <TabBtn onClick={disablePrevent}>Unprotect</TabBtn>
            </TabBtnBox>
        </Page>
    );
};
