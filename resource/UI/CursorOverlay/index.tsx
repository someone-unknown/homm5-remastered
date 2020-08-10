import React, { useCallback, useEffect, useMemo, useState, EffectCallback, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { CursorType } from 'GameMechanics/Type/Graphics';
import { Global } from 'GameMechanics/Type/Global';

import CursorDefaultTexture from 'Media/Texture/Cursor/Default.png';
import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

const CursorOverlayContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
    pointer-events: none;
`;

const CursorOverlayIndicator = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    width: 48px;
    height: 48px;
    z-index: 0;
    overflow: hidden;
    background-color: transparent;
`;

export const CursorOverlay: FunctionComponent = observer((): ReactElement => {

    const { graphics }: Global = Global.useContext();
    const cursorIndicators: Record<CursorType, string> = useMemo((): Record<CursorType, string> => ({
        'default': CursorDefaultTexture,
        'pointer': CursorPointerTexture,
        'none': null
    }), []);

    const [ screenX, setScreenX ] = useState<number>(0);
    const [ screenY, setScreenY ] = useState<number>(0);

    const documentMouseOverHandler = useCallback((): void => {
        graphics.cursor = 'default';
    }, []);

    const documentMouseMoveHandler = useCallback((event: MouseEvent): void => {
        setScreenX(event.clientX - 9);
        setScreenY(event.clientY - 2);
    }, [ setScreenX, setScreenY ]);

    const documentMouseOutHandler = useCallback((): void => {
        graphics.cursor = 'none';
    }, []);

    useEffect((): EffectCallback => {
        document.documentElement.addEventListener('mouseover', documentMouseOverHandler);
        document.documentElement.addEventListener('mousemove', documentMouseMoveHandler);
        document.documentElement.addEventListener('mouseout', documentMouseOutHandler);

        return (): void => {
            document.documentElement.removeEventListener('mouseover', documentMouseOverHandler);
            document.documentElement.removeEventListener('mousemove', documentMouseMoveHandler);
            document.documentElement.removeEventListener('mouseout', documentMouseOutHandler);
        };
    });

    return (
        <CursorOverlayContainer>
            <CursorOverlayIndicator
                style={{
                    top: `${ screenY }px`,
                    left: `${ screenX }px`,
                    backgroundImage: cursorIndicators[ graphics.cursor ] ? `url('${ cursorIndicators[ graphics.cursor ] || '' }')` : 'none',
                }}
            />
        </CursorOverlayContainer>
    );

});