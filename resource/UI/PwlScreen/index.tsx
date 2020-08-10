import React, { useCallback, useEffect, useMemo, useState, EffectCallback, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { History } from 'history';
import { useHistory, useParams } from 'react-router-dom';

import {
    PwlScreenContainer,
    PwlScreenProgressBarContainer,
    PwlScreenProgressBarFrame,
    PwlScreenProgressBarText,
    PwlScreenProgressBarGlowContainer,
    PwlScreenProgressBarGlow
} from 'UI/PwlScreen/style';

export const PwlScreen: FunctionComponent = observer((): ReactElement => {

    const history: History = useHistory();
    const { uuid }: Record<string, string> = useParams();
    const [ progress, setProgress ] = useState<number>(0);

    const pwlContainerClickHandler = useCallback((event: MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();

        if (progress >= 100)
        {
            history.push(`/${ uuid }/advmap`);
        }
    }, [ progress ]);

    useEffect((): EffectCallback => {
        const interval = setInterval((): void => {
            if (progress >= 100)
            {
                clearInterval(interval);
            }
            else
            {
                setProgress(progress + 5);
            }
        }, 500);

        return (): void => {
            clearInterval(interval);
        };
    }, [ progress, setProgress ]);

    return (
        <PwlScreenContainer onClick={ pwlContainerClickHandler }>
            <PwlScreenProgressBarContainer>
                <PwlScreenProgressBarFrame>
                    <PwlScreenProgressBarText>
                        { useMemo((): string => progress === 100 ? 'Нажмите любую клавишу...' : 'Идёт загрузка, подождите...', [ progress ]) }
                    </PwlScreenProgressBarText>
                    <PwlScreenProgressBarGlowContainer>
                        { useMemo((): ReactElement => (
                            <PwlScreenProgressBarGlow
                                style={{
                                    transform: `translate3d(-${ 100 - progress }%, 0, 0)`
                                }}
                            />
                        ), [ progress ]) }
                    </PwlScreenProgressBarGlowContainer>
                </PwlScreenProgressBarFrame>
            </PwlScreenProgressBarContainer>
        </PwlScreenContainer>
    );

});