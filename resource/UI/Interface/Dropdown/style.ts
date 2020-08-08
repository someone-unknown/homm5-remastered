import styled from 'styled-components';

import DropdownArrowDisabledTexture from 'Media/Texture/Interface/Dropdown/ArrowDisabled.png';
import DropdownArrowNormalTexture from 'Media/Texture/Interface/Dropdown/ArrowNormal.png';
import DropdownArrowPressedTexture from 'Media/Texture/Interface/Dropdown/ArrowPressed.png';
import DropdownElementBackgroundTexture from 'Media/Texture/Interface/Dropdown/ElementBackground.png';
import DropdownListBackgroundBottomTexture from 'Media/Texture/Interface/Dropdown/ListBackgroundBottom.png';
import DropdownListBackgroundMiddleTexture from 'Media/Texture/Interface/Dropdown/ListBackgroundMiddle.png';
import DropdownListBackgroundTopTexture from 'Media/Texture/Interface/Dropdown/ListBackgroundTop.png';

import VerticalScrollbarBottomDisabledTexture from 'Media/Texture/Interface/VerticalScrollbar/Bottom/Disabled.png';
import VerticalScrollbarBottomNormalTexture from 'Media/Texture/Interface/VerticalScrollbar/Bottom/Normal.png';
import VerticalScrollbarBottomPushedTexture from 'Media/Texture/Interface/VerticalScrollbar/Bottom/Pushed.png';

import VerticalScrollbarTopDisabledTexture from 'Media/Texture/Interface/VerticalScrollbar/Top/Disabled.png';
import VerticalScrollbarTopNormalTexture from 'Media/Texture/Interface/VerticalScrollbar/Top/Normal.png';
import VerticalScrollbarTopPushedTexture from 'Media/Texture/Interface/VerticalScrollbar/Top/Pushed.png';

import VerticalScrollbarTrackDisabledTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Disabled.png';

import VerticalScrollbarTrackNormalBottomTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Normal/Bottom.png';
import VerticalScrollbarTrackNormalMiddleTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Normal/Middle.png';
import VerticalScrollbarTrackNormalTopTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Normal/Top.png';

import VerticalScrollbarTrackPushedBottomTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Pushed/Bottom.png';
import VerticalScrollbarTrackPushedMiddleTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Pushed/Middle.png';
import VerticalScrollbarTrackPushedTopTexture from 'Media/Texture/Interface/VerticalScrollbar/Track/Pushed/Top.png';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

export const DropdownContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 201px;
    height: 33px;
    overflow: visible;
    background: transparent;
`;

export const DropdownButton = styled.button
`
    margin: 0;
    padding: 0 40px 0 15px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 201px;
    height: 33px;
    overflow: visible;
    z-index: 0;
    border: none;
    outline: none;
    background: transparent url('${ DropdownElementBackgroundTexture }');
    line-height: 33px;
    font-size: 20px;
    font-family: 'Monotype Corsiva', sans-serif;
    font-weight: normal;
    color: #bfb79b;
    text-align: left;
    cursor: url('${ CursorPointerTexture }'), pointer;

    :hover {
        background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.2), transparent), url('${ DropdownElementBackgroundTexture }');
    }

    :after {
        content: '';
        margin: 0;
        padding: 0;
        display: block;
        position: absolute;
        top: 4px;
        right: 4px;
        width: 25px;
        height: 25px;
        z-index: 1;
        overflow: hidden;
        background: transparent url('${ DropdownArrowNormalTexture }');
        pointer-events: none;
    }

    :hover:after {
        background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.2), transparent), url('${ DropdownArrowNormalTexture }');
    }

    :hover:active:after {
        background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.2), transparent), url('${ DropdownArrowPressedTexture }');
    }

    :disabled {
        pointer-events: none;
    }

    :disabled:after {
        background: transparent url('${ DropdownArrowDisabledTexture }');
    }
`;

interface DropdownListContainerProps
{
    open: boolean;
}

export const DropdownListContainer = styled.div<DropdownListContainerProps>
`
    margin: 0;
    padding: 5px 5px 5px 0;
    display: flex;
    position: absolute;
    top: 34px;
    left: 0;
    width: 201px;
    height: auto;
    min-height: 33px;
    max-height: 198px;
    overflow: hidden;
    z-index: 9;
    box-sizing: border-box;
    opacity: ${ ({ open }: DropdownListContainerProps): number => open ? 1 : 0 };
    pointer-events: ${ ({ open }: DropdownListContainerProps): string => open ? 'all' : 'none' };
`;

export const DropdownListTopBackground = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 201px;
    height: 9px;
    overflow: hidden;
    z-index: -1;
    background: transparent url('${ DropdownListBackgroundTopTexture }') top center no-repeat;
`;

export const DropdownListMiddleBackground = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 9px;
    left: 0;
    bottom: 9px;
    width: 201px;
    height: auto;
    overflow: hidden;
    z-index: -1;
    background: transparent url('${ DropdownListBackgroundMiddleTexture }') center center repeat-y;
`;

export const DropdownListBottomBackground = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 201px;
    height: 9px;
    overflow: hidden;
    z-index: -1;
    background: transparent url('${ DropdownListBackgroundBottomTexture }') bottom center no-repeat;
`;

export const DropdownList = styled.ul
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 201px;
    height: auto;
    min-height: 33px;
    max-height: 198px;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 0;
    flex-direction: column;

    &::-webkit-scrollbar {
        padding: 5px;
        width: 16px;
    }

    &::-webkit-scrollbar-button:vertical:start:decrement {
        width: 16px;
        height: 16px;
        background: transparent url('${ VerticalScrollbarTopNormalTexture }') no-repeat;
    }

    &::-webkit-scrollbar-button:vertical:start:decrement:active {
        background: transparent url('${ VerticalScrollbarTopPushedTexture }');
    }

    &::-webkit-scrollbar-button:vertical:start:decrement:disabled {
        background: transparent url('${ VerticalScrollbarTopDisabledTexture }');
    }

    &::-webkit-scrollbar-button:vertical:end:increment {
        width: 16px;
        height: 16px;
        background: transparent url('${ VerticalScrollbarBottomNormalTexture }') no-repeat;
    }

    &::-webkit-scrollbar-button:vertical:end:increment:active {
        background: transparent url('${ VerticalScrollbarBottomPushedTexture }');
    }

    &::-webkit-scrollbar-button:vertical:end:increment:disabled {
        background: transparent url('${ VerticalScrollbarBottomDisabledTexture }');
    }

    &::-webkit-scrollbar-thumb:vertical {
        width: 16px;
        height: auto;
        background: url('${ VerticalScrollbarTrackNormalTopTexture }') top center no-repeat,
            url('${ VerticalScrollbarTrackNormalBottomTexture }') bottom center no-repeat,
            url('${ VerticalScrollbarTrackNormalMiddleTexture }') 0 6px repeat-y;
    }

    &::-webkit-scrollbar-thumb:vertical:active {
        background: url('${ VerticalScrollbarTrackPushedTopTexture }') top center no-repeat,
            url('${ VerticalScrollbarTrackPushedBottomTexture }') bottom center no-repeat,
            url('${ VerticalScrollbarTrackPushedMiddleTexture }') 0 6px repeat-y;
    }

    &::-webkit-scrollbar-thumb:vertical:disabled {
        background: transparent url('${ VerticalScrollbarTrackDisabledTexture }');
    }
`;

export const DropdownListOption = styled.li
`
    margin: 0;
    padding: 0 15px;
    display: inline-block;
    position: relative;
    width: 201px;
    height: 33px;
    overflow: hidden;
    z-index: 0;
    line-height: 33px;
    font-size: 20px;
    font-weight: normal;
    color: #bfb79b;
    flex-shrink: 0;
    box-sizing: border-box;
    cursor: url('${ CursorPointerTexture }'), pointer;

    :hover {
        background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.2), transparent);
    }
`;