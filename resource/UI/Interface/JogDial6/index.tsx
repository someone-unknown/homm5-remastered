import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    JogDial6Container,
    JogDial6TopLeftButton,
    JogDial6TopRightButton,
    JogDial6LeftButton,
    JogDial6CenterButton,
    JogDial6RightButton,
    JogDial6BottomLeftButton,
    JogDial6BottomRightButton
} from 'UI/Interface/JogDial6/style';

export interface JogDial6Props extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>
{
    topLeftButton: ReactNode;
    topRightButton: ReactNode;
    leftButton: ReactNode;
    centerButton: ReactNode;
    rightButton: ReactNode;
    bottomLeftButton: ReactNode;
    bottomRightButton: ReactNode;
}

export const JogDial6: FunctionComponent<JogDial6Props> = ({
    topLeftButton,
    topRightButton,
    leftButton,
    centerButton,
    rightButton,
    bottomLeftButton,
    bottomRightButton,
    ...props
}): ReactElement => (
    <JogDial6Container { ...props }>
        <JogDial6TopLeftButton>{ topLeftButton }</JogDial6TopLeftButton>
        <JogDial6TopRightButton>{ topRightButton }</JogDial6TopRightButton>
        <JogDial6LeftButton>{ leftButton }</JogDial6LeftButton>
        <JogDial6CenterButton>{ centerButton }</JogDial6CenterButton>
        <JogDial6RightButton>{ rightButton }</JogDial6RightButton>
        <JogDial6BottomLeftButton>{ bottomLeftButton }</JogDial6BottomLeftButton>
        <JogDial6BottomRightButton>{ bottomRightButton }</JogDial6BottomRightButton>
    </JogDial6Container>
);