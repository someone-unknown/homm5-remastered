import styled from 'styled-components';
import { Button, ButtonProps } from 'UI/Interface/Button';
import ModalBackgroundTexture from 'Media/Texture/Interface/Modal/Background.png';
import ModalConfirmTexture from 'Media/Texture/Interface/Modal/Confirm.png';

interface ModalScreenProps
{
    show: boolean;
}

export const ModalScreen = styled.div<ModalScreenProps>
`
    margin: 0;
    padding: 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(191, 183, 155, 0.6);
    opacity: ${ ({ show }: ModalScreenProps): number => show ? 1 : 0 };
    pointer-events: ${ ({ show }: ModalScreenProps): string => show ? 'all' : 'none' };
    z-index: 10;
    align-items: center;
    justify-content: center;
    transition: opacity 0.15s ease-in-out;
    will-change: opacity;
`;

export const ModalContainer = styled.div
`
    margin: 0;
    padding: 52px 48px;
    display: flex;
    position: relative;
    width: 540px;
    height: 350px;
    overflow: hidden;
    z-index: 0;
    background: transparent url('${ ModalBackgroundTexture }');
    box-sizing: border-box;
    flex-direction: column;
`;

export const ModalHeader = styled.h1
`
    margin: 0;
    padding: 0 10px;
    display: inline-block;
    width: 444px;
    height: 43px;
    line-height: 43px;
    font-weight: normal;
    color: #3e5262;
    box-sizing: border-box;
`;

export const ModalContent = styled.div
`
    margin: 0;
    padding: 0 8px;
    display: flex;
    position: relative;
    width: 444px;
    height: 141px;
    overflow: hidden;
    z-index: 0;
    box-sizing: border-box;
    flex-direction: row;
`;

export const ModalContentIcon = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    width: 141px;
    height: 141px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ ModalConfirmTexture }') center no-repeat;
`;

export const ModalContentText = styled.span
`
    margin: 0;
    padding: 10px 10px 10px 0;
    display: inline-block;
    width: 303px;
    height: 141px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: normal;
    color: #bfb79b;
`;

export const ModalFooter = styled.div
`
    margin: 0;
    padding: 0 10px;
    display: flex;
    width: 444px;
    height: 62px;
    overflow: hidden;
    z-index: 0;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
`;

export const ModalOKButton = styled(Button)<ButtonProps>
`
    margin: 0 auto 0 0;
`;

export const ModalCancelButton = styled(Button)<ButtonProps>
`
    margin: 0 0 0 auto;
`;