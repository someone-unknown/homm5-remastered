import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useAdvMapStateContext, AdvMapState } from 'GameMechanics/AdvMapState';
import { dayButtons } from './ExitTown-constants';

export type ExitTownProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

/**
 * Компонент кнопки выхода из города
 */
export const ExitTown: FunctionComponent<ExitTownProps> = observer(({ children, ...props }): ReactElement => {
    const { day }: AdvMapState = useAdvMapStateContext();
    const Button: FunctionComponent = dayButtons[day];

    return <Button {...props}>{ children }</Button>;
});