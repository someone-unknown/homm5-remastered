import React, { useCallback, useEffect, EffectCallback, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
    GameplayOptionsContainer,
    GameplayOptionsFrame,
    GameplayOptionsTitle,
    GameplayOptionsContent,
    GameplayOptionsLeftPanel,
    GameplayOptionsRightPanel,
    GameplayOptionsFooter,
    GameplayOptionsButtonBack
} from 'UI/GameplayOptions/style';

export const GameplayOptions: FunctionComponent = observer((): ReactElement => {

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
        <GameplayOptionsContainer>
            <GameplayOptionsFrame>
                <GameplayOptionsTitle>
                    <FormattedMessage id="options.gameplay.content.title"/>
                </GameplayOptionsTitle>
                <GameplayOptionsContent>
                    <GameplayOptionsLeftPanel>

                    </GameplayOptionsLeftPanel>
                    <GameplayOptionsRightPanel>

                    </GameplayOptionsRightPanel>
                    <GameplayOptionsFooter>
                        <GameplayOptionsButtonBack
                            onClick={(event: MouseEvent<HTMLButtonElement>): void => {
                                event.preventDefault();
                                history.push('/menu/options');
                            }}
                        >
                            <FormattedMessage id="button.back"/>
                        </GameplayOptionsButtonBack>
                    </GameplayOptionsFooter>
                </GameplayOptionsContent>
            </GameplayOptionsFrame>
        </GameplayOptionsContainer>
    );
});