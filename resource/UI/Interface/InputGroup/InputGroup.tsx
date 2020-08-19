import React, {DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement} from 'react';
import {InputGroupElement} from "UI/Interface/InputGroup/InputGroup-styled";

export type InputGroupProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const InputGroup: FunctionComponent<InputGroupProps> = ({children, ...props}): ReactElement => (
    <InputGroupElement {...props}>{children}</InputGroupElement>
);