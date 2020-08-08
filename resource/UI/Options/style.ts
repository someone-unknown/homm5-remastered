import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import InterfaceList4Texture from 'Media/Texture/Interface/List/List3.png';

import CursorPointerTexture from 'Media/Texture/Cursor/Pointer.png';

export const OptionsList = styled.ul
`
    margin: 0;
    padding: 35px 45px 50px;
    display: flex;
    position: absolute;
    right: 60px;
    bottom: 80px;
    width: 327px;
    height: 241px;
    z-index: 4;
    overflow: hidden;
    background: transparent url('${ InterfaceList4Texture }');
    box-sizing: border-box;
    flex-direction: column;
`;

export const OptionsListItem = styled.li
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

export const OptionsOption = styled(Link)<LinkProps>
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