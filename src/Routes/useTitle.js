/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

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
    }, 3000);

    return (
        <Page title="useTitle">
            <Title>↑ Look at the title of the website!!</Title>
        </Page>
    );
};
