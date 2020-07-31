import styled from 'styled-components';

import { ExitTown } from 'UI/ExitTown';
import { JogDial4 } from 'UI/JogDial4';

import CursorDefaultTexture from 'Media/Texture/Cursor/Default.png';
import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

import TownBuildBackgroundTexture from 'Media/Texture/TownBuild/Background.png';
import TownBuildCellTexture from 'Media/Texture/TownBuild/Cell.png';

import TownBuildArrow1Texture from 'Media/Texture/TownBuild/Arrow1.png';
import TownBuildArrow2Texture from 'Media/Texture/TownBuild/Arrow2.png';
import TownBuildArrow3Texture from 'Media/Texture/TownBuild/Arrow3.png';

export const TownBuildWrapper = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    top: 80px;
    left: 70px;
    background: transparent url('${TownBuildBackgroundTexture}');
    width: 455px;
    height: 726px;
    z-index: 0;
    overflow: hidden;
`;

export const TownBuildJogDial = styled(JogDial4)
`
    right: 75px;
    bottom: 60px;
`;

export const TownBuildExitButton = styled(ExitTown)
`
    top: 43px;
    left: 61px;
`;

export const TownBuildTitle = styled.h1
`
    margin: 0;
    padding: 0 50px;
    display: inline-block;
    position: absolute;
    top: 46px;
    width: 100%;
    height: 36px;
    z-index: 0;
    overflow: hidden;
    color: #2b4861;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
`;

export const TownBuildContent = styled.div
`
    margin: 0;
    padding: 27px 8px;
    display: flex;
    position: absolute;
    top: 86px;
    left: 52px;
    width: 350px;
    height: 590px;
    z-index: 0;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
`;

export const TownBuildRow = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 100%;
    height: 64px;
    overflow: visible;
    flex-direction: row;
    justify-content: space-between;
`;

interface TownBuildCellProps
{
    empty?: boolean;
    built?: boolean;
    buildable?: boolean;
    zIndex?: number;
}

export const TownBuildCell = styled.div<TownBuildCellProps>
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 64px;
    height: 64px;
    z-index: 0;
    overflow: visible;
    background: ${({ empty = false }): string => empty ? `transparent` : `transparent url('${TownBuildCellTexture}')`};
    cursor: ${({ empty = false }): string => empty ? `url('${CursorDefaultTexture}'), default` : `url('${CursorPointerTexture}'), pointer`};
    pointer-events: ${({ empty = false }): string => empty ? 'none' : 'all'};
    opacity: ${({ built = false, buildable = false }: TownBuildCellProps): number => built || buildable ? 1 : 0.5};
    justify-content: center;
    outline: none;

    :focus {
        background: radial-gradient(ellipse at center, rgb(49, 52, 190), rgba(49, 52, 190, 0.1)), rgba(49, 52, 190, 0.1), url('${TownBuildCellTexture}');
    }

    :disabled {
        
    }

    > img {
        filter: ${({ built = false, buildable = false, zIndex = 0 }: TownBuildCellProps): string => {
            if (built)
            {
                return 'none';
            }
        
            if (buildable)
            {
                return zIndex > 0 ? 'sepia(1) hue-rotate(130deg) saturate(2.5)' : 'sepia(1) hue-rotate(80deg) saturate(2.5)';
            }

            // return 'sepia(1) hue-rotate(310deg) saturate(4)';
            return 'none';
        }};
    }
`;

export const TownBuildIcon = styled.img
`
    margin: 0;
    padding: 5px;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
`;

export const TownBuildArrow1 = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 65px;
    width: 38px;
    height: 30px;
    background: transparent url('${TownBuildArrow1Texture}');
    pointer-events: none;
    cursor: url('${CursorDefaultTexture}'), default;
`;

export const TownBuildArrow2 = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 65px;
    width: 38px;
    height: 126px;
    background: transparent url('${TownBuildArrow2Texture}');
    pointer-events: none;
    cursor: url('${CursorDefaultTexture}'), default;
`;

export const TownBuildArrow3 = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 65px;
    width: 38px;
    height: 219px;
    background: transparent url('${TownBuildArrow3Texture}');
    pointer-events: none;
    cursor: url('${CursorDefaultTexture}'), default;
`;