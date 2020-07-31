import styled from 'styled-components';

import { ExitTown } from 'UI/ExitTown';
import { JogDial4 } from 'UI/JogDial4';

import MagicGuildBackgroundTexture from 'Media/Texture/MagicGuild/Background.png';

export const MagicGuildContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 80px;
    left: 70px;
    width: 453px;
    height: 726px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${MagicGuildBackgroundTexture}');
`;

export const MagicGuildJogDial = styled(JogDial4)
`
    right: 75px;
    bottom: 60px;
`;

export const MagicGuildExitButton = styled(ExitTown)
`
    top: 43px;
    left: 61px;
`;