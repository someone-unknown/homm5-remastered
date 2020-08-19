import styled from 'styled-components';

import { ShowHideCheckbox, ShowHideCheckboxProps } from 'UI/Interface/ShowHideCheckbox';

import MinimapFrameTexture from 'Media/Texture/Minimap/Frame.png';

export const MinimapContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 217px;
    height: 217px;
    z-index: 0;
    overflow: visible;
`;

interface MinimapFrameProps
{
    open: boolean;
}

export const MinimapFrame = styled.div<MinimapFrameProps>
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 217px;
    height: 217px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ MinimapFrameTexture }');
    opacity: ${ ({ open }): number => open ? 1 : 0 };
    pointer-events: ${ ({ open }): string => open ? 'all' : 'none' };
    will-change: opacity;
`;

export const MinimapShowHideCheckbox = styled(ShowHideCheckbox)<ShowHideCheckboxProps>
`
    top: auto;
    left: 0;
    right: auto;
    bottom: 0;
    z-index: 1;
`;