/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import Page from "../Components/Page";

const Input = styled.input`
    border: 1px solid #c0c0c0;
    padding: 5px 8px;
    font-size: 16px;
    width: 400px;
    outline: none;
`;

export default () => {
    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);

        const onChange = (event) => {
            const {
                target: { value },
            } = event;

            let willUpdate = true;
            if (typeof validator === "function") {
                willUpdate = validator(value);
            }

            if (willUpdate) {
                setValue(value);
            }
        };

        return {
            value,
            onChange,
        };
    };

    const maxLen = (value) => value.length < 10;
    const { value, onChange } = useInput("Mr. ", maxLen);

    return (
        <Page title="UseInput">
            <Input placeholder="name" value={value} onChange={onChange} />
        </Page>
    );
};
