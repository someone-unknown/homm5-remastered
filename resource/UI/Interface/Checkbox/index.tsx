import React, { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import CheckboxCheckedDisabledTexture from 'Media/Texture/Interface/Checkbox/Checked/Disabled.png';
import CheckboxCheckedNormalTexture from 'Media/Texture/Interface/Checkbox/Checked/Normal.png';
import CheckboxUncheckedDisabledTexture from 'Media/Texture/Interface/Checkbox/Unchecked/Disabled.png';
import CheckboxUncheckedNormalTexture from 'Media/Texture/Interface/Checkbox/Unchecked/Normal.png';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

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
    cursor: url('${ CursorPointerTexture }'), pointer;
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

export const Checkbox: FunctionComponent<CheckboxProps> = ({ ...props }): ReactElement => (
    <CheckboxElement type="checkbox" { ...props }/>
);