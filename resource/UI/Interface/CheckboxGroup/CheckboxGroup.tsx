import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import {CheckboxGroupElement} from "./CheckboxGroup-styled";

export type CheckboxGroupProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

// TODO: переместить компонент чекбокса с лейблом сюда и использовать группу как чекбокс
/**
 * Компонент чекбокса с заголовком
 */
export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({ children, ...props }): ReactElement => (
    <CheckboxGroupElement { ...props }>{ children }</CheckboxGroupElement>
);