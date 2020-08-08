import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

import SanctuarySiegeSound from 'Media/Sound/Siege/Sanctuary.mp3';
import MainMenuBackgroundTexture from 'Media/Texture/MainMenu/Background.jpg';

export const MenuBackgroundScene = styled.div
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
    pointer-events: none;
    background: transparent url('${ MainMenuBackgroundTexture }') no-repeat center / cover;
`;

export const MenuBackground: FunctionComponent = observer((): ReactElement => {

    const { music }: Global = Global.useContext();

    useEffect((): void => {
        music.loop = true;
        music.src = SanctuarySiegeSound;
        music.on('canplaythrough', async (): Promise<void> => {
            await music.play();
        });
    }, []);

    return (
        <MenuBackgroundScene/>
    );
});