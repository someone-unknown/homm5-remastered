import React, { useEffect, EffectCallback, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { VideoPlayer } from 'UI/Intro/style';

import IntroVideo from 'Media/Video/Intro.mp4';

export interface IntroProps
{
    redirectTo?: string;
}

export const Intro: FunctionComponent<IntroProps> = observer(({ redirectTo = '' }: IntroProps): ReactElement => {
    const history: History = useHistory();

    const redirectHandler = (): void => {
        if (redirectTo)
        {
            history.push(redirectTo);
        }
    };

    const videoClickHandler = (event: React.MouseEvent<HTMLVideoElement>): void => {
        event.preventDefault();
        redirectHandler();
    };

    const documentKeyDownHandler = (event: KeyboardEvent): void => {
        event.preventDefault();
        redirectHandler();
    };

    useEffect((): EffectCallback => {
        document.addEventListener('keydown', documentKeyDownHandler);

        return (): void => {
            document.removeEventListener('keydown', documentKeyDownHandler);
        };
    });

    return (
        <VideoPlayer
            autoPlay
            controls={false}
            src={IntroVideo}
            onClick={videoClickHandler}
            onEnded={redirectHandler}
        />
    );
});