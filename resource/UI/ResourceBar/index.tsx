import React, { useState, MouseEvent, FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { useAdvMapStateContext, AdvMapState } from 'GameMechanics/AdvMapState';

import PointerCursorTexture from 'Media/Texture/Cursor/Pointer.png';

import { Container as ContainerTexture } from 'Media/Texture/ResourceBar/Container';

import { HideButtonNormal } from 'Media/Texture/ResourceBar/HideButtonNormal';
import { HideButtonPressed } from 'Media/Texture/ResourceBar/HideButtonPressed';
import { ShowButtonNormal } from 'Media/Texture/ResourceBar/ShowButtonNormal';
import { ShowButtonPressed } from 'Media/Texture/ResourceBar/ShowButtonPressed';

import { Wood } from 'Media/Texture/Resource/Wood';
import { Ore } from 'Media/Texture/Resource/Ore';
import { Mercury } from 'Media/Texture/Resource/Mercury';
import { Crystal } from 'Media/Texture/Resource/Crystal';
import { Sulfur } from 'Media/Texture/Resource/Sulfur';
import { Gem } from 'Media/Texture/Resource/Gem';
import { Gold } from 'Media/Texture/Resource/Gold';

const ResourceBarWrapper = styled.div
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

const ResourceBarInnerWrapper = styled.div
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

interface ResourceBarStateButtonProps
{
    isOpened: boolean;
}

const ResourceBarStateButton = styled.button<ResourceBarStateButtonProps>
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 3px;
    left: 15px;
    width: 37px;
    height: 37px;
    background: transparent url('${({ isOpened }: ResourceBarStateButtonProps): string => isOpened ? ShowButtonNormal : HideButtonNormal}');
    border: none;
    border-radius: 50%;
    outline: none;
    z-index: 1;
    cursor: url('${PointerCursorTexture}'), pointer;

    :active {
        background: transparent url('${({ isOpened }: ResourceBarStateButtonProps): string => isOpened ? ShowButtonPressed : HideButtonPressed}');
    }
`;

interface ResourceBarContainerProps
{
    isOpened: boolean;
}

const ResourceBarContainer = styled.div<ResourceBarContainerProps>
    `
    margin: 0;
    padding: 8px 35px 8px 50px;
    display: ${({ isOpened }: ResourceBarContainerProps): string => isOpened ? 'flex' : 'none'};
    position: relative;
    width: 697px;
    height: 44px;
    background: url('${ContainerTexture}') no-repeat center;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const ResourceBarSection = styled.div
`
    margin: 0;
    padding: 0 5px;
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-grow: 1;

    :nth-child(7) {
        flex-grow: 2;
    }
`;

const ResourceBarSectionIcon = styled.img
`
    margin: 0 5px 0 0;
    padding: 0;
    width: 24px;
    height: 24px;
    flex-grow: 0;
`;

const ResourceBarSectionCount = styled.span
`
    color: #FFF;
    font-weight: bold;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ResourceBar: FunctionComponent = observer((): ReactElement => {
    const [ isOpened, setIsOpened ] = useState<boolean>(true);
    const { wood, ore, mercury, crystal, sulfur, gem, gold }: AdvMapState = useAdvMapStateContext();

    const handleStateButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setIsOpened(!isOpened);
    };

    return (
        <ResourceBarWrapper>
            <ResourceBarInnerWrapper>
                <ResourceBarStateButton
                    isOpened={isOpened}
                    onClick={handleStateButtonClick}
                />
                <ResourceBarContainer isOpened={isOpened}>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Wood}/>
                        <ResourceBarSectionCount>{wood}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Ore}/>
                        <ResourceBarSectionCount>{ore}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Mercury}/>
                        <ResourceBarSectionCount>{mercury}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Crystal}/>
                        <ResourceBarSectionCount>{crystal}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Sulfur}/>
                        <ResourceBarSectionCount>{sulfur}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Gem}/>
                        <ResourceBarSectionCount>{gem}</ResourceBarSectionCount>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarSectionIcon src={Gold}/>
                        <ResourceBarSectionCount>{gold}</ResourceBarSectionCount>
                    </ResourceBarSection>
                </ResourceBarContainer>
            </ResourceBarInnerWrapper>
        </ResourceBarWrapper>
    );
});