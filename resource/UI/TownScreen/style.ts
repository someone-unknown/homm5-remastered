import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import { ExitTown, ExitTownProps } from 'UI/ExitTown';

import CursorDefaultTexture from 'Media/Texture/Cursor/Default.png';
import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';
import JogDial6Texture from 'Media/Texture/Interface/JogDial/JogDial6.png';

import BuildButtonDisabledTexture from 'Media/Texture/TownScreen/BuildButton/Disabled.png';
import BuildButtonNormalTexture from 'Media/Texture/TownScreen/BuildButton/Normal.png';
import BuildButtonPressedTexture from 'Media/Texture/TownScreen/BuildButton/Pressed.png';

import BuyButtonDisabledTexture from 'Media/Texture/TownScreen/BuyButton/Disabled.png';
import BuyButtonNormalTexture from 'Media/Texture/TownScreen/BuyButton/Normal.png';
import BuyButtonPressedTexture from 'Media/Texture/TownScreen/BuyButton/Pressed.png';

import InfoButtonDisabledTexture from 'Media/Texture/TownScreen/InfoButton/Disabled.png';
import InfoButtonNormalTexture from 'Media/Texture/TownScreen/InfoButton/Normal.png';
import InfoButtonPressedTexture from 'Media/Texture/TownScreen/InfoButton/Pressed.png';

import MarketplaceButtonDisabledTexture from 'Media/Texture/TownScreen/MarketplaceButton/Disabled.png';
import MarketplaceButtonNormalTexture from 'Media/Texture/TownScreen/MarketplaceButton/Normal.png';
import MarketplaceButtonPressedTexture from 'Media/Texture/TownScreen/MarketplaceButton/Pressed.png';

import TavernButtonDisabledTexture from 'Media/Texture/TownScreen/TavernButton/Disabled.png';
import TavernButtonNormalTexture from 'Media/Texture/TownScreen/TavernButton/Normal.png';
import TavernButtonPressedTexture from 'Media/Texture/TownScreen/TavernButton/Pressed.png';

import BlackMarketButtonDisabledTexture from 'Media/Texture/TownScreen/BlackMarketButton/Disabled.png';
import BlackMarketButtonNormalTexture from 'Media/Texture/TownScreen/BlackMarketButton/Normal.png';
import BlackMarketButtonPressedTexture from 'Media/Texture/TownScreen/BlackMarketButton/Pressed.png';

import BlacksmithButtonDisabledTexture from 'Media/Texture/TownScreen/BlacksmithButton/Disabled.png';
import BlacksmithButtonNormalTexture from 'Media/Texture/TownScreen/BlacksmithButton/Normal.png';
import BlacksmithButtonPressedTexture from 'Media/Texture/TownScreen/BlacksmithButton/Pressed.png';

import ShipyardButtonDisabledTexture from 'Media/Texture/TownScreen/ShipyardButton/Disabled.png';
import ShipyardButtonNormalTexture from 'Media/Texture/TownScreen/ShipyardButton/Normal.png';
import ShipyardButtonPressedTexture from 'Media/Texture/TownScreen/ShipyardButton/Pressed.png';

import MagicGuildButtonDisabledTexture from 'Media/Texture/TownScreen/MagicGuildButton/Disabled.png';
import MagicGuildButtonNormalTexture from 'Media/Texture/TownScreen/MagicGuildButton/Normal.png';
import MagicGuildButtonPressedTexture from 'Media/Texture/TownScreen/MagicGuildButton/Pressed.png';

import PrevTownButtonDisabledTexture from 'Media/Texture/TownScreen/PrevTownButton/Disabled.png';
import PrevTownButtonNormalTexture from 'Media/Texture/TownScreen/PrevTownButton/Normal.png';
import PrevTownButtonPressedTexture from 'Media/Texture/TownScreen/PrevTownButton/Pressed.png';

import NextTownButtonDisabledTexture from 'Media/Texture/TownScreen/NextTownButton/Disabled.png';
import NextTownButtonNormalTexture from 'Media/Texture/TownScreen/NextTownButton/Normal.png';
import NextTownButtonPressedTexture from 'Media/Texture/TownScreen/NextTownButton/Pressed.png';

import UpgradeButtonDisabledTexture from 'Media/Texture/TownScreen/UpgradeButton/Disabled.png';
import UpgradeButtonNormalTexture from 'Media/Texture/TownScreen/UpgradeButton/Normal.png';
import UpgradeButtonPressedTexture from 'Media/Texture/TownScreen/UpgradeButton/Pressed.png';

interface JogDialLinkProps extends LinkProps
{
    disabled?: boolean;
}

export const JogDialLeft = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    left: 63px;
    bottom: 43px;
    width: 226px;
    height: 204px;
    z-index: 3;
    overflow: hidden;
    background: transparent url('${JogDial6Texture}');
`;

export const JogDialRight = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    right: 63px;
    bottom: 43px;
    width: 226px;
    height: 204px;
    z-index: 3;
    overflow: hidden;
    background: transparent url('${JogDial6Texture}');
`;

export const JogDialSmallButton = styled(Link)<JogDialLinkProps>
`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 57px;
    height: 57px;
    z-index: 0;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 50%;
    cursor: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `url('${CursorDefaultTexture}'), default` : `url('${CursorPointerTexture}'), pointer`};
    pointer-events: ${({ disabled = false }: JogDialLinkProps): string => disabled ? 'none' : 'all'};
`;

export const BuyButton = styled(JogDialSmallButton)
`
    left: 46px;
    bottom: 7px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${BuyButtonDisabledTexture}')` : `transparent url('${BuyButtonNormalTexture}')`};

    :active {
        background: transparent url('${BuyButtonPressedTexture}');
    }
`;

export const BuildButton = styled(JogDialSmallButton)
`
    left: 8px;
    bottom: 73px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${BuildButtonDisabledTexture}')` : `transparent url('${BuildButtonNormalTexture}')`};

    :active {
        background: transparent url('${BuildButtonPressedTexture}');
    }
`;

export const InfoButton = styled(JogDialSmallButton)
`
    right: 7px;
    bottom: 73px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${InfoButtonDisabledTexture}')` : `transparent url('${InfoButtonNormalTexture}')`};

    :active {
        background: transparent url('${InfoButtonPressedTexture}');
    }
`;

export const MarketplaceButton = styled(JogDialSmallButton)
`
    right: 7px;
    bottom: 73px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${MarketplaceButtonDisabledTexture}')` : `transparent url('${MarketplaceButtonNormalTexture}')`};

    :active {
        background: transparent url('${MarketplaceButtonPressedTexture}');
    }
`;

export const TavernButton = styled(JogDialSmallButton)
`
    top: 7px;
    right: 45px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${TavernButtonDisabledTexture}')` : `transparent url('${TavernButtonNormalTexture}')`};

    :active {
        background: transparent url('${TavernButtonPressedTexture}');
    }
`;

export const BlackMarketButton = styled(JogDialSmallButton)
`
    top: 7px;
    left: 46px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${BlackMarketButtonDisabledTexture}')` : `transparent url('${BlackMarketButtonNormalTexture}')`};

    :active {
        background: transparent url('${BlackMarketButtonPressedTexture}');
    }
`;

export const BlacksmithButton = styled(JogDialSmallButton)
`
    left: 46px;
    bottom: 7px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${BlacksmithButtonDisabledTexture}')` : `transparent url('${BlacksmithButtonNormalTexture}')`};

    :active {
        background: transparent url('${BlacksmithButtonPressedTexture}');
    }
`;

export const ShipyardButton = styled(JogDialSmallButton)
`
    left: 8px;
    bottom: 73px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${ShipyardButtonDisabledTexture}')` : `transparent url('${ShipyardButtonNormalTexture}')`};

    :active {
        background: transparent url('${ShipyardButtonPressedTexture}');
    }
`;

export const MagicGuildButton = styled(JogDialSmallButton)
`
    right: 45px;
    bottom: 7px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${MagicGuildButtonDisabledTexture}')` : `transparent url('${MagicGuildButtonNormalTexture}')`};

    :active {
        background: transparent url('${MagicGuildButtonPressedTexture}');
    }
`;

export const PrevTownButton = styled(JogDialSmallButton)
`
    top: 7px;
    left: 46px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${PrevTownButtonDisabledTexture}')` : `transparent url('${PrevTownButtonNormalTexture}')`};

    :active {
        background: transparent url('${PrevTownButtonPressedTexture}');
    }
`;

export const NextTownButton = styled(JogDialSmallButton)
`
    top: 7px;
    right: 45px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${NextTownButtonDisabledTexture}')` : `transparent url('${NextTownButtonNormalTexture}')`};

    :active {
        background: transparent url('${NextTownButtonPressedTexture}');
    }
`;

export const UpgradeButton = styled(JogDialSmallButton)
`
    right: 45px;
    bottom: 7px;
    background: ${({ disabled = false }: JogDialLinkProps): string => disabled ? `transparent url('${UpgradeButtonDisabledTexture}')` : `transparent url('${UpgradeButtonNormalTexture}')`};

    :active {
        background: transparent url('${UpgradeButtonPressedTexture}');
    }
`;

export const ExitTownButton = styled(ExitTown)<ExitTownProps>
`
    top: 61px;
    left: 72px;
`;