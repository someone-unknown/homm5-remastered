import React, { useCallback, DetailedHTMLProps, FunctionComponent, LabelHTMLAttributes, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

const CheckboxGroupLabel = styled.label
`
    margin: 0;
    padding: 0 0 0 5px;
    display: block;
    position: relative;
    width: 173px;
    height: auto;
    font-size: 18px;
    font-family: 'Monotype Corsiva', sans-serif;
    font-weight: normal;
    color: #bfb79b;
    text-align: left;
    line-height: 25px;
    cursor: none;
    flex-shrink: 0;
`;

export type CheckboxLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'ref'>;

export const CheckboxLabel: FunctionComponent<CheckboxLabelProps> = observer(({
    onMouseOut = (): void => {},
    onMouseOver = (): void => {},
    children,
    ...props
}): ReactElement => {

    const { graphics }: Global = Global.useContext();

    const checkboxLabelMouseOutHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, [ graphics, onMouseOut ]);

    const checkboxLabelMouseOverHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOut(event);
    }, [ graphics, onMouseOver ]);

    return (
        <CheckboxGroupLabel
            onMouseOut={ checkboxLabelMouseOutHandler }
            onMouseOver={ checkboxLabelMouseOverHandler }
            { ...props }
        >
            { children }
        </CheckboxGroupLabel>
    );
});