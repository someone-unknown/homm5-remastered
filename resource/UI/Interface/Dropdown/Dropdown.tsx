import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    DetailedHTMLProps,
    EffectCallback,
    FunctionComponent,
    HTMLAttributes,
    ReactElement,
    ReactNode,
    RefObject
} from 'react';
import {
    DropdownContainer,
    DropdownButton,
    DropdownListContainer,
    DropdownListTopBackground,
    DropdownListMiddleBackground,
    DropdownListBottomBackground,
    DropdownList,
    DropdownListOption
} from './Dropdown-styled';

export interface DropdownProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'onChange'>
{
    disabled?: boolean;
    options: Record<string, string>;
    value?: string;
    onChange?: (value: string) => void;
}

/**
 * Компонент выбора из выпадающего списка
 */
export const Dropdown: FunctionComponent<DropdownProps> = ({
    disabled = false,
    options,
    value= '',
    onChange = (): void => {},
    ...props
}): ReactElement => {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [ open, setOpen ] = useState<boolean>(false);
    const buttonClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setOpen(!open);
    }, [ open ]);

    const documentClickHandler = useCallback((event: MouseEvent): void => {
        if (ref.current && ref.current.id)
        {
            const id: string = ref.current.id;
            let context: HTMLElement = event.target as HTMLElement;

            // TODO Упростить do while
            do {
                if (context.tagName.toLowerCase() === 'label' && context.getAttribute('for') === id)
                {
                    setOpen(!open);
                    return;
                }
            }
            while((context = context.parentElement) !== document.documentElement);
        }

        if (ref.current && !ref.current.contains(event.target as Node))
        {
            setOpen(false);
        }
    }, [ ref, open ]);

    useEffect((): EffectCallback => {
        document.addEventListener('click', documentClickHandler);

        return (): void => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, [ documentClickHandler ]);

    /**
     * Обработчик нажатия на опцию из выпадающего списка
     */
    const handleClickOption = useCallback((event: React.MouseEvent<HTMLLIElement>): void => {
        event.preventDefault();
        setOpen(false);
        onChange(value);
    }, [])

    return (
        <DropdownContainer { ...props } ref={ ref }>
            <DropdownButton
                disabled={ disabled }
                onClick={ buttonClickHandler }
            >
                { useMemo((): ReactNode => options[ value ], [ value, options ]) }
            </DropdownButton>
            <DropdownListContainer open={ open }>
                <DropdownListTopBackground/>
                <DropdownListMiddleBackground/>
                <DropdownListBottomBackground/>
                <DropdownList>
                    { useMemo((): ReactNode => Object.keys(options).map((value: string): ReactElement => (
                        <DropdownListOption
                            key={ value }
                            onClick={ handleClickOption }
                        >
                            { options[ value ] }
                        </DropdownListOption>
                    )), [ options ]) }
                </DropdownList>
            </DropdownListContainer>
        </DropdownContainer>
    );
};