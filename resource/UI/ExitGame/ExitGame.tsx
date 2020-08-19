import React, {useCallback, useEffect, EffectCallback, FunctionComponent, MouseEvent, ReactElement} from 'react';
import {observer} from 'mobx-react';
import {FormattedMessage} from 'react-intl';
import {
    ModalScreen,
    ModalContainer,
    ModalHeader,
    ModalContent,
    ModalContentIcon,
    ModalContentText,
    ModalFooter,
    ModalOKButton,
    ModalCancelButton
} from './ExitGame-styled';

export interface ExitGameProps {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
    onCancel: () => void;
}

/**
 * Компонент кнопки выхода из игры
 */
export const ExitGame: FunctionComponent<ExitGameProps> = observer(
    ({
         show,
         onHide,
         onConfirm,
         onCancel,
    }): ReactElement => {
        const documentKeyDownHandler = useCallback((event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onHide();
            }
            if (event.key === 'Enter') {
                event.preventDefault();
                onConfirm();
            }
        }, []);

        useEffect((): EffectCallback => {
            document.addEventListener('keydown', documentKeyDownHandler);

            return (): void => {
                document.removeEventListener('keydown', documentKeyDownHandler);
            };
        }, []);

        /**
         * Обработчик нажатия на клавишу "Ок"
         */
        const handleClickOk = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            onConfirm();
        }, []);

        /**
         * Обработчик нажатия на клавишу "Отмена"
         */
        const handleClickCancel = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            onCancel();
        }, []);

        return (
            <ModalScreen show={show}>
                <ModalContainer>
                    <ModalHeader>
                        <FormattedMessage id="exitgame.header.title"/>
                    </ModalHeader>
                    <ModalContent>
                        <ModalContentIcon/>
                        <ModalContentText>
                            <FormattedMessage id="exitgame.content.message"/>
                        </ModalContentText>
                    </ModalContent>
                    <ModalFooter>
                        <ModalOKButton
                            onClick={handleClickOk}
                        >
                            <FormattedMessage id="button.ok"/>
                        </ModalOKButton>
                        <ModalCancelButton
                            onClick={handleClickCancel}
                        >
                            <FormattedMessage id="button.cancel"/>
                        </ModalCancelButton>
                    </ModalFooter>
                </ModalContainer>
            </ModalScreen>
        );
    });