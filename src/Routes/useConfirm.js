/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const Btn = styled.button`
    font-size: 16px;

    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export default () => {
    const useConfirm = (message, callback) => {
        if (typeof callback !== "function") return;

        const confirmAction = () => {
            if (window.confirm(message)) {
                callback();
            }
        };

        return confirmAction;
    };

    const deleteWorld = () => alert("Deleting");
    const confirmDelete = useConfirm("Are you sure", deleteWorld);

    return (
        <Page title="useConfirm">
            <Btn onClick={confirmDelete}>Delete the world</Btn>
        </Page>
    );
};
