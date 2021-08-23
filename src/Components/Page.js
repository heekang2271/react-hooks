/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    & > .inner {
        padding-top: 120px;
    }
`;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
`;

const Content = styled.div`
    padding: 40px 0;
`;

export default ({ title, children }) => (
    <Container>
        <div className="inner">
            <Title>{title}</Title>
            <Content>{children}</Content>
        </div>
    </Container>
);
