import styled from 'styled-components';

import { Button, ButtonProps } from 'UI/Interface/Button';

import HorizontalNormalFrameTexture from 'Media/Texture/Interface/Frame/Horizontal-Normal.png';
import OptionsBackgroundTexture from 'Media/Texture/Options/Background.png';

export const GameplayOptionsContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    align-items: center;
    justify-content: center;
`;

export const GameplayOptionsFrame = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 747px;
    height: 741px;
    overflow: hidden;
    z-index: 0;
    background: transparent url('${ HorizontalNormalFrameTexture }');
`;

export const GameplayOptionsTitle = styled.h1
`
    margin: 0;
    padding: 0;
    display: inline-block;
    position: absolute;
    top: 71px;
    left: 55px;
    width: 627px;
    height: 43px;
    line-height: 43px;
    font-weight: normal;
    color: #3e5262;
`;

export const GameplayOptionsContent = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    left: 55px;
    bottom: 50px;
    width: 627px;
    height: 577px;
    overflow: hidden;
    z-index: 0;
    background: transparent url('${ OptionsBackgroundTexture }');
`;

export const GameplayOptionsPanel = styled.div
`
    margin: 0;
    padding: 15px;
    display: flex;
    position: absolute;
    width: 297px;
    height: 467px;
    overflow: hidden;
    z-index: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
`;

export const GameplayOptionsLeftPanel = styled(GameplayOptionsPanel)
`
    top: 32px;
    left: 12px;
`;

export const GameplayOptionsRightPanel = styled(GameplayOptionsPanel)
`
    top: 32px;
    right: 12px;
`;

export const GameplayOptionsFooter = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    left: 12px;
    bottom: 12px;
    width: 603px;
    height: 54px;
    overflow: hidden;
    z-index: 0;
    flex-direction: row;
    align-items: center;
`;

export const GameplayOptionsButtonBack = styled(Button)<ButtonProps>
`
    margin: 0 0 0 auto;
`;