import styled from 'styled-components';

import { Minimap, MinimapProps } from 'UI/Minimap';
import { ListBar, ListBarProps } from 'UI/ListBar';
import { JogDial6, JogDial6Props } from 'UI/Interface/JogDial6';
import { JogDialButton, JogDialButtonProps } from 'UI/Interface/JogDialButton';

import MoveHeroButtonDisabledTexture from 'Media/Texture/Interface/JogDial/MoveHeroButton/Disabled.png';
import MoveHeroButtonNormalTexture from 'Media/Texture/Interface/JogDial/MoveHeroButton/Normal.png';
import MoveHeroButtonPushedTexture from 'Media/Texture/Interface/JogDial/MoveHeroButton/Pushed.png';

import MenuButtonDisabledTexture from 'Media/Texture/Interface/JogDial/MenuButton/Disabled.png';
import MenuButtonNormalTexture from 'Media/Texture/Interface/JogDial/MenuButton/Normal.png';
import MenuButtonPushedTexture from 'Media/Texture/Interface/JogDial/MenuButton/Pushed.png';

import ScenarioButtonDisabledTexture from 'Media/Texture/Interface/JogDial/ScenarioButton/Disabled.png';
import ScenarioButtonNormalTexture from 'Media/Texture/Interface/JogDial/ScenarioButton/Normal.png';
import ScenarioButtonPushedTexture from 'Media/Texture/Interface/JogDial/ScenarioButton/Pushed.png';

import SpellbookButtonDisabledTexture from 'Media/Texture/Interface/JogDial/SpellbookButton/Disabled.png';
import SpellbookButtonNormalTexture from 'Media/Texture/Interface/JogDial/SpellbookButton/Normal.png';
import SpellbookButtonPushedTexture from 'Media/Texture/Interface/JogDial/SpellbookButton/Pushed.png';

import UndergroundButtonDisabledTexture from 'Media/Texture/Interface/JogDial/UndergroundButton/Disabled.png';
import UndergroundButtonNormalTexture from 'Media/Texture/Interface/JogDial/UndergroundButton/Normal.png';
import UndergroundButtonPushedTexture from 'Media/Texture/Interface/JogDial/UndergroundButton/Pushed.png';

export const AdventureMapInterfacePanel = styled.div
`
    margin: 0;
    padding: 0 50px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 30px;
    width: 100%;
    height: 217px;
    overflow: visible;
    z-index: 1;
    pointer-events: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const AdventureMapMinimap = styled(Minimap)<MinimapProps>
`
    pointer-events: all;
`;

export const AdventureMapListBar = styled(ListBar)<ListBarProps>
`
    pointer-events: all;
`;

export const AdventureMapJogDial = styled(JogDial6)<JogDial6Props>
`
    pointer-events: all;
`;

export const AdventureMapMenuButton = styled(JogDialButton)<JogDialButtonProps>
`
    background: transparent url('${ MenuButtonNormalTexture }');

    :active {
        background: transparent url('${ MenuButtonPushedTexture }');
    }

    :disabled {
        background: transparent url('${ MenuButtonDisabledTexture }');
    }
`;

export const AdventureMapMoveHeroButton = styled(JogDialButton)<JogDialButtonProps>
`
    background: transparent url('${ MoveHeroButtonNormalTexture }');

    :active {
        background: transparent url('${ MoveHeroButtonPushedTexture }');
    }

    :disabled {
        background: transparent url('${ MoveHeroButtonDisabledTexture }');
    }
`;

export const AdventureMapScenarioButton = styled(JogDialButton)<JogDialButtonProps>
`
    background: transparent url('${ ScenarioButtonNormalTexture }');

    :active {
        background: transparent url('${ ScenarioButtonPushedTexture }');
    }

    :disabled {
        background: transparent url('${ ScenarioButtonDisabledTexture }');
    }
`;

export const AdventureMapSpellbookButton = styled(JogDialButton)<JogDialButtonProps>
`
    background: transparent url('${ SpellbookButtonNormalTexture }');

    :active {
        background: transparent url('${ SpellbookButtonPushedTexture }');
    }

    :disabled {
        background: transparent url('${ SpellbookButtonDisabledTexture }');
    }
`;

export const AdventureMapUndergroundButton = styled(JogDialButton)<JogDialButtonProps>
`
    background: transparent url('${ UndergroundButtonNormalTexture }');

    :active {
        background: transparent url('${ UndergroundButtonPushedTexture }');
    }

    :disabled {
        background: transparent url('${ UndergroundButtonDisabledTexture }');
    }
`;