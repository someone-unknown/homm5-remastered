import React, { useCallback, DetailedHTMLProps, FunctionComponent, LabelHTMLAttributes, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

const InputGroupLabel = styled.label
`
    margin: 0 0 3px;
    padding: 0 5px;
    display: block;
    position: relative;
    font-size: 18px;
    font-family: 'Monotype Corsiva', sans-serif;
    font-weight: normal;
    color: #bfb79b;
    text-align: left;
    cursor: none;
`;

export type InputLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'ref'>;

export const InputLabel: FunctionComponent<InputLabelProps> = observer(({
    onMouseOut = (): void => {},
    onMouseOver = (): void => {},
    children,
    ...props
}): ReactElement => {

    const { graphics }: Global = Global.useContext();

    const inputLabelMouseOutHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, [ graphics, onMouseOut ]);

    const inputLabelMouseOverHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOut(event);
    }, [ graphics, onMouseOver ]);

    return (
        <InputGroupLabel
            onMouseOut={ inputLabelMouseOutHandler }
            onMouseOver={ inputLabelMouseOverHandler }
            { ...props }
        >
            { children }
        </InputGroupLabel>
    );

});