import styled from 'styled-components';

import JogDial4Texture from 'Media/Texture/Interface/JogDial/JogDial4.png';

export const JogDial4Container = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: fixed;
    width: 203px;
    height: 169px;
    z-index: 3;
    overflow: hidden;
    background: transparent url('${JogDial4Texture}');

    > :nth-child(1) {
        
    }

    > :nth-child(2) {
        
    }

    > :nth-child(3) {
        
    }

    > :nth-child(4) {
        
    }

    > :nth-child(5) {
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
    }
`;