import React, { useCallback, useEffect, useState, Fragment, FunctionComponent, EffectCallback, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

import { Global } from 'GameMechanics/Type/Global';

import { ExitGame } from 'UI/ExitGame';

import {
    MainMenuList,
    MainMenuListItem,
    MainMenuOption,
    MainMenuButton
} from 'UI/MainMenu/style';

export const MainMenu: FunctionComponent = observer((): ReactElement => {

    const { graphics }: Global = Global.useContext();
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
                onHide={ (): void => {
                    setIsExitModalShown(false);
                } }
                onConfirm={ (): void => {
                    window.close();
                } }
                onCancel={ (): void => {
                    setIsExitModalShown(false);
                } }
            />
            <MainMenuList>
                <MainMenuListItem>
                    <MainMenuOption
                        to="/menu/singleplayer"
                        onMouseOver={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'pointer';
                        } }
                        onMouseOut={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'default';
                        } }
                    >
                        <FormattedMessage id="mainmenu.list.singleplayer"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption
                        // to="/menu/multiplayer"
                        to="/4aff91c8-d941-4cea-b615-01a18f360d64/pwl"
                        onMouseOver={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'pointer';
                        } }
                        onMouseOut={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'default';
                        } }
                    >
                        <FormattedMessage id="mainmenu.list.multiplayer"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption
                        to="/menu/options"
                        onMouseOver={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'pointer';
                        } }
                        onMouseOut={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'default';
                        } }
                    >
                        <FormattedMessage id="mainmenu.list.options"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuOption
                        to="/menu/about"
                        onMouseOver={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'pointer';
                        } }
                        onMouseOut={ (event: MouseEvent<HTMLAnchorElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'default';
                        } }
                    >
                        <FormattedMessage id="mainmenu.list.about"/>
                    </MainMenuOption>
                </MainMenuListItem>
                <MainMenuListItem>
                    <MainMenuButton
                        onClick={ exitButtonClickHandler }
                        onMouseOver={ (event: MouseEvent<HTMLButtonElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'pointer';
                        } }
                        onMouseOut={ (event: MouseEvent<HTMLButtonElement>): void => {
                            event.preventDefault();
                            graphics.cursor = 'default';
                        } }
                    >
                        <FormattedMessage id="mainmenu.list.exit"/>
                    </MainMenuButton>
                </MainMenuListItem>
            </MainMenuList>
        </Fragment>
    );
});