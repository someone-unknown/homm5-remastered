import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const CheckboxGroupElement = styled.div
`
    margin: 0 0 10px;
    padding: 0;
    display: flex;
    position: relative;
    width: 201px;
    height: auto;
    z-index: 0;
    overflow: visible;
    flex-direction: row;
`;

export type CheckboxGroupProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({ children, ...props }): ReactElement => (
    <CheckboxGroupElement { ...props }>{ children }</CheckboxGroupElement>
);