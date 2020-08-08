import React, { DetailedHTMLProps, FunctionComponent, LabelHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

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
    cursor: url('${ CursorPointerTexture }'), pointer;
`;

export type InputLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'ref'>;

export const InputLabel: FunctionComponent<InputLabelProps> = ({ children, ...props }): ReactElement => (
    <InputGroupLabel { ...props }>{ children }</InputGroupLabel>
);