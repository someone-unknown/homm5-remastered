import styled from 'styled-components';

import JogDial6Texture from 'Media/Texture/Interface/JogDial/JogDial6.png';

export const JogDial6Container = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 226px;
    height: 204px;
    z-index: 0;
    overflow: hidden;
    background: transparent url('${ JogDial6Texture }');
`;

const JogDial6Button = styled.div
`
    margin: 0;
    padding: 0;
    position: absolute;
    width: 57px;
    height: 57px;
    z-index: 0;
    overflow: hidden;
`;

export const JogDial6TopLeftButton = styled(JogDial6Button)
`
    top: 7px;
    left: 46px;
`;

export const JogDial6TopRightButton = styled(JogDial6Button)
`
    top: 7px;
    right: 45px;
`;

export const JogDial6LeftButton = styled(JogDial6Button)
`
    left: 8px;
    bottom: 73px;
`;

export const JogDial6CenterButton = styled(JogDial6Button)
`
    top: 61px;
    left: 72px;
    width: 85px;
    height: 85px;
`;

export const JogDial6RightButton = styled(JogDial6Button)
`
    right: 7px;
    bottom: 73px;
`;

export const JogDial6BottomLeftButton = styled(JogDial6Button)
`
    left: 46px;
    bottom: 7px;
`;

export const JogDial6BottomRightButton = styled(JogDial6Button)
`
    right: 46px;
    bottom: 7px;
`;