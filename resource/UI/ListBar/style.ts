import styled from 'styled-components';

import { ShowHideCheckbox, ShowHideCheckboxProps } from 'UI/Interface/ShowHideCheckbox';

import ListBarCellTexture from 'Media/Texture/ListBar/Cell.png';
import ListBarCenterTexture from 'Media/Texture/ListBar/Center.png';
import ListBarLeftTexture from 'Media/Texture/ListBar/Left.png';
import ListBarRightTexture from 'Media/Texture/ListBar/Right.png';
import ListBarManaBarTexture from 'Media/Texture/ListBar/Mana-Bar.png';
import ListBarMovepointsBarTexture from 'Media/Texture/ListBar/Movepoints-Bar.png';

export const ListBarContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: 522px;
    height: 152px;
    z-index: 0;
    overflow: visible;
`;

interface ListBarFrameProps
{
    open: boolean;
}

export const ListBarFrame = styled.div<ListBarFrameProps>
`
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    width: auto;
    min-width: 90px;
    height: 152px;
    z-index: 0;
    overflow: hidden;
    opacity: ${ ({ open }): number => open ? 1 : 0 };
    pointer-events: ${ ({ open }): string => open ? 'all' : 'none' };
    will-change: opacity;
`;

export const ListBarFrameLeft = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 152px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ ListBarLeftTexture }') center center no-repeat;
`;

export const ListBarFrameCenter = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 75px;
    right: 13px;
    bottom: 0;
    width: auto;
    height: 152px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ ListBarCenterTexture }') center center repeat-x;
`;

export const ListBarFrameRight = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 13px;
    height: 152px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ ListBarRightTexture }') center center no-repeat;
`;

export const ListBarFrameContent = styled.div
`
    margin: 0;
    padding: 12px;
    display: flex;
    position: relative;
    width: auto;
    height: 152px;
    z-index: 1;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const ListBarFrameList = styled.ul
`
    margin: 0;
    padding: 1px;
    display: flex;
    position: relative;
    width: auto;
    height: 64px;
    z-index: 0;
    overflow: hidden;
    flex-direction: row;
    box-sizing: border-box;
    list-style-type: none;
`;

export const ListBarFrameListItem = styled.li
`
    margin: 0;
    padding: 1px;
    display: block;
    position: relative;
    width: 62px;
    height: 62px;
    z-index: 0;
    overflow: hidden;
    box-sizing: border-box;
    background: transparent url('${ ListBarCellTexture }') center / contain no-repeat;
`;

export const ListBarHeroIcon = styled.img
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 60px;
    height: 60px;
    overflow: hidden;
    z-index: 0;
    object-fit: contain;
`;

const ListBarHeroBarContainer = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    left: 2px;
    width: 58px;
    height: 4px;
    overflow: hidden;
    z-index: 1;
`;

const ListBarHeroBar = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 58px;
    height: 4px;
    overflow: hidden;
    z-index: 1;
    transform: translate3d(0, 0, 0);
    will-change: transform;
`;

export const ListBarHeroManaBarContainer = styled(ListBarHeroBarContainer)
`
    top: 2px;
`;

export const ListBarHeroManaBar = styled(ListBarHeroBar)
`
    background: transparent url('${ ListBarManaBarTexture }') center center repeat-x;
`;

export const ListBarHeroMovepointsBarContainer = styled(ListBarHeroBarContainer)
`
    bottom: 0;
`;

export const ListBarHeroMovepointsBar = styled(ListBarHeroBar)
`
    background: transparent url('${ ListBarMovepointsBarTexture }') center center repeat-x;
`;

export const ListBarShowHideCheckbox = styled(ShowHideCheckbox)<ShowHideCheckboxProps>
`
    top: auto;
    left: -12px;
    right: auto;
    bottom: -12px;
    z-index: 1;
`;