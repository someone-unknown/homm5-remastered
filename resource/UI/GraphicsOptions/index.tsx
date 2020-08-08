import React, { useCallback, useEffect, ChangeEvent, EffectCallback, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Global } from 'GameMechanics/Type/Global';

import { Checkbox } from 'UI/Interface/Checkbox';
import { CheckboxGroup } from 'UI/Interface/CheckboxGroup';
import { CheckboxLabel } from 'UI/Interface/CheckboxLabel';
import { InputGroup } from 'UI/Interface/InputGroup';
import { InputLabel } from 'UI/Interface/InputLabel';
import { Range } from 'UI/Interface/Range';

import {
    GraphicsOptionsContainer,
    GraphicsOptionsFrame,
    GraphicsOptionsTitle,
    GraphicsOptionsContent,
    GraphicsOptionsLeftPanel,
    GraphicsOptionsRightPanel,
    GraphicsOptionsFooter,
    GraphicsOptionsButtonBack
} from 'UI/GraphicsOptions/style';

export const GraphicsOptions: FunctionComponent = observer((): ReactElement => {

    const { graphics, music }: Global = Global.useContext();
    const history: History = useHistory();
    const documentKeyDownHandler = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Escape')
        {
            event.preventDefault();
            history.push('/menu/options');
        }
    }, []);

    useEffect((): EffectCallback => {
        document.addEventListener('keydown', documentKeyDownHandler);

        return (): void => {
            document.removeEventListener('keydown', documentKeyDownHandler);
        };
    }, [ documentKeyDownHandler ]);

    return (
        <GraphicsOptionsContainer>
            <GraphicsOptionsFrame>
                <GraphicsOptionsTitle>
                    <FormattedMessage id="options.graphics.content.title"/>
                </GraphicsOptionsTitle>
                <GraphicsOptionsContent>
                    <GraphicsOptionsLeftPanel>
                        <CheckboxGroup>
                            <Checkbox
                                id="f1663414-1cad-452b-aa79-3ca68931ce0e"
                                checked={ graphics.fullscreen }
                                onChange={ (event: ChangeEvent<HTMLInputElement>): void => {
                                    graphics.fullscreen = event.target.checked;
                                } }
                            />
                            <CheckboxLabel htmlFor="f1663414-1cad-452b-aa79-3ca68931ce0e">
                                <FormattedMessage id="options.graphics.fullscreen.label"/>
                            </CheckboxLabel>
                        </CheckboxGroup>
                    </GraphicsOptionsLeftPanel>
                    <GraphicsOptionsRightPanel>
                        <InputGroup>
                            <InputLabel htmlFor="f6eef2be-8b28-4ce8-ab4f-0831f359724c">
                                <FormattedMessage id="options.graphics.music.volume.label"/>
                            </InputLabel>
                            <Range
                                id="f6eef2be-8b28-4ce8-ab4f-0831f359724c"
                                indicators
                                min={ 0 }
                                max={ 1 }
                                step={ 0.1 }
                                value={ music.volume }
                                onChange={ (value: number): void => {
                                    music.volume = value;
                                } }
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLabel htmlFor="cae332eb-db53-4d91-a787-ae0029a39692">
                                <FormattedMessage id="options.graphics.effects.volume.label"/>
                            </InputLabel>
                            <Range
                                id="cae332eb-db53-4d91-a787-ae0029a39692"
                                indicators
                            />
                        </InputGroup>
                    </GraphicsOptionsRightPanel>
                    <GraphicsOptionsFooter>
                        <GraphicsOptionsButtonBack
                            onClick={(event: MouseEvent<HTMLButtonElement>): void => {
                                event.preventDefault();
                                history.push('/menu/options');
                            }}
                        >
                            <FormattedMessage id="button.back"/>
                        </GraphicsOptionsButtonBack>
                    </GraphicsOptionsFooter>
                </GraphicsOptionsContent>
            </GraphicsOptionsFrame>
        </GraphicsOptionsContainer>
    );
});