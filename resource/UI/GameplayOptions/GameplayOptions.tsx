import React, { useCallback, useEffect, EffectCallback, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Global } from 'GameMechanics/Type/Global';
import { Locale } from 'GameMechanics/Type/Language';
import { Dropdown } from 'UI/Interface/Dropdown';
import { InputGroup } from 'UI/Interface/InputGroup';
import { InputLabel } from 'UI/Interface/InputLabel';
import {
    GameplayOptionsContainer,
    GameplayOptionsFrame,
    GameplayOptionsTitle,
    GameplayOptionsContent,
    GameplayOptionsLeftPanel,
    GameplayOptionsRightPanel,
    GameplayOptionsFooter,
    GameplayOptionsButtonBack
} from './GameplayOptions-styled';

/**
 * Компонент настроек игровых параметров
 */
export const GameplayOptions: FunctionComponent = observer((): ReactElement => {
    const { language }: Global = Global.useContext();
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

    /**
     * Обработка изменения языка пользователем
     */
    const handleChangeLanguage = useCallback((value: string): void => {
        language.locale = value as Locale;
    }, []);

    /**
     * Обработка нажатия на кнопку "Назад"
     */
    const handleClickToOption = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        history.push('/menu/options');
    }, []);

    return (
        <GameplayOptionsContainer>
            <GameplayOptionsFrame>
                <GameplayOptionsTitle>
                    <FormattedMessage id="options.gameplay.content.title"/>
                </GameplayOptionsTitle>
                <GameplayOptionsContent>
                    <GameplayOptionsLeftPanel>
                        <InputGroup>
                            <InputLabel htmlFor="2c0f6104-b09d-4faf-84e6-fea5e9ba9945">
                                <FormattedMessage id="options.gameplay.language.label"/>
                            </InputLabel>
                            <Dropdown
                                id="2c0f6104-b09d-4faf-84e6-fea5e9ba9945"
                                options={ {
                                    'en-US': 'English',
                                    'ru-RU': 'Русский',
                                } }
                                value={ language.locale as string }
                                onChange={handleChangeLanguage}
                            />ShowHideCheckboxElement
                        </InputGroup>
                    </GameplayOptionsLeftPanel>
                    <GameplayOptionsRightPanel>

                    </GameplayOptionsRightPanel>
                    <GameplayOptionsFooter>
                        <GameplayOptionsButtonBack
                            onClick={handleClickToOption}
                        >
                            <FormattedMessage id="button.back"/>
                        </GameplayOptionsButtonBack>
                    </GameplayOptionsFooter>
                </GameplayOptionsContent>
            </GameplayOptionsFrame>
        </GameplayOptionsContainer>
    );
});