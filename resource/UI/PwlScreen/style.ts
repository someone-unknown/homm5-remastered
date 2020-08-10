import styled from 'styled-components';

import PwlScreenFrameTexture from 'Media/Texture/PwlScreen/Frame.png';
import PwlScreenProgressBarTexture from 'Media/Texture/PwlScreen/Progress-Bar.png';

export const PwlScreenContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
`;

export const PwlScreenProgressBarContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100%;
    height: 39px;
    z-index: 0;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PwlScreenProgressBarFrame = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 971px;
    height: 39px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ PwlScreenFrameTexture }');
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PwlScreenProgressBarText = styled.span
`
    font-size: 23px;
    z-index: 1;
    text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
`;

export const PwlScreenProgressBarGlowContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 8px;
    left: 34px;
    width: 903px;
    height: 24px;
    z-index: 0;
    overflow: hidden;
`;

export const PwlScreenProgressBarGlow = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 903px;
    height: 24px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ PwlScreenProgressBarTexture }');
    transition: transform 0.1s ease-in-out;
    will-change: transform;
`;