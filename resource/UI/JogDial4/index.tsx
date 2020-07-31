import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { JogDial4Container } from './style';

export interface JogDial4Props extends PropsWithChildren<{}>
{
    className?: string;
}

export const JogDial4: FunctionComponent<JogDial4Props> = observer(({ className = '', children }): ReactElement => (
    <JogDial4Container className={ className }>{ children }</JogDial4Container>
));