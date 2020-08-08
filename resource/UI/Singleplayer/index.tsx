import React, { useCallback, useEffect, EffectCallback, Fragment, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import { History } from 'history';
import { useHistory } from 'react-router-dom';

import {
    SingleplayerList,
    SingleplayerListItem,
    SingleplayerOption
} from 'UI/Singleplayer/style';

export const Singleplayer: FunctionComponent = observer((): ReactElement => {

    const history: History = useHistory();
    const documentKeyDownHandler = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Escape')
        {
            event.preventDefault();
            history.push('/menu');
        }
    }, []);

    useEffect((): EffectCallback => {
        document.addEventListener('keydown', documentKeyDownHandler);

        return (): void => {
            document.removeEventListener('keydown', documentKeyDownHandler);
        };
    }, [ documentKeyDownHandler ]);

    return (
        <Fragment>
            <SingleplayerList>
                <SingleplayerListItem>
                    <SingleplayerOption to="/menu/singleplayer/campaign">
                        <FormattedMessage id="singleplayer.list.campaign"/>
                    </SingleplayerOption>
                </SingleplayerListItem>
                <SingleplayerListItem>
                    <SingleplayerOption to="/menu/singleplayer/scenario">
                        <FormattedMessage id="singleplayer.list.scenario"/>
                    </SingleplayerOption>
                </SingleplayerListItem>
                <SingleplayerListItem>
                    <SingleplayerOption to="/menu/singleplayer/load">
                        <FormattedMessage id="singleplayer.list.load"/>
                    </SingleplayerOption>
                </SingleplayerListItem>
                <SingleplayerListItem/>
                <SingleplayerListItem>
                    <SingleplayerOption to="/menu">
                        <FormattedMessage id="singleplayer.list.back"/>
                    </SingleplayerOption>
                </SingleplayerListItem>
            </SingleplayerList>
        </Fragment>
    );

});