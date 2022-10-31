import styled, { createGlobalStyle } from 'styled-components';

export const AntdCustomStyled = createGlobalStyle`
  .ant-tooltip {
    display: none;
  }
`;

export const BigCalendarStyled = createGlobalStyle`
 .rbc-overlay {
   display: none;
 }
`;

export const AuthButtonStyled = styled.button`
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #ddd;
    background-color: #fff;
`;

export const AuthAStyled = styled.a`
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #ddd;
    background-color: #fff;
`;
