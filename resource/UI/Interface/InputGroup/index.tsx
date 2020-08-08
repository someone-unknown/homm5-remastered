import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const InputGroupElement = styled.div
`
    margin: 0 0 10px;
    padding: 0;
    display: flex;
    position: relative;
    width: 201px;
    height: auto;
    overflow: visible;
    flex-direction: column;
`;

export type InputGroupProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const InputGroup: FunctionComponent<InputGroupProps> = ({ children, ...props }): ReactElement => (
    <InputGroupElement { ...props }>{ children }</InputGroupElement>
);