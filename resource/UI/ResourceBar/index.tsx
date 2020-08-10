import React, { useCallback, useState, ChangeEvent, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { ShowHideCheckbox } from 'UI/Interface/ShowHideCheckbox';

import {
    ResourceBarContainer,
    ResourceBarFrameContainer,
    ResourceBarFrame,
    ResourceBarSection,
    ResourceBarIcon,
    ResourceBarText
} from 'UI/ResourceBar/style';

import { Wood } from 'Media/Texture/Resource/Wood';
import { Ore } from 'Media/Texture/Resource/Ore';
import { Mercury } from 'Media/Texture/Resource/Mercury';
import { Crystal } from 'Media/Texture/Resource/Crystal';
import { Sulfur } from 'Media/Texture/Resource/Sulfur';
import { Gem } from 'Media/Texture/Resource/Gem';
import { Gold } from 'Media/Texture/Resource/Gold';

export const ResourceBar: FunctionComponent = observer((): ReactElement => {

    const [ open, setOpen ] = useState<boolean>(true);

    const showHideCheckboxChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        setOpen(event.target.checked);
    }, [ setOpen ]);

    return (
        <ResourceBarContainer>
            <ResourceBarFrameContainer>
                <ShowHideCheckbox
                    checked={ open }
                    onChange={ showHideCheckboxChangeHandler }
                />
                <ResourceBarFrame open={ open }>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Wood }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Ore }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Mercury }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Crystal }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Sulfur }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Gem }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ Gold }/>
                        <ResourceBarText>{ 0 }</ResourceBarText>
                    </ResourceBarSection>
                </ResourceBarFrame>
            </ResourceBarFrameContainer>
        </ResourceBarContainer>
    );
});