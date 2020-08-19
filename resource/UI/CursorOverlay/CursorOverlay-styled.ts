import styled from "styled-components";

export const CursorOverlayContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
    pointer-events: none;
`;

export const CursorOverlayIndicator = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    width: 48px;
    height: 48px;
    z-index: 0;
    overflow: hidden;
    background-color: transparent;
`;
