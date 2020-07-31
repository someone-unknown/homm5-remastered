import React, { useCallback, useEffect, useState, Fragment, FunctionComponent, EffectCallback, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

import { ExitGame } from 'UI/ExitGame';

import {
    MainMenuList,
    MainMenuListItem,
    MainMenuOption,
    MainMenuButton
} from 'UI/MainMenu/style';

export const MainMenu: FunctionComponent = observer((): ReactElement => {
    const [ isExitModalShown, setIsExitModalShown ] = useState<boolean>(false);

    const exitButtonClickHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setIsExitModalShown(true);
    }, []);

    const documentKeyDownHandler = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Escape')
        {
            event.preventDefault();
            setIsExitModalShown(!isExitModalShown);
        }
    }, [ isExitModalShown ]);

    useEffect((): EffectCallback => {
        document.addEventListener('keydown', documentKeyDownHandler);

        return (): void => {
            document.removeEventListener('keydown', documentKeyDownHandler);
        };
    }, [ documentKeyDownHandler ]);

    return (
        <Fragment>
            <ExitGame
                show={ isExitModalShown }
                onConfirm={ (): void => {
                    window.close();
                } }
                onCancel={ (): void => {
                    setIsExitModalShown(false);
                } }
            />
            <MainMenuList>
                <MainMenuListItem>
                    <MainMenuOption to="/menu/singleplayer">
                        <FormattedMessage id="mainmenu.list.singleplayer"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption to="/menu/multiplayer">
                        <FormattedMessage id="mainmenu.list.multiplayer"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption to="/menu/options">
                        <FormattedMessage id="mainmenu.list.options"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption to="/menu/about">
                        <FormattedMessage id="mainmenu.list.about"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuButton onClick={ exitButtonClickHandler }>
                        <FormattedMessage id="mainmenu.list.exit"/>
                    </MainMenuButton>
                </MainMenuListItem>
            </MainMenuList>
        </Fragment>
    );
});