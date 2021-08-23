/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Page from "../Components/Page";

export default () => {
    const useTitle = (initialTitle) => {
        const [title, setTitle] = useState(initialTitle);

        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = title;
        };

        useEffect(updateTitle, [title]);

        return setTitle;
    };

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => {
        titleUpdater("React Hooks");
    }, 2000);

    return <Page title="useTitle"></Page>;
};
