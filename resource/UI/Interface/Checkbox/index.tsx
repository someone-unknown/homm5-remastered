import React, { useCallback, DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

import CheckboxCheckedDisabledTexture from 'Media/Texture/Interface/Checkbox/Checked/Disabled.png';
import CheckboxCheckedNormalTexture from 'Media/Texture/Interface/Checkbox/Checked/Normal.png';
import CheckboxUncheckedDisabledTexture from 'Media/Texture/Interface/Checkbox/Unchecked/Disabled.png';
import CheckboxUncheckedNormalTexture from 'Media/Texture/Interface/Checkbox/Unchecked/Normal.png';

const CheckboxElement = styled.input
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 28px;
    height: 25px;
    z-index: 0;
    overflow: hidden;
    appearance: none;
    outline: none;
    background: transparent url('${ CheckboxUncheckedNormalTexture }');
    cursor: none;
    flex-shrink: 0;

    :checked {
        background: transparent url('${ CheckboxCheckedNormalTexture }');
    }

    :disabled {
        pointer-events: none;
        background: transparent url('${ CheckboxUncheckedDisabledTexture }');
    }

    :checked:disabled {
        pointer-events: none;
        background: transparent url('${ CheckboxCheckedDisabledTexture }');
    }
`;

export type CheckboxProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'>;

export const Checkbox: FunctionComponent<CheckboxProps> = observer(({
    onMouseOut = (): void => {},
    onMouseOver = (): void => {},
    ...props
}): ReactElement => {

    const { graphics }: Global = Global.useContext();

    const checkboxMouseOutHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, []);

    const checkboxMouseOverHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOver(event);
    }, []);

    return (
        <CheckboxElement
            type="checkbox"
            onMouseOut={ checkboxMouseOutHandler }
            onMouseOver={ checkboxMouseOverHandler }
            { ...props }
        />
    );
});