import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { Global } from 'GameMechanics/Type/Global';

import {
    HourglassButtonElement
} from 'UI/Interface/HourglassButton/style';

export type HourglassButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

export const HourglassButton: FunctionComponent<HourglassButtonProps> = observer((props): ReactElement => {

    const { adventureMap }: Global = Global.useContext();

    return (
        <HourglassButtonElement
            size="big"
            day={ adventureMap.day }
            { ...props }
        />
    );

});