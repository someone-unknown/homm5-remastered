import styled from 'styled-components';

import ResourceBarFrameTexture from 'Media/Texture/ResourceBar/Frame.png';

export const ResourceBarContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    left: 0;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const ResourceBarFrameContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 697px;
    height: 44px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 0;
`;

interface ResourceBarFrameProps
{
    open: boolean;
}

export const ResourceBarFrame = styled.div<ResourceBarFrameProps>
`
    margin: 0;
    padding: 8px 35px 8px 50px;
    display: ${ ({ open }: ResourceBarFrameProps): string => open ? 'flex' : 'none' };
    position: relative;
    width: 697px;
    height: 44px;
    background: url('${ ResourceBarFrameTexture }') no-repeat center;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ResourceBarSection = styled.div
`
    margin: 0;
    padding: 0 5px;
    display: flex;
    position: relative;
    width: 80px;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    box-sizing: border-box;

    :nth-child(7) {
        width: 132px;
    }
`;

export const ResourceBarIcon = styled.img
`
    margin: 0 5px 0 0;
    padding: 0;
    width: 24px;
    height: 24px;
    flex-grow: 0;
`;

export const ResourceBarText = styled.span
`
    color: #FFFFFF;
    font-size: 15px;
    font-family: 'Tahoma', sans-serif;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;