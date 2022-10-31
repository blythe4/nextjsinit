import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ILayoutProps = {
    children: ReactNode;
};

const LayoutProvider = ({ children }: ILayoutProps) => {
    return (
        <LayoutProviderStyled>
            <Contents>{children}</Contents>
        </LayoutProviderStyled>
    );
};

export default LayoutProvider;

const LayoutProviderStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    flex: 1;
    width: 100%;
    min-height: 100vh;
    @supports (-webkit-touch-callout: none) {
        min-height: -webkit-fill-available;
    }
`;
const Contents = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`;
