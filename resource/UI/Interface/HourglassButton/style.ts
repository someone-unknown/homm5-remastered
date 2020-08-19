import styled from 'styled-components';

import { JogDialButton, JogDialButtonProps } from 'UI/Interface/JogDialButton';

import ExitTownDisabled1Texture from 'Media/Texture/Interface/JogDial/ExitTown/1/Disabled.png';
import ExitTownNormal1Texture from 'Media/Texture/Interface/JogDial/ExitTown/1/Normal.png';
import ExitTownPressed1Texture from 'Media/Texture/Interface/JogDial/ExitTown/1/Pressed.png';

import ExitTownNormal2Texture from 'Media/Texture/Interface/JogDial/ExitTown/2/Normal.png';
import ExitTownPressed2Texture from 'Media/Texture/Interface/JogDial/ExitTown/2/Pressed.png';

import ExitTownNormal3Texture from 'Media/Texture/Interface/JogDial/ExitTown/3/Normal.png';
import ExitTownPressed3Texture from 'Media/Texture/Interface/JogDial/ExitTown/3/Pressed.png';

import ExitTownNormal4Texture from 'Media/Texture/Interface/JogDial/ExitTown/4/Normal.png';
import ExitTownPressed4Texture from 'Media/Texture/Interface/JogDial/ExitTown/4/Pressed.png';

import ExitTownNormal5Texture from 'Media/Texture/Interface/JogDial/ExitTown/5/Normal.png';
import ExitTownPressed5Texture from 'Media/Texture/Interface/JogDial/ExitTown/5/Pressed.png';

import ExitTownNormal6Texture from 'Media/Texture/Interface/JogDial/ExitTown/6/Normal.png';
import ExitTownPressed6Texture from 'Media/Texture/Interface/JogDial/ExitTown/6/Pressed.png';

import ExitTownNormal7Texture from 'Media/Texture/Interface/JogDial/ExitTown/7/Normal.png';
import ExitTownPressed7Texture from 'Media/Texture/Interface/JogDial/ExitTown/7/Pressed.png';

interface HourglassButtonElementProps extends JogDialButtonProps
{
    day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export const HourglassButtonElement = styled(JogDialButton)<HourglassButtonElementProps>
`
    background: transparent url('${ ({ day }): string => (
        {
            1: ExitTownNormal1Texture,
            2: ExitTownNormal2Texture,
            3: ExitTownNormal3Texture,
            4: ExitTownNormal4Texture,
            5: ExitTownNormal5Texture,
            6: ExitTownNormal6Texture,
            7: ExitTownNormal7Texture
        }[ day ]
    ) }');

    :active {
        background: transparent url('${ ({ day }): string => (
            {
                1: ExitTownPressed1Texture,
                2: ExitTownPressed2Texture,
                3: ExitTownPressed3Texture,
                4: ExitTownPressed4Texture,
                5: ExitTownPressed5Texture,
                6: ExitTownPressed6Texture,
                7: ExitTownPressed7Texture
            }[ day ]
        ) }');
    }

    :disabled {
        background: transparent url('${ ExitTownDisabled1Texture }');
    }
`;