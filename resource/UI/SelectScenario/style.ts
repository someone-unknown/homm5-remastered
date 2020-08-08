import styled from 'styled-components';

import { InputLabel, InputLabelProps } from 'UI/Interface/InputLabel';

import FrameHorizontalWideTexture from 'Media/Texture/Interface/Frame/Horizontal-Wide.png';
import SelectScenarioLeftBackgroundTexture from 'Media/Texture/SelectScenario/Left-Background.png';
import SelectScenarioRightBackgroundTexture from 'Media/Texture/SelectScenario/Right-Background.png';

export const SelectScenarioContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

export const SelectScenarioFrame = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 981px;
    height: 717px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ FrameHorizontalWideTexture }');
`;

export const SelectScenarioTitle = styled.h1
`
    margin: 0;
    padding: 0;
    display: inline-block;
    position: absolute;
    top: 60px;
    left: 55px;
    width: 627px;
    height: 43px;
    line-height: 43px;
    font-weight: normal;
    color: #3e5262;
`;

export const SelectScenarioPanel = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 103px;
    z-index: 0;
    overflow: hidden;
    flex-direction: column;
`;

export const SelectScenarioLeftPanel = styled(SelectScenarioPanel)
`
    left: 45px;
    width: 630px;
    height: 577px;
    background: transparent url('${ SelectScenarioLeftBackgroundTexture }');
`;

export const SelectScenarioRightPanel = styled(SelectScenarioPanel)
`
    right: 40px;
    width: 261px;
    height: 577px;
    background: transparent url('${ SelectScenarioRightBackgroundTexture }');
`;

export const SelectScenarioSettings = styled.div
`
    margin: 0;
    padding: 50px 13px 0;
    display: flex;
    position: relative;
    width: 261px;
    height: 415px;
    overflow: hidden;
    z-index: 0;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
`;

export const SelectScenarioSettingsInputLabel = styled(InputLabel)<InputLabelProps>
`
    padding: 0;
`;

export const SelectScenarioSettingsValue = styled.span
`
    display: inline;
    color: #fef2e4;
`;

export const SelectScenarioActions = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 261px;
    height: 162px;
    overflow: hidden;
    z-index: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;