import styled from 'styled-components';

import PointerCursorTexture from 'Media/Texture/Cursor/Pointer.png';
import JogDial4Texture from 'Media/Texture/Interface/JogDial/JogDial4.png';
import MarketplaceBackgroundTexture from 'Media/Texture/Marketplace/Background.png';

import CursorDefaultTexture from 'Media/Texture/Cursor/Default.png';
import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

import ExitTownDisabled1Texture from 'Media/Texture/Interface/ExitTown/1/Disabled.png';
import ExitTownNormal1Texture from 'Media/Texture/Interface/ExitTown/1/Normal.png';
import ExitTownPressed1Texture from 'Media/Texture/Interface/ExitTown/1/Pressed.png';

interface MarketplaceResourceItemProps
{
    active: boolean;
}

export const MarketplaceWrapper = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 80px;
    left: 70px;
    background: transparent url('${MarketplaceBackgroundTexture}');
    width: 455px;
    height: 726px;
    z-index: 0;
    overflow: hidden;
`;

export const MarketplaceLeftResourceColumn = styled.ul
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 165px;
    left: 86px;
    width: 101px;
    height: 211px;
    z-index: 0;
    overflow: hidden;
    flex-direction: column;
`;

export const MarketplaceRightResourceColumn = styled.ul
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 165px;
    left: 270px;
    width: 99px;
    height: 211px;
    z-index: 0;
    overflow: hidden;
    flex-direction: column;
`;

export const MarketplaceResourceItem = styled.li<MarketplaceResourceItemProps>
`
    margin: 0;
    padding: 0 5px;
    display: flex;
    position: relative;
    width: 99px;
    height: 30px;
    background: ${({ active }: MarketplaceResourceItemProps): string => active ? 'radial-gradient(ellipse at center, rgb(49, 52, 190), rgba(49, 52, 190, 0.1)), rgba(49, 52, 190, 0.1)' : 'transparent'};
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    cursor: url('${PointerCursorTexture}'), pointer;
`;

export const MarketplaceResourceIcon = styled.img
`
    margin: 0 5px 0 0;
    width: 24px;
    height: 24px;
    flex-grow: 0;
`;

export const MarketplaceResourceCount = styled.span
`
    color: #FFF;
    flex-grow: 1;
    font-size: 18px;
`;

export const MarketplaceJogDial = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    right: 75px;
    bottom: 60px;
    width: 203px;
    height: 169px;
    z-index: 3;
    overflow: hidden;
    background: transparent url('${JogDial4Texture}');
`;

export const MarketplaceExitButton1 = styled.button
`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 43px;
    left: 61px;
    width: 82px;
    height: 82px;
    z-index: 0;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 50%;
    background: transparent url('${ExitTownNormal1Texture}');
    cursor: url('${CursorPointerTexture}'), pointer;

    :active {
        background: transparent url('${ExitTownPressed1Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
        cursor: url('${CursorDefaultTexture}'), default;
        pointer-events: none;
    }
`;