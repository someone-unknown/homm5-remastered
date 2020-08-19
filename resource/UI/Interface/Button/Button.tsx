import React, {
    useCallback,
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    FunctionComponent,
    MouseEvent,
    ReactElement
} from 'react';
import {observer} from 'mobx-react';
import {Global} from 'GameMechanics/Type/Global';
import {StyledButtonContainer, StyledButtonElement, StyledButtonBackground} from './Button-styled';

export type ButtonProps = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

/**
 * Компонент кастомной кнопки
 */
export const Button: FunctionComponent<ButtonProps> = observer(
    ({
         className = '',
         onMouseOut = (): void => {},
         onMouseOver = (): void => {},
         ...props
     }): ReactElement => {

        const {graphics}: Global = Global.useContext();

        const buttonMouseOutHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            graphics.cursor = 'default';
            onMouseOut(event);
        }, []);

        const buttonMouseOverHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            graphics.cursor = 'pointer';
            onMouseOver(event);
        }, []);

        return (
            <StyledButtonContainer className={className}>
                <StyledButtonElement
                    onMouseOut={buttonMouseOutHandler}
                    onMouseOver={buttonMouseOverHandler}
                    {...props}
                />
                <StyledButtonBackground/>
            </StyledButtonContainer>
        );
    });