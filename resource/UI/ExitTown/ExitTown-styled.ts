import styled from 'styled-components';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';
import CursorDefaultTexture from 'Media/Texture/Cursor/Default.png';

import ExitTownDisabled1Texture from 'Media/Texture/Interface/ExitTown/1/Disabled.png';
import ExitTownNormal1Texture from 'Media/Texture/Interface/ExitTown/1/Normal.png';
import ExitTownPressed1Texture from 'Media/Texture/Interface/ExitTown/1/Pressed.png';

import ExitTownNormal2Texture from 'Media/Texture/Interface/ExitTown/2/Normal.png';
import ExitTownPressed2Texture from 'Media/Texture/Interface/ExitTown/2/Pressed.png';

import ExitTownNormal3Texture from 'Media/Texture/Interface/ExitTown/3/Normal.png';
import ExitTownPressed3Texture from 'Media/Texture/Interface/ExitTown/3/Pressed.png';

import ExitTownNormal4Texture from 'Media/Texture/Interface/ExitTown/4/Normal.png';
import ExitTownPressed4Texture from 'Media/Texture/Interface/ExitTown/4/Pressed.png';

import ExitTownNormal5Texture from 'Media/Texture/Interface/ExitTown/5/Normal.png';
import ExitTownPressed5Texture from 'Media/Texture/Interface/ExitTown/5/Pressed.png';

import ExitTownNormal6Texture from 'Media/Texture/Interface/ExitTown/6/Normal.png';
import ExitTownPressed6Texture from 'Media/Texture/Interface/ExitTown/6/Pressed.png';

import ExitTownNormal7Texture from 'Media/Texture/Interface/ExitTown/7/Normal.png';
import ExitTownPressed7Texture from 'Media/Texture/Interface/ExitTown/7/Pressed.png';

export const ExitTownButton = styled.button
`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 82px;
    height: 82px;
    z-index: 0;
    overflow: hidden;
    outline: none;
    border: none;
    border-radius: 50%;
    cursor: url('${CursorPointerTexture}'), pointer;

    :disabled {
        cursor: url('${CursorDefaultTexture}'), default;
        pointer-events: none;
    }
`;

export const ExitTownButton1 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal1Texture}');

    :active {
        background: transparent url('${ExitTownPressed1Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton2 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal2Texture}');

    :active {
        background: transparent url('${ExitTownPressed2Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton3 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal3Texture}');

    :active {
        background: transparent url('${ExitTownPressed3Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton4 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal4Texture}');

    :active {
        background: transparent url('${ExitTownPressed4Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton5 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal5Texture}');

    :active {
        background: transparent url('${ExitTownPressed5Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton6 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal6Texture}');

    :active {
        background: transparent url('${ExitTownPressed6Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;

export const ExitTownButton7 = styled(ExitTownButton)
`
    background: transparent url('${ExitTownNormal7Texture}');

    :active {
        background: transparent url('${ExitTownPressed7Texture}');
    }

    :disabled {
        background: transparent url('${ExitTownDisabled1Texture}');
    }
`;