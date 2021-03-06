import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import InterfaceList5Texture from 'Media/Texture/Interface/List/List4.png';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

export const SingleplayerList = styled.ul
`
    margin: 0;
    padding: 35px 45px 50px;
    display: flex;
    position: absolute;
    right: 60px;
    bottom: 80px;
    width: 327px;
    height: 289px;
    z-index: 4;
    overflow: hidden;
    background: transparent url('${ InterfaceList5Texture }');
    box-sizing: border-box;
    flex-direction: column;
`;

export const SingleplayerListItem = styled.li
`
    margin: 0;
    padding: 0;
    width: 237px;
    height: 42px;
    display: block;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
`;

export const SingleplayerOption = styled(Link)<LinkProps>
`
    padding: 0 6px 0 0;
    box-sizing: content-box;
    font-size: 26px;
    text-decoration: none;
    flex-grow: 1;
    display: inline-block;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    outline: none;
    color: #3e5262;
    cursor: url('${ CursorPointerTexture }'), pointer;

    :visited {
        color: #2419d9;
    }

    :hover {
        color: #FFFFFF;
    }
`;