import React, { FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

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
} from 'UI/ExitGame/style';

export interface ExitGameProps
{
    show?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const ExitGame: FunctionComponent<ExitGameProps> = observer(({
    show = false,
    onConfirm = (): void => {},
    onCancel = (): void => {}
}): ReactElement => (
    <ModalScreen show={ show }>
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
                    onClick={(event: MouseEvent<HTMLButtonElement>): void => {
                        event.preventDefault();
                        onConfirm();
                    }}
                >
                    <FormattedMessage id="button.ok"/>
                </ModalOKButton>
                <ModalCancelButton
                    onClick={(event: MouseEvent<HTMLButtonElement>): void => {
                        event.preventDefault();
                        onCancel();
                    }}
                >
                    <FormattedMessage id="button.cancel"/>
                </ModalCancelButton>
            </ModalFooter>
        </ModalContainer>
    </ModalScreen>
));