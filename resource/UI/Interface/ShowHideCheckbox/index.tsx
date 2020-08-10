import React, { useCallback, DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { Global } from 'GameMechanics/Type/Global';

import ShowHideCheckboxCheckedNormalTexture from 'Media/Texture/Interface/ShowHideCheckbox/Checked/Normal.png';
import ShowHideCheckboxCheckedPushedTexture from 'Media/Texture/Interface/ShowHideCheckbox/Checked/Pushed.png';
import ShowHideCheckboxUncheckedNormalTexture from 'Media/Texture/Interface/ShowHideCheckbox/Unchecked/Normal.png';
import ShowHideCheckboxUncheckedPushedTexture from 'Media/Texture/Interface/ShowHideCheckbox/Unchecked/Pushed.png';

const ShowHideCheckboxElement = styled.input
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 3px;
    left: 15px;
    width: 37px;
    height: 37px;
    background: transparent url('${ ShowHideCheckboxUncheckedNormalTexture }');
    border: none;
    border-radius: 50%;
    outline: none;
    z-index: 1;
    appearance: none;
    cursor: none;

    :active {
        background: transparent url('${ ShowHideCheckboxUncheckedPushedTexture }');
    }

    :checked {
        background: transparent url('${ ShowHideCheckboxCheckedNormalTexture }');
    }

    :checked:active {
        background: transparent url('${ ShowHideCheckboxCheckedPushedTexture }');
    }
`;

export type ShowHideButtonProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'>;

export const ShowHideCheckbox: FunctionComponent<ShowHideButtonProps> = observer(({
    onMouseOut = (): void => {},
    onMouseOver = (): void => {},
    ...props
}): ReactElement => {

    const { graphics }: Global = Global.useContext();

    const checkboxMouseOutHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, [ graphics, onMouseOut ]);

    const checkboxMouseOverHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOver(event);
    }, [ graphics, onMouseOver ]);

    return (
        <ShowHideCheckboxElement
            type="checkbox"
            onMouseOut={ checkboxMouseOutHandler }
            onMouseOver={ checkboxMouseOverHandler }
            { ...props }
        />
    );

});