import React, { useCallback, useState, ChangeEvent, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { Global } from 'GameMechanics/Type/Global';

import { ShowHideCheckbox } from 'UI/Interface/ShowHideCheckbox';

import {
    ResourceBarContainer,
    ResourceBarFrameContainer,
    ResourceBarFrame,
    ResourceBarSection,
    ResourceBarIcon,
    ResourceBarText
} from 'UI/ResourceBar/style';

import ResourceWoodTexture from 'Media/Texture/Resource/Wood.png';
import ResourceOreTexture from 'Media/Texture/Resource/Ore.png';
import ResourceMercuryTexture from 'Media/Texture/Resource/Mercury.png';
import ResourceCrystalTexture from 'Media/Texture/Resource/Crystal.png';
import ResourceSulfurTexture from 'Media/Texture/Resource/Sulfur.png';
import ResourceGemTexture from 'Media/Texture/Resource/Gem.png';
import ResourceGoldTexture from 'Media/Texture/Resource/Gold.png';

export const ResourceBar: FunctionComponent = observer((): ReactElement => {

    const { adventureMap }: Global = Global.useContext();
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
                        <ResourceBarIcon src={ ResourceWoodTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.wood }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceOreTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.ore }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceMercuryTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.mercury }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceCrystalTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.crystal }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceSulfurTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.sulfur }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceGemTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.gem }
                        </ResourceBarText>
                    </ResourceBarSection>
                    <ResourceBarSection>
                        <ResourceBarIcon src={ ResourceGoldTexture }/>
                        <ResourceBarText>
                            { adventureMap.players[ adventureMap.currentPlayer ].resource.gold }
                        </ResourceBarText>
                    </ResourceBarSection>
                </ResourceBarFrame>
            </ResourceBarFrameContainer>
        </ResourceBarContainer>
    );
});