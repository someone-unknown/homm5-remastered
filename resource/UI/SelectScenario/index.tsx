import React, {
    useCallback,
    useEffect,
    EffectCallback,
    FunctionComponent,
    MouseEvent,
    ReactElement,
    useMemo
} from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Button } from 'UI/Interface/Button';
import { InputGroup } from 'UI/Interface/InputGroup';
import { InputLabel } from 'UI/Interface/InputLabel';
import { Range } from 'UI/Interface/Range';

import { Global } from 'GameMechanics/Type/Global';
import { Difficulty, Scenario } from 'GameMechanics/Type/Scenario';

import {
    SelectScenarioContainer,
    SelectScenarioFrame,
    SelectScenarioTitle,
    SelectScenarioLeftPanel,
    SelectScenarioRightPanel,
    SelectScenarioSettings,
    SelectScenarioSettingsInputLabel,
    SelectScenarioSettingsValue,
    SelectScenarioActions
} from 'UI/SelectScenario/style';

export const SelectScenario: FunctionComponent = observer((): ReactElement => {

    const { scenario }: Global = Global.useContext();
    const history: History = useHistory();
    const documentKeyDownHandler = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Escape')
        {
            event.preventDefault();
            history.push('/menu/singleplayer');
        }
    }, []);

    useEffect((): EffectCallback => {
        document.addEventListener('keydown', documentKeyDownHandler);

        return (): void => {
            document.removeEventListener('keydown', documentKeyDownHandler);
        };
    }, [ documentKeyDownHandler ]);

    return (
        <SelectScenarioContainer>
            <SelectScenarioFrame>
                <SelectScenarioTitle>
                    <FormattedMessage id="singleplayer.scenario.create.title"/>
                </SelectScenarioTitle>
                <SelectScenarioLeftPanel>

                </SelectScenarioLeftPanel>
                <SelectScenarioRightPanel>
                    <SelectScenarioSettings>
                        <InputGroup>
                            <SelectScenarioSettingsInputLabel>
                                <FormattedMessage id="singleplayer.scenario.create.settings.turnLimit"/>
                                <SelectScenarioSettingsValue>
                                    { useMemo((): ReactElement => {
                                        if (scenario.getTurnLimit === Infinity)
                                        {
                                            return (
                                                <FormattedMessage id="singleplayer.scenario.create.settings.turnLimit.infinity"/>
                                            );
                                        }
                                        else
                                        {
                                            return (
                                                <FormattedMessage
                                                    id="singleplayer.scenario.create.settings.turnLimit.value"
                                                    values={{
                                                        value: scenario.getTurnLimit
                                                    }}
                                                />
                                            );
                                        }
                                    }, [ scenario.getTurnLimit ]) }
                                </SelectScenarioSettingsValue>
                            </SelectScenarioSettingsInputLabel>
                            <Range
                                min={ 1 }
                                max={ 31 }
                                step={ 1 }
                                value={ useMemo((): number => scenario.getTurnLimit === Infinity ? 31 : scenario.turnLimit, [ scenario.turnLimit ]) }
                                onChange={ (value: number): void => {
                                    scenario.turnLimit = value === 31 ? Infinity : value;
                                } }
                            />
                        </InputGroup>
                        <InputGroup>
                            <SelectScenarioSettingsInputLabel>
                                <FormattedMessage id="singleplayer.scenario.create.settings.difficulty"/>
                                <SelectScenarioSettingsValue>
                                    <FormattedMessage
                                        id={ useMemo((): string => {
                                            return `difficulty.${ [ null, 'easy', 'medium', 'hard', 'heroic', 'evil' ][ scenario.difficulty ] }`;
                                        }, [ scenario.getDifficulty ]) }
                                    />
                                </SelectScenarioSettingsValue>
                            </SelectScenarioSettingsInputLabel>
                            <Range
                                min={ 1 }
                                max={ 5 }
                                step={ 1 }
                                value={ scenario.getDifficulty }
                                onChange={ (value: number): void => {
                                    scenario.difficulty = value as Difficulty;
                                } }
                            />
                        </InputGroup>
                    </SelectScenarioSettings>
                    <SelectScenarioActions>
                        <Button

                        >
                            <FormattedMessage id="button.create"/>
                        </Button>
                        <Button

                        >
                            <FormattedMessage id="button.load"/>
                        </Button>
                        <Button
                            onClick={ useCallback((event: MouseEvent<HTMLButtonElement>): void => {
                                event.preventDefault();
                                history.push('/menu/singleplayer');
                            }, [ history ]) }
                        >
                            <FormattedMessage id="button.back"/>
                        </Button>
                    </SelectScenarioActions>
                </SelectScenarioRightPanel>
            </SelectScenarioFrame>
        </SelectScenarioContainer>
    );

});