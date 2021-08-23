/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
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

const contents = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
    {
        tab: "Section 3",
        content: "I'm the content of the Section 3",
    },
];

export default () => {
    const useTab = (initialTab, allTabs) => {
        const [currentIndex, setCurrentIndex] = useState(initialTab);

        if (!allTabs || !Array.isArray(allTabs)) return;

        return {
            currentItem: allTabs[currentIndex],
            changeItem: setCurrentIndex,
        };
    };

    const { currentItem, changeItem } = useTab(0, contents);

    return (
        <Page title="useTabs">
            <TabBtnBox>
                {contents &&
                    contents.map((content, idx) => (
                        <TabBtn key={idx} onClick={() => changeItem(idx)}>
                            {content.tab}
                        </TabBtn>
                    ))}
            </TabBtnBox>
            <p>{currentItem.content}</p>
        </Page>
    );
};
