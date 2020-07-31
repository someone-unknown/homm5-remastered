import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';

import MainMenuBackgroundTexture from 'Media/Texture/MainMenu/Background.jpg';

export const MenuBackgroundContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background: transparent url('${ MainMenuBackgroundTexture }') center no-repeat;
    background-size: cover;
`;

export const MenuBackground: FunctionComponent = (): ReactElement => (
    <MenuBackgroundContainer/>
);