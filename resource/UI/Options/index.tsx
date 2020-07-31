import React, { useCallback, useEffect, Fragment, FunctionComponent, EffectCallback, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
    OptionsList,
    OptionsListItem,
    OptionsOption
} from 'UI/Options/style';

export const Options: FunctionComponent = observer((): ReactElement => {

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
            <OptionsList>
                <OptionsListItem>
                    <OptionsOption to="/menu/options/gameplay">
                        <FormattedMessage id="options.list.gameplay"/>
                    </OptionsOption>
                </OptionsListItem>
                <OptionsListItem>
                    <OptionsOption to="/menu/options/graphics">
                        <FormattedMessage id="options.list.graphics"/>
                    </OptionsOption>
                </OptionsListItem>
                <OptionsListItem/>
                <OptionsListItem>
                    <OptionsOption to="/menu">
                        <FormattedMessage id="options.list.back"/>
                    </OptionsOption>
                </OptionsListItem>
            </OptionsList>
        </Fragment>
    );
});