import React, {
    useCallback,
    DetailedHTMLProps,
    FunctionComponent,
    LabelHTMLAttributes,
    MouseEvent,
    ReactElement
} from 'react';
import {observer} from 'mobx-react';
import {Global} from 'GameMechanics/Type/Global';
import {CheckboxGroupLabel} from "./CheckboxLabel-styled";

export type CheckboxLabelProps = Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'ref'>;

/**
 * Компонент заголовка чекбокса
 */
export const CheckboxLabel: FunctionComponent<CheckboxLabelProps> = observer(
    ({
         onMouseOut = (): void => {},
         onMouseOver = (): void => {},
         children,
         ...props
    }): ReactElement => {
    const {graphics}: Global = Global.useContext();

    const checkboxLabelMouseOutHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'default';
        onMouseOut(event);
    }, [graphics, onMouseOut]);

    const checkboxLabelMouseOverHandler = useCallback((event: MouseEvent<HTMLLabelElement>): void => {
        graphics.cursor = 'pointer';
        onMouseOut(event);
    }, [graphics, onMouseOver]);

    return (
        <CheckboxGroupLabel
            onMouseOut={checkboxLabelMouseOutHandler}
            onMouseOver={checkboxLabelMouseOverHandler}
            {...props}
        >
            {children}
        </CheckboxGroupLabel>
    );
});