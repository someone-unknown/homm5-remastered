import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { useAdvMapStateContext, AdvMapState } from 'GameMechanics/AdvMapState';

import {
    ExitTownButton1,
    ExitTownButton2,
    ExitTownButton3,
    ExitTownButton4,
    ExitTownButton5,
    ExitTownButton6,
    ExitTownButton7
} from './style';

const dayButtons: Record<number, FunctionComponent> = {
    1: ExitTownButton1,
    2: ExitTownButton2,
    3: ExitTownButton3,
    4: ExitTownButton4,
    5: ExitTownButton5,
    6: ExitTownButton6,
    7: ExitTownButton7
};

export type ExitTownProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ExitTown: FunctionComponent<ExitTownProps> = observer(({ children, ...props }): ReactElement => {
    const { day }: AdvMapState = useAdvMapStateContext();
    const Button: FunctionComponent = dayButtons[day];

    return <Button {...props}>{ children }</Button>;
});