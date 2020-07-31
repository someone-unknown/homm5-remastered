import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import MainMenuLogoTexture from 'Media/Texture/MainMenu/Logo.png';

export const MainMenuLogo = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 40px;
    left: 60px;
    width: 360px;
    height: 150px;
    z-index: 5;
    overflow: hidden;
    background: transparent url('${ MainMenuLogoTexture }');
`;

type GameLogoProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const GameLogo: FunctionComponent<GameLogoProps> = ({ ...props }): ReactElement => (
    <MainMenuLogo { ...props }/>
);