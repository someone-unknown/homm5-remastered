import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import { MainMenuLogo } from "UI/GameLogo/GameLogo-styled";

type GameLogoProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

/**
 * Лого в главном меню "HM&M"
 */
export const GameLogo: FunctionComponent<GameLogoProps> = ({ ...props }): ReactElement => (
    <MainMenuLogo { ...props }/>
);