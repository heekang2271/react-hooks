/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event;

        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        if (typeof onBefore !== "function") return;

        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

export default () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);

    return <Page title="useBeforeLeave"></Page>;
};
