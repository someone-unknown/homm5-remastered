import React, { useCallback, ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

const JogDialButtonElement = styled.button<JogDialButtonProps>
`
    margin: 0;
    padding: 0;
    position: absolute;
    width: ${ ({ size }): number => ({ small: 57, big: 85 }[ size ]) }px;
    height: ${ ({ size }): number => ({ small: 57, big: 85 }[ size ]) }px;
    z-index: 0;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 50%;
    cursor: none;
    pointer-events: ${ ({ disabled = false }): string => disabled ? 'none' : 'all' };
`;

export interface JogDialButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>
{
    size?: 'small' | 'big';
}

export const JogDialButton: FunctionComponent<JogDialButtonProps> = observer(({
    size = 'small',
    onMouseOut = (): void => {},
    onMouseOver = (): void => {},
    ...props
}): ReactElement => {

    const { graphics }: Global = Global.useContext();

    const buttonMouseOutHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, [ graphics ]);

    const buttonMouseOverHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOver(event);
    }, [ graphics ]);

    return (
        <JogDialButtonElement
            size={ size }
            onMouseOut={ buttonMouseOutHandler }
            onMouseOver={ buttonMouseOverHandler }
            { ...props }
        />
    );
});