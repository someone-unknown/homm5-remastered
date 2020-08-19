import React, {
    useCallback,
    DetailedHTMLProps,
    FunctionComponent,
    InputHTMLAttributes,
    MouseEvent,
    ReactElement
} from 'react';
import {observer} from 'mobx-react';
import {Global} from 'GameMechanics/Type/Global';
import {CheckboxElement} from "./Checkbox-styled";

export type CheckboxProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'>;

/**
 * Компонент кастомного чекбокса
 */
export const Checkbox: FunctionComponent<CheckboxProps> = observer(
    ({
         onMouseOut = (): void => {},
         onMouseOver = (): void => {},
         ...props
    }): ReactElement => {

        const {graphics}: Global = Global.useContext();

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
                onMouseOut={checkboxMouseOutHandler}
                onMouseOver={checkboxMouseOverHandler}
                {...props}
            />
        );
    });