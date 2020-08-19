import React, {
    useCallback,
    DetailedHTMLProps,
    FunctionComponent,
    InputHTMLAttributes,
    MouseEvent,
    ReactElement
} from 'react';
import { observer } from 'mobx-react';
import { Global } from 'GameMechanics/Type/Global';
import { ShowHideCheckboxElement } from "./ShowHideCheckbox-styled";

export type ShowHideButtonProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type'>;

export const ShowHideCheckbox: FunctionComponent<ShowHideButtonProps> = observer(
    ({
         onMouseOut = (): void => {},
         onMouseOver = (): void => {},
         ...props
     }): ReactElement => {
        const {graphics}: Global = Global.useContext();

        const checkboxMouseOutHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
            graphics.cursor = 'default';
            onMouseOut(event);
        }, [graphics, onMouseOut]);

        const checkboxMouseOverHandler = useCallback((event: MouseEvent<HTMLInputElement>): void => {
            graphics.cursor = 'pointer';
            onMouseOver(event);
        }, [graphics, onMouseOver]);

        return (
            <ShowHideCheckboxElement
                type="checkbox"
                onMouseOut={checkboxMouseOutHandler}
                onMouseOver={checkboxMouseOverHandler}
                {...props}
            />
        );
    });