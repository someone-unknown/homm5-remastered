import React, {
    useCallback,
    useMemo,
    ChangeEvent,
    DetailedHTMLProps,
    FunctionComponent,
    InputHTMLAttributes,
    MouseEvent,
    ReactElement,
    ReactNode
} from 'react';
import { observer } from 'mobx-react';
import { Global } from 'GameMechanics/Type/Global';
import {
    RangeMarker, RangeMarkerList, RangeContainer, RangeButtonLeft, RangeButtonRight, RangeElement
} from './Range-styled';

export interface CheckboxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref' | 'type' | 'onChange' | 'value'> {
    indicators?: boolean;
    onChange?: (value: number) => void;
    value?: number;
}

export const Range: FunctionComponent<CheckboxProps> = observer(
    ({
         className = '',
         disabled = false,
         indicators = false,
         onChange = (): void => {},
         min = 0,
         max = 100,
         step = 10,
         value = max,
         ...props
     }): ReactElement => {

        const {graphics}: Global = Global.useContext();

        const rangeMouseOutHandler = useCallback((event: MouseEvent<HTMLDivElement>): void => {
            event.preventDefault();
            graphics.cursor = 'default';
        }, [graphics]);

        const rangeMouseOverHandler = useCallback((event: MouseEvent<HTMLDivElement>): void => {
            event.preventDefault();
            graphics.cursor = 'pointer';
        }, [graphics]);

        const leftButtonClickHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            const nextValue = Number(value) - Number(step);

            if (nextValue >= min) {
                onChange(nextValue)
            }
        }, [min, step, value, onChange]);

        const rightButtonClickHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            const nextValue = Number(value) + Number(step);

            if (nextValue <= max) {
                onChange(Number(value) + Number(step));
            }
        }, [max, step, value, onChange]);

        const rangeChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
            onChange(parseFloat(event.target.value));
        }, [onChange]);

        const markerListItems: ReactNode = useMemo((): ReactNode => Array(((Number(max) - Number(min)) / Number(step)) + 1)
                .fill(0)
                .map((value: 0, index: number): ReactElement => (
                    <RangeMarker key={index} disabled={disabled}/>
                )),
            [min, max, step, disabled]
        );

        const markerList: ReactElement = useMemo((): ReactElement => (
            indicators && (
                <RangeMarkerList>
                    {markerListItems}
                </RangeMarkerList>
            )
        ), [indicators]);

        return (
            <RangeContainer
                className={className}
                disabled={disabled}
                onMouseOut={rangeMouseOutHandler}
                onMouseOver={rangeMouseOverHandler}
            >
                <RangeButtonLeft disabled={disabled} onClick={leftButtonClickHandler}/>
                <RangeElement
                    type="range"
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={rangeChangeHandler}
                    {...props}
                />
                {markerList}
                <RangeButtonRight disabled={disabled} onClick={rightButtonClickHandler}/>
            </RangeContainer>
        );
    });