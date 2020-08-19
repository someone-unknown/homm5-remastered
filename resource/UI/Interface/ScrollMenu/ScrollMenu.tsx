import React, { Children, DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import { ScrollMenuList } from './ScrollMenu-styled';

export type ScrollMenuProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref'>;

export const ScrollMenu: FunctionComponent<ScrollMenuProps> = ({ children, ...props }): ReactElement => (
    <ScrollMenuList { ...props } count={ Children.count(children) }>{ children }</ScrollMenuList>
);