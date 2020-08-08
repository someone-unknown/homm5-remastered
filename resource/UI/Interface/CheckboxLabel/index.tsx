import React, { DetailedHTMLProps, FunctionComponent, LabelHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

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
    cursor: url('${ CursorPointerTexture }'), pointer;
    flex-shrink: 0;
`;

export type CheckboxLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'ref'>;

export const CheckboxLabel: FunctionComponent<CheckboxLabelProps> = ({ children, ...props }): ReactElement => (
    <CheckboxGroupLabel { ...props }>{ children }</CheckboxGroupLabel>
);